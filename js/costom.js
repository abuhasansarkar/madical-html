$(document).ready(function() {

    /*
    ++++++++++++++++++++++++++++++++++
    HOME PAGE JS START HARE
    ++++++++++++++++++++++++++++++++++

    */
    // WOW Js animation
    new WOW().init();

    // Header area slider js
    $('.header-slider .owl-carousel').owlCarousel({
        rtl: false,
        loop: true,
        margin: 0,
        nav: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        lazyLoad: true,

        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: false,
            },
            600: {
                items: 1,
                dots: false,
                nav: false,
            },
            1000: {
                items: 1,
                dots: false,
                nav: false,
            }
        }
    })

    // Doctor-Teem area slider js
    $('#doctor-teem-area .owl-carousel').owlCarousel({
            rtl: false,
            loop: true,
            margin: 0,
            nav: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            lazyLoad: true,

            responsive: {
                0: {
                    items: 1,
                    dots: true,
                    nav: false,
                },
                600: {
                    items: 2,
                    dots: false,
                    nav: true,
                },
                1000: {
                    items: 2,
                    dots: true,
                    nav: false,
                }
            }
        })
        // resourse content area slider js
    $('.main-resoures .owl-carousel').owlCarousel({
            rtl: false,
            loop: true,
            margin: 15,
            nav: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            lazyLoad: true,

            responsive: {
                0: {
                    items: 1,
                    dots: false,
                    nav: false,
                },
                600: {
                    items: 2,
                    dots: false,
                    nav: true,
                },
                1000: {
                    items: 3,
                    dots: false,
                    nav: false,
                }
            }
        })
        // Insurance area slider js
    $('.main-insurance .owl-carousel').owlCarousel({
            rtl: false,
            loop: true,
            margin: 15,
            nav: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            lazyLoad: true,

            responsive: {
                0: {
                    items: 2,
                    dots: false,
                    nav: true,
                },
                600: {
                    items: 4,
                    dots: false,
                    nav: true,
                },
                1000: {
                    items: 7,
                    dots: false,
                    nav: true,
                }
            }
        })
        // testimonial area slider js
    $('#testimonial-area  .owl-carousel').owlCarousel({
        rtl: false,
        loop: true,
        margin: 15,
        nav: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        lazyLoad: true,

        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: false,
            },
            600: {
                items: 1,
                dots: false,
                nav: false,
            },
            1000: {
                items: 1,
                dots: false,
                nav: false,
            }
        }
    })


    /*
    ++++++++++++++++++++++++++++++++++
    HOME PAGE JS END HARE
    ++++++++++++++++++++++++++++++++++

    */
    /*
    ++++++++++++++++++++++++++++++++++
    ABOUT_US PAGE JS START HARE
    ++++++++++++++++++++++++++++++++++

    */

    // sideber-slider area slider js
    $('.sideber-slider .owl-carousel').owlCarousel({
        rtl: false,
        loop: true,
        margin: 0,
        nav: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        lazyLoad: true,

        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: false,
            },
            600: {
                items: 1,
                dots: false,
                nav: false,
            },
            1000: {
                items: 1,
                dots: false,
                nav: false,
            }
        }
    })

    // sideber-counter
    $('.sideber-counter .counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text() }).animate({
                countNum: countTo
            },

            {

                duration: 3000,
                easing: 'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
    });

    /*
    ++++++++++++++++++++++++++++++++++
    ABOUT_US PAGE JS END HARE
    ++++++++++++++++++++++++++++++++++

    */
    /*
    ++++++++++++++++++++++++++++++++++
    DOCTOR PAGE JS START HARE
    ++++++++++++++++++++++++++++++++++

    */
    //  Doctor mixitup js 
    var mixer = mixitup('.specialtists-content');
    /*
    ++++++++++++++++++++++++++++++++++
    DOCTOR PAGE JS END HARE
    ++++++++++++++++++++++++++++++++++

    */












});