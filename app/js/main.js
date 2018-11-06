$(function () {
    $('.main-slider').slick({
        prevArrow: '<button type="button" class="but slick-prev"></button>',
        nextArrow: '<button type="button" class="but slick-next"></button>',
        dots: true
    });

    $('.slider-box-posts').slick({
        prevArrow: '<button type="button" class="but slick-prev"></button>',
        nextArrow: '<button type="button" class="but slick-next"></button>',
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        appendArrows: $('.buttons-arr-slick')

    });

    //tabs-block-filter
    $('.tabs-item').first().addClass('active');
    $('.tabs-group').on('click', '.tabs-item:not(.active)', function (e) {
        let target = e.target;
        let a = $('.tabs-item a');
        $(this)
            .addClass('active')
            .siblings()
            .removeClass('active')
            .closest('.tabs-section')
            .find('.tabs-content')
            .addClass('hidden')
            .eq($(this)
                .index())
            .removeClass('hidden');
        if (target !== a) {
            e.preventDefault();
        }
    });
});

// let video;
// let dur;
// let startDuration;
// window.onload = function () {
//
//     //video
//     video = document.getElementById('video');
//     dur = document.getElementById('ratio');
//     dur.value = 0;
//     dur.min = 0;
//     dur.max = video.duration;
//
//
// }
//
//
// function PlayPauseVideo() {
//     if (video.paused) {
//         video.play();
//         startDuration = setInterval(initDuration, 1000/66);
//     }
//     else {
//         video.pause();
//         clearInterval(startDuration);
//     }
// }
//
// function fullScreen() {
//     video.webkitRequestFullScreen();
// }
//
//
// function initDuration() {
//     dur.value = video.currentTime;
//
// }
//
// function claerAnimateRange() {
//     clearInterval(startDuration);
//
//     if(video.paused){
//
//     }
//     else {
//         PlayPauseVideo();
//     }
// }
//
// function movedRang() {
//     video.currentTime = dur.value;
//     PlayPauseVideo();
// }












