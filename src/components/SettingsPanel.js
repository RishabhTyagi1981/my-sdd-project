// src/components/ToggleSwitch.js
import React, { useState, useEffect } from 'react';

const ToggleSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;