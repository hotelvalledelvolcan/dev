

const mainSlider = () => {
    var BasicSlider = $(".slider-active");
    BasicSlider.on("init", function (e, slick) {
        var $firstAnimatingElements = $(".single-slider:first-child").find(
            "[data-animation]"
        );
        doAnimations($firstAnimatingElements);
    });
    BasicSlider.on(
        "beforeChange",
        function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $(
                '.single-slider[data-slick-index="' + nextSlide + '"]'
            ).find("[data-animation]");
            doAnimations($animatingElements);
        }
    );
    try {
        BasicSlider.slick({
            autoplay: true,
            autoplaySpeed: 2000,
            dots: false,
            fade: true,
            arrows: false,
            prevArrow:
                '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
            nextArrow:
                '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    },
                },
            ],
        });
    } catch (error) { }
};

const doAnimations = (elements) => {
    var animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data("delay");
        var $animationType = "animated " + $this.data("animation");
        $this.css({
            "animation-delay": $animationDelay,
            "-webkit-animation-delay": $animationDelay,
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
            $this.removeClass($animationType);
        });
    });
};

export { mainSlider, doAnimations }