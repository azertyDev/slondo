import React, {forwardRef, PropsWithChildren} from 'react';
import SlickSlider from 'react-slick';
import {settings} from './sliderSettings';
// styles
import {useStyles} from './useStyles';


export const CustomSlider = forwardRef(
    (props: PropsWithChildren<any>, ref: any) => {
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
