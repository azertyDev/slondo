import React, {useRef} from 'react'
import SlickSlider from 'react-slick'
import {IconButton} from '@material-ui/core'
import {ArrowLeft, ArrowRight} from '@material-ui/icons'
import {useStyles} from './useStyle'
import {settings} from './sliderSettings'


const MainSlider = () => {
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
                    <img src={`img/slider-img.jpg`}/>
                </div>
                <div>
                    <img src={`img/slider-img.jpg`}/>
                </div>
                <div>
                    <img src={`img/slider-img.jpg`}/>
                </div>
                <div>
                    <img src={`img/slider-img.jpg`}/>
                </div>
                <div>
                    <img src={`img/slider-img.jpg`}/>
                </div>
                <div>
                    <img src={`img/slider-img.jpg`}/>
                </div>
                <div>
                    <img src={`img/slider-img.jpg`}/>
                </div>
                <div>
                    <img src={`img/slider-img.jpg`}/>
                </div>
                <div>
                    <img src={`img/slider-img.jpg`}/>
                </div>
            </SlickSlider>
            <IconButton
                size="small"
                onClick={previous}
                className="left-button"
            >
                <ArrowLeft/>
            </IconButton>
            <IconButton
                size="small"
                onClick={next}
                className="right-button"
            >
                <ArrowRight/>
            </IconButton>
        </div>
    )
}

export default MainSlider;
