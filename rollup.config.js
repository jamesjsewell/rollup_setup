// Rollup plugins
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';

export default {

    input: './index.js',
    output: {
        file: './compiled.js',
        format: 'iife',
        name: 'rollup_setup',
        sourcemap: true
    },
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        commonjs(),
        babel({
          exclude: 'node_modules/**',
        }),
        replace({
            exclude: 'node_modules/**',
            ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
        (process.env.NODE_ENV === 'production' && uglify())
      ],
      watch: {
        chokidar: { chokidar: true},
        // {
          // if the chokidar option is given, rollup-watch will
          // use it instead of fs.watch. You will need to install
          // chokidar separately.
          //
          // this options object is passed to chokidar. if you
          // don't have any options, just pass `chokidar: true`
        // },
    
        // include and exclude govern which files to watch. by
        // default, all dependencies will be watched
        exclude: ['node_modules/**']
      }
};