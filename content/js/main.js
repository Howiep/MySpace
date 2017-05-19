// $('.dropdown').hover(function(){
//   $('.dropdown-toggle', this).trigger('click');
// });

$(document).ready(function() {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = false;

    trigger.click(function() {
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
    }

    $('[data-toggle="offcanvas"]').click(function() {
        $('#wrapper').toggleClass('toggled');
    });
});
(function() {
    var grid;

    function init() {
        grid = new Minigrid({
            container: '.cards',
            item: '.card',
            gutter: 6
        });
        grid.mount();
    }

    // mount
    function update() {
        grid.mount();
    }

    document.addEventListener('DOMContentLoaded', init);
    window.addEventListener('resize', update);
})();
