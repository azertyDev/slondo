import React, {
    FC,
    Dispatch,
    SetStateAction,
    useRef
} from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import {CustomSlider} from '@src/components/elements/custom_slider/CustomSlider';
import {Container, IconButton, Modal, Typography} from '@material-ui/core';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {CloseIcon} from '@root/src/components/elements/icons';
import {useStyles} from './useStyles';


type SyncSlidersProps = {
    open: boolean;
    title: string;
    onClose: () => void;
    currentSlide: number;
    setCurrentSlide: Dispatch<SetStateAction<number>>;
    imgs: {
        alt: string;
        url: { default: string };
    }[];
};

export const ModalSyncSliders: FC<SyncSlidersProps> = (props) => {
    const {
        open,
        onClose,
        title,
        imgs,
        currentSlide,
        setCurrentSlide
    } = props;

    const imgsCount = !!imgs.length ? imgs.length : 1;

    const {nav1, nav2} = {
        nav1: useRef<any>(),
        nav2: useRef<any>()
    };

    const handleAfterChange = slide => {
        setCurrentSlide(slide);
    };

    const prev = () => {
        nav2 && nav2.current.slickPrev();
    };

    const next = () => {
        nav2 && nav2.current.slickNext();
    };

    const classes = useStyles();
    return (
        <Modal open={open} onClose={onClose} className={classes.modal}>
            <div className={classes.root}>
                <IconButton onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
                <Typography className="title" variant="h6">
                    {title}
                </Typography>
                <div className={classes.firstSlider}>
                    <CustomSlider
                        ref={nav1}
                        asNavFor={nav2.current}
                        centerMode={true}
                        initialSlide={currentSlide}
                        slidesToShow={1}
                        afterChange={handleAfterChange}
                    >
                        {imgs.map((img, i) =>
                            <InnerImageZoom
                                key={i}
                                className="image-zoom"
                                src={img.url.default}
                                fullscreenOnMobile={true}
                                moveType="drag"
                                zoomScale={1.7}
                            />
                        )}
                    </CustomSlider>
                </div>
                <Container maxWidth='lg' className={classes.secondSlider}>
                    <CustomSlider
                        ref={nav2}
                        asNavFor={nav1.current}
                        arrows={false}
                        focusOnSelect={true}
                        slidesToScroll={1}
                        initialSlide={currentSlide}
                        afterChange={handleAfterChange}
                        slidesToShow={imgsCount > 3 ? 4 : imgsCount}
                    >
                        {imgs.map(({url, alt}, i) =>
                            <img key={i} alt={alt} src={url.default}/>
                        )}
                    </CustomSlider>
                    <div className="slider-counter">
                        <ButtonComponent onClick={prev}>&lt;</ButtonComponent>
                        <Typography variant="subtitle1">
                            {currentSlide + 1} / {imgs.length}
                        </Typography>
                        <ButtonComponent onClick={next}>&gt;</ButtonComponent>
                    </div>
                </Container>
            </div>
        </Modal>
    );
};
