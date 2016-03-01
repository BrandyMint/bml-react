import path from 'path';
import webpack from 'webpack';

import concat from 'lodash/concat';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import ProgressBarPlugin from 'progress-bar-webpack-plugin';

import common from './common';
import done from './done';

const loaders = concat(
  common.loaders,
  [
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', ['css', 'postcss']),
      include: common.root,
    },

    {
      test: /\.s(a|c)ss$/,
      loader: ExtractTextPlugin.extract('style', ['css', 'sass']),
    },

    {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style', ['css', 'less']),
    },
  ]
)

export default {
  postcss: common.postcss,

  entry: common.entry,

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].js',
  },

  plugins: [
    new ProgressBarPlugin(),
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __FAKE_API__: false,
      __ENV__: '"production"', // TODO https://github.com/zertosh/loose-envify
      'process.env.NODE_ENV': '"production"',
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: { comments: false },
      compress: { warnings: true, drop_debugger: true },
    }),
    done,
  ],

  resolve: common.resolve,

  module: { loaders: loaders }
};
