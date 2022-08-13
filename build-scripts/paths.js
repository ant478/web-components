const { pathResolve } = require('./helpers');

module.exports = {
  output: pathResolve('build'),
  nodeModules: pathResolve('node_modules'),
  src: pathResolve('src'),
  components: pathResolve('src/components')
};
