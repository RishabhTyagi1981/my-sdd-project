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
   - **Description:** A standard UI toggle switch labeled "Dark Mode" must be visible inside the SettingsPanel.
   - **Implementation Steps:**
     - Add a toggle switch component to `src/components/SettingsPanel.js`.
     - Ensure the switch is labeled "Dark Mode".
   - **Verification:** 
     - Navigate to the Settings view.
     - Verify that the "Dark Mode" toggle switch is present and functional.

2. **AC-2: Persistence of Toggle State**
   - **Description:** The toggle state must persist locally (using browser `localStorage`) so refreshing the window doesn't reset the selection.
   - **Implementation Steps:**
     - Store the toggle state in `localStorage` when the user toggles the switch.
     - Retrieve the stored state on component mount and apply it to the toggle switch.
   - **Verification:**
     - Toggle the "Dark Mode" switch.
     - Refresh the page.
     - Verify that the toggle state remains unchanged.

3. **AC-3: Dynamic Attribute Change**
   - **Description:** Toggling the element must change the document attribute dynamically without requiring a hard page reload.
   - **Implementation Steps:**
     - Update the `document.documentElement.setAttribute('data-theme', 'dark' | 'light')` when the toggle switch is toggled.
     - Ensure the change is reflected immediately without a page reload.
   - **Verification:**
     - Toggle the "Dark Mode" switch.
     - Verify that the `data-theme` attribute on the HTML root element changes dynamically.
     - Verify that the UI theme updates accordingly without a page reload.

4. **AC-4: Automated Test**
   - **Description:** An automated test file (`tests/test_theme.py` or equivalent framework test) must confirm that clicking the toggle triggers the context change.
   - **Implementation Steps:**
     - Write a test case in `tests/test_theme.py` (or equivalent) to simulate toggling the "Dark Mode" switch.
     - Verify that the context change is triggered and the `data-theme` attribute is updated.
   - **Verification:**
     - Run the automated test.
     - Verify that the test passes, confirming that the toggle functionality is working as expected.

### Conclusion
This SPEC.md outlines the detailed requirements and acceptance criteria for the JIRA-402 task. Each criterion is clearly defined with implementation steps and verification methods to ensure the feature is developed and tested thoroughly.