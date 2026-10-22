// src/components/DarkModeToggle.js
import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const DarkModeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, [setTheme]);

  const handleToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={handleToggle}
      />
      Dark Mode
    </label>
  );
};

export default DarkModeToggle;