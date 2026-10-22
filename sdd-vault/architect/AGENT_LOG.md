# Audit Log
# TASKS.md

## JIRA-402: Add Dark Mode Toggle to Settings Panel

### Implementation Tasks

1. **Create or Update ThemeContext.js**
   - Ensure that the global state context for theme is stored in `src/context/ThemeContext.js`.
   - If it doesn't exist, create it with initial state set to 'light'.

2. **Update SettingsPanel.js**
   - Add a toggle switch labeled "Dark Mode" inside the `SettingsPanel` component.
   - Ensure the toggle switch is styled appropriately for a dark mode interface.

3. **Toggle Theme State**
   - Implement the logic to switch the theme state between 'dark' and 'light'.
   - Update the `data-theme` attribute on the HTML root element dynamically.

4. **Persist Theme State**
   - When the toggle is switched, update the `localStorage` with the current theme state.
   - Retrieve the theme state from `localStorage` when the application loads to set the initial theme.

5. **Automated Test**
   - Write a test file (`tests/test_theme.py` or equivalent) to simulate clicking the toggle.
   - Verify that the context changes accordingly when the toggle is clicked.

### Verification Tasks

1. **Check Toggle Switch**
   - Ensure the toggle switch is present and labeled "Dark Mode" inside the `SettingsPanel`.

2. **Test Theme Persistence**
   - After toggling the switch and refreshing the page, verify that the theme remains consistent with the last selected state.

3. **Dynamic Theme Change**
   - Verify that the `data-theme` attribute changes immediately upon toggling the switch, without reloading the page.

4. **Automated Test Execution**
   - Run the automated test to ensure that clicking the toggle triggers the context change.
   - Confirm that the test passes, indicating that the toggle functionality is working as expected.