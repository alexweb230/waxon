// let gulp = require('gulp'),
//     imagemin = require('gulp-imagemin'),
//     pnpquant = require('imagemin-pngquant');
//
// //сжатие и оптимизация всех изображений
//
//
// gulp.task("img", function () {
//     return gulp.src('app/img/**/*')
//         .pipe(imagemin({
//             interlaced: true,
//             progressive: true,
//             svgoPlagins: [{removeViewBox: false}],
//             une: [pnpquant()]
//         }))
//         .pipe(gulp.dest('dist/img/'));
// });