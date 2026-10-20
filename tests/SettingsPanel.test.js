import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SettingsPanel from '../src/components/SettingsPanel';

describe('JIRA-402: SettingsPanel Dark Mode Testing Suite', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    jest.restoreAllMocks();
  });

  test('AC-1 & AC-3: Toggling the checkbox switches HTML data-theme attribute', () => {
    render(<SettingsPanel />);
    const toggle = screen.getByLabelText(/dark mode/i);

    expect(toggle).not.toBeChecked();
    expect(document.documentElement).not.toHaveAttribute('data-theme', 'dark');

    // Simulate clicking the UI checkbox element
    fireEvent.click(toggle);

    expect(toggle).toBeChecked();
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
  });

  test('AC-2: Theme preference successfully persists to localStorage', () => {
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');
    render(<SettingsPanel />);
    const toggle = screen.getByLabelText(/dark mode/i);

    fireEvent.click(toggle);

    // Verify browser engine API was storage targeted precisely
    expect(setItemSpy).toHaveBeenCalledWith('theme-preference', 'dark');
    expect(localStorage.getItem('theme-preference')).toBe('dark');
  });
});