# JIRA-402: Add Dark Mode Toggle to Settings Panel

## User Story
As an application user, 
I want to toggle between Dark Mode and Light Mode on the Settings view, 
So that I can comfortably use the UI interface in low-light environments.

## Technical Context
- The app's global state context is stored in `src/context/ThemeContext.js` (or a centralized state file in your stack).
- The toggle widget should be implemented inside the Settings module layout: `src/components/SettingsPanel.js`.
- It must switch the data attribute on the HTML root element: `document.documentElement.setAttribute('data-theme', 'dark' | 'light')`.

## Acceptance Criteria (AC)

### AC-1: UI Toggle Switch
1. **Description**: A standard UI toggle switch labeled "Dark Mode" must be visible inside the SettingsPanel.
2. **Implementation**: 
   - The toggle switch should be added to the `SettingsPanel.js` component.
   - The switch should be styled appropriately to match the application's design.
3. **Validation**: 
   - Ensure the toggle switch is present in the SettingsPanel.
   - Verify the switch is labeled "Dark Mode".

### AC-2: Local Storage Persistence
1. **Description**: The toggle state must persist locally (using browser `localStorage`) so refreshing the window doesn't reset the selection.
2. **Implementation**: 
   - When the toggle is switched, the new state should be saved to `localStorage`.
   - When the application loads, the toggle state should be retrieved from `localStorage` and applied.
3. **Validation**: 
   - Switch the toggle and refresh the page.
   - Ensure the toggle state remains consistent across page reloads.

### AC-3: Dynamic Theme Change
1. **Description**: Toggling the element must change the document attribute dynamically without requiring a hard page reload.
2. **Implementation**: 
   - When the toggle is switched, the `data-theme` attribute on the HTML root element should be updated dynamically.
   - The UI should reflect the new theme immediately without a page reload.
3. **Validation**: 
   - Switch the toggle and observe the immediate change in the UI.
   - Ensure no hard page reload occurs during the toggle action.

### AC-4: Automated Test
1. **Description**: An automated test file (`tests/test_theme.py` or equivalent framework test) must confirm that clicking the toggle triggers the context change.
2. **Implementation**: 
   - Write a test case in the `tests/test_theme.py` file (or equivalent test framework).
   - The test should simulate clicking the toggle and verify that the context changes accordingly.
3. **Validation**: 
   - Run the test case.
   - Ensure the test passes, indicating that the toggle correctly triggers the context change.

## Implementation Steps
1. **Add Toggle Switch**:
   - Open `src/components/SettingsPanel.js`.
   - Add the toggle switch component and bind it to the state.
   - Style the toggle switch to match the application's design.

2. **Persist State in Local Storage**:
   - Update the toggle switch's `onChange` handler to save the new state to `localStorage`.
   - Retrieve the toggle state from `localStorage` when the component mounts and apply it.

3. **Dynamic Theme Change**:
   - Update the toggle switch's `onChange` handler to dynamically change the `data-theme` attribute on the HTML root element.
   - Ensure the UI updates immediately without a page reload.

4. **Automated Test**:
   - Create a new test file `tests/test_theme.py`.
   - Write a test case to simulate clicking the toggle and verify the context change.

By following these steps, the Dark Mode toggle functionality will be implemented and validated according to the acceptance criteria.