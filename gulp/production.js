
//////////////////////////////////////////////////////////////////////////////////////////////
// Production gulp pipeline
//////////////////////////////////////////////////////////////////////////////////////////////


var gulp = require('gulp');
var exec = require('child_process').exec;
var rimraf = require('rimraf');
var run = require('run-sequence');

var webpackConfigDev = require('../webpack.config.js');

gulp.task('clean', function(cb){
  rimraf('./bundle/js', cb);
});

gulp.task('traspile-pub-scripts', function() {
  exec('npm run transpile-pub');
});

gulp.task('production', function(cb){
  run('clean', 'traspile-pub-scripts', cb);
});
