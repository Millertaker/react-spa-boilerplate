
//////////////////////////////////////////////////////////////////////////////////////////////
// Production gulp pipeline
//////////////////////////////////////////////////////////////////////////////////////////////


var gulp = require('gulp');
var shell = require('gulp-shell');
var rimraf = require('rimraf');
var run = require('run-sequence');

var webpackConfigDev = require('../webpack.config.js');

gulp.task('clean', function(cb){
  rimraf('./bundle/js', cb);
});

gulp.task('traspile-scripts', function() {
  shell.task([
    './node_modules/.bin/webpack --env.production'
  ])
});

gulp.task('production', function(cb){
  run('watch-fe', 'clean', 'less', 'traspile-scripts', 'bundle-docs', 'webserver', cb);
});

gulp.task('production', function(cb){
  run('clean', 'traspile-scripts', cb);
});