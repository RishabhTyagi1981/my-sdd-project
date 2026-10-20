// src/components/DarkModeToggle.js
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const DarkModeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    setIsDarkMode(theme === 'dark');
  }, [theme]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      Dark Mode
    </label>
  );
};

export default DarkModeToggle;