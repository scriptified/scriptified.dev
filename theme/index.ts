/* eslint-disable max-len */
export const FontName = 'font-nunito';

export type Theme = 'blue' | 'teal' | 'green' | 'indigo' | 'pink' | 'purple';

export const THEMES: Theme[] = ['blue', 'green', 'teal', 'indigo', 'pink', 'purple'];

export const TextType = {
  h1: `${FontName} text-4xl font-bold`,
  h2: `${FontName} text-2xl font-bold`,
  h3: `${FontName} font-semibold text-xl`,
  base: `${FontName} text-base`,
  small: `${FontName} text-sm`,
};

export const ButtonType = (theme: Theme, disabled: boolean): Record<string, string> => ({
  primary: ` ${
    disabled
      ? `bg-${theme}-400 cursor-not-allowed`
      : `bg-${theme}-500 hover:bg-${theme}-600 active:bg-${theme}-700 focus:outline-none focus:shadow-outline`
  }  text-white font-bold rounded`,
  secondary: `bg-white border border-${theme}-500 hover:bg-${theme}-500 text-${theme}-500 hover:text-white focus:outline-none focus:shadow-outline active:bg-${theme}-700 font-bold rounded`,
  basic: 'bg-white hover:bg-gray-200 text-gray-700 font-bold rounded',
  delete: 'bg-red-300 hover:bg-red-500 text-white font-bold rounded',
});

export const ButtonSize = {
  sm: 'py-2 px-4 text-xs',
  md: 'py-2 px-4 text-base',
  lg: 'py-3 px-6 text-lg',
};
