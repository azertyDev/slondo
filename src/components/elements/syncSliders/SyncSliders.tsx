import React, {useEffect, useRef, useState} from 'react';
import {CustomSlider} from '../custom_slider/CustomSlider';
import {FullscreenIcon} from '../icons';
import Button from '@material-ui/core/Button';
import { NextImgTag } from "@src/components/elements/next_img_tag/NextImgTag";

// styles
import {useStyles} from './useStyles';

export const SyncSliders = (props) => {
    const {imgs} = props;
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
                <div className={classes.fullscreenIcon}>
                    <Button
                        variant="text"
                        color="default"
                    >
                        <img src={FullscreenIcon} alt="fullscreen-icon"/>
                    </Button>
                </div>
                <CustomSlider asNavFor={slidersNav.nav2} ref={slider1}>
                    {imgs.map(({url, alt}, i) => (
                        <div key={i}>
                            <NextImgTag src={url} alt={alt}/>
                        </div>
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
                    {imgs.map(({url, alt}, i) => (
                        <div key={i}>
                            <NextImgTag src={url} alt={alt}/>
                        </div>
                    ))}
                </CustomSlider>
            </div>
        </div>
    );
};
