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
   - The switch should be styled to match the application's design guidelines.
3. **Validation**: 
   - The toggle switch should be present in the SettingsPanel when the user navigates to the Settings view.
   - The switch should be labeled "Dark Mode".

### AC-2: Persistent State
1. **Description**: The toggle state must persist locally (using browser `localStorage`) so refreshing the window doesn't reset the selection.
2. **Implementation**: 
   - When the user toggles the switch, the new state should be saved in `localStorage`.
   - When the application loads, the toggle state should be retrieved from `localStorage` and applied.
3. **Validation**: 
   - After toggling the switch and refreshing the page, the toggle state should remain unchanged.
   - The `localStorage` should contain the correct theme state.

### AC-3: Dynamic Theme Change
1. **Description**: Toggling the element must change the document attribute dynamically without requiring a hard page reload.
2. **Implementation**: 
   - When the user toggles the switch, the `data-theme` attribute on the HTML root element should be updated dynamically.
   - The change should be reflected immediately without reloading the page.
3. **Validation**: 
   - Toggling the switch should change the `data-theme` attribute on the HTML root element.
   - The UI should reflect the new theme immediately.

### AC-4: Automated Test
1. **Description**: An automated test file (`tests/test_theme.py` or equivalent framework test) must confirm that clicking the toggle triggers the context change.
2. **Implementation**: 
   - Write a test case in `tests/test_theme.py` (or equivalent) that simulates toggling the switch.
   - The test should verify that the context changes correctly when the toggle is clicked.
3. **Validation**: 
   - The test should pass when the toggle functionality is implemented correctly.
   - The test should fail if the toggle functionality is not working as expected.

## Implementation Steps
1. **Add Toggle Switch**:
   - Open `src/components/SettingsPanel.js`.
   - Add the toggle switch component and label.
   - Ensure the switch is styled appropriately.

2. **Persist State**:
   - Modify the toggle switch's `onChange` handler to save the state in `localStorage`.
   - Retrieve the state from `localStorage` when the component mounts.

3. **Dynamic Theme Change**:
   - Update the `onChange` handler to dynamically change the `data-theme` attribute.
   - Ensure the UI updates immediately without reloading.

4. **Automated Test**:
   - Create a new test file `tests/test_theme.py`.
   - Write a test case that simulates toggling the switch and verifies the context change.

By following these steps, the Dark Mode toggle functionality will be added to the Settings Panel, ensuring a comfortable user experience in low-light environments.