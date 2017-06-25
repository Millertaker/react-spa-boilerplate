
//////////////////////////////////////////////////////////////////////////////////////////////
// Dev gulp pipeline
//////////////////////////////////////////////////////////////////////////////////////////////


var gulp = require('gulp');
var shell = require('gulp-shell');
var rimraf = require('rimraf');
var webserver = require('gulp-webserver');
var run = require('run-sequence');

var webpack = require('webpack-stream');
var webpackConfigDev = require('../webpack.config.dev.js');
var webpackConfigProd = require('../webpack.config.prod.js');

gulp.task('clean', function(cb){
  rimraf('./public/js', cb);
});

gulp.task('traspile-scripts', function() {
  return gulp.src('./src/**/*.js')
    .pipe(webpack(webpackConfigDev))
    .pipe(gulp.dest('./public/js'));
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