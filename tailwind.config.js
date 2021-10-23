// const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV !== 'development',
    content: ['./components/**/*.tsx', './pages/**/*.tsx', './theme/*.ts'],
  },
  theme: {
    extend: {
      fontFamily: {
        sniglet: ['Amaranth', 'serif'],
        roboto: ['Roboto Slab', 'sans-serif'],
      },
      fontSize: {
        '5.5xl': '3.25rem',
      },
      inset: {
        '1/2': '0.5rem',
        1: '1rem',
        6: '1.5rem',
      },
      maxWidth: {
        fc: 'fit-content',
      },
      minHeight: {
        50: '50vh',
        80: '80vh',
      },
      backgroundImage: {
        hero: 'url(/hero-pattern.svg)',
        texture: 'url(/texture.svg)',
      },
      colors: {
        gray: {
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      boxShadow: {
        whiteLg: '0 25px 50px -12px rgba(255, 255, 255, 0.25)',
      },
      /* 
      inspired from 
      1. https://9elements.com/blog/css-border-radius/
      2. https://coveloping.com/tools/css-animation-generator
      */
      keyframes: {
        morph: {
          '0%': { 'border-radius': '20% 60% 60% 20% / 60% 30% 70% 40%' },
          '100%': { 'border-radius': '20% 60%' },
        },
        'bounce-in': {
          '0%': { transform: 'scale(0.3)', opacity: 0 },
          '50%': { transform: 'scale(1.05)', opacity: 1 },
          '70%': { transform: 'scale(0.9)', opacity: 1 },
          '10%': { transform: 'scale(1)', opacity: 1 },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'spring-bounce': {
          '0%': { transform: 'scale3d(0.96,0.96,1)' },
          '20%': { transform: 'scale3d(1.1,1.1,1)' },
          '40%': { transform: 'scale3d(0.98,0.98,1)' },
          '60%': { transform: 'scale3d(1.05,1.05,1)' },
          '80%': { transform: 'scale3d(1.01,1.01,1)' },
          '100%': { transform: 'scale3d(1,1,1)' },
        },
      },
      animation: {
        morph: 'morph 8s ease-in-out infinite both alternate',
        'morph-fast': 'morph 4s ease-in-out infinite both alternate',
        'spin-slow': 'spin 4s linear infinite reverse',
        'bounce-in': 'bounce-in 1s ease-out infinite both',
        wiggle: 'wiggle 1s ease-in-out infinite',
        'spring-bounce': 'spring-bounce 900ms ease forwards',
      },
    },
  },
  variants: {
    margin: ['responsive', 'first', 'hover', 'focus'],
    padding: ['responsive', 'first', 'hover', 'focus'],
    backgroundColor: ['responsive', 'first', 'hover', 'focus', 'active'],
    fill: ['responsive', 'hover', 'focus'],
    display: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    animation: ['responsive', 'motion-safe', 'motion-reduce', 'hover', 'focus'],
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
    transformOrigin: ['hover', 'focus'],
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
