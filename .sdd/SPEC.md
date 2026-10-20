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
1. **AC-1: UI Toggle Switch**
   - A standard UI toggle switch labeled "Dark Mode" must be visible inside the `SettingsPanel`.
   - The toggle switch should be styled appropriately to indicate the current theme (e.g., a moon icon for Dark Mode and a sun icon for Light Mode).

2. **AC-2: Local Storage Persistence**
   - The toggle state must persist locally using the browser's `localStorage`.
   - When the user toggles the switch, the new theme preference should be saved in `localStorage`.
   - When the application loads, the theme should be restored based on the value stored in `localStorage`.

3. **AC-3: Dynamic Theme Change**
   - Toggling the element must change the `data-theme` attribute of the HTML root element dynamically.
   - The change should be reflected immediately without requiring a hard page reload.
   - The `data-theme` attribute should be set to either `'dark'` or `'light'` based on the user's selection.

4. **AC-4: Automated Test**
   - An automated test file (`tests/test_theme.py` or equivalent framework test) must confirm that clicking the toggle triggers the context change.
   - The test should verify that the `data-theme` attribute is updated correctly and that the theme context is updated in the global state.
   - The test should also ensure that the toggle state is correctly restored from `localStorage` when the application loads.

## Implementation Steps
1. **Update `SettingsPanel.js`**
   - Add the toggle switch component inside the `SettingsPanel`.
   - Bind the toggle switch to a state variable that represents the current theme.

2. **Update `ThemeContext.js`**
   - Ensure that the context provides a way to update the theme state.
   - Provide a function to toggle the theme between 'dark' and 'light'.

3. **Update `SettingsPanel.js` to Use `ThemeContext`**
   - Use the `ThemeContext` to get the current theme and toggle function.
   - Update the `data-theme` attribute of the HTML root element based on the current theme.
   - Update the toggle switch state based on the current theme.

4. **Update `SettingsPanel.js` to Persist Theme in `localStorage`**
   - Save the theme preference to `localStorage` when the toggle state changes.
   - Restore the theme preference from `localStorage` when the component mounts.

5. **Create Automated Test**
   - Write a test case in `tests/test_theme.py` or equivalent framework test.
   - Verify that clicking the toggle switch updates the `data-theme` attribute.
   - Verify that the theme context is updated in the global state.
   - Verify that the toggle state is correctly restored from `localStorage`.

By following these steps, the Dark Mode toggle functionality will be implemented and verified, ensuring a seamless user experience across different themes.