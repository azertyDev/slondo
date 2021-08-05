import {FC, useState, useEffect} from 'react';
import {CustomSlider} from '@src/components/elements/custom_slider/CustomSlider';
import {settings} from './sliderSettings';
import {userAPI} from '@src/api/api';
import {useStyles} from './useStyles';
import {useRouter} from 'next/router';
import {Typography, Box} from '@material-ui/core';
import {Skeleton} from '@material-ui/lab';
import Link from 'next/link';

export const MainSlider: FC = () => {
    const {locale} = useRouter();

    const [sliderData, setSliderData] = useState({
        isFetch: false,
        data: []
    });

    const getSliderData = async () => {
        try {
            const params = {
                lang: locale
            };
            setSliderData({...sliderData, isFetch: true});
            const data = await userAPI.getMainSliderData(params);
            setSliderData({...sliderData, data, isFetch: false});
        } catch (error) {
            setSliderData({...sliderData, isFetch: false});
        }
    };

    useEffect(() => {
        getSliderData();
    }, [locale]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CustomSlider {...settings}>
                {sliderData.isFetch
                    ? Array.from({length: 4}, (_, k) => <Skeleton key={k} animation="wave" width="100%" />)
                    : sliderData.data.map(({id, img, title, description, url}) => (
                        <Link href={url} key={id}>
                            <a target='_blank'>
                                <Box position='relative'>
                                    <img src={img} alt={title} />
                                    <Box
                                        className={classes.content}
                                    >
                                        <Typography variant='h4' color="initial" gutterBottom>
                                            {title}
                                        </Typography>
                                        <Typography variant="subtitle1" color="initial">
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
