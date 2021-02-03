$(document).ready(function(){
    // Burger-menu
    let burgerMenu = $('header nav .burger-menu')
    let menu = $('header nav .menu')
    burgerMenu.click(function() {
        burgerMenu.toggleClass("active")
        menu.toggleClass("active")

        if(burgerMenu.hasClass("active")) {
            $('body').css('overflow', 'hidden')
        } else {
            $('body').css('overflow', 'initial')
        }
    })
    // Call popup
    $('.calling-popup').magnificPopup({
        overflowY: 'hidden'
    })
    //Owl Carousel Home slider
    $("section.main-slider .owl-carousel").on('initialize.owl.carousel', function (e) {
        let sliderCount = $("section.main-slider .owl-carousel").children().length
        $('.image-count .size').text('0' + sliderCount)
        $('.image-count .big').text('01')
    })
    let homeSlider = $("section.main-slider .owl-carousel").owlCarousel({
        items: '1',
        loop: true
    })
    $("#home-slider-next").click(function(){
        homeSlider.trigger('next.owl.carousel');
    })
    $("#home-slider-prev").click(function(){
        homeSlider.trigger('prev.owl.carousel');
    })
    homeSlider.on('changed.owl.carousel', function (e) {
        $('.image-count .size').text('0' + e.page.count)
        $('.image-count .big').text('0' + ++e.page.index)
    })
    //Owl Carousel Documents Slider
    let documentOwl = $("section.documents .owl-carousel").owlCarousel({
        items: '1',
        loop: true,
        margin: 10,
        responsive: {
            768: {
                items: '2'
            },
            1024: {
                items: '3'
            }
        }
    });
    $("#doc-next").click(function(){
        documentOwl.trigger('next.owl.carousel');
    })
    $("#doc-prev").click(function(){
        documentOwl.trigger('prev.owl.carousel');
    })

    //Owl Carousel Videos Slider
    let videosOwl = $("section.videos .owl-carousel").owlCarousel({
        items: '1',
        loop: true,
        margin: 10,
        responsive: {
            768: {
                items: '2'
            },
            1024: {
                items: '3'
            }
        }
    });
    $("#video-next").click(function(){
        videosOwl.trigger('next.owl.carousel');
    })
    $("#video-prev").click(function(){
        videosOwl.trigger('prev.owl.carousel');
    })

    //Owl Carousel Blog Slider
    let blogOwl = $("section.home-blog .owl-carousel").owlCarousel({
        items: '1',
        loop: true,
        margin: 20,
        stagePadding: 10,
        responsive: {
            768: {
                items: '2'
            },
            1024: {
                items: '3'
            }
        }
    });
    blogOwl.children().css('padding-bottom', '10px')
    $("#blog-next").click(function(){
        blogOwl.trigger('next.owl.carousel');
    })
    $("#blog-prev").click(function(){
        blogOwl.trigger('prev.owl.carousel');
    })
});