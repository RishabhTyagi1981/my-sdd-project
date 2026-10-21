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

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="settings-panel">
      <h2>Settings</h2>
      <label>
        Dark Mode
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={handleToggle}
        />
      </label>
    </div>
  );
};

export default SettingsPanel;