import React, {FC} from 'react';
import {IconButton, useMediaQuery, useTheme} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {CustomSlider} from '@src/components/elements/custom_slider/CustomSlider';
import {SlidersRefType} from '../../ShowPostContainer';
import {useStyles} from './useStyles';
import CustomTooltip from '@src/components/elements/custom_tooltip/CustomTooltip';


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
        slider3
    } = slidersRefs;

    const imgsCount = !!imgs?.length ? imgs?.length : 1;

    const copyUrl = () => {
        const copiedUrl = window.location.href
        navigator.clipboard.writeText(copiedUrl)
    };

    const theme = useTheme();
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.firstSlider}>
                <IconButton className="favorite-btn">
                    <FavoriteBorderIcon/>
                </IconButton>
                <CustomSlider
                    focusOnSelect={true}
                    arrows={!isMdDown}
                    variableWidth={!isMdDown}
                    ref={slider1}
                    dots={isMdDown}
                    asNavFor={isMdDown ? null : slider2.current}
                >
                    {imgs?.map((img, i) =>
                        <img
                            key={i}
                            alt={img.alt}
                            src={img.url.default}
                            onClick={handleOpenModal}
                        />
                    )}
                </CustomSlider>
                <IconButton className="share-btn" onClick={copyUrl}>
                    <CustomTooltip title={'Скопировано!'} arrow/>
                </IconButton>
            </div>
            {!isMdDown && imgsCount > 1 && (
                <div className={classes.secondSlider}>
                    <CustomSlider
                        ref={slider2}
                        asNavFor={slider3.current}
                        slidesToShow={imgsCount > 3 ? 4 : imgsCount}
                        focusOnSelect={true}
                        arrows={false}
                    >
                        {imgs?.map(({url, alt}, i) =>
                            <img key={i} alt={alt} src={url.default}/>
                        )}
                    </CustomSlider>
                </div>
            )}
        </div>
    );
};
