import React, { forwardRef, PropsWithChildren } from 'react';
import SlickSlider, { Settings } from 'react-slick';
import { settings } from './sliderSettings';
import { useStyles } from './useStyles';

export const CustomSlider = forwardRef<any, PropsWithChildren<Settings>>(
    (props, ref) => {
        const slidesToShow =
            props.slidesToShow > 3
                ? 4
                : !!props.slidesToShow
                ? props.slidesToShow
                : 1;

        const classes = useStyles();
        return (
            <SlickSlider
                ref={ref}
                {...props}
                {...settings}
                slidesToShow={slidesToShow}
                className={classes.root}
            >
                {props.children}
            </SlickSlider>
        );
    },
);
