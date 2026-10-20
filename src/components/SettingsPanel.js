// src/components/SettingsPanel.js
import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const SettingsPanel = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    toggleTheme(savedTheme);
  }, [toggleTheme]);

  return (
    <div>
      <h2>Settings</h2>
      <label>
        Dark Mode
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
        />
      </label>
    </div>
  );
};

export default SettingsPanel;