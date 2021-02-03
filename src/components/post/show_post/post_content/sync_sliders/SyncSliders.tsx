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
import { IconButton } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useStyles } from './useStyles';

type SyncSlidersProps = {
    handleOpenModal: () => void;
    setInitialSlide: Dispatch<SetStateAction<number>>;
    imgs: {
        alt: string;
        url: { default: string };
    }[];
};

export const SyncSliders: FC<SyncSlidersProps> = (props) => {
    const { imgs, setInitialSlide, handleOpenModal } = props;

    const [slidersNav, setSlidersNav] = useState({ nav1: null, nav2: null });

    const slider1: MutableRefObject<unknown> = useRef();
    const slider2: MutableRefObject<unknown> = useRef();

    const handleBeforeChange = (_, nextSlide) => {
        setInitialSlide(nextSlide);
    };

    useEffect(() => {
        setSlidersNav({
            nav1: slider1.current,
            nav2: slider2.current,
        });
    }, []);

    const classes = useStyles({ imgs });
    return (
        <div className={classes.root}>
            <div className={classes.firstSlider}>
                <IconButton className="favorite-btn">
                    <FavoriteBorderIcon />
                </IconButton>
                <CustomSlider
                    ref={slider1}
                    asNavFor={slidersNav.nav2}
                    centerMode={imgs.length === 1}
                    variableWidth={true}
                    focusOnSelect={true}
                    beforeChange={handleBeforeChange}
                >
                    {imgs.map((img, i) => (
                        <img
                            key={i}
                            alt={img.alt}
                            src={img.url.default}
                            onClick={handleOpenModal}
                        />
                    ))}
                </CustomSlider>
                <IconButton className="share-btn">
                    <ShareIcon />
                </IconButton>
            </div>
            <div className={classes.secondSlider}>
                <CustomSlider
                    ref={slider2}
                    asNavFor={slidersNav.nav1}
                    slidesToShow={imgs.length}
                    slidesToScroll={1}
                    focusOnSelect={true}
                    arrows={false}
                >
                    {imgs.map(({ url, alt }, i) => (
                        <img key={i} alt={alt} src={url.default} />
                    ))}
                </CustomSlider>
            </div>
        </div>
    );
};
