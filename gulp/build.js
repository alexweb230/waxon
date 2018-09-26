var gulp = require('gulp');

gulp.task('build', function () {
    return gulp.src('app/**/*')
        .pipe(gulp.dest('dist/'))
});

gulp.task('build:watch', function () {
    gulp.watch('app/**/*', ['build']);
});