module.exports = {
  extends: [
    "halo-lab"
  ],
  parser: 'babel-eslint',
  plugins: ['cypress'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
