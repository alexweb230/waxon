var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser', function() {
    browserSync.init({
        server: {
            baseDir: "dist/"
        },
        files:[

            'dist/*.html',
            'dist/*.css',
            'dist/img/*',
            'dist/js/*',
            'dist/jade/*',
        ]
    });
});