module.exports = (api) => {
  api.cache.never();

  const presetEnvOptions = {};
  const presets = [['@babel/preset-env', presetEnvOptions]];
  const plugins = [];

  if (process.env.GOAL === 'storybook') {
    presetEnvOptions.corejs = '3.24.1';
    presetEnvOptions.useBuiltIns = 'usage';
    presetEnvOptions.modules = false;

    plugins.push('@babel/plugin-transform-runtime');
  }

  return {
    presets,
    plugins
  };
};
