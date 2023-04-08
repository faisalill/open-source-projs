// rollup.config.js
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const extensions = ['.js', '.jsx'];

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.cjs',
    format: 'cjs',
    exports: 'named'
  },
  plugins: [
    peerDepsExternal(),
    resolve({ 
      extensions: ['.js', '.jsx'],
      module: true,
    }),
    babel({ extensions, babelHelpers: 'bundled' }),
    commonjs(),
    postcss({
      extract: true,
      plugins: [
        autoprefixer(),
        cssnano({
          preset: 'default',
        }),
      ],
    }),
    terser(),
  ],
  external: [
    'react',
    'react-dom',
  ],
};
