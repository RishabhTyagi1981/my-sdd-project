# TASKS.md

## JIRA-402: Add Dark Mode Toggle to Settings Panel

### Implementation Tasks

1. **Create or Update ThemeContext.js**
   - Ensure the global state context for theme is stored in `src/context/ThemeContext.js`.
   - If it doesn't exist, create it with initial state set to 'light'.

2. **Modify SettingsPanel.js**
   - Add a toggle switch labeled "Dark Mode" inside the `SettingsPanel` component.
   - Ensure the toggle switch is styled appropriately for a dark mode interface.

3. **Update HTML Root Element**
   - Modify the `SettingsPanel` component to dynamically update the `data-theme` attribute on the HTML root element when the toggle is switched.
   - Use `document.documentElement.setAttribute('data-theme', 'dark' | 'light')` to switch themes.

4. **Persist Theme State**
   - Update the `SettingsPanel` component to save the current theme state to `localStorage` when the toggle is switched.
   - Retrieve the theme state from `localStorage` when the component mounts to set the initial theme.

5. **Write Automated Test**
   - Create a test file named `tests/test_theme.py` or equivalent.
   - Write a test that simulates clicking the toggle and checks if the context changes accordingly.
   - Ensure the test passes to confirm that the toggle correctly triggers the context change.

### Testing Tasks

1. **Verify Toggle Switch**
   - Simulate a user clicking the "Dark Mode" toggle.
   - Verify that the toggle switch is present and labeled correctly.

2. **Test Theme Persistence**
   - Simulate a page refresh.
   - Verify that the theme state is restored from `localStorage`.

3. **Test Dynamic Theme Change**
   - Programmatically trigger the toggle.
   - Verify that the `data-theme` attribute changes dynamically without a page reload.

4. **Run Automated Test**
   - Execute the test file `tests/test_theme.py`.
   - Ensure the test passes, indicating that the toggle correctly triggers the context change.