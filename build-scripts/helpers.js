const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const glob = require('glob');

const cwd = process.cwd();

function pathResolve(relativePath) {
  return path.resolve(cwd, relativePath);
}

function getComponentsEntries() {
  const files = glob.sync(pathResolve('lib/src/components/*/index.js').replace(/\\/g, '/'));

  return files.reduce((entries, file) => {
    const name = /.*?\/?([^/]+?)\/index\.js$/.exec(file)[1];

    if (name in entries) {
      throw new Error('helpers.js: component names should be unique');
    }

    entries[name] = {
      import: file,
      runtime: false
    };

    return entries;
  }, {});
}

module.exports = {
  pathResolve,
  getComponentsEntries
};
