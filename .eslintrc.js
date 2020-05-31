module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'prettier',
    'prettier/react',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        printWidth: 120,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
      },
    ],
    'max-len': [
      2,
      120,
      4,
      {
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreUrls: true,
      },
    ],
    'react/no-array-index-key': 0,
    'no-use-before-define': 0,
    'react/prop-types': 0,
    'no-param-reassign': 0,
    'no-unused-expressions': [
      'error',
      {
        allowTernary: true,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'no-restricted-syntax': ['error', "BinaryExpression[operator='of']"],
    'no-prototype-builtins': 0,
    'class-methods-use-this': 0,
    'no-underscore-dangle': 0,
    'import/no-cycle': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
  },
  plugins: ['prettier', 'react-hooks', '@typescript-eslint'],
};
