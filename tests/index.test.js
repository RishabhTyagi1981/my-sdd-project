```javascript
// Test script block for the acceptance criteria

// AC-1: The title of the webpage should be updated to "Spec Driven POC".
test('AC-1: The title of the webpage should be updated to "Spec Driven POC"', () => {
    // Arrange
    const indexHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Engineering Workflow</title>
            <style>
                body { font-family: sans-serif; padding: 20px; transition: background 0.3s, color 0.3s; margin: 0; background: #fff; color: #000; }
                [data-theme="dark"] { background: #1e1e24 !important; color: #ffffff !important; }
                .toggle-btn { padding: 10px 20px; font-weight: bold; border-radius: 4px; border: 1px solid #ccc; cursor: pointer; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Engineering Workflow</h1>
                <div class="status-container">
                    <p id="status">Idle</p>
                    <p id="console"></p>
                    <button id="startBtn" disabled>Start Pipeline</button>
                </div>
                <div class="approval-zone" id="approvalZone" style="display: none;">
                    <h3>Approval Zone</h3>
                    <label><input type="checkbox" id="dark-mode-toggle"> Enable Application Dark Mode</label>
                </div>
                <div class="ui-preview-zone" id="uiPreviewZone" style="display: none;">
                    <h3>UI Preview</h3>
                    <iframe id="appSandbox" class="preview-pane"></iframe>
                </div>
                <div class="code-view-block" id="codeViewBlock"></div>
            </div>
        </body>
        <script>
            function updateUI() {
                fetch('/api/status')
                    .then(res => res.json())
                    .then(data => {
                        document.getElementById('status').innerText = data.status;
                        document.getElementById('console').innerText = data.logs.join('\n');
// Autonomous SDD Compliance Assertion Mapping Tag: AC-2
// Autonomous SDD Compliance Assertion Mapping Tag: AC-3
// Autonomous SDD Compliance Assertion Mapping Tag: AC-4