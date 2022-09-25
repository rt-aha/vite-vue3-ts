/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier', "plugin:@typescript-eslint/eslint-recommended",
  "plugin:@typescript-eslint/recommended"],
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': 0,
    'no-param-reassign': 0,
    'import/prefer-default-export': 0,
    'object-curly-newline': 0,
    'operator-linebreak': 0,
  },
};
