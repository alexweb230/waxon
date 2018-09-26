let gulp = require('gulp'),
      image = require('gulp-image');

gulp.task('image', function () {
    gulp.src('app/img/**/*')
        .pipe(image(
            {
                pngquant: true,
                optipng: false,
                zopflipng: true,
                jpegRecompress: true,
                mozjpeg: false,
                guetzli: false,
                gifsicle: true,
                svgo: true,
                concurrent: 10,
                quiet: true // defaults to false
            }
        ))
        .pipe(gulp.dest('app/img/'));
});
