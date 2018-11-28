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


    //video
    let video = document.querySelector('.video'),
        filled = document.querySelector('.filled'),
        playPase = document.querySelector('.play-pase'),
        videoBox = document.querySelector('.video-box');

    playPase.addEventListener('click', function () {
        if(video.paused){
            this.classList.add('active');
            video.play();
            videoBox.classList.remove('overlay');
        } else {
            this.classList.remove('active');
            video.pause();
            videoBox.classList.add('overlay');
        }
    });


    video.addEventListener('timeupdate', function () {
        let filledPos = video.currentTime / video.duration;
        filled.style.width = filledPos * 100 + '%';
        if(video.ended){
            playPase.classList.remove('active');
        }
    });

});









