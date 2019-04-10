import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
const terser = require('rollup-plugin-terser').terser

export default {
  input: 'index.js',
  output: {
    file: 'index.min.js',
    format: 'es'
  },
  plugins: [
    resolve(),
    // use own babel config to compile
    babel({
      exclude: 'node_modules/**',
      presets: [
        [
          'env',
          {
            modules: false
          }
        ],
        'stage-2'
      ],
      plugins: ['external-helpers'],
      babelrc: false
    }),
    terser()
  ]
}
