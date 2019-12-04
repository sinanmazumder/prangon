// nav fixed 
jQuery("document").ready(function () {
    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 200) {
            jQuery('.main-nav').addClass('fixed-top');
        } else {
            jQuery('.main-nav').removeClass('fixed-top');
        }
    });
});

// parallax image
jQuery('document').ready(function () {
    jQuery(window).scroll(function (e) {
        parallax();
    })


    function parallax() {
        var scroll = jQuery(window).scrollTop();
        var screenHeight = jQuery(window).height();

        jQuery('.parallax').each(function () {
            var offset = jQuery(this).offset().top;
            var distanceFromBottom = offset - scroll - screenHeight

            if (offset > screenHeight && offset) {
                jQuery(this).css('background-position', 'center ' + ((distanceFromBottom) * 0.5) + 'px');
            } else {
                jQuery(this).css('background-position', 'center ' + ((-scroll) * 0.5) + 'px');
            }
        })
    }
});



// Progress bars
jQuery(document).ready(function () {

    jQuery('.skillbar').skillBars({
        from: 0,
        speed: 4000,
        interval: 100,
        decimals: 0,
    });

});


//isotope
jQuery('document').ready(function () {
    // init Isotope
    var jQuerygrid = jQuery('.grid').isotope({
        // options
    });
    // filter items on button click
    jQuery('.filter-button-group').on('click', 'button', function () {
        var filterValue = jQuery(this).attr('data-filter');
        jQuerygrid.isotope({
            filter: filterValue
        });
    });
    jQuery('.filter-button-group button').on('click', function (event) {
        jQuery(this).siblings('.active').removeClass('active');
        jQuery(this).addClass('active');
        event.preventDefault();
    })
});


//image popup 
jQuery(function () {
    jQuery('.img-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true,
        }
        // other options
    });
});

// testimonial carousel
jQuery('document').ready(function () {
    jQuery('.owl-carousel').owlCarousel({
        stagePadding: 100,
        loop: true,
        margin: 30,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        dots: false,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0,
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })
});


/* nav scrolling */
jQuery(document).ready(function () {

    jQuery('.nav-link').on('click', function (e) {
        e.preventDefault();
        var id = jQuery(e.currentTarget).attr('href');
        var jQuerydest = jQuery(id);

        jQuery('html,body').animate({
            scrollTop: (jQuerydest.offset().top)
        }, 1000);
    });

});


// Scroll top button //

jQuery("document").ready(function () {
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 200) {
            jQuery(".scroll-top").fadeIn();
        } else {
            jQuery(".scroll-top").fadeOut();
        }
    });
    jQuery(".scroll-top").click(function () {
        jQuery("html,body").animate({
            scrollTop: 0
        }, 700);
    });
});
