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

1. **AC-1: UI Toggle Switch**
   - **Description**: A standard UI toggle switch labeled "Dark Mode" must be visible inside the SettingsPanel.
   - **Implementation**: 
     - Add a toggle switch component to `src/components/SettingsPanel.js`.
     - Ensure the switch is labeled "Dark Mode".
   - **Validation**: 
     - Manually check that the toggle switch is present and labeled correctly in the SettingsPanel.

2. **AC-2: Local Storage Persistence**
   - **Description**: The toggle state must persist locally (using browser `localStorage`) so refreshing the window doesn't reset the selection.
   - **Implementation**: 
     - When the toggle is switched, update the `localStorage` with the current theme state.
     - On component mount, read the theme state from `localStorage` and set the toggle accordingly.
   - **Validation**: 
     - Manually test toggling the switch and refreshing the page to ensure the state persists.

3. **AC-3: Dynamic Attribute Change**
   - **Description**: Toggling the element must change the document attribute dynamically without requiring a hard page reload.
   - **Implementation**: 
     - When the toggle is switched, dynamically update the `data-theme` attribute on the HTML root element.
   - **Validation**: 
     - Manually test toggling the switch and verify that the `data-theme` attribute on the HTML root element changes dynamically.

4. **AC-4: Automated Test**
   - **Description**: An automated test file (`tests/test_theme.py` or equivalent framework test) must confirm that clicking the toggle triggers the context change.
   - **Implementation**: 
     - Write a test case in `tests/test_theme.py` (or equivalent) to simulate toggling the switch and verify that the context changes accordingly.
   - **Validation**: 
     - Run the automated test to ensure it passes without errors.

### Additional Notes
- Ensure that the toggle switch is accessible and follows best practices for UI components.
- Consider adding visual feedback to the toggle switch when it is toggled (e.g., changing the color of the switch or adding an animation).
- Ensure that the toggle switch is responsive and works correctly on different devices and screen sizes.

By following these guidelines and implementing the acceptance criteria, the Dark Mode toggle feature will be fully functional and meet the requirements outlined in the user story.