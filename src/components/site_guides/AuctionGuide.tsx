import {FC} from 'react';
import {Box, Container, Grid, Hidden, Paper, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {useStyles} from './useStyles';
import {WithT} from 'i18next';
import Link from 'next/link';

const cardItemsData = {
    auction: [
        {
            imgUrl: '/img/safe_deal/auction/auction1.png',
            text: 'auction.advice_1'
        },
        {
            imgUrl: '/img/safe_deal/auction/auction2.png',
            text: 'auction.advice_2'
        },
        {
            imgUrl: '/img/safe_deal/auction/auction3.png',
            text: 'auction.advice_3'
        },
        {
            imgUrl: '/img/safe_deal/auction/auction4.png',
            text: 'auction.advice_4'
        },
        {
            imgUrl: '/img/safe_deal/auction/auction5.png',
            text: 'auction.advice_5'
        }
    ]
};

export const AuctionGuide: FC<WithT> = (props) => {
    const {t} = props;
    const {auction} = cardItemsData;

    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth='lg' style={{paddingTop: isXsDown ? 10 : 50}}>
                <Grid container spacing={2} justifyContent='center'>
                    <Grid item xs={12}>
                        <Paper
                            elevation={isXsDown ? 0 : 1}
                            className='preview paper'
                        >
                            <Grid container>
                                <Hidden smUp>
                                    <Grid item xs={12}>
                                        <Typography variant='h3' className='fw600' align='center'>
                                            {t('auction.hero.title')}
                                        </Typography>
                                    </Grid>
                                </Hidden>
                                <Grid item xs={12} sm={6} container justifyContent='center'>
                                    <img
                                        src="/img/safe_deal/auction/auction0.png"
                                        alt="auction-img"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} container alignItems='center'>
                                    <Hidden xsDown>
                                        <Typography variant='h3' gutterBottom className='fw600'>
                                            {t('auction.hero.title')}
                                        </Typography>
                                    </Hidden>
                                    <Typography variant='h5' color='textSecondary'>
                                        {t('auction.hero.description')}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={11}>
                        <Typography variant={isXsDown ? 'subtitle2' : 'h5'} className='fw600' align='center'>
                            {t('howItWorks')}
                        </Typography>
                    </Grid>
                    <Grid item xs={11}>
                        {
                            auction.map(({imgUrl, text}, index) => {
                                if (index % 2) {
                                    return (
                                        <Paper elevation={1} className='paper' key={index}>
                                            <Grid container>
                                                <Grid item xs={6} container alignItems='center'>
                                                    <Box>
                                                        <Typography variant='h5'>{t(text)}</Typography>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={6} container justifyContent='center'>
                                                    <img src={imgUrl} alt="safety-img" />
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    );
                                }
                                return (
                                    <Paper elevation={1} className='paper' key={index}>
                                        <Grid container>
                                            <Grid item xs={6} container justifyContent='center'>
                                                <img src={imgUrl} alt="safety-img" />
                                            </Grid>
                                            <Grid item xs={6} container alignItems='center'>
                                                <Box>
                                                    <Typography variant='h5'>{t(text)}</Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                );
                            })
                        }
                    </Grid>
                    <Grid item xs={11}>
                        <Link href="/help/how_to_participate">
                            <a className={classes.link}>
                                <Typography variant='subtitle1' component='p'>
                                    {t('completeGuide')}
                                </Typography>
                            </a>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};
