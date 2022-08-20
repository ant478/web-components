import path from 'path';
import sass from 'node-sass';
import nodeResolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import postcssPresetEnv from 'postcss-preset-env';
import handlebars from 'rollup-plugin-handlebars';
import del from 'rollup-plugin-delete';

const paths = require('./paths');
const getComponentsWithPath = require('./helpers').getComponentsWithPath;

const isDevelopment = process.env.NODE_ENV === 'development';
const componentsWithPath = getComponentsWithPath();

export default {
  input: paths.entry,
  output: [{
    dir: path.resolve(paths.dist, 'esm'),
    sourcemap: true,
    format: 'esm',
    chunkFileNames: '[name].js',
    // eslint-disable-next-line consistent-return
    manualChunks: (id) => {
      const component = Object.keys(componentsWithPath).find((name) => {
        const componentPath = componentsWithPath[name];

        return id.startsWith(`${componentPath}\\`);
      });

      if (component) return `components/${component}`;
      if (id.includes('node_modules')) return 'vendors';
      if (id.startsWith(`${paths.common}\\`)) return 'common';
    }
  }, {
    file: path.resolve(paths.dist, 'umd', 'index.js'),
    sourcemap: true,
    name: 'WebComponents',
    format: 'umd'
  }],
  external: (id) => [
    /handlebars/i,
    /@babel\/runtime/i
  ].some((regExp) => regExp.test(id)),
  plugins: [
    del({ targets: paths.dist }),
    nodeResolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    alias({
      entries: [
        { find: 'src', replacement: paths.src }
      ]
    }),
    postcss({
      preprocessor: (content, id) => new Promise((resolve) => {
        const result = sass.renderSync({ file: id });
        resolve({ code: result.css.toString() });
      }),
      plugins: [
        postcssPresetEnv()
      ],
      sourceMap: isDevelopment,
      minimize: !isDevelopment,
      extract: false,
      extensions: ['.sass']
    }),
    handlebars(),
    babel({
      babelHelpers: 'runtime'
    }),
    !isDevelopment && terser()
  ]
};
