
// Mixin Puppy >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var gulp        = require('gulp');
    gulp.tasks  = require('./gulp/puppy').tasks;

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Mixin Puppy


gulp.task('default', [ 'puppy-styles', 'puppy-images', 'puppy-bower', 'puppy-scripts'] );


