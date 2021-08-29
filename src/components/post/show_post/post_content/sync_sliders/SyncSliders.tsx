import {FC, useContext} from 'react';
import {FavoriteBorder, Share} from '@material-ui/icons';
import {
    Box,
    Hidden,
    IconButton,
    Tooltip,
    Typography,
    ClickAwayListener,
    useMediaQuery,
    useTheme
} from '@material-ui/core';
import {CustomSlider} from '@src/components/elements/custom_slider/CustomSlider';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import {SlidersRefType} from '../PostContent';
import {AuthCtx} from '@src/context/AuthCtx';
import {useTranslation} from 'next-i18next';
import {useModal} from '@src/hooks';
import {useStyles} from './useStyles';

type SyncSlidersProps = {
    title: string,
    isCreator: boolean,
    handleOpenModal: () => void,
    imgs: {
        alt: string;
        url: { default: string, extra: string };
    }[],
    slidersRefs: SlidersRefType,
    handleFavorite: () => void,
    isFavorite: boolean,
    favoriteCount: number
};

export const SyncSliders: FC<SyncSlidersProps> = (props) => {
    const {
        title,
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

    const {t} = useTranslation('errors');
    const {isAuth} = useContext(AuthCtx).auth;
    const imgsCount = !!imgs.length ? imgs.length : 1;
    const isMdDown = useMediaQuery(useTheme().breakpoints.down('md'));
    const {modalOpen: openTooltip, handleModalOpen: handleOpenTooltip, handleModalClose: handleCloseTooltip} = useModal();

    const handlePrevPath = () => {
        window.close();
    };

    const handleShare = async () => {
        if (navigator.share && isMdDown) {
            await navigator.share({
                title: title,
                url: window.location.href
            })
        } else {
            await navigator.clipboard.writeText(window.location.href);
            handleOpenTooltip();
        }
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
                            <KeyboardArrowLeftIcon/>
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
                            <ClickAwayListener onClickAway={handleCloseTooltip}>
                                <Tooltip
                                    arrow
                                    placement='bottom'
                                    PopperProps={{
                                        disablePortal: true
                                    }}
                                    onClose={handleCloseTooltip}
                                    open={openTooltip}
                                    disableFocusListener
                                    disableHoverListener
                                    disableTouchListener
                                    title={t('common:copied')}
                                >
                                    <IconButton className="share-btn" onClick={handleShare}>
                                        <Share/>
                                    </IconButton>
                                </Tooltip>
                            </ClickAwayListener>
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
