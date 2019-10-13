module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'prettier'
  ],
  rules: {
    // '@typescript-eslint/indent': 'off',
    // 'prettier/prettier': 'error',
    // 'no-console': 'off'
  }
}
