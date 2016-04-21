import func from './production';
import common from './common';

const config = func('dist-editor');
config.entry = { editor: common.entry.editor, fonts: common.entry.fonts };

export default config;
