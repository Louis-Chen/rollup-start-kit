import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'

import filesize from 'rollup-plugin-filesize'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
import { uglify } from 'rollup-plugin-uglify'
import { terser } from 'rollup-plugin-terser'

import postcss from 'rollup-plugin-postcss'
import atImport from 'postcss-import'
import postcssPresetEnv from 'postcss-preset-env'

export default {
    input: 'src/index.js',
    output: {
        file: 'public/bundle.js',
        format: 'umd',
        sourcemap: false,
    },
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        babel(),
        resolve(),
        postcss({
            extract: true,
            plugins: [
                atImport({}),
                postcssPresetEnv({
                    stage: 3,
                    features: {
                        'nesting-rules': true,
                    },
                }),
            ],
            minimize: true,
            sourceMap: 'inline',
        }),
        commonjs({
            include: 'node_modules/**',
            namedExports: {
                'node_modules/react/index.js': [
                    'Component',
                    'PureComponent',
                    'Fragment',
                    'Children',
                    'createElement',
                    'useContext',
                    'useEffect',
                    'useLayoutEffect',
                    'useMemo',
                    'useReducer',
                    'useRef',
                    'useState',
                ],
                'node_modules/react-dom/index.js': ['unstable_batchedUpdates'],
                'node_modules/react-is/index.js': [
                    'isContextConsumer',
                    'isValidElementType',
                ],
            },
        }),
        serve({
            contentBase: ['public'],
            host: 'localhost',
            port: 3000,
            open: true,
        }),
        filesize(),
        livereload(),
        uglify(),
        terser(),
    ],
}
