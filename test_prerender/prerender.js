var global = global || this;
var self = self || this;
var window = window || this;

var React = require('react');
var ReactDOMServer = require('react-dom/server');

// Тоже самое что и верхние две строчки, только react-server копия из react-rails
// require('./test_prerender/react-server.js');

require('./dist/viewer-prerender.js');

var blocks = require('./test_prerender/blocks.js');

console.log(
  ReactDOMServer.renderToString(React.createElement(Viewer, { blocks: blocks }))
);
