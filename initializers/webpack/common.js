import path from 'path';

import postcssBEM from 'postcss-bem';
import postcssNested from 'postcss-nested';
import postcssImport from 'postcss-import';
import postcssSimpleVars from 'postcss-simple-vars';
import postcssCalc from 'postcss-calc';

const root = path.join(process.cwd(), 'src');
const entry = path.join(process.cwd(), 'initializers/client');

export default {
  root,

  entry: {
    bundle: entry,
    vendor: [
      'classnames',
      'react',
      'react-dom',
      'redux',
    ],
  },

  postcss: webpack => [
    postcssImport({ addDependencyTo: webpack, path: root }),
    postcssSimpleVars,
    postcssCalc,
    postcssBEM,
    postcssNested,
  ],

  resolve: {
    root,
    extensions: ['', '.js', '.jsx'],
  },

  module: {
    loaders: [
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff&name=fonts/[name].[ext]',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=fonts/[name].[ext]',
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        include: [root, entry],
      },
    ],
  },
};