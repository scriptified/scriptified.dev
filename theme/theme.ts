/* eslint-disable max-len */

// 🚨 Please update theme in purgableCSSGenerator as well when updating theme here, cannot import it
// there because of node only supporting cjs modules issue.
export type Theme = 'blue' | 'teal' | 'green' | 'indigo' | 'orange' | 'purple' | 'gray';

export const THEMES: Theme[] = ['blue', 'green', 'teal', 'indigo', 'orange', 'purple', 'gray'];

export const TextType = {
  '3xl': `font-sniglet text-6xl font-extrabold`,
  '2.5xl': `font-sniglet text-5xl font-extrabold`,
  '2xl': `font-sniglet text-4xl font-extrabold`,
  '1.5xl': `font-sniglet text-3xl font-extrabold`,
  xl: `font-sniglet text-2xl font-extrabold`,
  lg: `font-sniglet text-xl`,
  md: `font-roboto text-base`,
  sm: `font-roboto text-sm`,
} as const;

export const ButtonType = (theme: Theme, disabled: boolean): Record<string, string> => ({
  primary: ` ${
    disabled
      ? `bg-${theme}-400 cursor-not-allowed`
      : `bg-gradient-to-br from-${theme}-400 to-${theme}-600 hover:from-${theme}-600 hover:to-${theme}-800 active:bg-${theme}-700 focus:outline-none focus:shadow-outline transition-all transform hover:scale-110 focus:scale-110`
  }  text-white font-bold rounded`,
  secondary: `bg-gradient-to-br from-white to-white border border-${theme}-500 hover:from-${theme}-400 hover:to-${theme}-600 text-${theme}-500 hover:text-white focus:outline-none focus:shadow-outline active:bg-${theme}-700 font-bold rounded transition-all transform hover:scale-105 focus:scale-105`,
  basic: `bg-gradient-to-br from-white to-white hover:from-white hover:to-${theme}-300 text-gray-700 font-bold rounded transition-all transform hover:scale-110 focus:scale-110`,
  delete: 'bg-red-300 hover:bg-red-500 text-white font-bold rounded',
});

export const ButtonSize = {
  sm: 'py-2 px-4 text-xs',
  md: 'py-2 px-4 text-lg',
  lg: 'py-3 px-6 text-xl',
};
