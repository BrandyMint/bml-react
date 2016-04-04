import merge from 'lodash/merge';
import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import webpack from 'webpack';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import done from './done';

import StatsPlugin from 'stats-webpack-plugin';

import common from './common';

const VERSION = require('../package').version;

const resolve = merge(
  {
    // Специальные фейковые замены, чтобы во вьюхер не подтягивалась JS и CSS от редактора
    alias: {
      'views/elements/Editable/Editor': 'viewer/stubs/Editor.js',
      'react-medium-editor': 'viewer/stubs/Editor.js',
      'superagent': 'viewer/stubs/superagent.js',
    }
  },
  common.resolve
);

const BUILD_DIR = 'dist-prerender';

export default {
  devtool: 'source-map',
  entry: {
    viewer: common.entry.viewer,
  },

  output: {
    path: path.join(process.cwd(), BUILD_DIR),
    filename: '[name]-prerender.js',
  },

  plugins: [
    new ProgressBarPlugin(),
    new CleanWebpackPlugin(BUILD_DIR, { root: process.cwd() }),
    new webpack.NormalModuleReplacementPlugin(/\.(s?css|less)$/, 'node-noop'),
    new webpack.DefinePlugin({
      __VERSION__: `"${VERSION}"`,
      __CLIENT__: false,
      __SERVER__: true,
      __FAKE_API__: false,
      __ENV__: '"production"', // TODO https://github.com/zertosh/loose-envify
      'process.env.NODE_ENV': '"production"',
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new StatsPlugin('stats.json', {
      chunkModules: true,
      exclude: [/node_modules[\\\/]react/],
    }),
    done,
  ],

  resolve: resolve,

  module: { loaders: common.loaders },
};
