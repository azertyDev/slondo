import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import {CustomSlider} from '../custom_slider/CustomSlider';
// styles
import {useStyles} from './useStyles';


export const SyncSliders = (props) => {
    const [slidersNav, setSlidersNav] = useState({nav1: null, nav2: null});
    const slider1: MutableRefObject<unknown> = useRef();
    const slider2: MutableRefObject<unknown> = useRef();

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
                    {props.imgs.map(({url, alt}, i) => (
                        <img
                            src={url.original}
                            alt={alt}
                            key={i}
                            onClick={props.handleOpenModal}
                        />
                    ))}
                </CustomSlider>
            </div>
            <div className={classes.secondSlider}>
                <CustomSlider
                    ref={slider2}
                    focusOnSelect={true}
                    arrows={props.arrows}
                    afterChange={handleAfterChange}
                    slidesToShow={4}
                    swipeToSlide={true}
                >
                    {props.imgs.map(({url, alt}, i) => (
                        <img src={url.small} alt={alt} key={i}/>
                    ))}
                </CustomSlider>
            </div>
        </div>
    );
};
