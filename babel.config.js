module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-react',
  ];
  const plugins = [];
  const ignore = ['node_modules', 'build'];

  return {
    presets,
    plugins,
    ignore,
  };
};
