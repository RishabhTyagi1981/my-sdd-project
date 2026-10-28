```markdown
# Verification Check File: SDD-1: Update the page title to Spec Driven POC

## Description
This verification check file ensures that the webpage title is updated to "Spec Driven POC" as per the acceptance criteria.

## Acceptance Criteria
- AC-1: The title of the webpage should be updated to "Spec Driven POC".
- AC-2: The title should be displayed in the `<title>` tag of the HTML document.
- AC-3: The title should be visible on the webpage.
- AC-4: The title should be updated when the page is loaded.

## Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Spec Driven POC</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #121214; color: #e1e1e6; margin: 40px; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
        textarea { width: 100%; height: 200px; background: #202024; border: 1px solid #323238; color: #fff; padding: 12px; border-radius: 6px; box-sizing: border-box; }
        button { background: #00b37e; color: white; border: none; padding: 12px 24px; font-weight: bold; border-radius: 6px; cursor: pointer; margin-top: 10px; width: 100%; }
        button:disabled { background: #29292e; color: #7c7c8a; cursor: not-allowed; }
        .console { background: #09090a; border: 1px solid #323238; font-family: monospace; padding: 15px; height: 320px; overflow-y: auto; border-radius: 6px; white-space: pre-wrap; }
        .badge { display: inline-block; padding: 6px 12px; background: #29292e;