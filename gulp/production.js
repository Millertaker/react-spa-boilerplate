
//////////////////////////////////////////////////////////////////////////////////////////////
// Production gulp pipeline
//////////////////////////////////////////////////////////////////////////////////////////////


var gulp = require('gulp');
var exec = require('child_process').exec;
var rimraf = require('rimraf');
var run = require('run-sequence');

var uglifycss = require('gulp-uglifycss');
var less = require('gulp-less');
var concat = require('gulp-concat');

var webpackConfigDev = require('../webpack.config.js');

gulp.task('clean', function(cb){
  rimraf('./bundle/js', cb);
});

gulp.task('run-test', function() {
  exec('npm test', function(error, stdout, stderr) {
    if(!error){
      console.log(stdout);
    } else {
      console.log('|---------------- Error Running Test --------------------|');
      console.log(stdout);      

      console.log('|---------------- Stack Trace ---------------------------|');
      console.log(error);

      exec('open coverage/lcov-report/index.html');
    }
    
  });
});

gulp.task('traspile-pub-scripts', function() {
  exec('npm run transpile-pub');
});

gulp.task('clean-css', function(cb){
  rimraf('./public/css', cb);
});

gulp.task('build-less', function(){
  gulp.src('./less/**/*.less')
    .pipe(concat('main.css'))
    .pipe(less())
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('./public/css'))
});

gulp.task('production', function(cb){
  run('clean', 'clean-css', 'build-less', 'run-test','traspile-pub-scripts', cb);
});
