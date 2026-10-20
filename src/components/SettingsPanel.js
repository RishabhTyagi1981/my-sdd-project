// src/components/SettingsPanel.js
import React, { useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const SettingsPanel = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
      document.documentElement.setAttribute('data-theme', storedTheme);
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="settings-panel">
      <h2>Settings</h2>
      <label>
        Dark Mode
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
      </label>
    </div>
  );
};

export default SettingsPanel;