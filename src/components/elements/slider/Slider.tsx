import {FC} from 'react';
import Carousel, {ResponsiveType} from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {useStyles} from './useStyles';

type SliderProps = {
    config: {
        autoPlay?: boolean;
        autoPlaySpeed?: number;
        responsive: ResponsiveType,
        itemClass?: string;
    }
}

export const Slider: FC<SliderProps> = (props) => {
    const {config, children} = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Carousel
                {...config}
                ssr
                partialVisible
                removeArrowOnDeviceType={['tablet', 'mobile', 'mobileS']}
            >
                {children}
            </Carousel>
        </div>
    );
};