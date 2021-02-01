import React, {
    FC,
    Dispatch,
    SetStateAction,
    MutableRefObject,
    useRef,
    useState,
    useEffect,
} from 'react';
import { CustomSlider } from '@src/components/elements/custom_slider/CustomSlider';
import InnerImageZoom from 'react-inner-image-zoom';
import { Container, IconButton, Modal, Typography } from '@material-ui/core';
import { ButtonComponent } from '@src/components/elements/button/Button';
import { CloseIcon } from '@root/src/components/elements/icons';
import { useStyles } from './useStyles';

type SyncSlidersProps = {
    open: boolean;
    onClose: () => void;
    title: string;
    initialSlide: number;
    setInitialSlide: Dispatch<SetStateAction<number>>;
    imgs: {
        alt: string;
        url: { default: string };
    }[];
};

export const ModalSyncSliders: FC<SyncSlidersProps> = (props) => {
    const { open, onClose, title, imgs, initialSlide, setInitialSlide } = props;

    const [slidersNav, setSlidersNav] = useState({ nav1: null, nav2: null });

    const slider1: MutableRefObject<unknown> = useRef();
    const slider2: MutableRefObject<unknown> = useRef();

    const handleAfterChange = (slide) => {
        setInitialSlide(slide);
    };

    const prev = () => {
        slidersNav.nav2.slickPrev();
    };

    const next = () => {
        slidersNav.nav2.slickNext();
    };

    useEffect(() => {
        setSlidersNav({
            nav1: slider1.current,
            nav2: slider2.current,
        });
    }, []);

    const classes = useStyles();
    return (
        <Modal open={open} onClose={onClose} className={classes.modal}>
            <Container className={classes.root} maxWidth="xl">
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
                <Typography className="title" variant="h6">
                    {title}
                </Typography>
                <div className={classes.firstSlider}>
                    <CustomSlider
                        ref={slider1}
                        asNavFor={slidersNav.nav2}
                        centerMode={imgs.length === 1}
                        initialSlide={initialSlide}
                        afterChange={handleAfterChange}
                    >
                        {imgs.map((img, i) => (
                            <InnerImageZoom
                                className="image-zoom"
                                key={i}
                                src={img.url.default}
                                fullscreenOnMobile={true}
                                moveType="drag"
                                zoomScale={1.7}
                            />
                        ))}
                    </CustomSlider>
                </div>
                <div className={classes.secondSlider}>
                    <CustomSlider
                        ref={slider2}
                        asNavFor={slidersNav.nav1}
                        slidesToShow={imgs.length}
                        slidesToScroll={1}
                        focusOnSelect={true}
                        arrows={false}
                        initialSlide={initialSlide}
                    >
                        {imgs.map(({ url, alt }, i) => (
                            <img key={i} alt={alt} src={url.default} />
                        ))}
                    </CustomSlider>
                    <div className="slider-counter">
                        <ButtonComponent onClick={prev}>&lt;</ButtonComponent>
                        <Typography variant="subtitle1">
                            {initialSlide + 1} / {imgs.length}
                        </Typography>
                        <ButtonComponent onClick={next}>&gt;</ButtonComponent>
                    </div>
                </div>
            </Container>
        </Modal>
    );
};
