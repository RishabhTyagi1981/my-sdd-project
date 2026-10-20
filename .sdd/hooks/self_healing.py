import sys
import time
from pathlib import Path
# Import your existing engine configurations and writing hooks
from .file_manager import write_agent_code_to_disk
from ..agent_engine import call_local_agent

MAX_REPAIR_ATTEMPTS = 3  # Safeguard boundary to prevent infinite token loops

def execute_task_with_self_healing(task_description: str, target_file_path: str, initial_code: str):
    """Executes code integration and loops recursively until tests pass or limit hit."""
    
    current_code = initial_code
    attempt = 1
    
    while attempt <= MAX_REPAIR_ATTEMPTS:
        print(f"\n⚡ [Self-Healing Loop]: Cycle {attempt}/{MAX_REPAIR_ATTEMPTS} for {target_file_path}")
        
        # 1. Update the local file system with current code block
        write_agent_code_to_disk(target_file_path, current_code)
        
        # 2. Run the test suite via your file manager hook
        import subprocess
        print("🧪 Executing project test suite context...")
        # Adjust test command according to your framework (e.g., ["npm", "test"] or ["pytest"])
        test_run = subprocess.run(["pytest", "tests/"], capture_output=True, text=True)
        
        if test_run.returncode == 0:
            print(f"✅ Success! All unit assertions passed on attempt {attempt}.")
            return True
            
        # 3. If tests failed, gather error traces
        print(f"❌ Test verification failed on attempt {attempt}. Initializing repair trace...")
        error_logs = test_run.stderr if test_run.stderr.strip() else test_run.stdout
        
        # 4. Formulate the explicit debugging prompt for Ollama
        system_debug_prompt = (
            "You are an automated self-healing software engineer agent.\n"
            "Your task is to fix broken source code using a provided test suite error stack trace.\n"
            "Analyze the failure points closely, identify logical flaws or bugs, and correct them.\n"
            "Return ONLY the pure, executable code block inside standard markdown wrappers."
        )
        
        user_repair_request = (
            f"Target File: {target_file_path}\n"
            f"Original Task Spec: {task_description}\n\n"
            f"--- CURRENT BROKEN CODE ---\n```javascript\n{current_code}\n```\n\n"
            f"--- RAW TESTING FRAMEWORK ERRORS ---\n{error_logs}\n\n"
            f"Please output a corrected, functional version of the code that resolves these errors."
        )
        
        # 5. Call Ollama for a free local patch generation
        try:
            print("🧠 Requesting autonomous code patch from local LLM engine...")
            current_code = call_local_agent(system_debug_prompt, user_repair_request)
            attempt += 1
            time.sleep(1) # Polite cooldown between local hardware cycles
        except Exception as e:
            print(f"🚨 Self-healing loop broken due to internal engine error: {e}")
            return False

    print(f"\n🛑 Failure: Self-healing loop reached max capacity limit ({MAX_REPAIR_ATTEMPTS}) without resolving errors.")
    return False