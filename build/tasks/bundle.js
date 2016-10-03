var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var bundles = require('../bundles.js');

// Task: Bundle default
gulp.task('bundle-default', function() {
    return gulp
      .src(bundles.default.includes)
        .pipe(concat(bundles.default.filename))
        .pipe(gulp.dest(bundles.default.dest))
        .pipe(uglify())
        .pipe(rename(bundles.default.filename.replace('.js', '.min.js')))
        .pipe(gulp.dest(bundles.default.dest))
      ;
});

// Task: Bundle debug
gulp.task('bundle-debug', function() {
    return gulp
      .src(bundles.debug.includes)
        .pipe(concat(bundles.debug.filename))
        .pipe(gulp.dest(bundles.debug.dest))
        .pipe(uglify())
        .pipe(rename(bundles.debug.filename.replace('.js', '.min.js')))
        .pipe(gulp.dest(bundles.debug.dest))
      ;
});

// Task: Bundle commercial
gulp.task('bundle-commercial', function() {
    return gulp
      .src(bundles.commercial.includes)
        .pipe(concat(bundles.commercial.filename))
        .pipe(gulp.dest(bundles.commercial.dest))
        .pipe(uglify())
        .pipe(rename(bundles.commercial.filename.replace('.js', '.min.js')))
        .pipe(gulp.dest(bundles.commercial.dest))
      ;
});
