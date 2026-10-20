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

### AC-1: Dark Mode Toggle Switch
1. **Description**: A standard UI toggle switch labeled "Dark Mode" must be visible inside the SettingsPanel.
2. **Implementation**: 
   - The toggle switch should be added to the `SettingsPanel.js` component.
   - The switch should be styled appropriately to match the application's design guidelines.
3. **Validation**: 
   - The toggle switch should be present in the SettingsPanel when the user navigates to the Settings view.
   - The switch should be labeled "Dark Mode".

### AC-2: Persistent Toggle State
1. **Description**: The toggle state must persist locally (using browser `localStorage`) so refreshing the window doesn't reset the selection.
2. **Implementation**: 
   - When the user toggles the switch, the new state should be saved in `localStorage`.
   - When the application loads, the toggle state should be retrieved from `localStorage` and applied.
3. **Validation**: 
   - After toggling the switch and refreshing the page, the toggle state should remain unchanged.
   - The document's `data-theme` attribute should reflect the saved state.

### AC-3: Dynamic Theme Change
1. **Description**: Toggling the element must change the document attribute dynamically without requiring a hard page reload.
2. **Implementation**: 
   - When the user toggles the switch, the `data-theme` attribute on the HTML root element should be updated dynamically.
   - The change should be reflected immediately without a page reload.
3. **Validation**: 
   - Toggling the switch should update the `data-theme` attribute on the HTML root element.
   - The UI should reflect the new theme immediately.

### AC-4: Automated Test
1. **Description**: An automated test file (`tests/test_theme.py` or equivalent framework test) must confirm that clicking the toggle triggers the context change.
2. **Implementation**: 
   - Write a test case that simulates toggling the switch.
   - Verify that the `data-theme` attribute on the HTML root element changes accordingly.
   - Ensure that the toggle state is saved in `localStorage`.
3. **Validation**: 
   - The test should pass without errors.
   - The test should confirm that the toggle switch triggers the context change and updates the theme state correctly.

## Implementation Steps

1. **Add Toggle Switch to SettingsPanel**:
   - Open `src/components/SettingsPanel.js`.
   - Add the toggle switch component.
   - Style the switch to match the application's design.

2. **Persist Toggle State**:
   - Use `localStorage` to save the toggle state.
   - Retrieve the toggle state from `localStorage` when the application loads.

3. **Dynamic Theme Change**:
   - Update the `data-theme` attribute on the HTML root element dynamically.
   - Ensure the UI reflects the new theme immediately.

4. **Automated Test**:
   - Write a test case in `tests/test_theme.py` (or equivalent).
   - Simulate toggling the switch and verify the theme change and state persistence.

By following these steps, the Dark Mode toggle functionality will be implemented and validated according to the acceptance criteria.