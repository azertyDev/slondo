import {SliderArrow} from '@src/components/elements/custom_slider/slider_arrow/SliderArrow';
import {Settings} from "react-slick";

export const settings: Settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
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
                centerPadding: '44px',
                slidesToShow: 1
            }
        }
    ]
};