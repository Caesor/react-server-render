import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import path from 'path'

import rimraf from 'rimraf'

const srcPath = './src/public';

let config = {
	entry: {
		'main': './src/client.jsx'
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		alias: {
			lib: path.resolve(__dirname + 'src/lib'),
			modules: path.resolve(srcPath + 'modules')
		}
	},
	output: {
		filename: 'js/[name].min.js',
		path: srcPath,
		publicPath: 'http://localhost:8008/',
		chunkFilename: 'js/[name].min.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
			{
				test: /\.scss/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader?outputStyle=expanded")
			},
			{
				test: /\.(png|jpg|gif|woff|woff2)$/,
				loader: 'url-loader?limit=8192&name=img/[name].[hash].[ext]'
			},
			{ 
				test: /\.(js|jsx)$/, 
				exclude: /node_modules/,
				loader: 'react-hot!babel-loader' 
			}
		]
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV' : JSON.stringify(process.env.NODE_ENV || 'devlopment')
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: "commons",
			filename: "js/commons.min.js"
		}),
		new ExtractTextPlugin('css/[name].min.css')
	]
}

// delete dist filefolder
rimraf.sync(srcPath);

export default config;