'use strict';

const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'main': './app/main.ts',
    'vendor': './app/vendor.ts'
  },

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
        test: /\.css$/,
        include: path.resolve(process.cwd(), 'app'),
        loaders: ['to-string-loader', 'css-loader']
      },
      {
        test: /\.css$/,
        exclude: path.resolve(process.cwd(), 'app'),
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)@angular/,
        path.join(process.cwd(), 'app')
    ),
    new CopyWebpackPlugin([
      {from: 'index.html'}
    ]),
    new ExtractTextPlugin('style.bundle.css')
  ],

  resolve: {
    modules: [
      'node_modules',
      path.resolve(process.cwd(), 'app')
    ],
    extensions: ['.ts', '.js']
  }
};