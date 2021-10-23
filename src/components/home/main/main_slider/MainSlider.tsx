import {FC, useContext} from 'react';
import Link from 'next/link';
import {CustomSlider} from '@src/components/elements/custom_slider/CustomSlider';
import {settings} from './sliderSettings';
import {useStyles} from './useStyles';
import {Typography, Box} from '@material-ui/core';
import {HomePageCtx} from "@src/context";

export const MainSlider: FC = () => {
    const {mainSliderData} = useContext(HomePageCtx);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CustomSlider {...settings}>
                {mainSliderData.map(({id, img, title, description, url}) => (
                    <Link href={url} key={id}>
                        <a target='_blank'>
                            <Box position='relative'>
                                <img src={img} alt={title}/>
                                <Box className={classes.content}>
                                    <Typography
                                        variant='h5'
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
                ))}
            </CustomSlider>
        </div>
    );
};
