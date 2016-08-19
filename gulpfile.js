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
  'node_modules/**/*',
  'vendor/**/*',
  'bower_components/**/*',
  '**/_*.jade'
];
var exclude = function(path){
  if(typeof path == 'object'){
    excluded.forEach(function(element, index){
      path.push('!' + element + '/**/*');
    });
    return path;
  }
  if(typeof path == 'string'){
    var newPath = [];
    newPath.push(path);
    excluded.forEach(function(element, index){
      newPath.push('!' + element);
    });
    return newPath;
  }
}

var jade_src = exclude('assets/jade/**/*.jade');
var jade_dest = 'public/';
gulp.task('jade', function(){
  gulp.src(jade_src)
    .pipe(jade())
    .on('error', util.log)
    .pipe(gulp.dest(jade_dest));
});

var css_src = [
  'bower_components/PACE/themes/blue/pace-theme-center-radar.css',
  'bower_components/animate.css/animate.min.css',
  'public/css/main.css'
];
var css_dest = 'public/css/';
gulp.task('css', function(){
  gulp.src(css_src)
    .pipe(concat('all.css'))
    .pipe(uglifycss())
    .on('error', util.log)
    .pipe(gulp.dest(css_dest));
});

var js_src = [
  'public/bower_components/jquery/dist/jquery.min.js',
  'public/bower_components/flexibility/flexibility.js',
  'public/bower_components/jquery-scrollspy/jquery-scrollspy.js',
  'public/bower_components/parallax.js/parallax.min.js',
  'public/bower_components/pushy/js/pushy.min.js',
  'public/bower_components/slick-carousel/slick/slick.min.js',
  'public/bower_components/progressbar.js/dist/progressbar.min.js',
  'public/bower_components/system.js/dist/system.js',
  'public/bower_components/letteringjs/jquery.lettering.js',
  'public/bower_components/textillate/jquery.textillate.js'
];
var js_dest = 'public/js/';
gulp.task('js', function(){
  gulp.src(js_src)
    .pipe(concat('lib.js'))
    .on('error', util.log)
    .pipe(uglify())
    .pipe(gulp.dest(js_dest));
});

var sass_src = exclude([
  'assets/sass/**/*.sass'
]);
var sass_dest = 'public/css/';
gulp.task('sass', function(){
  gulp.src(sass_src)
    .on('error', util.log)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('map/'))
    .pipe(uglifycss())
    .pipe(gulp.dest(sass_dest));
});

var ts_src = exclude('assets/ts/**/*.ts');
var ts_dest = 'public/js/';
var tsProject = ts.createProject('assets/ts/tsconfig.json');
gulp.task('ts', function(){
  var tsResult = tsProject.src(ts_src)
    .on('error', util.log)
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject));

  return tsResult.js
    .pipe(sourcemaps.write('map/'))
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
