///////////////////
// REQUIRED MODULES
///////////////////

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var prefix = require('gulp-autoprefixer');
var stylus = require('gulp-stylus');

///////////////////////////
// HTML CSS & SCRIPTS TASKS
///////////////////////////

const sync = browserSync.create();

gulp.task('html', () => {
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(sync.reload({
      stream: true
    }));
});

gulp.task('scripts', () => {
  gulp.src('src/*.js')
    .pipe(gulp.dest('dist'))
    .pipe(sync.reload({
      stream: true
    }));
});

gulp.task('styles', () => {
  gulp.src('src/*.{css,scss,less,sass}')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(prefix('last 2 versions')) //calls autoprefixer
    .pipe(gulp.dest('dist'))
    .pipe(sync.reload({
    stream: true
  }));
});

gulp.task('styl', function () {
  return gulp.src('src/final.styl')
    .pipe(stylus())
    .pipe(gulp.dest('dist'));
});

gulp.task('images', () => {
  gulp.src('src/**/*.{png,jpg,svg}')
    .pipe(gulp.dest('dist'))
    .pipe(sync.reload({
      stream: true
    }));
});

////////////////////////////////////////////////////
//PIPES SRC FILES INTO DIST & WATCHES CHANGES IN SRC
///////////////////////////////////////////////////

gulp.task('build', ['html', 'scripts', 'styles', 'styl', 'images']);

gulp.task('serve', ['build'], () => {
  sync.init({
    server: 'dist',
    browser: 'google chrome canary'
  });

  gulp.watch('src/*.{html,jade}', ['html']);
  gulp.watch('src/*.js', ['scripts']);
  gulp.watch('src/*.{css,scss,sass}', ['styles']);
  gulp.watch('src/*.styl', ['styl']);
  gulp.watch('src/**/*.{png,jpg,svg}', ['images']);
});

//////////////////////////////
// THE DEFAULT TASK IS "SERVE"
//////////////////////////////

gulp.task('default', ['serve']);
