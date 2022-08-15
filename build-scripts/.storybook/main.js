const paths = require('../paths');
const customConfig = require('../webpack.config.js')();

module.exports = {
  stories: [{
    titlePrefix: 'Web Components',
    directory: paths.components,
    files: '*/stories/*.story.js',
  }],
  framework: '@storybook/web-components',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  env: (config) => {
    return {
      ...config,
      NODE_ENV: process.env.NODE_ENV,
      GOAL: process.env.GOAL,
    };
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      entry: config.entry.filter((entry) => !entry.includes('webpack-hot-middleware')),
      performance: customConfig.performance,
      module: {
        ...config.module,
        rules: customConfig.module.rules,
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          ...customConfig.resolve.alias,
        },
      },
      plugins: config.plugins.filter((plugin) => plugin.constructor.name !== 'HotModuleReplacementPlugin'),
    };
  },
};
