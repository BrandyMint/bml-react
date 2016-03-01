import merge from 'lodash/merge';
import path from 'path';
import webpack from 'webpack';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import done from './done';

import common from './common';

const resolve = merge(
  {
    alias: {
      'components/ui-elements/Redactor': 'viewer/stubs/Redactor.js',
      'superagent': 'viewer/stubs/superagent.js',
    }
  },
  common.resolve
);

export default {
  entry: { viewer: common.entry.viewer, },

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name]-prerender.js',
  },

  plugins: [
    new ProgressBarPlugin(),
    new webpack.NormalModuleReplacementPlugin(/\.(s?css|less)$/, 'node-noop'),
    new webpack.DefinePlugin({
      __CLIENT__: false,
      __SERVER__: true,
      __FAKE_API__: false,
      __ENV__: '"production"', // TODO https://github.com/zertosh/loose-envify
      'process.env.NODE_ENV': '"production"',
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: { comments: false },
      compress: { warnings: true, drop_debugger: true },
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    done,
  ],

  resolve: resolve,

  module: { loaders: common.loaders },
};
