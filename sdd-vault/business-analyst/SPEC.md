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
   - **Implementation**: Ensure that the toggle switch is rendered within the `SettingsPanel` component.
   - **Test**: Verify that the toggle switch is present and labeled correctly.

2. **AC-2**: The toggle state must persist locally (using browser `localStorage`) so refreshing the window doesn't reset the selection.
   - **Implementation**: Save the toggle state in `localStorage` when it changes and retrieve it when the component mounts.
   - **Test**: Ensure that toggling the switch and refreshing the page results in the same toggle state.

3. **AC-3**: Toggling the element must change the document attribute dynamically without requiring a hard page reload.
   - **Implementation**: Update the `data-theme` attribute on the HTML root element dynamically when the toggle is changed.
   - **Test**: Verify that the `data-theme` attribute changes correctly when the toggle is toggled.

4. **AC-4**: An automated test file (`tests/test_theme.py` or equivalent framework test) must confirm that clicking the toggle triggers the context change.
   - **Implementation**: Write a test that simulates clicking the toggle and checks if the context changes accordingly.
   - **Test**: Ensure that the test confirms that the context changes when the toggle is clicked.