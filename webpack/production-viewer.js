import func from './production';
import common from './common';
import stubs from './stubs';

const config = func('dist-viewer');
config.entry = { viewer: common.entry.viewer };
config.resolve = { ...stubs, ...common.resolve };

export default config;
