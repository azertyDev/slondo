import React, {FC} from 'react';
import {IconButton} from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {CustomSlider} from '@src/components/elements/custom_slider/CustomSlider';
import {SlidersRefType} from "../../ShowPostContainer";
import {useStyles} from './useStyles';


type SyncSlidersProps = {
    handleOpenModal: () => void;
    imgs: {
        alt: string;
        url: { default: string };
    }[];
    slidersRefs: SlidersRefType;
};

export const SyncSliders: FC<SyncSlidersProps> = (props) => {
    const {
        imgs,
        handleOpenModal,
        slidersRefs
    } = props;

    const {
        slider1,
        slider2,
        slider3,
    } = slidersRefs;

    const imgsCount = !!imgs.length ? imgs.length : 1;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.firstSlider}>
                <IconButton className="favorite-btn">
                    <FavoriteBorderIcon/>
                </IconButton>
                <CustomSlider
                    ref={slider1}
                    asNavFor={slider2.current}
                    variableWidth={true}
                    focusOnSelect={true}
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
                    <ShareIcon/>
                </IconButton>
            </div>
            <div className={classes.secondSlider}>
                <CustomSlider
                    ref={slider2}
                    asNavFor={slider3.current}
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
