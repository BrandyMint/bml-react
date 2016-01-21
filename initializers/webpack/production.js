import path from 'path';
import webpack from 'webpack';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

import common from './common';
import config from '../config';

const extractTheme = new ExtractTextPlugin('stylesheets/[name].css');

common.module.loaders.push({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract('style', ['css', 'postcss']),
  include: common.root,
});

common.module.loaders.push({
  test: /\.s(a|c)ss$/,
  loader: ExtractTextPlugin.extract('style', ['css', 'sass']),
});

export default {
  postcss: common.postcss,

  entry: common.entry,

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].js',
  },

  plugins: [
    new CleanWebpackPlugin('dist', { root: process.cwd() }),
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __ENV__: '"production"',
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: { comments: false },
      compress: { warnings: false },
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
  ],

  resolve: common.resolve,

  module: common.module,
};