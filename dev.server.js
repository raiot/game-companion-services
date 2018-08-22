var webServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.config');
var path = require('path');

var compile = webpack(config);
var server = new webServer(compile, {
    hot: true,
    filename: config.output.filename,
    publicPath: config.publicPath,
    stats: {
        colors: true
    }
});

server.listen(3080, () => {});

