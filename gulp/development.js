
//////////////////////////////////////////////////////////////////////////////////////////////
// Dev gulp pipeline
//////////////////////////////////////////////////////////////////////////////////////////////


var gulp = require('gulp');
var exec = require('child_process').exec;
var rimraf = require('rimraf');
var webserver = require('gulp-webserver');
var run = require('run-sequence');

var uglifycss = require('gulp-uglifycss');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');

var webpackConfigDev = require('../webpack.config.js');

gulp.task('clean', function(cb){
  rimraf('./public/js', cb);
});

gulp.task('clean-css', function(cb){
  rimraf('./public/css', cb);
});

gulp.task('traspile-dev-scripts', function() {
  exec('npm run transpile-dev');
});

gulp.task('watch-fe', function(){
  gulp.watch('./src/**/*.js', ['clean','traspile-dev-scripts']);
});

gulp.task('less', function(){
  gulp.src('./less/**/*.less')
    .pipe(plumber())
    .pipe(concat('main.css'))
    .pipe(less())
    .pipe(gulp.dest('./public/css'))
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
  run('clean', 'clean-css', 'less', 'watch-fe', 'traspile-dev-scripts', 'webserver', cb);
});