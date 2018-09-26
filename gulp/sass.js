let gulp = require('gulp'),
    sass = require('gulp-sass'),
    cnf = require('../package.json').config,
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    runseq = require('run-sequence');


gulp.task('sass', function () {
    return gulp.src(cnf.src.scss + '/**/*.{scss, sass}')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(cnf.dist.css));
});

gulp.task('sass:watch', function () {
    gulp.watch(cnf.src.scss + '/**/*.*', () => runseq('jade', 'sass', 'inject', 'build'));
});