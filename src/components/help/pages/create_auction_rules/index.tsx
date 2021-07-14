import {Box, Grid, Typography} from '@material-ui/core';
import {useTranslation, Trans} from 'react-i18next';
import {useStyles} from '../useStyles';

const CreateAuctionRules = () => {
    const {t} = useTranslation('help');

    const classes = useStyles();
    return (
        <>
            <Grid item xs={12} className={classes.root}>
                <Box display='block' mb={2} padding='10px 0'>
                    <Typography variant='h6'>
                        {t('how_to_create_auction.name')}
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1' className='color-silver'>
                            {t('how_to_create_auction.1')}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className='image-wrapper'>
                            <img src="/img/help_page/auction/1.png" alt="" className='image' />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className='image-wrapper'>
                            <img src="/img/help_page/auction/2.png" alt="" className='image' />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1' className='fs-18'>
                            <Trans
                                t={t}
                                i18nKey="how_to_create_auction.section.0"
                                components={[<span className='error-text' />]}
                            />
                        </Typography>
                        <Typography variant='subtitle1' className='color-silver'>
                            {t('how_to_create_auction.section.1')}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className='image-wrapper bg-color'>
                            <img src="/img/help_page/auction/3.png" alt="" className='image' />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1'>
                            <Trans
                                i18nKey="how_to_create_auction.section.2"
                                t={t}
                                components={[<span className='term' />, <span className='color-silver' />]}
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className='image-wrapper bg-color'>
                            <img src="/img/help_page/auction/4.png" alt="" className='image' />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1'>
                            <Trans
                                i18nKey="how_to_create_auction.section.3"
                                t={t}
                                components={[<span className='term' />, <span className='color-silver' />]}
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className='image-wrapper bg-color'>
                            <img src="/img/help_page/auction/5.png" alt="" className='image' />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1' className='mb-18'>
                            {t('how_to_create_auction.section.4')}
                        </Typography>
                        <Typography variant='subtitle1'>
                            <Trans
                                i18nKey="how_to_create_auction.section.5"
                                t={t}
                                components={[<span className='term' />, <span className='color-silver' />]}
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className='image-wrapper bg-color'>
                            <img src="/img/help_page/auction/6.png" alt="" className='image' />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1'>
                            <Trans
                                t={t}
                                i18nKey="how_to_create_auction.section.6"
                                components={[<span className='term' />, <span className='color-silver' />]}
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className='image-wrapper bg-color'>
                            <img src="/img/help_page/auction/7.png" alt="" className='image' />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1'>
                            <Trans
                                t={t}
                                i18nKey="how_to_create_auction.section.7"
                                components={[<span className='term' />, <span className='color-silver' />,
                                    <span className='color-orange' />]}
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className='image-wrapper bg-color'>
                            <img src="/img/help_page/auction/8.png" alt="" className='image' />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1'>
                            <Trans
                                t={t}
                                i18nKey="how_to_create_auction.section.8"
                                components={[<span className='term' />, <span className='color-silver' />]}
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className='image-wrapper bg-color'>
                            <img src="/img/help_page/auction/9.png" alt="" className='image' />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1'>
                            <Trans
                                t={t}
                                i18nKey="how_to_create_auction.section.9"
                                components={[<span className='term' />, <span className='color-silver' />]}
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className='image-wrapper bg-color'>
                            <img src="/img/help_page/auction/10.png" alt="" className='image' />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1'>
                            <Trans
                                t={t}
                                i18nKey="how_to_create_auction.section.10"
                                components={[<span className='term' />, <span className='color-silver' />]}
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className='image-wrapper bg-color'>
                            <img src="/img/help_page/auction/11.png" alt="" className='image' />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1'>
                            <Trans
                                t={t}
                                i18nKey="how_to_create_auction.section.11"
                                components={[<span className='term' />, <span className='color-silver' />]}
                            />
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box className='image-wrapper bg-color'>
                            <img src="/img/help_page/auction/12.png" alt="" className='image' />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1'>
                            {t('how_to_create_auction.section.12')}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default CreateAuctionRules;
