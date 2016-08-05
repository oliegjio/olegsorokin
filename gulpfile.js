var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var util = require('gulp-util');
var jade = require('gulp-jade-php');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

var excluded = [
  'node_modules',
  'vendor',
  'bower_components'
];
var exclude = function(path){
  if(typeof path == 'object'){
    excluded.forEach(function(element, index){
      path.push('!' + element + '/**/*');
    });
    return path;
  }
  if(typeof path == 'string'){
    var newPath = new Array();
    newPath.push(path);
    excluded.forEach(function(element, index){
      newPath.push('!' + element + '/**/*');
    });
    return newPath;
  }
}

var jade_src = 'assets/jade/**/*.jade';
var jade_dest = 'html/';
gulp.task('jade', function(){
  gulp.src(jade_src)
    .pipe(jade())
    .on('error', util.log)
    .pipe(gulp.dest(jade_dest));
});

var sass_src = exclude([
  'assets/sass/**/*.sass'
]);
var sass_dest = 'css/';
gulp.task('sass', function(){
  gulp.src(sass_src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('map/'))
    .on('error', util.log)
    .pipe(gulp.dest(sass_dest));
});

var tsProject = ts.createProject('assets/ts/tsconfig.json');
var ts_src = 'assets/ts/**/*.ts';
var ts_dest = 'js/';
gulp.task('ts', function(){
  var tsResult = tsProject.src(ts_src)
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject))
    .on('error', util.log);

  return tsResult.js
    .pipe(sourcemaps.write('map/'))
    .pipe(gulp.dest(ts_dest));
});

gulp.task('watch', function(){
  gulp.watch(sass_src, ['sass']);
  gulp.watch(ts_src, ['ts']);
  gulp.watch(jade_src, ['jade']);
});

var tasks = [
  'sass',
  'ts',
  'jade',
  'watch'
];
gulp.task('default', tasks);
