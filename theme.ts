export const FontName = 'font-nunito';

export const TextType = {
  h1: `${FontName} text-4xl font-bold`,
  h3: `${FontName} font-semibold text-xl`,
  base: `${FontName} text-base`,
  small: `${FontName} text-sm`,
};

export const TextColor = {
  black: ['text-black'],
  white: ['text-white'],
  gray: [
    'text-gray-100',
    'text-gray-200',
    'text-gray-300',
    'text-gray-400',
    'text-gray-500',
    'text-gray-600',
    'text-gray-700',
    'text-gray-800',
    'text-gray-900',
  ],
  green: [
    'text-green-100',
    'text-green-200',
    'text-green-300',
    'text-green-400',
    'text-green-500',
    'text-green-600',
    'text-green-700',
    'text-green-800',
    'text-green-900',
  ],
};

export const ButtonType = {
  primary: 'bg-green-500 hover:bg-green-700 text-white font-bold rounded',
  secondary: 'bg-green-500 hover:bg-green-700 text-white font-bold rounded',
  basic: 'bg-white hover:bg-gray-200 text-gray-700 font-bold rounded',
  delete: 'bg-red-300 hover:bg-red-500 text-white font-bold rounded',
};

export const ButtonSize = {
  sm: 'py-2 px-4 text-xs',
  lg: 'py-3 px-6 text-lg',
};
