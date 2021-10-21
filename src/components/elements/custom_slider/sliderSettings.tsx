import {SliderArrow} from './slider_arrow/SliderArrow';

export const settings = {
    swipeToSlide: true,
    mobileFirst: true,
    prevArrow: <SliderArrow/>,
    nextArrow: <SliderArrow/>,
    appendDots: dots => <ul>{dots}</ul>
};