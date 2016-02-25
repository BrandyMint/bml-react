import path from 'path';

import postcssBEM from 'postcss-bem';
import postcssNested from 'postcss-nested';
import postcssImport from 'postcss-import';
import postcssMixins from 'postcss-sassy-mixins';
import postcssSimpleVars from 'postcss-simple-vars';
import postcssCalc from 'postcss-calc';
import postcssSelectorNot from 'postcss-selector-not';

const root = path.join(process.cwd(), 'src');
const show = path.join(process.cwd(), 'initializers/show');
const viewer = path.join(process.cwd(), 'initializers/viewer');
const editor = path.join(process.cwd(), 'initializers/client');

export default {
  root,

  entry: {
    viewer,
    show,
    editor,
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
    postcssMixins,
    postcssSelectorNot,
  ],

  resolve: {
    root,
    extensions: ['', '.js', '.jsx'],
  },

  module: {
    preLoaders: [],
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
        test: /\.jsx?$/,
        loader: 'babel',
        include: [root, show, path.join(process.cwd(), 'node_modules/react-icons')],
      },
      {
        test: /\.gif$/,
        loader: 'url-loader?mimetype=image/png',
      },
      {
        test: /\.json/,
        loader: 'json-loader',
      },
    ],
  },
};
