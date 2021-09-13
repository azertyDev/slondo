import {FC, useContext, useRef} from 'react';
import {FavoriteBorder, Share} from '@material-ui/icons';
import InnerImageZoom from 'react-inner-image-zoom';
import {
    Box,
    Hidden,
    IconButton,
    Tooltip,
    Typography,
    ClickAwayListener,
    useMediaQuery,
    useTheme,
    Container,
    Modal
} from '@material-ui/core';
import {CustomSlider} from '@src/components/elements/custom_slider/CustomSlider';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import {CloseIcon} from "@src/components/elements/icons";
import {AuthCtx} from '@src/context/AuthCtx';
import {useTranslation} from 'next-i18next';
import {useModal} from '@src/hooks';
import {useStyles} from './useStyles';

type SyncSlidersProps = {
    post: {
        title: string,
        description: string
    },
    isCreator: boolean,
    imgs: {
        alt: string;
        url: { default: string, extra: string };
    }[],
    handleFavorite: () => void,
    isFavorite: boolean,
    favoriteCount: number
};

export const SyncSliders: FC<SyncSlidersProps> = (props: SyncSlidersProps) => {
    const {
        post,
        isCreator,
        imgs = [],
        handleFavorite,
        isFavorite,
        favoriteCount
    } = props;

    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();

    const {t} = useTranslation('errors');
    const {isAuth} = useContext(AuthCtx).auth;
    const imgsCount = !!imgs.length ? imgs.length : 1;
    const isMdDown = useMediaQuery(useTheme().breakpoints.down('md'));

    const {
        modalOpen: openTooltip,
        handleModalOpen: handleOpenTooltip,
        handleModalClose: handleCloseTooltip
    } = useModal();

    const {
        modalOpen: sliderOpen,
        handleModalOpen: handleSliderOpen,
        handleModalClose: handleSliderClose
    } = useModal();

    const handlePrevPath = () => {
        window.close();
    };

    const handleShare = async () => {
        if (navigator.share && isMdDown) {
            await navigator.share({
                title: post.title,
                text: post.description,
                url: window.location.href
            });
        } else {
            await navigator.clipboard.writeText(window.location.href);
            handleOpenTooltip();
        }
    };

    const classes = useStyles({isFavorite});
    return (
        <div className={classes.root}>
            <div className='first-slider'>
                <CustomSlider
                    ref={ref1}
                    asNavFor={isMdDown ? ref3.current : ref2.current}
                    variableWidth
                    focusOnSelect={true}
                    arrows={!isMdDown}
                    dots={isMdDown}
                >
                    {imgs.map((img, i) =>
                        <img
                            key={i}
                            alt={img.alt}
                            src={img.url.extra}
                            onClick={handleSliderOpen}
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
                                    open={openTooltip}
                                    disableFocusListener
                                    disableHoverListener
                                    disableTouchListener
                                    onClose={handleCloseTooltip}
                                    title={t('common:copied')}
                                    PopperProps={{disablePortal: true}}
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
                <div className='second-slider'>
                    <CustomSlider
                        ref={ref2}
                        asNavFor={ref3.current}
                        arrows={false}
                        focusOnSelect={true}
                        slidesToShow={imgsCount > 3 ? 4 : imgsCount}
                    >
                        {imgs.map(({url, alt}, i) =>
                            <img key={i} alt={alt} src={url.extra}/>
                        )}
                    </CustomSlider>
                </div>
            )}
            <Modal
                keepMounted
                open={sliderOpen}
                className={classes.modal}
                onClose={handleSliderClose}
            >
                <div className='modal-root'>
                    <div className='close-title'>
                        <div className="close-wrapper">
                            <IconButton onClick={handleSliderClose}>
                                <CloseIcon/>
                            </IconButton>
                        </div>
                        <Typography className="title" variant="h6">
                            {post.title}
                        </Typography>
                    </div>
                    <div className='first-slider'>
                        <CustomSlider
                            ref={ref3}
                            asNavFor={isMdDown ? ref1.current : ref4.current}
                            dots={isMdDown}
                            arrows={!isMdDown}
                            centerMode={!isMdDown}
                        >
                            {imgs?.map((img, i) =>
                                <InnerImageZoom
                                    key={i}
                                    moveType="drag"
                                    zoomScale={1.7}
                                    src={img.url.extra}
                                    className="image-zoom"
                                    fullscreenOnMobile={true}
                                />
                            )}
                        </CustomSlider>
                    </div>
                    {!isMdDown && imgsCount > 1 && (
                        <Container maxWidth='lg' className='second-slider'>
                            <CustomSlider
                                ref={ref4}
                                asNavFor={ref1.current}
                                arrows={false}
                                focusOnSelect={true}
                                slidesToShow={imgsCount > 3 ? 4 : imgsCount}
                            >
                                {imgs?.map(({url, alt}, i) =>
                                    <img key={i} alt={alt} src={url.extra}/>
                                )}
                            </CustomSlider>
                        </Container>
                    )}
                </div>
            </Modal>
        </div>

    );
};
