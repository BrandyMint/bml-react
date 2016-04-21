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

export const root = path.join(process.cwd(), 'src');
const viewer = path.join(process.cwd(), 'initializers/viewer');
const editor = path.join(process.cwd(), 'initializers/editor');

export default {
  root,

  entry: {
    viewer,
    editor,
    fonts: path.join(process.cwd(), 'src/stylesheets/fonts'),
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

	// { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]' },
	// { test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]' },
	// { test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]' },
	// { test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]' },
	// { test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]' }

  loaders: [
    {
      test: /\.woff(2)?(\?.*)?$/,
      loader: 'file-loader?limit=10000&minetype=application/font-woff&name=fonts/[name].[ext]?[hash]',
    },
    {
      test: /\.(ttf|eot|svg)(\?.*)?$/,
      loader: 'file-loader?name=fonts/[name].[ext]?[hash]',
    },
    {
      test: /\.jsx?$/,
      loader: 'babel',
      include: [root, editor, viewer, path.join(process.cwd(), 'node_modules/react-icons')],
    },
    {
      test: /\.jpg/,
      loader: 'file-loader?limit=10000!img&properties=true&name=[path][name].[ext]?[hash]',
      include: [root],
    },
    {
      test: /\.gif$/,
      loader: 'file-loader?mimetype=image/png&name=[path][name].[ext]?[hash]',
      include: [root],
    },
    {
      test: /\.json/,
      loader: 'json-loader',
      include: [root],
    },
  ],
};
