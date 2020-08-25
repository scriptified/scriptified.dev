const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV !== 'development',
    content: ['./components/**/*.tsx', './components/*.tsx', './pages/**/*.tsx', './pages/*.tsx', './theme.ts'],
    options: {
      whitelist: ['hover:border-green-500'],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        nunito: ['nunito', 'sans-serif'],
      },
      inset: {
        '1/2': '0.5rem',
        '1': '1rem',
      },
      maxWidth: {
        fc: 'fit-content',
      },
      colors: {
        gray: {
          ...colors.gray,
          '100': '#FDFDFD',
        },
      },
      boxShadow: {
        whiteLg: '0 25px 50px -12px rgba(255, 255, 255, 0.25)',
      },
    },
  },
  variants: {
    margin: ['responsive', 'first', 'hover', 'focus'],
    backgroundColor: ['responsive', 'first', 'hover', 'focus', 'active'],
  },
};
