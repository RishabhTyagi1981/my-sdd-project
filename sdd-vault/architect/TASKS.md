# TASKS.md

## JIRA-402: Add Dark Mode Toggle to Settings Panel

### Task 1: Add Toggle Switch Component to SettingsPanel
- **Description:** Add a toggle switch component to `src/components/SettingsPanel.js`.
- **Implementation Steps:**
  - Import necessary components and hooks.
  - Create a toggle switch component.
  - Label the switch "Dark Mode".
- **Verification:**
  - Navigate to the Settings view.
  - Verify that the "Dark Mode" toggle switch is present and functional.

### Task 2: Store Toggle State in localStorage
- **Description:** Store the toggle state in `localStorage` when the user toggles the switch.
- **Implementation Steps:**
  - Add an event listener to the toggle switch.
  - On toggle, store the state in `localStorage`.
- **Verification:**
  - Toggle the "Dark Mode" switch.
  - Refresh the page.
  - Verify that the toggle state remains unchanged.

### Task 3: Update Document Attribute Dynamically
- **Description:** Update the `document.documentElement.setAttribute('data-theme', 'dark' | 'light')` when the toggle switch is toggled.
- **Implementation Steps:**
  - Add an event listener to the toggle switch.
  - On toggle, update the `data-theme` attribute.
- **Verification:**
  - Toggle the "Dark Mode" switch.
  - Verify that the `data-theme` attribute on the HTML root element changes dynamically.
  - Verify that the UI theme updates accordingly without a page reload.

### Task 4: Retrieve Stored State on Component Mount
- **Description:** Retrieve the stored state on component mount and apply it to the toggle switch.
- **Implementation Steps:**
  - Add a useEffect hook to retrieve the stored state.
  - Apply the retrieved state to the toggle switch.
- **Verification:**
  - Toggle the "Dark Mode" switch.
  - Refresh the page.
  - Verify that the toggle state remains unchanged.

### Task 5: Write Automated Test for Toggle Functionality
- **Description:** Write a test case in `tests/test_theme.py` to simulate toggling the "Dark Mode" switch.
- **Implementation Steps:**
  - Import necessary testing libraries and components.
  - Write a test case to simulate toggling the switch.
  - Verify that the context change is triggered and the `data-theme` attribute is updated.
- **Verification:**
  - Run the automated test.
  - Verify that the test passes, confirming that the toggle functionality is working as expected.

### Conclusion
This TASKS.md outlines the detailed tasks required to implement the Dark Mode Toggle feature in the Settings Panel. Each task is clearly defined with implementation steps and verification methods to ensure the feature is developed and tested thoroughly.