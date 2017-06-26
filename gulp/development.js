
//////////////////////////////////////////////////////////////////////////////////////////////
// Dev gulp pipeline
//////////////////////////////////////////////////////////////////////////////////////////////


var gulp = require('gulp');
var shell = require('gulp-shell');
var rimraf = require('rimraf');
var webserver = require('gulp-webserver');
var run = require('run-sequence');

var webpackConfigDev = require('../webpack.config.js');

gulp.task('clean', function(cb){
  rimraf('./public/js', cb);
});

gulp.task('traspile-scripts', function() {
  shell.task([
    './node_modules/.bin/webpack --env.development'
  ])
});

gulp.task('watch-fe', function(){
  gulp.watch('./src/js/**/*.js', ['clean','traspile-scripts']);
});

gulp.task('development', function(cb){
  run('watch-fe', 'clean', 'less', 'traspile-scripts', 'bundle-docs', 'webserver', cb);
});

gulp.task('webserver', function() {
  gulp.src('./public/')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('development', function(cb){
  run('watch-fe', 'clean', 'traspile-scripts', 'webserver', cb);
});