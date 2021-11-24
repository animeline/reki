module.exports = {
  root: true,
  extends: ['@hitechline', '@hitechline/eslint-config/typescript'],
  rules: {
    'react/require-default-props': 'off',

    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
        'groups': [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
    {
      files: '**/tailwind.config.js',
      rules: {
        'global-require': 'off',
      },
    },
  ],
};