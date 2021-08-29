export const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 9,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 1000,
            settings: {
                arrows: false,
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 780,
            settings: {
                arrows: false,
                slidesToShow: 4.4,
            }
        },
        {
            breakpoint: 630,
            settings: {
                arrows: false,
                slidesToShow: 3.5,
            }
        },
        {
            breakpoint: 575,
            settings: {
                arrows: false,
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 490,
            settings: {
                arrows: false,
                slidesToShow: 4.4,
            }
        },
        {
            breakpoint: 420,
            settings: {
                arrows: false,
                slidesToShow: 3.6,
            }
        },
        {
            breakpoint: 360,
            settings: {
                arrows: false,
                slidesToShow: 3.3,
            }
        }
    ]
};