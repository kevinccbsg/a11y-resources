module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@stylistic/jsx', '@stylistic/ts'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@stylistic/jsx/jsx-indent': ['error', 2],
    '@stylistic/ts/quotes': ["error", "single"],
    '@stylistic/ts/semi': ["error", "always"],
    '@stylistic/ts/comma-spacing': ["error", { "before": false, "after": true }],
    '@stylistic/ts/key-spacing': ["error", { "beforeColon": false }],
    '@stylistic/ts/function-call-spacing': ["error", "never"],
    '@stylistic/ts/object-curly-spacing': ["error", "always"]
  },
}
