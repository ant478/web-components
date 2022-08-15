const { pathResolve } = require('./helpers');

module.exports = {
  dist: pathResolve('dist'),
  nodeModules: pathResolve('node_modules'),
  src: pathResolve('src'),
  components: pathResolve('src/components')
};
