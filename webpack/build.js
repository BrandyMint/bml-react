import webpack from 'webpack';
import noop from 'lodash/noop';

import assetsProduction from './assets-production';
import editorProduction from './editor-production';
import viewerProductionPrerender from './viewer-production-prerender';

webpack([assetsProduction, editorProduction, viewerProductionPrerender], noop);
