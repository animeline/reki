const { resolve } = require('path');

module.exports = {
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: resolve(__dirname, 'tsconfig.json'),
      },
    },
  },
};
