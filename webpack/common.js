import path from 'path';

import postcssBEM from 'postcss-bem';
import postcssNested from 'postcss-nested';
import postcssCustomMedia from 'postcss-custom-media';
import postcssCustomProperties from 'postcss-custom-properties';
import postcssImport from 'postcss-import';
import postcssMixins from 'postcss-sassy-mixins';
import postcssSimpleVars from 'postcss-simple-vars';
import postcssCalc from 'postcss-calc';
import postcssSelectorNot from 'postcss-selector-not';
import postcssReporter from 'postcss-reporter';
import stylelint from 'stylelint';
import autoprefixer from 'autoprefixer';

// https://github.com/aaronj1335/webpack-postcss-tools

const root = path.join(process.cwd(), 'src');
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
    postcssImport({ addDependencyTo: webpack, path: root }), // SUITE
    postcssSelectorNot,
    postcssSimpleVars,
    stylelint,
    postcssCalc, // SUITE
    postcssBEM,
    postcssNested,
    postcssMixins,
    postcssCustomProperties, // SUITE
    postcssCustomMedia, // SUITE
    autoprefixer, // SUITE
    postcssReporter({ clearMessages: true }),
  ],

  resolve: {
    root,
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
