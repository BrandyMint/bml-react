import path from 'path';
import webpack from 'webpack';
import concat from 'lodash/concat';

import common from './common';
import config from '/initializers/config';

const loaders = concat(
  common.loaders,
  [
    {
      test: /\.css$/,
      loaders: ['style', 'css', 'postcss'],
      include: common.root,
    },
    {
      test: /\.s(a|c)ss$/,
      loaders: ['style', 'css', 'sass'],
    },
    {
      test: /\.less$/,
      loaders: ['style', 'css', 'less'],
    },
  ]
)

export default {
  devtool: 'eval',

  postcss: common.postcss,

  entry: {
    vendor: common.entry.vendor,
    editor: ['webpack-hot-middleware/client', common.entry.editor],
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
  ],

  resolve: common.resolve,

  module: { loaders: loaders },
};
