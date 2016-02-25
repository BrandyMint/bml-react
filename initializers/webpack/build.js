import webpack from 'webpack';
import noop from 'lodash/noop';

import assetsProduction from './assets-production';
import editorProduction from './editor-production';

webpack([assetsProduction, editorProduction], noop);
