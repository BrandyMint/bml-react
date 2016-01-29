import webpack from 'webpack';
import noop from 'lodash/noop';

import webpackConfig from './production';

webpack(webpackConfig, noop);
