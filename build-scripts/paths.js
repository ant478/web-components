const { pathResolve } = require('./helpers');

module.exports = {
  entry: pathResolve('lib/src/index'),
  dist: pathResolve('lib/dist'),
  nodeModules: pathResolve('node_modules'),
  src: pathResolve('lib/src')
};
