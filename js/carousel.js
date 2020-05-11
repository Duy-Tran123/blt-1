$(document).ready(function() {
    $('#slider .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items: 4,
        autoplay:false,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        dots:false,
        navText: ["<img src='images/prev.png'>","<img src='images/next.png'>"],
        responsiveClass:true,
        responsive:{
        0:{
            items:1,
            nav:false
        },
        767:{
            items:2,
            nav:false
        },
        1024:{
            items:4,
            nav:true,
            loop:false
        }
    }
    })
})
$(document).ready(function() {
    $('#slider2 .owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        nav:false,
        items: 5,
        autoplay:false,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        dots:true,
        navText: ["<img src='prev.png'>","<img src='next.png'>"],
        responsiveClass:true,
        responsive:{
        0:{
            items:2,
            nav:false
        },
        767:{
            items:3,
            nav:false
        },
        1024:{
            items:1,
            nav:false,
            loop:false
        }
    }

    })
});

$(document).ready(function() {
    $('#slider3 .owl-carousel').owlCarousel({
        rtl:true,
        loop:false,
        margin:10,
        nav:true,
        items: 1,
        autoplay:false,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        dots:false,
        navText: ["<img src='images/prev2.png' class = 'img-offer1'>","<img src='images/next2.png'  class = 'img-offer2'>"],
         responsiveClass:true,
        responsive:{
        0:{
            items:1,
            nav:false
        },
        767:{
            items:2,
            nav:false
        },
        1024:{
            items:1.5,
            nav:true,
            loop:false
        }
    }

    })
});