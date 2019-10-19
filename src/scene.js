// Require all components (and all JS files!) with webpack require.context
require('aframe');
function requireAll (req) { req.keys().forEach(req); }
requireAll(require.context('./components/', true, /\.js$/));

require('aframe-particle-system-component');
require('./scene.html');
