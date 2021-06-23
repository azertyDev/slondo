import {FC, useState} from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import {CustomSlider} from '@src/components/elements/custom_slider/CustomSlider';
import {Container, IconButton, Modal, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {CloseIcon} from '@root/src/components/elements/icons';
import {SlidersRefType} from '../PostContent';
import {useStyles} from './useStyles';


type SyncSlidersProps = {
    open: boolean;
    title: string;
    onClose: () => void;
    imgs: {
        alt: string;
        url: {
            default: string,
            extra: string
        };
    }[];
    slidersRefs: SlidersRefType;
};

export const ModalSyncSliders: FC<SyncSlidersProps> = (props) => {
    const {
        open,
        slidersRefs,
        onClose,
        title,
        imgs
    } = props;

    const {
        slider1,
        slider3,
        slider4
    } = slidersRefs;

    const imgsCount = !!imgs?.length ? imgs?.length : 1;

    const isMdDown = useMediaQuery(useTheme().breakpoints.down('md'));

    const [curState, setCurState] = useState(1);

    const handleBeforeSlide = (_, index) => {
        setCurState(index + 1);
    };

    const prev = () => {
        slider3 && slider3.current.slickPrev();
    };

    const next = () => {
        slider3 && slider3.current.slickNext();
    };

    const classes = useStyles({isMdDown});
    return (
        <Modal
            keepMounted
            open={open}
            onClose={onClose}
            className={classes.modal}
        >
            <div className={classes.root}>
                <div className='close-title'>
                    <div className="close-wrapper">
                        <IconButton onClick={onClose}>
                            <CloseIcon/>
                        </IconButton>
                    </div>
                    <Typography className="title" variant="h6">
                        {title}
                    </Typography>
                </div>
                <div className={classes.firstSlider}>
                    <CustomSlider
                        ref={slider3}
                        asNavFor={slider4.current}
                        centerMode={!isMdDown}
                        arrows={!isMdDown}
                        dots={isMdDown}
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
                    <Container maxWidth='lg' className={classes.secondSlider}>
                        <CustomSlider
                            ref={slider4}
                            asNavFor={slider1.current}
                            arrows={false}
                            focusOnSelect={true}
                            beforeChange={handleBeforeSlide}
                            slidesToShow={imgsCount > 3 ? 4 : imgsCount}
                        >
                            {imgs?.map(({url, alt}, i) =>
                                <img key={i} alt={alt} src={url.default}/>
                            )}
                        </CustomSlider>
                        <div className="slider-counter">
                            <CustomButton onClick={prev}>&lt;</CustomButton>
                            <Typography variant="subtitle1">
                                {curState} / {imgsCount}
                            </Typography>
                            <CustomButton onClick={next}>&gt;</CustomButton>
                        </div>
                    </Container>
                )}
            </div>
        </Modal>
    );
};
