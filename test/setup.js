
import appModulePath from 'app-module-path';
import { jsdom } from 'jsdom';
import path from 'path';

appModulePath.addPath(path.join(process.cwd(), 'src'));

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;

global.__CLIENT__ = false;
global.__ENV__ = 'test';

import '../initializers/server/cssHook';
console.log(__dirname);
console.log(process.cwd());
