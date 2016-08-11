var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var util = require('gulp-util');
var jade = require('gulp-jade-php');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var concat = require('gulp-concat');

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
var jade_dest = 'templates/';
gulp.task('jade', function(){
  gulp.src(jade_src)
    .on('error', util.log)
    .pipe(jade())
    .pipe(gulp.dest(jade_dest));
});

var css_src = [
  'bower_components/PACE/themes/blue/pace-theme-center-radar.css',
  'css/main.css'
];
var css_dest = 'css/';
gulp.task('css', function(){
  gulp.src(css_src)
    .on('error', util.log)
    .pipe(concat('all.css'))
    .pipe(uglifycss())
    .pipe(gulp.dest(css_dest));
});

var js_src = [
  'bower_components/jquery/dist/jquery.min.js',
  'bower_components/flexibility/flexibility.js',
  'bower_components/jquery-scrollspy/jquery-scrollspy.js',
  'bower_components/parallax.js/parallax.min.js',
  'bower_components/pushy/js/pushy.min.js',
  'bower_components/slick-carousel/slick/slick.min.js',
  'bower_components/system.js/dist/system.js'
];
var js_dest = 'js/';
gulp.task('js', function(){
  gulp.src(js_src)
    .on('error', util.log)
    .pipe(concat('lib.js'))
    .pipe(uglify())
    .pipe(gulp.dest(js_dest));
});

var sass_src = exclude([
  'assets/sass/**/*.sass'
]);
var sass_dest = 'css/';
gulp.task('sass', function(){
  gulp.src(sass_src)
    .on('error', util.log)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('map/'))
    .pipe(uglifycss())
    .pipe(gulp.dest(sass_dest));
});

var tsProject = ts.createProject('assets/ts/tsconfig.json');
var ts_src = 'assets/ts/**/*.ts';
var ts_dest = 'js/';
gulp.task('ts', function(){
  var tsResult = tsProject.src(ts_src)
    .on('error', util.log)
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject));

  return tsResult.js
    .pipe(sourcemaps.write('map/'))
    // .pipe(uglify())
    .pipe(gulp.dest(ts_dest));
});

gulp.task('watch', function(){
  gulp.watch(sass_src, ['sass']);
  gulp.watch(css_src, ['css'])
  gulp.watch(ts_src, ['ts']);
  gulp.watch(jade_src, ['jade']);
});

var tasks = [
  'sass',
  'css',
  'ts',
  'jade',
  'watch'
];
gulp.task('default', tasks);
