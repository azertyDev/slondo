export const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6
            }
        },
        {
            breakpoint: 1000,
            settings: {
                arrows: false,
                slidesToShow: 5,
                slidesToScroll: 5
            }
        },
        {
            breakpoint: 800,
            settings: {
                arrows: false,
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 650,
            settings: {
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 450,
            settings: {
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
    ]
};