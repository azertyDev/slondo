import {SliderArrow} from '@src/components/elements/custom_slider/slider_arrow/SliderArrow';

export const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    adaptiveHeight: true,
    centerPadding: '0px',
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <SliderArrow/>,
    nextArrow: <SliderArrow/>,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                slidesToShow: 2,
                centerMode: false
            }
        },
        {
            breakpoint: 576,
            settings: {
                arrows: false,
                centerPadding: '20px',
                slidesToShow: 1
            }
        }
    ]
};