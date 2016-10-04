var gulp = require('gulp'),
    globals = require('../globals.js'),
    documentation = require('gulp-documentation');

var bundles = require('../bundles.js');

console.log('globals.version', globals.version);

/*
 * Task: Documentation
 */
gulp.task('documentation', function() {

  // gulp.src('./index.js')
  //   .pipe(documentation({
  //     format: 'md'
  //   }))
  //   .pipe(gulp.dest('md-documentation'));

  gulp.src('./dist/'+globals.version+'/AnimateCommons.'+globals.version+'.js')
    .pipe(documentation({
      format: 'html'
    }))
    .pipe(gulp.dest('./doc/'+globals.version+'/html'));

  // gulp.src('./index.js')
  //   .pipe(documentation({
  //     format: 'json'
  //   }))
  //   .pipe(gulp.dest('json-documentation'));
});
