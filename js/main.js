$(document).ready(function(){
    $('.site-main .testimonials .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 2
            }
        }
    })

});