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
   - The switch should be styled appropriately to match the application's design.
3. **Validation**: 
   - The toggle switch should be present in the SettingsPanel when the user navigates to the Settings view.

### AC-2: Persistent Toggle State
1. **Description**: The toggle state must persist locally (using browser `localStorage`) so refreshing the window doesn't reset the selection.
2. **Implementation**: 
   - When the user toggles the Dark Mode switch, the current state should be saved in `localStorage`.
   - When the application loads, the toggle state should be retrieved from `localStorage` and applied.
3. **Validation**: 
   - The toggle state should remain consistent across page reloads. If the user toggles Dark Mode and refreshes the page, the Dark Mode should still be active.

### AC-3: Dynamic Theme Change
1. **Description**: Toggling the element must change the document attribute dynamically without requiring a hard page reload.
2. **Implementation**: 
   - When the user toggles the Dark Mode switch, the `data-theme` attribute on the HTML root element should be updated dynamically.
   - The change should be reflected immediately without a full page reload.
3. **Validation**: 
   - The `data-theme` attribute should be updated correctly when the user toggles the Dark Mode switch. The UI should reflect the new theme immediately.

### AC-4: Automated Test
1. **Description**: An automated test file (`tests/test_theme.py` or equivalent framework test) must confirm that clicking the toggle triggers the context change.
2. **Implementation**: 
   - Write a test case that simulates toggling the Dark Mode switch.
   - Verify that the `data-theme` attribute on the HTML root element is updated accordingly.
   - Ensure that the toggle state is saved in `localStorage`.
3. **Validation**: 
   - The test should pass, confirming that the toggle functionality works as expected.
   - The test should cover both the toggle switch and the persistence of the toggle state.