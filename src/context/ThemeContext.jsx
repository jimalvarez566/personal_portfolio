import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Force dark mode as default - clear any existing preference
    if (typeof window !== 'undefined') {
      // Clear existing theme preference to force our new default
      localStorage.removeItem('theme');
      // Immediately apply dark theme
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      return 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    // Update the HTML class and localStorage when theme changes
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}; 