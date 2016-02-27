var global = global || this;
var self = self || this;
var window = window || this;
require('./test_prerender/react-server.js');
require('./dist/viewer-prerender.js');

var blocks = require('./test_prerender/blocks.js');

console.log(
  ReactDOMServer.renderToString(React.createElement(Viewer, { blocks: blocks }))
);

console.log(
  ReactDOMServer.renderToStaticMarkup(React.createElement(Viewer, { blocks: blocks }))
);
