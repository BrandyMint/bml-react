import path from 'path';
import webpack from 'webpack';
import concat from 'lodash/concat';

// import WebpackErrorNotificationPlugin from 'webpack-error-notification';
// import WebpackBuildNotifierPlugin from 'webpack-build-notifier';
// import WebpackNotifierPlugin from 'webpack-notifier';

import common from './common';
import config from '/initializers/config';

const VERSION = process.env.npm_package_version;
// const VERSION = require('../package').version;

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
  devtool: 'eval-source-map',

  postcss: common.postcss,

  entry: {
    fonts: common.entry.fonts,
    viewer: path.join(process.cwd(), 'src/stylesheets/viewer.scss'),
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
      __VERSION__: `"${VERSION}"`,
      __CLIENT__: true,
      __SERVER__: false,
      __FAKE_API__: false,
      __ENV__: '"development"',
    }),
    // new WebpackNotifierPlugin({alwaysNotify: true}),
    // new WebpackErrorNotificationPlugin(),
    // new WebpackBuildNotifierPlugin(),
  ],

  resolve: common.resolve,

  module: {
    loaders: loaders,
  },
};
