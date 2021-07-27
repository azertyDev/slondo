import React, {useEffect, useState} from 'react';
import {Box, Card, CardContent, CardMedia, Grid, Typography} from '@material-ui/core';
import {useStyles} from '../useStyles';
import {useTranslation} from 'next-i18next';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';

export const PromotionCard = () => {
    const {t} = useTranslation('promotions');
    const [resize, setResize] = useState(false);

    const [descHeight, setDescHeight] = useState(0);

    useEffect(() => {
        setDescHeight(document.getElementById('content').clientHeight);
    }, []);

    const toggleSize = () => {
        setResize(!resize);
    };

    const classes = useStyles({resize});
    return (
        <Grid item xs={12} md={8} lg={9}>
            <Card elevation={0} className={classes.card}>
                <Box height={1} display='flex' flexWrap='wrap'>
                    <Grid item xs={resize ? 12 : 4}>
                        <CardMedia
                            className={classes.media}
                            image="https://image.freepik.com/free-vector/gradient-sale-background_23-2148934477.jpg"
                            title="Contemplative Reptile"
                        />
                    </Grid>
                    <Grid item xs={resize ? 12 : 8}>
                        <CardContent id='content'>
                            <Typography gutterBottom variant="h5" component="h2" noWrap paragraph>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the
                            </Typography>
                            <Typography
                                variant='subtitle1'
                                component='p'
                                className={!resize ? classes.hidden : ''}
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book. It has survived not only five centuries, but also
                                the leap into electronic typesetting, remaining essentially unchanged. It
                                was popularised in the 1960s with the release of Letraset sheets containing
                                Lorem Ipsum passages, and more recently with desktop publishing software
                                like Aldus PageMaker including versions of Lorem Ipsum.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book. It has survived not only five centuries, but also
                                the leap into electronic typesetting, remaining essentially unchanged. It
                                was popularised in the 1960s with the release of Letraset sheets containing
                                Lorem Ipsum passages, and more recently with desktop publishing software
                                like Aldus PageMaker including versions of Lorem Ipsum.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book. It has survived not only five centuries, but also
                                the leap into electronic typesetting, remaining essentially unchanged. It
                                was popularised in the 1960s with the release of Letraset sheets containing
                                Lorem Ipsum passages, and more recently with desktop publishing software
                                like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                            {descHeight >= 95 && (
                                <CustomButton
                                    disableRipple
                                    onClick={toggleSize}
                                    className='show-more-button'
                                >
                                    {resize
                                        ? <Typography variant='subtitle1'>
                                            {t('showMore')}
                                        </Typography>
                                        : <Typography variant='subtitle1'>
                                            {t('hide')}
                                        </Typography>}
                                </CustomButton>
                            )}
                        </CardContent>
                    </Grid>
                </Box>
            </Card>
        </Grid>
    );
};
