import { HomePageCtx } from '@src/context';
import { FC, useContext } from 'react';
import { useStyles } from './useStyles';

const config = {
    itemClass: 'slide-item',
    autoPlay: true,
    infinite: true,
    autoPlaySpeed: 7000,
    partialVisible: true,
    responsive: {
        desktop: {
            breakpoint: {max: 1920, min: 992},
            items: 3
        },
        tablet: {
            breakpoint: {max: 992, min: 576},
            items: 2
        },
        mobile: {
            breakpoint: {max: 576, min: 0},
            items: 1,
            partialVisibilityGutter: 40
        }
    }
};

export const MainSlider: FC = () => {
    const {mainSliderData} = useContext(HomePageCtx);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/* <Slider config={config}> */}
            {/* {mainSliderData.map(({id, img, title, description, url}) => (
                    <Link href={url} key={id}>
                        <a target="_blank" rel="nofollow">
                            <Box position="relative">
                                <img src={img} alt={title} />
                                <Box className={classes.content}>
                                    <Typography
                                        variant="h5"
                                        gutterBottom
                                        color="initial"
                                    >
                                        {title}
                                    </Typography>
                                    <Typography
                                        color="initial"
                                        variant="subtitle2"
                                    >
                                        {description}
                                    </Typography>
                                </Box>
                            </Box>
                        </a>
                    </Link>
                ))} */}
            {/* </Slider> */}
        </div>
    );
};
