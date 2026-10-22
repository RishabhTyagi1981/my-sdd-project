# Verification Check Files

## 1. **AC-1: Toggle Switch Visibility and Labeling**
- **Check**: Ensure that the toggle switch is visible inside the `SettingsPanel`.
- **Test**: Inspect the rendered HTML to confirm the presence of the toggle switch with the label "Dark Mode".

## 2. **AC-2: Persistence of Toggle State**
- **Check**: Verify that the toggle state persists locally using `localStorage`.
- **Test**: 
  1. Toggle the switch to Dark Mode.
  2. Refresh the page.
  3. Ensure that the switch remains in the Dark Mode state.

## 3. **AC-3: Dynamic Change of `data-theme` Attribute**
- **Check**: Ensure that the `data-theme` attribute on the HTML root element changes dynamically.
- **Test**: 
  1. Toggle the switch to Dark Mode.
  2. Check the `data-theme` attribute on the HTML root element.
  3. Toggle the switch to Light Mode.
  4. Check the `data-theme` attribute on the HTML root element again.

## 4. **AC-4: Automated Test for Context Change**
- **Check**: Ensure that clicking the toggle triggers the context change.
- **Test**: 
  1. Run the automated test file (`tests/test_theme.py`).
  2. Verify that the test confirms the context changes when the toggle is clicked.

These checks will help ensure that the implementation meets the requirements specified in the JIRA ticket.