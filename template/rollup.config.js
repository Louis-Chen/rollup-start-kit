import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'

import browsersync from 'rollup-plugin-browsersync'
import filesize from 'rollup-plugin-filesize'
import { uglify } from 'rollup-plugin-uglify'

export default {
    input: 'src/index.js',
    output: {
        file: 'public/bundle.js',
        format: 'umd',
        name:'reactApp',
        sourcemap: true,
    },
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        babel(),
        resolve(),
        commonjs({
            include: 'node_modules/**',
            namedExports: {
                'node_modules/react/index.js': [
                    'Component',
                    'PureComponent',
                    'Fragment',
                    'Children',
                    'createElement',
                    'createContext',
                    'forwardRef',
                    'useCallback',
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
        filesize(),
        browsersync({ server: 'public' }),
        uglify(),
    ],
}
