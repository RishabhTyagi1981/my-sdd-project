// src/components/SettingsPanel.js
import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const SettingsPanel = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      toggleTheme(savedTheme);
    }
  }, [toggleTheme]);

  return (
    <div>
      <label>
        Dark Mode
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={(e) => {
            const newTheme = e.target.checked ? 'dark' : 'light';
            toggleTheme(newTheme);
            localStorage.setItem('theme', newTheme);
          }}
        />
      </label>
    </div>
  );
};

export default SettingsPanel;