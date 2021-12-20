module.exports = {
  extends: [
    '@hitechline/eslint-config/web',
    require.resolve('../../.eslintrc.js'),
  ],
  globals: {
    JSX: true,
    React: true,
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
      },
    },
  ],
};
