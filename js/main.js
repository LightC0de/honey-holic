$('.stock-slider').slick({
    autoplay: false,
    dots: true,
    dotsClass: "my-dots",
    appendDots: $(".stock-slider-nav"),
    appendArrows: $(".stock-slider-nav"),
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    nextArrow: '<i class="fa fa-angle-right slider-next" aria-hidden="true"></i>',
    prevArrow: '<i class="fa fa-angle-left slider-prev" aria-hidden="true"></i>',
    responsive: [{
        breakpoint: 580,
        settings: {
            slidesToShow: 1,
        }
    }]
});

const $left = $(".left");
const $gl = $(".gallery");
const $gl2 = $(".gallery2");

$gl.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    useTransform: false,
    mobileFirst: true,
    centerMode: true,
    centerPadding: '8rem',
    dots: false,
    focusOnSelect: true,
    asNavFor: $gl2,
    vertical: true,
    verticalSwiping: true,
});
$gl2.slick({
    useTransform: false,
    fade: true,
    arrows: true,
    asNavFor: $gl,
    nextArrow: '<i class="fa fa-angle-right slider-next" aria-hidden="true"></i>',
    prevArrow: '<i class="fa fa-angle-left slider-prev" aria-hidden="true"></i>',
});

function handleCarouselsHeight() {
    if (window.matchMedia("(min-width: 1024px)").matches) {
        const gl2H = $(".gallery2").height();
        $left.css("height", gl2H);
    } else {
        $left.css("height", "auto");
    }
}

$(window).on("load", () => {
    handleCarouselsHeight();
});
$(".gallery .item").on("click", function() {
    const index = $(this).attr("data-slick-index");
    $gl2.slick("slickGoTo", index);
});