// require all modules ending in "*.test.js" from the
// current directory and all subdirectories
var context = require.context(".", true, /\.test\.js$/);
context.keys().forEach(context);