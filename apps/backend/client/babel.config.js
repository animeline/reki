module.exports = {
  extends: require.resolve('../babel.config.js'),
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './build',
          '@core': './build/core',
        },
      },
    ],
  ],
};
