import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const SettingsPanel = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <label>
        Dark Mode
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
      </label>
    </div>
  );
};

export default SettingsPanel;