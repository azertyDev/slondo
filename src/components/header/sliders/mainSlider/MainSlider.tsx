import {CustomSlider} from '@root/src/components/elements/custom_slider/CustomSlider';
import React, {FC} from 'react';
import {settings} from './sliderSettings';
import {useStyles} from './useStyles';


export const MainSlider: FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CustomSlider {...settings}>
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
            </CustomSlider>
        </div>
    )
};
