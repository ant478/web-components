const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const glob = require('glob');

const cwd = process.cwd();

function pathResolve(relativePath) {
  return path.resolve(cwd, relativePath);
}

function getComponentsWithPath() {
  const files = glob.sync(pathResolve('lib/src/components/*/index.js').replace(/\\/g, '/'));

  return files.reduce((entries, file) => {
    const [, componentPath, componentName] = /(.*?\/?([^/]+?)\/)index\.js$/.exec(file);

    entries[componentName] = pathResolve(componentPath);

    return entries;
  }, {});
}

module.exports = {
  pathResolve,
  getComponentsWithPath
};
