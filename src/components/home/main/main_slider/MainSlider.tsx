import {CustomSlider} from '@src/components/elements/custom_slider/CustomSlider';
import React, {FC} from 'react';
import {settings} from './sliderSettings';
import {useStyles} from './useStyles';


export const MainSlider: FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CustomSlider {...settings}>
                <div>
                    <img src={`img/post_1.png`} alt='img' />
                </div>
                <div>
                    <img src={`img/post_2.png`} alt='img' />
                </div>
                <div>
                    <img src={`img/post_3.png`} alt='img' />
                </div>
                <div>
                    <img src={`img/post_4.png`} alt='img' />
                </div>
                <div>
                    <img src={`img/post_5.png`} alt='img' />
                </div>
            </CustomSlider>
        </div>
    )
};
