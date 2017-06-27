
//////////////////////////////////////////////////////////////////////////////////////////////
// Dev gulp pipeline
//////////////////////////////////////////////////////////////////////////////////////////////


var gulp = require('gulp');
var exec = require('child_process').exec;
var rimraf = require('rimraf');
var webserver = require('gulp-webserver');
var run = require('run-sequence');

var webpackConfigDev = require('../webpack.config.js');

gulp.task('clean', function(cb){
  rimraf('./public/js', cb);
});

gulp.task('traspile-dev-scripts', function() {
  exec('npm run transpile-dev');
});

gulp.task('watch-fe', function(){
  gulp.watch('./src/**/*.js', ['clean','traspile-dev-scripts']);
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
  run('clean', 'watch-fe', 'traspile-dev-scripts', 'webserver', cb);
});