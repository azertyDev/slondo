export const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: false,
    height: 120,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
}