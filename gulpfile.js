var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
// var cleanCSS = require('gulp-clean-css');

var sassSourcePath = 'assets/scss/site.scss';
var cssSourcePath = 'public/assets/css/';
var cssAppDistFile = 'site';
var jsAppDistFile = 'site';
var jsCompressPath = 'assets/js/**/scripts.js';
var jsSourcePath = 'public/assets/js/';
var imgCompressPath = 'assets/media/**/*';
var imgSourcePath = 'public/assets/media/';
var fontPath = 'assets/scss/fonts/**/*';
var fontSourcePath = 'public/assets/css/fonts';

gulp.task('sass', function () {
  gulp.src(sassSourcePath)
    .pipe(sass())
    // .pipe(cleanCSS({ compatibility: 'ie8' }))
    .on('error', function (err) {
      console.log(err.toString());

      this.emit('end');
    })
    .pipe(rename(cssAppDistFile + '.css'))
    .pipe(gulp.dest(cssSourcePath));
    gulp.src(fontPath)
    .pipe(gulp.dest(fontSourcePath));
});

gulp.task('img-compress', function () {
  gulp.src(imgCompressPath)
    .pipe(gulp.dest(imgSourcePath));
});

gulp.task('compress', function () {
  gulp.src(jsCompressPath)
    .pipe(concat('site.js'))
    .pipe(rename(jsAppDistFile + '.min.js'))
    // .pipe(uglify())
    .pipe(gulp.dest(jsSourcePath));
});

gulp.task('watch', function () {
  gulp.watch(sassSourcePath, ['sass']);
  gulp.watch(jsCompressPath, ['compress']);
  gulp.watch(imgCompressPath, ['img-compress']);
});

// Default task
gulp.task('default', ['sass', 'img-compress', 'compress']);

gulp.task('watch', function() {
  gulp.watch('./**/*.scss', ['sass']);
  gulp.watch('./**/**/*.scss', ['sass']);
  gulp.watch('./**/*.js', ['compress']);
  gulp.watch('assets/media/**/*', ['img-compress']);
});