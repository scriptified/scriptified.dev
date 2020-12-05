import React, { useState } from 'react';
import { Theme, THEMES } from '../theme/theme';
import { useThemeDispatch } from '../theme/ThemeContext';

const LoadingStateContext = React.createContext(true);

const LoadingProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const setTheme = useThemeDispatch();

  React.useEffect(() => {
    setLoading(false);
    // Check for theme in session storage to find the currently generated theme
    // if not present set a random theme
    const sessionTheme = sessionStorage.getItem('theme');
    if (sessionTheme) {
      setTheme(sessionTheme as Theme);
    } else {
      const randomTheme = THEMES[Math.floor(Math.random() * THEMES.length)];
      setTheme(randomTheme);
      sessionStorage.setItem('theme', randomTheme);
    }
  }, []);

  return <LoadingStateContext.Provider value={loading}>{children}</LoadingStateContext.Provider>;
};

const useLoadingState = (): boolean => {
  const context = React.useContext(LoadingStateContext);
  return context;
};

export { LoadingProvider, useLoadingState };
