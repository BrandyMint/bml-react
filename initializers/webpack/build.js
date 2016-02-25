import webpack from 'webpack';
import noop from 'lodash/noop';

import assets from './assets';
import production from './production';
import prerender from './prerender';

// webpack([assets, production, prerender], noop);
webpack([assets, production], noop);
