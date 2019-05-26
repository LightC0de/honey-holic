$('.stock-slider').slick({
    dots: true,
    dotsClass: "my-dots",
    appendDots: $(".stock-slider-nav"),
    infinite: true,
    slidesToShow: 2,
    arrows: false,
    responsive: [{
        breakpoint: 580,
        settings: {
            slidesToShow: 1,
        }
    }]
});