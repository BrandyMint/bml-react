import path from 'path';

import postcssBEM from 'postcss-bem';
import postcssNested from 'postcss-nested';
import postcssImport from 'postcss-import';
import postcssMixins from 'postcss-sassy-mixins';
import postcssSimpleVars from 'postcss-simple-vars';
import postcssCalc from 'postcss-calc';
import postcssSelectorNot from 'postcss-selector-not';
import postcssReporter from 'postcss-reporter';
import stylelint from 'stylelint';

const root = path.join(process.cwd(), 'src');
const bower = path.join(process.cwd(), 'bower_components');
const viewer = path.join(process.cwd(), 'initializers/viewer');
const editor = path.join(process.cwd(), 'initializers/editor');

export default {
  root,

  entry: {
    viewer,
    editor,
    fonts: path.join(process.cwd(), 'src/stylesheets/fonts'),
    vendor: [
      'classnames',
      'react',
      'react-dom',
      'redux',
    ],
  },

  postcss: webpack => [
    stylelint,
    postcssImport({ addDependencyTo: webpack, path: root }),
    postcssSimpleVars,
    postcssCalc,
    postcssBEM,
    postcssNested,
    postcssMixins,
    postcssSelectorNot,
    postcssReporter({ clearMessages: true }),
  ],

  resolve: {
    root,
    bower,
    extensions: ['', '.js', '.jsx'],
  },

  loaders: [
    {
      test: /\.woff(2)?(\?.*)?$/,
      loader: 'url-loader?limit=10000&minetype=application/font-woff&name=fonts/[name].[ext]',
    },
    {
      test: /\.(ttf|eot|svg)(\?.*)?$/,
      loader: 'file-loader?name=fonts/[name].[ext]',
    },
    {
      test: /\.jsx?$/,
      loader: 'babel',
      include: [root, editor, viewer, path.join(process.cwd(), 'node_modules/react-icons')],
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
};
