const { pathResolve } = require('./helpers');

module.exports = {
  entry: pathResolve('lib/src/index'),
  lib: pathResolve('lib'),
  dist: pathResolve('lib/dist'),
  nodeModules: pathResolve('node_modules'),
  src: pathResolve('lib/src'),
  common: pathResolve('lib/src/common'),
  components: pathResolve('lib/src/components')
};
