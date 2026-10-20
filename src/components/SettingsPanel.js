// src/components/SettingsPanel.js
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const SettingsPanel = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setIsDarkMode(savedTheme === 'dark');
    toggleTheme(savedTheme);
  }, [toggleTheme]);

  const handleToggle = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(newTheme);
    toggleTheme(newTheme);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={handleToggle}
        />
        Dark Mode
      </label>
    </div>
  );
};

export default SettingsPanel;