var config = require('./webpack.config'),
    webpack = require('webpack');

config.stats = 'errors-only';

module.exports = config;