import 'react-multi-carousel/lib/styles.css';

import {forwardRef, PropsWithChildren} from 'react';
import Carousel, {ResponsiveType} from 'react-multi-carousel';
import {useStyles} from './useStyles';

type SliderProps = {
    config: {
        autoPlay?: boolean;
        autoPlaySpeed?: number;
        responsive: ResponsiveType;
        itemClass?: string;
    };
};

export const Slider = forwardRef<any, PropsWithChildren<SliderProps>>(
    (props, ref) => {
        const {config, children} = props;

        const classes = useStyles();
        return (
            <div className={classes.root}>
                <Carousel
                    ssr
                    ref={ref}
                    keyBoardControl
                    {...config}
                    removeArrowOnDeviceType={['tablet', 'mobile', 'mobileS']}
                >
                    {children}
                </Carousel>
            </div>
        );
    }
);
