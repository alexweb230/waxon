$(function () {
    $('.main-slider').slick({
        prevArrow:'<button type="button" class="but slick-prev"></button>',
        nextArrow:'<button type="button" class="but slick-next"></button>',
        dots: true
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
        if(target !== a){
            e.preventDefault();
        }
    });
});