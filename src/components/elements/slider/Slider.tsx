import React, { Component } from 'react'
import Slider from 'react-slick'

// styles
import { useStyles } from "./useStyles";

export const CustomSlider = () => {
    const classes = useStyles()
    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <img src={`img/advertisement-image.jpg`} />
                </a>
            )
        },
        arrows: false,
        dots: true,
        dotsClass: 'slick-dots slick-thumb',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <div className={classes.root}>
            <Slider {...settings}>
                <div>
                    <img src={`img/advertisement-image.jpg`} />
                </div>
                <div>
                    <img src={`img/advertisement-image.jpg`} />
                </div>
                <div>
                    <img src={`img/advertisement-image.jpg`} />
                </div>
                <div>
                    <img src={`img/advertisement-image.jpg`} />
                </div>
                <div>
                    <img src={`img/advertisement-image.jpg`} />
                </div>
                <div>
                    <img src={`img/advertisement-image.jpg`} />
                </div>
                <div>
                    <img src={`img/advertisement-image.jpg`} />
                </div>
                <div>
                    <img src={`img/advertisement-image.jpg`} />
                </div>
            </Slider>
        </div>
    )
}
