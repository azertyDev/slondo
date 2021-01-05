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
    slidesToShow: 7,
    slidesToScroll: 7,
    nextArrow: <Next/>,
    prevArrow: <Previous/>,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }
    ]
}