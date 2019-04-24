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
        progressBar = document.querySelector('.bar'),
        playPase = document.querySelector('.play-pase'),
        fullscreen = document.querySelector('.full-size'),
        videoBox = document.querySelector('.video-box'),
        range = document.querySelectorAll('.range');


    // range.value = 0;
    // range.min = 0;
    // range.max = video.duration;


    videoBox.addEventListener('click', function (e) {
        let target = e.target;
        if (target === video || target === this || target === playPase) {
            if (video.paused) {
                video.play();
                playPase.classList.add('active');
                this.classList.remove('overlay');
            }
            else if (video.play) {
                playPase.classList.remove('active');
                video.pause();
            }
        }
        if (target === fullscreen) {
            /* View in fullscreen */
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.mozRequestFullScreen) {
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) {
                video.msRequestFullscreen();
            }
        }

    });

   //progress-bar
    video.addEventListener('timeupdate', function () {
        let filledPos = video.currentTime / video.duration;
        filled.style.width = filledPos * 100 + '%';
        if (video.ended) {
            playPase.classList.remove('active');
            videoBox.classList.add('overlay');
        }
    });


    //звук и скорость видео
    let rangeDown = true;

    range.forEach(range => range.addEventListener('change', rangHandle));
    range.forEach(range => range.addEventListener('mousemove', rangHandle));
    range.forEach(range => range.addEventListener('mousedown', () => rangeDown = true));

    function rangHandle() {
        video[this.name] = this.value;
    }


    //перетягивание ползунка скорости прокрутки

    let mousedown = false;

    progressBar.addEventListener('click', scrub);
    progressBar.addEventListener('mousemove', (e) => mousedown && scrub(e));
     progressBar.addEventListener('mousedown', () => mousedown = true);
     progressBar.addEventListener('mouseup', () => mousedown = false);

    function scrub(e) {
        const scrubTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
        video.currentTime = scrubTime;
    }
});









