// Inspired from https://kentcdodds.com/blog/how-to-use-react-context-effectively

import React, { useState } from 'react';
import { Theme } from './theme';

type Action = (theme: Theme) => void;

const ThemeStateContext = React.createContext<Theme | undefined>(undefined);
const ThemeDispatchContext = React.createContext<Action | undefined>(undefined);

function ThemeProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [theme, setTheme] = useState<Theme>('blue');

  const updateTheme = (theme: Theme) => {
    setTheme(theme);
    sessionStorage.setItem('theme', theme);
  };

  return (
    <ThemeStateContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={updateTheme}>{children}</ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
}

function useThemeState(): Theme {
  const context = React.useContext(ThemeStateContext);
  if (context === undefined) {
    throw new Error('useThemeState must be used within a ThemeProvider');
  }
  return context;
}

function useThemeDispatch(): Action {
  const context = React.useContext(ThemeDispatchContext);
  if (context === undefined) {
    throw new Error('useThemeDispatch must be used within a ThemeProvider');
  }
  return context;
}

export { ThemeProvider, useThemeState, useThemeDispatch };
