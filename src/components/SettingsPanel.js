<<<<<<< HEAD
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SDD POC</title>
</head>
<body>
  <!-- Your existing content here -->
</body>
</html>
=======
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
>>>>>>> origin/main
