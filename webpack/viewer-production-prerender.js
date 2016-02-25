import path from 'path';
import webpack from 'webpack';

import common from './common';

const resolve = assign({ alias: {
    'components/ui-elements/Redactor': 'public/Redactor.js',
      'superagent': 'public/superagent.js',
} }, common.resolve);

export default {
  target: 'node',

  entry: common.entry.viewer,

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name]-prerender.js',
  },

  plugins: [
    new webpack.NormalModuleReplacementPlugin(/\.(s?css|less)$/, 'node-noop'),
    new webpack.DefinePlugin({
      __CLIENT__: false,
      __SERVER__: true,
      __ENV__: '"production"', // TODO https://github.com/zertosh/loose-envify
      'process.env.NODE_ENV': '"production"',
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: { comments: false },
      compress: { warnings: true, drop_debugger: true },
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
  ],

  resolve: resolve,

  module: common.module,
};
