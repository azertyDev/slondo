import React from "react";
import {SliderArrow} from "../../../elements/slider_arrow/SliderArrow";

const Next = ({onClick, className}) => {
    return <div className={className}>
        <SliderArrow clickHandler={onClick}/>
    </div>
};
const Previous = ({onClick, className}) => {
    return <div className={className}>
        <SliderArrow direction='left' clickHandler={onClick}/>
    </div>
};

export const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <Next/>,
    prevArrow: <Previous/>,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 6,
            }
        },
        {
            breakpoint: 1080,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 360,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
}