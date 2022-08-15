const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');

const paths = require('./paths');
const { getComponentsEntries } = require('./helpers');

const isDevelopment = process.env.NODE_ENV === 'development';

const componentEntries = getComponentsEntries();
const componentNames = Object.keys(componentEntries);

module.exports = () => merge(
  {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'inline-cheap-module-source-map' : undefined,
    performance: false,
    entry: {
      ...componentEntries
    },
    output: {
      libraryTarget: 'umd',
      library: '[name]',
      filename: '[name].js',
      path: paths.dist
    },
    externals: {
      handlebars: 'handlebars',
      'handlebars/runtime': 'handlebars/runtime'
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          common: {
            test: /[\\/]common[\\/]/,
            name: 'common',
            chunks: ({ name }) => componentNames.includes(name),
            enforce: true
          }
        }
      },
      concatenateModules: false,
      minimizer: [
        new TerserPlugin()
      ]
    },
    module: {
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
      ]
    },
    resolve: {
      alias: {
        src: paths.src
      }
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanStaleWebpackAssets: false,
        cleanOnceBeforeBuildPatterns: [
          '**/*',
          '!.gitkeep'
        ]
      })
    ]
  }
);
