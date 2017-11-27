var config = require('./webpack.config'),
    webpack = require('webpack');

config.output.filename = './dist/[name].bundle.js';
config.devtool = 'source-map';
config.plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));

module.exports = config;