import os
import re
import json
import urllib.request
import sys
import subprocess
import time
from pathlib import Path

OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL_NAME = "qwen2.5-coder:7b" 

def call_local_agent(system_prompt: str, user_prompt: str) -> str:
    """Queries your local Ollama engine for free, private inference."""
    combined_prompt = f"System Rules:\n{system_prompt}\n\nTask:\n{user_prompt}"
    payload = {
        "model": MODEL_NAME,
        "prompt": combined_prompt,
        "stream": False,
        "options": {"temperature": 0.1, "top_p": 0.9}
    }
    try:
        req = urllib.request.Request(
            OLLAMA_URL, 
            data=json.dumps(payload).encode('utf-8'),
            headers={'Content-Type': 'application/json'}
        )
        with urllib.request.urlopen(req) as response:
            res_data = json.loads(response.read().decode('utf-8'))
            return clean_agent_output(res_data.get("response", ""))
    except Exception as e:
        raise ConnectionError(f"❌ Ollama connection failed. Ensure 'ollama serve' is running. Error: {e}")

def clean_agent_output(text: str) -> str:
    """Extracts raw source code or text out of markdown code blocks safely."""
    code_block_match = re.search(r"```[a-zA-Z]*\n(.*?)```", text, re.DOTALL)
    if code_block_match:
        return code_block_match.group(1).strip()
    return text.strip()

def run_production_sdd_pipeline(jira_story: str, progress_callback=None):
    """Orchestrates the entire SDD loop from JIRA Input to Local Git Branch."""
    def log(message):
        if progress_callback:
            progress_callback(message)
        else:
            print(message)

    # --- Step 1: Business Analyst Agent ---
    log("🧠 [BA Agent]: Parsing JIRA Story and generating SPEC.md configuration...")
    ba_system = "You are a Business Analyst. Extract key functional requirements and write an explicit specification."
    spec_md = call_local_agent(ba_system, f"Convert this JIRA Story into a clear specification:\n{jira_story}")
    write_to_disk(".sdd/SPEC.md", spec_md)
    log("📝 SPEC.md successfully written to disk.")

    # --- Step 2: Architect Agent ---
    log("📐 [Architect Agent]: Decomposing functional specifications into tasks...")
    arch_system = "You are an Architect. Convert specs into a JSON array of tasks. Example output: [{\"task\": \"Write component\", \"file\": \"src/app.js\"}]"
    tasks_raw = call_local_agent(arch_system, f"Create structured implementation tasks for this specification:\n{spec_md}")
    
    # Simple fallback parser if LLM doesn't output flawless JSON array formatting
    try:
        tasks = json.loads(tasks_raw)
    except:
        log("⚠️ Non-structured tasks fallback. Generating mock execution items...")
        tasks = [
            {"task": "Implement layout view structure changes", "file": "src/components/SettingsPanel.js"},
            {"task": "Write testing suite validation layer", "file": "tests/SettingsPanel.test.js"}
        ]
    write_to_disk(".sdd/TASKS.md", json.dumps(tasks, indent=2))

    # --- Step 3: Software Engineer & Self-Healing QA Integration ---
    from hooks.self_healing import execute_task_with_self_healing
    
    for i, t in enumerate(tasks, 1):
        task_text = t.get("task")
        target_file = t.get("file")
        log(f"🛠️ [Engineer Agent]: Working on Task {i}/{len(tasks)}: {task_text}")
        
        eng_system = "You are a Senior Engineer. Write complete, ready-to-run file contents for the requested feature."
        initial_code = call_local_agent(eng_system, f"Write code for file '{target_file}' based on task objective: {task_text}")
        
        log(f"🧪 [QA Agent]: Initiating Self-Healing Verification Loop for {target_file}...")
        task_passed = execute_task_with_self_healing(task_text, target_file, initial_code, log_callback=log)
        
        if not task_passed:
            log(f"❌ [Engine Halt]: Self-healing failed to clear code bugs in {target_file}. Halting pipeline.")
            return False

    # --- Step 4: Autonomous Git Branching & Push ---
    log("🚀 [Git Operations]: All unit specifications passed locally. Preparing GitHub push...")
    try:
        branch_name = f"feature/sdd-automation-{int(time.time())}"
        subprocess.run(["git", "checkout", "-b", branch_name], check=True, capture_output=True)
        subprocess.run(["git", "add", "."], check=True, capture_output=True)
        subprocess.run(["git", "commit", "-m", "feat: autonomous SDD implementation pipeline pass"], check=True, capture_output=True)
        log(f"📂 Created local git branch: {branch_name}")
        # Note: If authenticated with git/GitHub CLI, add push commands here:
        # subprocess.run(["git", "push", "origin", branch_name], check=True)
        return branch_name
    except Exception as e:
        log(f"⚠️ Git transaction note (Running outside an active git repo?): {e}")
        return "mocked-feature-branch"

def write_to_disk(filepath: str, content: str):
    p = Path(filepath)
    p.parent.mkdir(parents=True, exist_ok=True)
    with open(p, "w", encoding="utf-8") as f:
        f.write(content)
