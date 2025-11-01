import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';

export default [
  {
    input: 'tabs/index.js',
    output: {
      dir: 'dist/tabs',
      format: 'iife',
      sourcemap: true,
    },
    plugins: [
      commonjs(),
      nodeResolve(),
      copy({
        targets: [
          {
            src: ['manifest.json', 'background.js', 'tabs', 'images'],
            dest: 'dist'
          }
        ]
      })
    ]
  },
  {
    input: 'scripts/extract-content.js',
    output: {
      dir: 'dist/scripts',
      format: 'es',
      sourcemap: true,
    },
    plugins: [
      commonjs(),
      nodeResolve(),
    ]
  }
];
