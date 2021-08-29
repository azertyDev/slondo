import {forwardRef, PropsWithChildren} from 'react';
import SlickSlider, {Settings} from 'react-slick';
import {settings} from './sliderSettings';
import {useStyles} from './useStyles';

export const CustomSlider = forwardRef<any, PropsWithChildren<Settings>>(
    (props, ref) => {
        const classes = useStyles();
        return (
            <SlickSlider
                ref={ref}
                {...props}
                {...settings}
                className={classes.root}
            >
                {props.children}
            </SlickSlider>
        );
    }
);
