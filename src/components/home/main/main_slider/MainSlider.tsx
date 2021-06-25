import {CustomSlider} from '@src/components/elements/custom_slider/CustomSlider';
import {FC, useState, useEffect, Fragment} from 'react';
import {settings} from './sliderSettings';
import { userAPI} from '@src/api/api';
import {useStyles} from './useStyles';
import { useRouter } from 'next/router';
import {Typography, Box} from '@material-ui/core'

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
    }

    console.log(sliderData);

    useEffect(() => {
        getSliderData();
    }, [locale])

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CustomSlider {...settings}>
                {
                    sliderData.data.map(({ id, img, title, description }) => {
                        return (
                            <Box key={id} position='relative'>
                                <img src={img} alt={title} />
                                <Box 
                                    position='absolute' 
                                    top='40px' 
                                    left='10px' 
                                    width='60%'
                                    className={classes.content}
                                >
                                    <Typography variant="h5" color="initial" gutterBottom>
                                        {title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="initial">
                                        {description}
                                    </Typography>
                                </Box>
                            </Box>
                        )
                    })
                }
            </CustomSlider>
        </div>
    );
};
