# TASKS.md for JIRA-402: Add Dark Mode Toggle to Settings Panel

## Overview
This document outlines the tasks required to implement the Dark Mode toggle feature in the Settings Panel. Each task is broken down into specific steps and technical details.

## Tasks

### 1. Create Toggle Switch
- **Task**: Add a toggle switch component inside the `SettingsPanel.js` file.
- **Steps**:
  - Import necessary components and hooks.
  - Create a functional component for the toggle switch.
  - Label the toggle switch "Dark Mode".
  - Ensure the switch is styled appropriately.

### 2. State Management
- **Task**: Use `localStorage` to store the toggle state.
- **Steps**:
  - Retrieve the stored state from `localStorage` on component mount.
  - Set the initial toggle state based on the stored value.
  - Update `localStorage` whenever the toggle state changes.

### 3. Dynamic Attribute Change
- **Task**: Add an event listener to the toggle switch that updates the `data-theme` attribute on the HTML root element.
- **Steps**:
  - Add an `onChange` event handler to the toggle switch.
  - Update the `data-theme` attribute on the HTML root element based on the toggle state.
  - Ensure the attribute is set to 'dark' when the toggle is on and 'light' when the toggle is off.

### 4. Automated Test
- **Task**: Create a test file (`tests/test_theme.py` or equivalent).
- **Steps**:
  - Import necessary testing libraries and components.
  - Write a test case that simulates toggling the switch.
  - Verify that the context changes accordingly when the toggle is clicked.

## Verification
- **AC-1**: Inspect the SettingsPanel component to ensure the toggle switch is present and labeled correctly.
- **AC-2**: Toggle the switch and refresh the window. Ensure the toggle state remains unchanged.
- **AC-3**: Toggle the switch and check the `data-theme` attribute on the HTML root element. Ensure it changes dynamically.
- **AC-4**: Run the automated test and ensure it passes, confirming that the context changes when the toggle is clicked.

## Conclusion
By completing these tasks, the Dark Mode toggle feature will be implemented with the desired functionality and persistence. Each task is designed to ensure that the feature meets the specified requirements and passes the acceptance criteria.