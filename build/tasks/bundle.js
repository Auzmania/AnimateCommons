var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    insert = require('gulp-insert'),
    globals = require('../globals.js');

var bundles = require('../bundles.js');

// Task: Bundle default
gulp.task('bundle-default', function() {
    return gulp
      .src(bundles.default.includes)
        .pipe(concat(bundles.default.filename))
        .pipe(insert.prepend(globals.license+'\n'))
        .pipe(gulp.dest(bundles.default.dest))
        .pipe(uglify())
        .pipe(insert.prepend(globals.license+'\n'))
        .pipe(rename(bundles.default.filename.replace('.js', '.min.js')))
        .pipe(gulp.dest(bundles.default.dest))
      ;
});

// Task: Bundle debug
gulp.task('bundle-debug', function() {
    return gulp
      .src(bundles.debug.includes)
        .pipe(concat(bundles.debug.filename))
        .pipe(insert.prepend(globals.license+'\n'))
        .pipe(gulp.dest(bundles.debug.dest))
        .pipe(uglify())
        .pipe(insert.prepend(globals.license+'\n'))
        .pipe(rename(bundles.debug.filename.replace('.js', '.min.js')))
        .pipe(gulp.dest(bundles.debug.dest))
      ;
});
