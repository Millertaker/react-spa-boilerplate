//////////////////////////////////////////////////////////////////////////////////////////////
// Required files
//////////////////////////////////////////////////////////////////////////////////////////////

var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('test-frontend', shell.task([
    './node_modules/.bin/nyc ./node_modules/.bin/mocha --compilers js:babel-core/register --recursive --require ./test/mocks/setup.js ./test/**/*.test.js '
  ])
);