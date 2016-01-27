// tells webpack that everything with .test
// is part of a test suite.
var context = require.context('./js/', true, /.+\.test\.js?$/);
context.keys().forEach(context);
