var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var coffee = require('gulp-coffee');
var util = require('gulp-util');

var sass_src = [
  './*.sass',
  './style/**/*.sass'
];
var sass_dest = './';

var js_src = [
  './script/parallax.js',
  './script/scrollspy.js',
  './script/main.js'
];
var js_dest = './script/';

var img_src = './img/src/*.{png,jpg,gif}';
var img_dest = './img/';

var coffee_src = './script/**/*.coffee';
var coffee_dest = '.';

var tasks = [
  'sass',
  'coffee',
  'js',
  'img',
  'watch'
];

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

gulp.task('sass', function(){
  gulp.src(exclude(sass_src), {base: './'})
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .on('error', util.log)
    .pipe(gulp.dest(sass_dest));
});

gulp.task('coffee', function(){
  gulp.src(exclude(coffee_src), {base: './'})
    .pipe(coffee({bare: true}))
    .on('error', util.log)
    .pipe(gulp.dest(coffee_dest));
});

gulp.task('js', function(){
  gulp.src(exclude(js_src), {base: './'})
    .pipe(concat('all.js'))
    .on('error', util.log)
    .pipe(uglify({mangle: false}))
    .pipe(gulp.dest(js_dest));
});

gulp.task('img', function(){
  gulp.src(exclude(img_src))
    .pipe(imagemin({
      optimizationLevel: 7,
      progressive: true
    }))
    .on('error', util.log)
    .pipe(gulp.dest(img_dest));
});

gulp.task('watch', function(){
  gulp.watch(exclude(sass_src), ['sass']);
  gulp.watch(exclude(coffee_src), ['coffee']);
  gulp.watch(exclude(js_src), ['js']);
  gulp.watch(exclude(img_src), ['img']);
});

gulp.task('default', tasks);
