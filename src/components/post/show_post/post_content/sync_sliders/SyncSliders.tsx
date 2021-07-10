import {FC, useContext} from 'react';
import {Box, Hidden, IconButton, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {KeyboardBackspace, FavoriteBorder} from '@material-ui/icons';
import {CustomSlider} from '@src/components/elements/custom_slider/CustomSlider';
import {SlidersRefType} from '../PostContent';
import CustomTooltip from '@src/components/elements/custom_tooltip/CustomTooltip';
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

    const imgsCount = !!imgs.length ? imgs.length : 1;
    const isMdDown = useMediaQuery(useTheme().breakpoints.down('md'));
    const {isAuth} = useContext(AuthCtx).auth;

    const copyUrl = () => {
        const copiedUrl = window.location.href;
        navigator.clipboard.writeText(copiedUrl);
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
                        <IconButton className="backspace-btn">
                            <KeyboardBackspace/>
                        </IconButton>
                    </Hidden>
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
                            <CustomTooltip title={'Скопировано!'} arrow/>
                        </IconButton>
                    </div>
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
