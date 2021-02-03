import React, {
    FC,
    Dispatch,
    SetStateAction,
    useRef,
} from 'react';
import { IconButton } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {CustomSlider} from '@src/components/elements/custom_slider/CustomSlider';
import {useStyles} from './useStyles';


type SyncSlidersProps = {
    handleOpenModal: () => void;
    setCurrentSlide: Dispatch<SetStateAction<number>>;
    imgs: {
        alt: string;
        url: { default: string };
    }[];
};

export const SyncSliders: FC<SyncSlidersProps> = (props) => {
    const {
        imgs,
        setCurrentSlide,
        handleOpenModal,
    } = props;

    const imgsCount = !!imgs.length ? imgs.length : 1;

    const {nav1, nav2} = {
        nav1: useRef<any>(),
        nav2: useRef<any>()
    };

    const handleBeforeChange = (_, nextSlide) => {
        setCurrentSlide(nextSlide);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.firstSlider}>
                <IconButton className="favorite-btn">
                    <FavoriteBorderIcon />
                </IconButton>
                <CustomSlider
                    ref={nav1}
                    asNavFor={nav2.current}
                    variableWidth={true}
                    focusOnSelect={true}
                    beforeChange={handleBeforeChange}
                >
                    {imgs.map((img, i) =>
                        <img
                            key={i}
                            alt={img.alt}
                            src={img.url.default}
                            onClick={handleOpenModal}
                        />
                    )}
                </CustomSlider>
                <IconButton className="share-btn">
                    <ShareIcon />
                </IconButton>
            </div>
            <div className={classes.secondSlider}>
                <CustomSlider
                    ref={nav2}
                    asNavFor={nav1.current}
                    slidesToShow={imgsCount > 3 ? 4 : imgsCount}
                    focusOnSelect={true}
                    arrows={false}
                >
                    {imgs.map(({url, alt}, i) =>
                        <img key={i} alt={alt} src={url.default}/>
                    )}
                </CustomSlider>
            </div>
        </div>
    );
};
