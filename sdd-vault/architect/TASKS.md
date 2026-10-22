# TASKS.md for JIRA-402: Add Dark Mode Toggle to Settings Panel

## Step-by-Step Checklist

### 1. Update ThemeContext.js
- **Task**: Modify `src/context/ThemeContext.js` to include a function for toggling the theme.
- **Steps**:
  1. Import `useState` and `useEffect` from React.
  2. Create a `ThemeContext` with a `theme` state and a `toggleTheme` function.
  3. Use `localStorage` to persist the theme state across sessions.
  4. Update the `toggleTheme` function to switch between 'dark' and 'light' themes and update `localStorage`.

### 2. Implement Dark Mode Toggle in SettingsPanel.js
- **Task**: Add a Dark Mode toggle switch to `src/components/SettingsPanel.js`.
- **Steps**:
  1. Import `useContext` from React.
  2. Import the `ThemeContext`.
  3. Use the `toggleTheme` function from the `ThemeContext` to handle the toggle event.
  4. Render a toggle switch labeled "Dark Mode" that calls the `toggleTheme` function when toggled.

### 3. Update HTML Root Element Attribute
- **Task**: Modify the `toggleTheme` function to update the `data-theme` attribute on the HTML root element.
- **Steps**:
  1. In the `toggleTheme` function, update the `data-theme` attribute based on the current theme.
  2. Ensure that the attribute is set to 'dark' when the theme is dark and 'light' when the theme is light.

### 4. Implement Persistence of Toggle State
- **Task**: Ensure that the toggle state persists across page refreshes using `localStorage`.
- **Steps**:
  1. In the `ThemeContext` initialization, read the theme from `localStorage` if available.
  2. Update the `toggleTheme` function to save the new theme state to `localStorage`.

### 5. Add Automated Test for Theme Toggling
- **Task**: Create an automated test to verify that clicking the toggle triggers the context change.
- **Steps**:
  1. Create a test file, e.g., `tests/test_theme.py`.
  2. Write a test case that simulates toggling the Dark Mode switch.
  3. Assert that the `ThemeContext` state and the `data-theme` attribute on the HTML root element are updated correctly.

### 6. Review and Refine
- **Task**: Review the implementation and refine any issues or edge cases.
- **Steps**:
  1. Run the automated test to ensure it passes.
  2. Manually test the Dark Mode toggle in different scenarios (e.g., initial load, page refresh, theme persistence).
  3. Make any necessary adjustments to the code based on the test results.

### 7. Documentation
- **Task**: Document the changes and any new features or behaviors.
- **Steps**:
  1. Update the `README.md` or relevant documentation files.
  2. Include details on how to use the Dark Mode toggle and any limitations or known issues.

### 8. Code Review and Merge
- **Task**: Submit the code for review and merge into the main branch.
- **Steps**:
  1. Push the changes to the feature branch.
  2. Create a pull request (PR) and request code review.
  3. Address any feedback and make necessary revisions.
  4. Merge the PR into the main branch after approval.

By following these steps, the Dark Mode toggle functionality will be implemented correctly and meet the acceptance criteria outlined in the SPEC.md.