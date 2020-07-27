module.exports = {
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
    },
  },
  variants: {
    margin: ['responsive', 'first', 'hover', 'focus'],
    backgroundColor: ['responsive', 'first', 'hover', 'focus'],
  },
};
