import path from 'path';

import postcssBEM from 'postcss-bem';
import postcssNested from 'postcss-nested';
import postcssImport from 'postcss-import';

const root = path.join(process.cwd(), 'src');
const entry = path.join(process.cwd(), 'initializers/client');

export default {
  root,

  entry: {
    bundle: entry,
    vendor: [
      'classnames',
      'ramda',
      'react',
      'react-dom',
      'redux',
    ],
  },

  postcss: webpack => [
    postcssImport({ addDependencyTo: webpack, path: root }),
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
        test: /\.(js|jsx)$/,
        loader: 'babel',
        include: [root, entry],
      },
    ],
  },
};