To ensure that the implementation of the Dark Mode toggle satisfies every single AC defined in the spec document, we will create strict unit test verification blocks. We will use a testing framework like Jest and React Testing Library to simulate user interactions and verify the behavior of the Dark Mode toggle.

### Test File: `tests/test_theme.py`

```javascript
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { ThemeContext, ThemeProvider } from '../context/ThemeContext';
import DarkModeToggle from '../components/DarkModeToggle';

// Mock the ThemeContext
const mockThemeContext = {
  theme: 'light',
  setTheme: jest.fn(),
};

// Mock the ThemeProvider
const MockThemeProvider = ({ children }) => (
  <ThemeProvider value={mockThemeContext}>{children}</ThemeProvider>
);

describe('DarkModeToggle', () => {
  beforeEach(() => {
    // Reset the mock implementation before each test
    mockThemeContext.setTheme.mockReset();
  });

  it('renders the Dark Mode toggle switch', () => {
    render(<MockThemeProvider><DarkModeToggle /></MockThemeProvider>);
    const toggleSwitch = screen.getByLabelText('Dark Mode');
    expect(toggleSwitch).toBeInTheDocument();
  });

  it('toggles the theme state on click', () => {
    render(<MockThemeProvider><DarkModeToggle /></MockThemeProvider>);
    const toggleSwitch = screen.getByLabelText('Dark Mode');
    fireEvent.click(toggleSwitch);
    expect(mockThemeContext.setTheme).toHaveBeenCalledWith('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('saves the toggle state to localStorage on click', () => {
    render(<MockThemeProvider><DarkModeToggle /></MockThemeProvider>);
    const toggleSwitch = screen.getByLabelText('Dark Mode');
    fireEvent.click(toggleSwitch);
    expect(localStorage.getItem('theme')).toBe('dark');
  });

  it('applies the saved toggle state from localStorage', () => {
    localStorage.setItem('theme', 'dark');
    render(<MockThemeProvider><DarkModeToggle /></MockThemeProvider>);
    const toggleSwitch = screen.getByLabelText('Dark Mode');
    expect(toggleSwitch).toBeChecked();
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('does not reload the page when toggling', () => {
    render(<MockThemeProvider><DarkModeToggle /></MockThemeProvider>);
    const toggleSwitch = screen.getByLabelText('Dark Mode');
    fireEvent.click(toggleSwitch);
    expect(window.location.reload).not.toHaveBeenCalled();
  });
});
```

### Explanation of Tests

1. **renders the Dark Mode toggle switch**:
   - Verifies that the toggle switch is present in the rendered component.

2. **toggles the theme state on click**:
   - Simulates a click on the toggle switch and checks if the `setTheme` function from the `ThemeContext` is called with the correct theme value ('dark') and if the `data-theme` attribute of the HTML root element is updated to 'dark'.

3. **saves the toggle state to localStorage on click**:
   - Simulates a click on the toggle switch and checks if the theme state is saved to `localStorage` as 'dark'.

4. **applies the saved toggle state from localStorage**:
   - Sets a theme state in `localStorage` before rendering the component and verifies that the toggle switch is checked and the `data-theme` attribute is set to 'dark'.

5. **does not reload the page when toggling**:
   - Simulates a click on the toggle switch and checks that the `window.location.reload` function is not called, ensuring that the page does not reload during the toggle process.

These tests ensure that the Dark Mode toggle functionality is implemented correctly, meeting all the acceptance criteria outlined in the spec document.