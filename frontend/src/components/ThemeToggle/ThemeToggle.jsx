import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <div className="theme-toggle-icon">
        {isDark ? (
          <i className="bi bi-sun-fill"></i>
        ) : (
          <i className="bi bi-moon-fill"></i>
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
