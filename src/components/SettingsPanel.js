// src/components/SettingsPanel.js
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const SettingsPanel = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setIsDarkMode(savedTheme === 'dark');
    setTheme(savedTheme);
  }, [setTheme]);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="settings-panel">
      <label>
        Dark Mode
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleTheme}
        />
      </label>
    </div>
  );
};

export default SettingsPanel;