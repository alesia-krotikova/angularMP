var webpack = require("webpack"),
  path = require('path');

const ccpOptions = {
  name: 'vendor',
  filename: './dist/vendor.bundle.js'
};

function root(__path) {
  return path.join(__dirname, __path);
}

module.exports = {
  entry: {
    "vendor": "./app/vendor",
    "app": "./app/main"
  },
  output: {
    path: __dirname
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [
      path.resolve('./app'),
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'}
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(ccpOptions),

    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      root('./src'),
      { }
    ),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  ]
};
