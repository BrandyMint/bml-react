import path from 'path';
import webpack from 'webpack';

import common from './common';
import config from '../config';

import CTagsWebpackPlugin from 'ctags-webpack-plugin';

common.module.loaders.push({
  test: /\.css$/,
  loaders: ['style', 'css', 'postcss'],
  include: common.root,
});

common.module.loaders.push({
  test: /\.s(a|c)ss$/,
  loaders: ['style', 'css', 'sass'],
});

export default {
  devtool: 'eval',

  postcss: common.postcss,

  entry: {
    vendor: common.entry.vendor,
    bundle: ['webpack-hot-middleware/client', common.entry.bundle],
  },

  output: {
    path: path.join(process.cwd(), 'tmp/webpack'),
    filename: '[name].js',
    chunkFilename: '[id]-[name].js',
    publicPath: `${config.ASSETS_PUBLIC_PATH}/`,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __ENV__: '"development"',
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new CTagsWebpackPlugin('tags'),
  ],

  resolve: common.resolve,

  module: common.module,
};
