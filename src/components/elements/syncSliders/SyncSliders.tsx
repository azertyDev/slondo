import React, {useEffect, useRef, useState} from 'react';
import {CustomSlider} from '../custom_slider/CustomSlider';

// styles
import {useStyles} from './useStyles';

export const SyncSliders = (props) => {
    const [slidersNav, setSlidersNav] = useState({nav1: null, nav2: null});
    const slider1 = useRef();
    const slider2 = useRef();

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
                <CustomSlider asNavFor={slidersNav.nav2} ref={slider1}>
                    {props.imgs.map(({id, url, alt}, i) => (
                        <img src={url} alt={alt} key={i}/>
                    ))}
                </CustomSlider>

            </div>
            <div className={classes.secondSlider}>
                <CustomSlider
                    asNavFor={slidersNav.nav1}
                    ref={slider2}
                    slidesToShow={7}
                    focusOnSelect={true}
                >
                    {props.imgs.map(({url, alt}, i) => (
                        <img src={url} alt={alt} key={i}/>
                    ))}
                </CustomSlider>
            </div>
        </div>
    );
};
