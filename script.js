(function ($) {
    $('.accordion > li:eq(0) button').addClass('active').next().slideDown();


    $('.accordion button').click(function () {
        $('.accordion button').removeClass('active');
        var dropdown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropdown).slideUp();

        dropdown.stop(false, true).slideToggle();
        $(this).addClass('active');

    });


})(jQuery);