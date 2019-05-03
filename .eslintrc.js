module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: "eslint:recommended",
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error'
  },
};
