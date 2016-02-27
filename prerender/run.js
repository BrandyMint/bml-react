const argv = require('optimist').argv;
const fs = require('fs');
const ejs = require('ejs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const DEFAULT_PROPS_FILENAME = './props';
const propsFilename = argv.p || DEFAULT_PROPS_FILENAME;
const DEFAULT_RESUT_FILENAME = './prerendered_result.component.html'
const resultFilename = argv.r || DEFAULT_RESUT_FILENAME;

console.log("Load props file:", propsFilename);
const props = require(propsFilename);

console.log("Prerender component to", resultFilename);

require('./dist/viewer-prerender.js');

const buffer = ReactDOMServer.renderToString(React.createElement(Viewer, props ));

fs.writeFileSync(resultFilename, buffer);

console.log("Done");
