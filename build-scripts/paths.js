const { pathResolve } = require('./helpers');

module.exports = {
  dist: pathResolve('lib/dist'),
  nodeModules: pathResolve('node_modules'),
  src: pathResolve('lib/src'),
  components: pathResolve('lib/src/components')
};
