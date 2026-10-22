# Audit Log
# SPEC.md

## JIRA-402: Add Dark Mode Toggle to Settings Panel

### User Story
As an application user, 
I want to toggle between Dark Mode and Light Mode on the Settings view, 
So that I can comfortably use the UI interface in low-light environments.

### Technical Context
- The app's global state context is stored in `src/context/ThemeContext.js` (or a centralized state file in your stack).
- The toggle widget should be implemented inside the Settings module layout: `src/components/SettingsPanel.js`.
- It must switch the data attribute on the HTML root element: `document.documentElement.setAttribute('data-theme', 'dark' | 'light')`.

### Acceptance Criteria (AC)
1. **AC-1**: A standard UI toggle switch labeled "Dark Mode" must be visible inside the SettingsPanel.
   - **Implementation**: Ensure that the `SettingsPanel` component includes a toggle switch with the label "Dark Mode".
   - **Verification**: The toggle switch should be present and labeled correctly.

2. **AC-2**: The toggle state must persist locally (using browser `localStorage`) so refreshing the window doesn't reset the selection.
   - **Implementation**: When the toggle is switched, update the `localStorage` with the current theme state.
   - **Verification**: After toggling the switch and refreshing the page, the theme should remain consistent with the last selected state.

3. **AC-3**: Toggling the element must change the document attribute dynamically without requiring a hard page reload.
   - **Implementation**: When the toggle is switched, update the `data-theme` attribute of the `html` element dynamically.
   - **Verification**: The `data-theme` attribute should change immediately upon toggling the switch without reloading the page.

4. **AC-4**: An automated test file (`tests/test_theme.py` or equivalent framework test) must confirm that clicking the toggle triggers the context change.
   - **Implementation**: Write a test case that simulates clicking the toggle and checks if the context changes accordingly.
   - **Verification**: The test should pass, indicating that the toggle correctly updates the theme context.