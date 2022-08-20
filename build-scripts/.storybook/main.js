const paths = require('../paths');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
    const plugins = config.plugins.filter((plugin) => plugin.constructor.name !== 'HotModuleReplacementPlugin');
    plugins.push(
      new CleanWebpackPlugin({
        cleanStaleWebpackAssets: false,
        cleanOnceBeforeBuildPatterns: [
          '**/*',
          '!.gitkeep'
        ]
      })
    );

    return {
      ...config,
      entry: config.entry.filter((entry) => !entry.includes('webpack-hot-middleware')),
      performance: false,
      module: {
        ...config.module,
        rules: [
          {
            test: /\.js$/,
            exclude: [paths.nodeModules],
            use: 'babel-loader'
          },
          {
            test: /\.s?css$/,
            use: [
              'to-string-loader',
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: ['postcss-preset-env']
                  }
                }
              },
              'sass-loader'
            ]
          },
          {
            test: /\.hbs/,
            use: [
              {
                loader: 'handlebars-loader',
                options: {
                  runtime: 'handlebars/runtime'
                }
              }
            ]
          }
        ],
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          src: paths.src,
        },
      },
      plugins,
    };
  },
};
