module.exports = (api) => {
  api.cache.never();

  const presetEnvOptions = {};
  const presets = [['@babel/preset-env', presetEnvOptions]];
  const plugins = [
    '@babel/plugin-transform-runtime'
  ];

  if (process.env.GOAL === 'storybook') {
    presetEnvOptions.corejs = '3.24.1';
    presetEnvOptions.useBuiltIns = 'usage';
  } else {
    presetEnvOptions.modules = false;
  }

  return {
    presets,
    plugins
  };
};
