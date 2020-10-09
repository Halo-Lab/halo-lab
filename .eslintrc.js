module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'babel-eslint',
  rules: {
    strict: 0,
    'no-console': 1,
  },
  plugins: ['cypress'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:cypress/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
