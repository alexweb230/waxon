let gulp = require('gulp'),
    runseq = require('run-sequence'),
    jade = require('gulp-jade');


//jade
gulp.task('jade', function () {
    return gulp.src('app/jade/**/*.jade')
        .pipe(jade({
            pretty: true
        })).pipe(gulp.dest('dist/'));
});


gulp.task('jade:watch', function () {
    gulp.watch('app/jade/**/*.jade', () => runseq('jade', 'inject'));
});