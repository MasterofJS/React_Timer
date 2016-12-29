var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./webpack.config');
var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
    noInfo: false,
    publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.listen(process.env.PORT || 3000, function() {
    console.log('Server listening');
});
