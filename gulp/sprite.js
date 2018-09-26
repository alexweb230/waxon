let gulp = require('gulp'),
    spritesmith = require('gulp.spritesmith');



//генерация sprite
gulp.task('sprite', function () {
    let spriteData = gulp.src('app/img/png/icons/*.png').pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: '_sprite.scss',
        padding:1
    }));
    return spriteData.pipe(gulp.dest('app/img/sprite'));
});