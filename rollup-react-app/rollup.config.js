import resolve from 'rollup-plugin-node-resolve'
import globals from 'rollup-plugin-node-globals'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import livereload from 'rollup-plugin-livereload'
import react from 'react'
import reactDom from 'react-dom'

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH

const babelConfig = {
	babelrc: false,
	presets: ['@babel/env', '@babel/preset-react'],
	exclude: 'node_modules/**',
	extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
}
export default {
	input: 'src/index.js',
	output: {
		file: 'public/bundle.js',
		format: 'umd',
		sourcemap: true
	},
	plugins: [
		postcss({
			plugins: [],
			minimize: true,
			sourceMap: 'inline'
		}),
		resolve(),
		babel(babelConfig),
		commonjs({
			include: 'node_modules/**',
			namedExports: {
				react: Object.keys(react),
				'react-dom': Object.keys(reactDom)
			}
		}),
		globals(),
		livereload(),
		production && terser()
	]
}
