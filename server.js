
var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config');
//config.entry.main.unshift("webpack-dev-server/client?http://0.0.0.0:8088/");

var WebpackDevServer = require('webpack-dev-server');

var server = new WebpackDevServer(webpack(config), {
	hot: true,
    inline: true,
 	headers: {
        "Access-Control-Allow-Origin": "*",
    },
    host: "0.0.0.0",
    port: "8088",
    compress: true
});
server.listen(8088, function() {
	console.log('正常打开8088端口')
});
