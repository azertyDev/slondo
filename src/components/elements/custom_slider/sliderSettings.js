import React from "react"
import {SliderArrow} from "../slider_arrow/SliderArrow"

function NextArrow(props) {
    const {className, onClick} = props;
    return (
        <SliderArrow className={className} clickHandler={onClick}/>
    );
}

function PrevArrow(props) {
    const {className, onClick} = props;
    return (
        <SliderArrow className={className} direction='left' clickHandler={onClick}/>
    );
}

export const settings = {
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
}