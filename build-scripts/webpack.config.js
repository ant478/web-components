const webpackBaseConfig = require('./webpack.base.config');

const paths = require('./paths');

module.exports = () => [
  webpackBaseConfig({
    output: {
      filename: '[name].esm.js',
      path: paths.dist,
      library: {
        type: 'module'
      },
      environment: {
        module: true
      }
    },
    experiments: {
      outputModule: true
    },
  }),
  webpackBaseConfig({
    output: {
      filename: '[name].umd.js',
      path: paths.dist,
      library: {
        name: 'WebComponents',
        type: 'umd',
      },
      globalObject: 'this',
      umdNamedDefine: true,
    },
  }),
];
