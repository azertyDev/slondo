import {FC, useContext} from 'react';
import {KeyboardBackspace, FavoriteBorder} from '@material-ui/icons';
import {Box, Hidden, IconButton, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {CustomSlider} from '@src/components/elements/custom_slider/CustomSlider';
import CustomTooltip from '@src/components/elements/custom_tooltip/CustomTooltip';
import {SlidersRefType} from '../PostContent';
import {useTranslation} from "next-i18next";
import {AuthCtx} from "@src/context/AuthCtx";
import {useStyles} from './useStyles';

type SyncSlidersProps = {
    isCreator: boolean,
    handleOpenModal: () => void;
    imgs: {
        alt: string;
        url: { default: string, extra: string };
    }[];
    slidersRefs: SlidersRefType;
    handleFavorite: () => void;
    isFavorite: boolean;
    favoriteCount: number;
};

export const SyncSliders: FC<SyncSlidersProps> = (props) => {
    const {
        isCreator,
        imgs = [],
        handleOpenModal,
        slidersRefs,
        handleFavorite,
        isFavorite,
        favoriteCount
    } = props;


    const {
        slider1,
        slider2,
        slider3
    } = slidersRefs;

    const {t} = useTranslation('common');
    const {isAuth} = useContext(AuthCtx).auth;
    const imgsCount = !!imgs.length ? imgs.length : 1;
    const isMdDown = useMediaQuery(useTheme().breakpoints.down('md'));

    const copyUrl = () => {
        const copiedUrl = window.location.href;
        navigator.clipboard.writeText(copiedUrl);
    };

    const handlePrevPath = () => {
        window.close();
    };

    const classes = useStyles({isFavorite});
    return (
        <div className={classes.root}>
            <div className={classes.firstSlider}>
                <CustomSlider
                    variableWidth
                    focusOnSelect={true}
                    arrows={!isMdDown}
                    ref={slider1}
                    dots={isMdDown}
                    asNavFor={isMdDown ? null : slider2.current}
                >
                    {imgs.map((img, i) =>
                        <img
                            key={i}
                            alt={img.alt}
                            src={img.url.extra}
                            onClick={handleOpenModal}
                        />
                    )}
                </CustomSlider>
                <div className="icon-buttons">
                    <Hidden lgUp>
                        <IconButton
                            onClick={handlePrevPath}
                            className="backspace-btn"
                        >
                            <KeyboardBackspace/>
                        </IconButton>
                    </Hidden>
                    {!!imgs.length && (
                        <div className='share-favo-btns'>
                            {isAuth && !isCreator && (
                                <Box className="favorite-count">
                                    <IconButton className="favorite-btn" onClick={handleFavorite}>
                                        <FavoriteBorder/>
                                    </IconButton>
                                    <div>
                                        <Typography variant='subtitle1'>
                                            {favoriteCount}
                                        </Typography>
                                    </div>
                                </Box>
                            )}
                            <IconButton className="share-btn" onClick={copyUrl}>
                                <CustomTooltip title={t('copied')} arrow/>
                            </IconButton>
                        </div>
                    )}
                </div>
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
                        {imgs.map(({url, alt}, i) =>
                            <img key={i} alt={alt} src={url.extra}/>
                        )}
                    </CustomSlider>
                </div>
            )}
        </div>
    );
};
