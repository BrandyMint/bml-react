import webpack from 'webpack';
import noop from 'lodash/noop';

import webpackConfig from './editor-production';

webpack(webpackConfig, noop);
