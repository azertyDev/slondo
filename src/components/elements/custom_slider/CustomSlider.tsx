import React, { forwardRef, PropsWithChildren } from 'react';
import SlickSlider, { Settings } from 'react-slick';
import { settings } from './sliderSettings';
import { useStyles } from './useStyles';

export const CustomSlider = forwardRef(
    (props: PropsWithChildren<Settings>, ref: any) => {
        const classes = useStyles();
        return (
            <SlickSlider
                {...settings}
                {...props}
                ref={ref}
                className={classes.root}
            >
                {props.children}
            </SlickSlider>
        );
    },
);
