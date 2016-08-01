var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var coffee = require('gulp-coffee');
var util = require('gulp-util');

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
    console.log(path);
    return path;
  }
  if(typeof path == 'string'){
    var newPath = new Array();
    newPath.push(path);
    excluded.forEach(function(element, index){
      newPath.push('!' + element + '/**/*');
    });
    console.log(newPath);
    return newPath;
  }
}

var sass_src = exclude([
  './style/**/*.sass'
]);

var sass_dest = '.';

gulp.task('sass', function(){
  gulp.src(sass_src, {base: './'})
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .on('error', util.log)
    .pipe(gulp.dest(sass_dest));
});

var coffee_src = exclude([
  './script/**/*.coffee'
]);

var coffee_dest = '.';

gulp.task('coffee', function(){
  gulp.src(coffee_src, {base: './'})
    .pipe(coffee({bare: true}))
    .on('error', util.log)
    .pipe(gulp.dest(coffee_dest));
});

var js_src = exclude([
  './script/main.js',
  './script/animation.js'
]);

var js_dest = './script/';

gulp.task('js', function(){
  gulp.src(js_src, {base: './'})
    .pipe(concat('all.js'))
    .on('error', util.log)
    .pipe(uglify({mangle: false}))
    .pipe(gulp.dest(js_dest));
});

gulp.task('watch', function(){
  gulp.watch(sass_src, ['sass']);
  gulp.watch(coffee_src, ['coffee']);
  gulp.watch(js_src, ['js']);
});

var tasks = [
  'sass',
  'coffee',
  'js',
  'watch'
];

gulp.task('default', tasks);
