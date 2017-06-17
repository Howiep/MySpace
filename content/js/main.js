//Jquery code
$('.ddfb').hover(function () {
    $('.ddfb-tgl', this).trigger('click');
});

$(document).ready(function () {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = false;

    trigger.click(function () {
        hamburger_cross();
    });

    function hamburger_cross() {

        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    };

    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
    });

    // Add slideDown animation to Bootstrap dropdown when expanding.
    $('.dropdown').on('show.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

    // Add slideUp animation to Bootstrap dropdown when collapsing.
    $('.dropdown').on('hide.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });

    $('.featured-toggle').hover(function () {
        $(this).find('p').stop().slideToggle();
        $(this).find('.featured-article-desc').toggleClass('showP');
    });


    $('.pull-down').each(function () {
        var $this = $(this);
        $this.css('margin-top', $this.parent().height() - $this.height())
    });

    var feed = new Instafeed({
        get: 'user',
        userId: '187419680',
        accessToken: '187419680.1677ed0.cd9a2bda5940437597cf5ee41a97b8ac'
    });
    feed.run();
})