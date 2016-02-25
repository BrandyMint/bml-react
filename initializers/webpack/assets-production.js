import path from 'path';

import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import common from './common';

export default {
  entry: common.entry,

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].js',
  },

  plugins: [
    new CleanWebpackPlugin('dist', { root: process.cwd() }),
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
  ],
};
