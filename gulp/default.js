let gulp = require('gulp'),
    runseq= require('run-sequence');


gulp.task('default', function () {
    runseq(
        'jade',
        'sass',
        'inject',
        'scripts',
        'image',
        'build',
        'browser',
        'build:watch',
        'sass:watch',
        'jade:watch'

    );
});