import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import {CustomSlider} from '../custom_slider/CustomSlider';
// styles
import {useStyles} from './useStyles';

type SliderTypes = {
    current: {
        slickGoTo: () => void
    }
}

export const SyncSliders = (props) => {
    const {currentSlide, setCurrentSlide, handleOpenModal} = props;

    const [slidersNav, setSlidersNav] = useState({nav1: null, nav2: null});
    const slider1: MutableRefObject<SliderTypes> = useRef({
        current: {
            slickGoTo: () => {
            }
        }
    });
    const slider2 = useRef();

    const {slickGoTo} = slider1.current;

    const handleBeforeChange = (newIndex) => {
        setCurrentSlide && setCurrentSlide(newIndex);
    };

    useEffect(() => {
        setSlidersNav({
            nav1: slider1.current,
            nav2: slider2.current,
        });
    }, []);

    // useEffect(() => {
    //     currentSlide && slickGoTo(currentSlide);
    // }, []);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.firstSlider}>
                <CustomSlider
                    asNavFor={slidersNav.nav2}
                    ref={slider1}
                    swipe={false}
                    afterChange={handleBeforeChange}
                    variableWidth={props.variableWidth}
                    initialSlide={currentSlide}
                    centerMode={props.centerMode}
                >
                    {props.imgs.map(({id, url, alt}, i) => (
                        <img src={url} alt={alt} key={i} onClick={handleOpenModal ?? null}/>
                    ))}
                </CustomSlider>
            </div>
            <div className={classes.secondSlider}>
                <CustomSlider
                    asNavFor={slidersNav.nav1}
                    ref={slider2}
                    focusOnSelect={true}
                    adaptiveHeight={true}
                    arrows={false}
                    afterChange={handleBeforeChange}
                    slidesToShow={4}
                >
                    {props.imgs.map(({url, alt}, i) => (
                        <img src={url} alt={alt} key={i}/>
                    ))}
                </CustomSlider>
            </div>
        </div>
    );
};


