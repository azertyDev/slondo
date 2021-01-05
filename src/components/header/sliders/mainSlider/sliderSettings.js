export const settings = {
    dots: false,
    infinite: true,
    // autoplay: true,
    arrows: false,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplaySpeed: 5000,
    variableWidth: true,
    responsive: [
        // {
        //     breakpoint: 1200,
        //     settings: {
        //         slidesToShow: 3,
        //         variableWidth: true
        //     }
        // },
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 2,
                centerMode: false,
                centerPadding: "0px"
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                variableWidth: true
            }
        }
    ]
}