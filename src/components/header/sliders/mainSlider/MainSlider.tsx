import React, {useRef} from 'react'
import {Container, IconButton} from '@material-ui/core'
import SlickSlider from 'react-slick'
import {settings} from './sliderSettings'
import {RightArrow} from '../../../elements/icons'
import {useStyles} from './useStyle'


export const MainSlider = () => {
    const slider = useRef({
        slickNext() {
        },
        slickPrev() {
        }
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
            <div className='slider-arrows-container'>
                <Container maxWidth='lg'>
                    <IconButton className='left-arrow' onClick={previous}>
                        <img src={RightArrow}/>
                    </IconButton>
                    <IconButton className='right-arrow' onClick={next}>
                        <img src={RightArrow}/>
                    </IconButton>
                </Container>
            </div>
        </div>
    )
};
