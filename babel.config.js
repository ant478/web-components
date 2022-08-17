module.exports = (api) => {
  api.cache.never();

  const presetEnvOptions = {
    modules: false,
  };
  const presets = [['@babel/preset-env', presetEnvOptions]];
  const plugins = ['@babel/plugin-proposal-export-default-from'];

  if (process.env.GOAL === 'storybook') {
    presetEnvOptions.corejs = '3.24.1';
    presetEnvOptions.useBuiltIns = 'usage';

    plugins.push('@babel/plugin-transform-runtime');
  }

  return {
    presets,
    plugins
  };
};
