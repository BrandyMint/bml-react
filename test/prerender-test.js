var global = global || this;
var self = self || this;
var window = window || this;
require('./test/react-server.js');
require('./dist/viewer-prerender.js');

var blocks = require('./test/blocks.js');

console.log(
  ReactDOMServer.renderToString(React.createElement(ShowWrapper, { blocks: blocks }))
);
