import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import {CustomSlider} from '../custom_slider/CustomSlider';
import Router from 'next/router'

// styles
import {useStyles} from './useStyles';

export const SyncSliders = (props) => {
    const [slidersNav, setSlidersNav] = useState({nav1: null, nav2: null});
    const slider1: MutableRefObject<unknown> = useRef();
    const slider2: MutableRefObject<unknown> = useRef();

    console.log(Router)
    const handleAfterChange = (newIndex) => {
        props.setCurrentSlide && props.setCurrentSlide(newIndex);
    };

    useEffect(() => {
        setSlidersNav({
            nav1: slider1.current,
            nav2: slider2.current,
        });
    }, []);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.firstSlider}>
                <CustomSlider
                    asNavFor={slidersNav.nav2}
                    ref={slider1}
                    swipe={false}
                    afterChange={handleAfterChange}
                    variableWidth={props.variableWidth}
                    initialSlide={props.currentSlide}
                    centerMode={props.centerMode}
                >
                    {props.imgs.map(({id, url, alt}, i) => (
                        <img src={url} alt={alt} key={i} onClick={props.handleOpenModal}/>
                    ))}
                </CustomSlider>
            </div>
            <div className={classes.secondSlider}>
                <CustomSlider
                    asNavFor={slidersNav.nav1}
                    ref={slider2}
                    focusOnSelect={true}
                    arrows={props.arrows}
                    afterChange={handleAfterChange}
                    slidesToShow={props.imgs.length < 4 ? props.imgs.length : 4}
                    swipeToSlide={true}
                >
                    {props.imgs.map(({url, alt}, i) => (
                        <img src={url} alt={alt} key={i}/>
                    ))}
                </CustomSlider>
            </div>
        </div>
    );
};