var gulp = require('gulp');
require('require-dir')('build/tasks');

 // Default Task
gulp.task('default', ['bundle-default', 'bundle-debug']);

// Watch
gulp.watch('src/**/*.js', ['default']);
