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
var shell = require('gulp-shell');
var plumber = require('gulp-plumber');

var twmn_notifications = true;

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

var jade_src = 'assets/jade/**/*.jade';
var jade_src_excluded = exclude('assets/jade/**/*.jade')
var jade_dest = 'public/';
gulp.task('jade', function(){
  gulp.src(jade_src_excluded)
    .pipe(plumber({
        errorHandler: function(event) {
            util.log(event);
            if(twmn_notifications) gulp.start('jade_error_notify');
        }
    }))
    .pipe(jade())
    .pipe(gulp.dest(jade_dest));
});
gulp.task('jade_error_notify', shell.task([
    'twmnc -c ">>>>>>>>>>>> Jade  Error <<<<<<<<<<<<" -d 3000 --fs 25 --fg pink -s 40'
]));

var css_src = [
  'bower_components/PACE/themes/blue/pace-theme-center-radar.css',
  'bower_components/animate.css/animate.min.css',
  'public/css/main.css'
];
var css_dest = 'public/css/';
gulp.task('css', function(){
  gulp.src(css_src)
    .pipe(plumber({
        errorHandler: function(event) {
            util.log(event);
            if(twmn_notifications) gulp.start('css_error_notify');
        }
    }))
    .pipe(concat('all.css'))
    .pipe(uglifycss())
    .pipe(gulp.dest(css_dest));
});
gulp.task('css_error_notify', shell.task([
    'twmnc -c ">>>>>>>>>>>> CSS  Error <<<<<<<<<<<<" -d 3000 --fs 25 --fg pink -s 40'
]));

var js_src = [
  'bower_components/jquery/dist/jquery.min.js',
  'bower_components/flexibility/flexibility.js',
  'bower_components/jquery-scrollspy/jquery-scrollspy.js',
  'bower_components/parallax.js/parallax.min.js',
  'bower_components/pushy/js/pushy.min.js',
  'bower_components/slick-carousel/slick/slick.min.js',
  'bower_components/progressbar.js/dist/progressbar.min.js',
  'bower_components/system.js/dist/system.js',
  'bower_components/letteringjs/jquery.lettering.js',
  'bower_components/textillate/jquery.textillate.js'
];
var js_dest = 'public/js/';
gulp.task('js', function(){
  gulp.src(js_src)
    .pipe(plumber({
        errorHandler: function(event) {
            util.log(event);
            if(twmn_notifications) gulp.start('js_error_notify');
        }
    }))
    .pipe(concat('lib.js'))
    .pipe(uglify())
    .pipe(gulp.dest(js_dest));
});
gulp.task('js_error_notify', shell.task([
    'twmnc -c ">>>>>>>>>>>> JS Error <<<<<<<<<<<<" -d 3000 --fs 25 --fg pink -s 40'
]));

var sass_src = exclude([
  'assets/sass/**/*.sass'
]);
var sass_dest = 'public/css/';
gulp.task('sass', function(){
  gulp.src(sass_src)
    .pipe(plumber({
        errorHandler: function(event) {
            util.log(event);
            if(twmn_notifications) gulp.start('sass_error_notify');
        }
    }))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('map/'))
    .pipe(uglifycss())
    .pipe(gulp.dest(sass_dest));
});
gulp.task('sass_error_notify', shell.task([
    'twmnc -c ">>>>>>>>>>>> SASS Error <<<<<<<<<<<<" -d 3000 --fs 25 --fg pink -s 40'
]));

var ts_src = exclude('assets/ts/**/*.ts');
var ts_dest = 'public/js/';
var tsProject = ts.createProject('assets/ts/tsconfig.json');
gulp.task('ts', function(){
  var tsResult = tsProject.src(ts_src)
    .pipe(plumber({
        errorHandler: function(event) {
            util.log(event);
            if(twmn_notifications) gulp.start('ts_error_notify');
        }
    }))
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject));

  return tsResult.js
    .pipe(sourcemaps.write('map/'))
    .pipe(gulp.dest(ts_dest));
});
gulp.task('ts_error_notify', shell.task([
    'twmnc -c ">>>>>>>>>>>> TS Error <<<<<<<<<<<<" -d 3000 --fs 25 --fg pink -s 40'
]));

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
