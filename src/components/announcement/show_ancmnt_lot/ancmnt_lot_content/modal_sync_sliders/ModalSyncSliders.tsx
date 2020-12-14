import React, {
    FC,
    Dispatch,
    SetStateAction,
    MutableRefObject,
    useRef,
    useState,
    useEffect,
} from 'react';
import {CustomSlider} from '../../../../elements/custom_slider/CustomSlider';
import {useStyles} from './useStyles';
import {Typography} from "@material-ui/core";


type SyncSlidersProps = {
    initialSlide: number;
    setInitialSlide: Dispatch<SetStateAction<number>>;
    imgs: {
        alt: string;
        url: { default: string }
    }[];
};

export const ModalSyncSliders: FC<SyncSlidersProps> = (props) => {
    const {
        imgs,
        initialSlide,
        setInitialSlide,
    } = props;

    const [slidersNav, setSlidersNav] = useState({nav1: null, nav2: null});
    const slider1: MutableRefObject<unknown> = useRef();
    const slider2: MutableRefObject<unknown> = useRef();

    const handleAfterChange = (slide) => {
        setInitialSlide(slide);
    };

    const prev = () => {
        slidersNav.nav2.slickPrev();
    };

    const next = () => {
        slidersNav.nav2.slickNext();
    };

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
                <CustomSlider
                    ref={slider1}
                    asNavFor={slidersNav.nav2}
                    centerMode={imgs.length === 1}
                    initialSlide={initialSlide}
                    afterChange={handleAfterChange}
                >
                    {imgs.map((img, i) => (
                        <img
                            key={i}
                            alt={img.alt}
                            src={img.url.default}
                        />
                    ))}
                </CustomSlider>
            </div>
            <div className={classes.secondSlider}>
                <CustomSlider
                    ref={slider2}
                    asNavFor={slidersNav.nav1}
                    slidesToShow={4}
                    slidesToScroll={1}
                    focusOnSelect={true}
                    arrows={false}
                    initialSlide={initialSlide}
                >
                    {imgs.map(({url, alt}, i) => (
                        <img
                            key={i}
                            alt={alt}
                            src={url.default}
                        />
                    ))}
                </CustomSlider>
                <div className='slider-counter'>
                    <button onClick={prev}>prev</button>
                    <Typography variant="subtitle1">
                        {initialSlide + 1} / {imgs.length}
                    </Typography>
                    <button onClick={next}>next</button>
                </div>
            </div>
        </div>
    );
};