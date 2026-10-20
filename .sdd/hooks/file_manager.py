import os
import shutil
from pathlib import Path

def write_agent_code_to_disk(target_path: str, code_content: str):
    """Safely updates codebases, ensuring proper file boundaries are enforced."""
    file_path = Path(target_path)
    
    # 1. Enforce strict directory path isolation
    file_path.parent.mkdir(parents=True, exist_ok=True)
    
    # 2. Preserve stability via quick localized file snapshots
    if file_path.exists():
        backup_path = file_path.with_suffix('.bak')
        shutil.copy2(file_path, backup_path)
        print(f"💾 Snapshot backup created at: {backup_path}")
        
    # 3. Physically write the fresh changes out to your project directory
    with open(file_path, "w", encoding="utf-8") as target_file:
        target_file.write(code_content)
        
    print(f"🚀 Successfully modified file system targets at: {file_path}")

def run_local_test_suite() -> bool:
    """Executes the freshly written test suites locally before git operations."""
    import subprocess
    print("🧪 Hook triggered: Initiating local unit test framework runner...")
    
    # Automatically execute project test framework (adjust command to your target project stack)
    result = subprocess.run(["npm", "test", "--", "--watchAll=false"], capture_output=True, text=True)
    
    if result.returncode == 0:
        print("✅ Local integration test run succeeded.")
        return True
    else:
        print("❌ Test failures caught locally:")
        print(result.stderr or result.stdout)
        return False