import func from './production';
import common from './common';

const config = func('dist-editor');
config.entry = common.entry;

export default config;
