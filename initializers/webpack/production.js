import path from 'path';
import webpack from 'webpack';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import common from './common';

common.module.loaders.push({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract('style', ['css', 'postcss']),
  include: common.root,
});

common.module.loaders.push({
  test: /\.s(a|c)ss$/,
  loader: ExtractTextPlugin.extract('style', ['css', 'sass']),
});

common.module.loaders.push({
  test: /\.less$/,
  loader: ExtractTextPlugin.extract('style', ['css', 'less']),
});

export default {
  postcss: common.postcss,

  entry: common.entry,

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].js',
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __ENV__: '"production"', // TODO https://github.com/zertosh/loose-envify
      'process.env.NODE_ENV': '"production"',
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: { comments: false },
      compress: { warnings: true, drop_debugger: true },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
  ],

  resolve: common.resolve,

  module: common.module,
};
