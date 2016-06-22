var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var maps = require('gulp-sourcemaps');
var sync = require('browser-sync');
var postcss = require('gulp-postcss');
var cssnano = require('cssnano');
var cssnext = require('cssnext');
var autoprefixer = require('autoprefixer');
var lost = require('lost');
var sprites = require('postcss-sprites').default;
var stylelint = require('stylelint');
var fs = require('fs');

gulp.task('sass', function() {
  gulp.src('source/scss/main.scss')
  .pipe(maps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(maps.write())
  .pipe(gulp.dest('build/css'))
  .pipe(sync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
  sync.init({
        server: {
            baseDir: "./build"
        }
    });
});

gulp.task('watch', function() {
  gulp.watch('source/scss/**/*', ['sass']);
});

gulp.task('default', ['browser-sync', 'watch']);
