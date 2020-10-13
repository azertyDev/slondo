import React, {useRef} from 'react'
import {Container} from '@material-ui/core'
import SlickSlider from 'react-slick'
import {SliderArrow} from "../../../elements/slider_arrow/SliderArrow"
import {settings} from './sliderSettings'
import {useStyles} from './useStyles'


export const MainSlider = () => {
    const slider = useRef({
        slickNext() {},
        slickPrev() {}
    });

    const next = () => slider.current.slickNext();
    const previous = () => slider.current.slickPrev();

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <SlickSlider ref={slider} {...settings}>
                <div>
                    <img src={`img/slider-img.jpg`} alt='img'/>
                </div>
                <div>
                    <img src={`img/slider-img.jpg`} alt='img'/>
                </div>
                <div>
                    <img src={`img/slider-img.jpg`} alt='img'/>
                </div>
                <div>
                    <img src={`img/slider-img.jpg`} alt='img'/>
                </div>
                <div>
                    <img src={`img/slider-img.jpg`} alt='img'/>
                </div>
                <div>
                    <img src={`img/slider-img.jpg`} alt='img'/>
                </div>
                <div>
                    <img src={`img/slider-img.jpg`} alt='img'/>
                </div>
                <div>
                    <img src={`img/slider-img.jpg`} alt='img'/>
                </div>
                <div>
                    <img src={`img/slider-img.jpg`} alt='img'/>
                </div>
            </SlickSlider>
            <div className='slider-arrows-container'>
                <Container maxWidth='lg'>
                    <SliderArrow direction='left' clickHandler={previous}/>
                    <SliderArrow clickHandler={next}/>
                </Container>
            </div>
        </div>
    )
};
