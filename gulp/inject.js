let gulp = require('gulp'),
    replace = require('gulp-replace'),
    fs = require('fs');


gulp.task('inject', function () {

    return gulp.src(['dist/index.html'])
        .pipe(replace('<link rel="stylesheet" href="css/common.css">', function () {

            let css = fs.readFileSync('dist/css/common.css', 'utf8');

            return '<style>\n' + css + '\n</style>'
        }))
        .pipe(gulp.dest('dist/'));

});