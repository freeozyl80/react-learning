
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: [
			"webpack-dev-server/client?http://0.0.0.0:8088/",
			'webpack/hot/dev-server',
			path.resolve(__dirname, './src/main.jsx')
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash].js'
	},
	module: {
		loaders: [
			{
                test: [/\.js$/, /\.jsx$/],
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/,
                include: path.resolve(__dirname, './src')
	        },
	        {
				test: /\.js$/,
	            exclude: /^node_modules$/,
	            loader: 'babel',
	            include: path.resolve(__dirname, './src')
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({  
            filename: './index.html',
            template: './src/index.html',
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin()
	]
}