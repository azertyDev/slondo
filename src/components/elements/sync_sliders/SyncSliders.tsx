import React, {Dispatch, FC, MutableRefObject, SetStateAction, useEffect, useRef, useState} from 'react';
import {CustomSlider} from '../custom_slider/CustomSlider';
import {useStyles} from './useStyles';


type SyncSlidersProps = {
    isModalOpen: boolean;
    currentSlide: number;
    handleOpenModal?: () => void;
    setCurrentSlide: Dispatch<SetStateAction<number>>;
    imgs: {
        alt: string;
        url: { default: string }
    }[];
};

export const SyncSliders: FC<SyncSlidersProps> = (props) => {
    const {isModalOpen = false, imgs} = props;

    const [slidersNav, setSlidersNav] = useState({nav1: null, nav2: null});
    const slider1: MutableRefObject<unknown> = useRef();
    const slider2: MutableRefObject<unknown> = useRef();

    const handleAfterChange = (newIndex) => {
        props.setCurrentSlide(newIndex);
    };

    useEffect(() => {
        setSlidersNav({
            nav1: slider1.current,
            nav2: slider2.current,
        });
    }, []);

    const classes = useStyles(isModalOpen);
    return (
        <div className={classes.root}>
            <div className={classes.firstSlider}>
                <CustomSlider
                    ref={slider1}
                    centerMode={isModalOpen || imgs.length < 2}
                    asNavFor={slidersNav.nav2}
                    afterChange={handleAfterChange}
                    variableWidth={!isModalOpen}
                    initialSlide={props.currentSlide}
                >
                    {
                        imgs.map(({url, alt}, i) => (
                            <img
                                key={i}
                                alt={alt}
                                src={url.default}
                                onClick={props.handleOpenModal}
                            />
                        ))
                    }
                </CustomSlider>
            </div>
            <div className={classes.secondSlider}>
                <CustomSlider
                    ref={slider2}
                    slidesToShow={4}
                    slidesToScroll={1}
                    arrows={false}
                    infinite={true}
                    focusOnSelect={true}
                    asNavFor={slidersNav.nav1}
                    afterChange={handleAfterChange}
                >
                    {
                        imgs.map(({url, alt}, i) => (
                            <img
                                key={i}
                                alt={alt}
                                src={url.default}
                            />
                        ))
                    }
                </CustomSlider>
            </div>
        </div>
    );
};
