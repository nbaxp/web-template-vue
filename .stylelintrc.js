module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-html',
    'stylelint-config-recommended-vue',
    'stylelint-config-rational-order',
    'stylelint-config-prettier-scss',
    'stylelint-config-prettier',
  ],
  defaultSeverity: 'warning',
  plugins: ['stylelint-order'],
  rules: {
    'at-rule-no-unknown': null,
    'max-empty-lines': 1,
    'selector-class-pattern': [
      '^[a-z0-9-_]+$',
      {
        message: 'Expected class selector to be kebab-case',
      },
    ],
  },
};
