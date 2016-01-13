import path from 'path';
import webpack from 'webpack';

import ExtractTextPlugin from 'extract-text-webpack-plugin';

import common from './common';
import config from '../config';

common.module.loaders.push({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract('style-loader', [
    'css-loader',
    'postcss-loader',
  ]),
  include: common.root,
});

export default {
  postcss: common.postcss,

  entry: common.entry,

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].js',
  },

  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
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