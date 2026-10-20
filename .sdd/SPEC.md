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
   - Add a toggle switch component to `src/components/SettingsPanel.js`.
   - Ensure the switch is labeled "Dark Mode".
3. **Validation**: 
   - Verify that the toggle switch is present in the SettingsPanel.
   - Confirm that the switch is labeled correctly.

### AC-2: Local Storage Persistence
1. **Description**: The toggle state must persist locally (using browser `localStorage`) so refreshing the window doesn't reset the selection.
2. **Implementation**: 
   - When the toggle state changes, update the `localStorage` with the new theme preference.
   - On component mount, read the theme preference from `localStorage` and set the initial toggle state accordingly.
3. **Validation**: 
   - Toggle the switch and refresh the page.
   - Ensure that the toggle state remains consistent across page reloads.

### AC-3: Dynamic Theme Change
1. **Description**: Toggling the element must change the document attribute dynamically without requiring a hard page reload.
2. **Implementation**: 
   - When the toggle state changes, update the `data-theme` attribute of the HTML root element.
   - Ensure that the change is reflected immediately without a page reload.
3. **Validation**: 
   - Toggle the switch and observe the change in the `data-theme` attribute of the HTML root element.
   - Confirm that the UI updates accordingly without a page reload.

### AC-4: Automated Test
1. **Description**: An automated test file (`tests/test_theme.py` or equivalent framework test) must confirm that clicking the toggle triggers the context change.
2. **Implementation**: 
   - Write a test case in `tests/test_theme.py` (or equivalent) to simulate clicking the toggle switch.
   - Verify that the context changes as expected.
3. **Validation**: 
   - Run the test case.
   - Ensure that the test passes, confirming that the toggle triggers the context change correctly.

## Implementation Steps
1. **Create Toggle Switch Component**:
   - Add a new component `DarkModeToggle.js` in `src/components/`.
   - Implement the toggle switch with the label "Dark Mode".

2. **Integrate Toggle Switch into SettingsPanel**:
   - Import and use the `DarkModeToggle` component in `src/components/SettingsPanel.js`.
   - Ensure the toggle switch is displayed within the SettingsPanel.

3. **Persist Toggle State in Local Storage**:
   - Update the `DarkModeToggle` component to save the toggle state in `localStorage`.
   - On component mount, read the toggle state from `localStorage` and set the initial state.

4. **Update Document Attribute Dynamically**:
   - Modify the `DarkModeToggle` component to update the `data-theme` attribute of the HTML root element when the toggle state changes.

5. **Write Automated Test**:
   - Create a test file `tests/test_theme.py` (or equivalent).
   - Write a test case to simulate clicking the toggle switch and verify the context change.

6. **Run and Validate Tests**:
   - Run the test case to ensure it passes.
   - Verify that the toggle switch works as expected and the context changes dynamically.

By following these steps, the Dark Mode toggle functionality will be added to the SettingsPanel, ensuring a comfortable user experience in low-light environments.