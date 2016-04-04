import path from 'path';
import webpack from 'webpack';
import concat from 'lodash/concat';

import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import StatsPlugin from 'stats-webpack-plugin';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';

import common from './common';
import done from './done';

const VERSION = require('../package').version;

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

const BUILD_DIR = 'dist';

export default {
  devtool: 'source-map',
  postcss: common.postcss,

  entry: common.entry,

  output: {
    path: path.join(process.cwd(), BUILD_DIR),
    filename: '[name].js',
  },

  plugins: [
    new ProgressBarPlugin(),
    new CleanWebpackPlugin(BUILD_DIR, { root: process.cwd() }),
    new CopyWebpackPlugin([
      {
        from: path.join(process.cwd(), 'public'),
        to: '.',
      },
    ]),
    new CopyWebpackPlugin([
      {
        from: path.join(process.cwd(), 'src/assets/images'),
        to: 'images',
      },
    ]),
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      __VERSION__: `"${VERSION}"`,
      __CLIENT__: true,
      __SERVER__: false,
      __FAKE_API__: false,
      __ENV__: '"production"', // TODO https://github.com/zertosh/loose-envify
      'process.env.NODE_ENV': '"production"',
    }),
    //new webpack.optimize.CommonsChunkPlugin({
      //minChunks: 2,
      //name: 'common',
      //chunks: ['editor', 'viewer'],
    //}),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: { comments: false },
      minimize: true,
      compress: { warnings: false, drop_debugger: true },
    }),
    new StatsPlugin('stats.json', {
      chunkModules: true,
      exclude: [/node_modules[\\\/]react/],
    }),
    done,
  ],

  resolve: common.resolve,

  module: { loaders: loaders }
};
