var config = require('./webpack.config');

config.devServer = {
    contentBase: './',
        port: 3000,
        inline: true,
        historyApiFallback: true,
        stats: 'errors-only',
        watchOptions: {
        aggregateTimeout: 300,
            poll: 500
    }
};

config.devtool = 'source-map';

module.exports = config;