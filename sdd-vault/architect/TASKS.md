# TASKS.md

## JIRA-402: Add Dark Mode Toggle to Settings Panel

### Implementation Tasks

1. **Create or Update Theme Context**
   - Ensure `src/context/ThemeContext.js` exists or create it if it doesn't.
   - Define the context and provide a way to toggle the theme.

2. **Add Dark Mode Toggle to SettingsPanel**
   - Open `src/components/SettingsPanel.js`.
   - Add a toggle switch labeled "Dark Mode" inside the `SettingsPanel` component.
   - Ensure the toggle switch is styled appropriately.

3. **Update Document Theme Attribute**
   - In the toggle switch's event handler, update the `data-theme` attribute of the `html` element.
   - Example:
     ```javascript
     document.documentElement.setAttribute('data-theme', 'dark' | 'light');
     ```

4. **Persist Theme State Locally**
   - Update the `localStorage` when the toggle state changes.
   - Example:
     ```javascript
     localStorage.setItem('theme', 'dark' | 'light');
     ```

5. **Retrieve Theme State on Component Mount**
   - When the `SettingsPanel` component mounts, retrieve the theme state from `localStorage`.
   - Example:
     ```javascript
     const theme = localStorage.getItem('theme') || 'light';
     ```

6. **Automated Test for Theme Toggle**
   - Create a test file, e.g., `tests/test_theme.py`.
   - Write a test case that simulates clicking the toggle and checks if the context changes.
   - Example (using Jest and React Testing Library):
     ```javascript
     import { render, fireEvent, screen } from '@testing-library/react';
     import { ThemeProvider } from 'src/context/ThemeContext';
     import SettingsPanel from 'src/components/SettingsPanel';

     test('toggles theme on button click', () => {
       render(
         <ThemeProvider>
           <SettingsPanel />
         </ThemeProvider>
       );

       const toggleSwitch = screen.getByLabelText('Dark Mode');
       fireEvent.click(toggleSwitch);

       // Add assertions to check if the theme context has changed
     });
     ```

### Verification Tasks

1. **Check Toggle Switch Visibility**
   - Ensure the "Dark Mode" toggle switch is visible inside the `SettingsPanel`.

2. **Verify Theme Persistence**
   - Toggle the switch and refresh the page.
   - Ensure the theme remains consistent with the last selected state.

3. **Check Dynamic Theme Change**
   - Toggle the switch and verify that the `data-theme` attribute of the `html` element changes immediately without reloading the page.

4. **Run Automated Tests**
   - Execute the test file `tests/test_theme.py`.
   - Ensure the test passes, indicating that the toggle correctly updates the theme context.