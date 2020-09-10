const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV !== 'development',
    content: ['./components/**/*.tsx', './pages/**/*.tsx', './theme/*.ts'],
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
      // inspired from https://9elements.com/blog/css-border-radius/
      keyframes: {
        morph: {
          '0%': { 'border-radius': '10% 70% 70% 10% / 60% 30% 70% 40%' },
          '100%': { 'border-radius': ' 10% 70%' },
        },
      },
      animation: {
        morph: 'morph 8s ease-in-out infinite both alternate',
        'spin-slow': 'spin 4s linear infinite reverse',
      },
    },
  },
  variants: {
    margin: ['responsive', 'first', 'hover', 'focus'],
    backgroundColor: ['responsive', 'first', 'hover', 'focus'],
    fill: ['responsive', 'hover', 'focus'],
    display: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
