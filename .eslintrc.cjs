/* eslint-env node */

module.exports = {
  extends: '@antfu',
  rules: {
    // common
    'semi': ['warn', 'always'],
    '@typescript-eslint/semi': ['warn', 'always'],
    'curly': ['warn', 'all'],

    // vue
    'vue/component-tags-order': ['error', {
      order: ['template', 'script', 'style'],
    }],

    // other
    'no-console': ['warn'],
  },
};
