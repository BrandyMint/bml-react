var global = global || this;

var React = require('react');
var ReactDOMServer = require('react-dom/server');

require('./dist-prerender/viewer-prerender.js');

var blocks = require('./test_prerender/blocks.js');

console.log(
  ReactDOMServer.renderToString(React.createElement(Viewer, { blocks: blocks }))
);
