/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: '@antfu',
  rules: {
    // common
    'semi': ['warn', 'always'],
    '@typescript-eslint/semi': ['warn', 'always'],
    'curly': ['off', 'always'],

    // vue
    'vue/component-tags-order': ['error', {
      order: ['template', 'script', 'style'],
    }],

    // other
    'no-console': ['warn'],
  },
};
