import {useState} from 'react';
import {Box, Container, Grid, Hidden, Paper, Tab, Tabs, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {CustomTabPanel} from '../elements/custom_tab_panel/CustomTabPanel';
import {useStyles} from './useStyles';
import Link from 'next/link';


const cardItemsData = {
    forSeller: [
        {
            imgUrl: '/img/safe_deal/for_seller/advice_1.png',
            text: 'forSeller.advice_1'
        },
        {
            imgUrl: '/img/safe_deal/for_seller/advice_2.png',
            text: 'forSeller.advice_2'
        },
        {
            imgUrl: '/img/safe_deal/for_seller/advice_3.png',
            text: 'forSeller.advice_3'
        },
        {
            imgUrl: '/img/safe_deal/for_seller/advice_4.png',
            text: 'forSeller.advice_4'
        },
        {
            imgUrl: '/img/safe_deal/for_seller/advice_5.png',
            text: 'forSeller.advice_5'
        },
        {
            imgUrl: '/img/safe_deal/for_seller/advice_6.png',
            text: 'forSeller.advice_6'
        },
        {
            imgUrl: '/img/safe_deal/for_seller/advice_7.png',
            text: 'forSeller.advice_7'
        }
    ],
    forBuyer: [
        {
            imgUrl: '/img/safe_deal/for_buyer/advice_1.png',
            text: 'forBuyer.advice_1'
        },
        {
            imgUrl: '/img/safe_deal/for_buyer/advice_2.png',
            text: 'forBuyer.advice_2'
        },
        {
            imgUrl: '/img/safe_deal/for_buyer/advice_3.png',
            text: 'forBuyer.advice_3'
        },
        {
            imgUrl: '/img/safe_deal/for_buyer/advice_4.png',
            text: 'forBuyer.advice_4'
        },
        {
            imgUrl: '/img/safe_deal/for_buyer/advice_5.png',
            text: 'forBuyer.advice_5'
        },
        {
            imgUrl: '/img/safe_deal/for_buyer/advice_6.png',
            text: 'forBuyer.advice_6'
        },
        {
            imgUrl: '/img/safe_deal/for_buyer/advice_7.png',
            text: 'forBuyer.advice_7'
        }
    ]
};

export const SafeShoppingGuide = (props) => {
    const {t} = props;
    const {forSeller, forBuyer} = cardItemsData;
    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));

    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (_, newValue: number) => {
        setTabValue(newValue);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth='lg' style={{paddingTop: isXsDown ? 10 : 50}}>
                <Grid container spacing={2} justifyContent='center'>
                    <Grid item xs={12}>
                        <Paper elevation={isXsDown ? 0 : 1} className='paper preview'>
                            <Grid container>
                                <Hidden smUp>
                                    <Grid item xs={12}>
                                        <Typography variant='h3' className='fw600' align='center'>
                                            {t('hero.title')}
                                        </Typography>
                                    </Grid>
                                </Hidden>
                                <Grid item xs={12} sm={6} container justifyContent='center'>
                                    <img
                                        src="/img/safety.png"
                                        alt="safety-img"
                                        className='img'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} container alignItems='center' zeroMinWidth>
                                    <Box className='main-title'>
                                        <Hidden xsDown>
                                            <Typography variant='h3' gutterBottom className='fw600'>
                                                {t('hero.title')}
                                            </Typography>
                                        </Hidden>
                                        <Typography variant='h5'>
                                            {t('hero.description')}
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} container>
                        <Grid item xs={12} sm={6} container justifyContent='center' alignItems='center'>
                            <Typography variant={isXsDown ? 'subtitle2' : 'h5'} className='fw600 mb-16'>
                                {t('howItWorks')}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Tabs
                                value={tabValue}
                                variant="fullWidth"
                                className='tabs'
                                selectionFollowsFocus
                                indicatorColor="primary"
                                onChange={handleTabChange}
                                TabIndicatorProps={{style: {display: 'none'}}}
                            >
                                <Tab
                                    label={<Typography variant="subtitle1">{t('forSeller.name')}</Typography>}
                                    value={0}
                                />
                                <Tab
                                    label={<Typography variant="subtitle1">{t('forBuyer.name')}</Typography>}
                                    value={1}
                                />
                            </Tabs>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={11}>
                        <CustomTabPanel value={tabValue} index={0}>
                            {
                                forSeller.map(({imgUrl, text}, index) => {
                                    if (index % 2) {
                                        return (
                                            <Paper elevation={1} className='paper' key={index}>
                                                <Grid
                                                    container
                                                    spacing={2}
                                                    direction={isXsDown ? 'column' : 'row'}
                                                >
                                                    <Grid item xs={12} sm={8} container alignItems='center'>
                                                        <Box className='main-title' color='textSecondary'>
                                                            <Typography variant='h5'>{t(text)}</Typography>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={12} sm={4} container justifyContent='center'>
                                                        <img src={imgUrl} alt="safety-img" />
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        );
                                    }
                                    return (
                                        <Paper elevation={1} className='paper' key={index}>
                                            <Grid container spacing={2} direction={isXsDown ? 'column-reverse' : 'row'}>
                                                <Grid item xs={12} sm={8} container justifyContent='center'>
                                                    <img src={imgUrl} alt="safety-img" />
                                                </Grid>
                                                <Grid item xs={12} sm={4} container alignItems='center'>
                                                    <Box className='main-title' color='textSecondary'>
                                                        <Typography variant='h5'>{t(text)}</Typography>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    );
                                })
                            }
                        </CustomTabPanel>
                        <CustomTabPanel value={tabValue} index={1}>
                            {
                                forBuyer.map(({imgUrl, text}, index) => {
                                    if (index % 2) {
                                        return (
                                            <Paper elevation={1} className='paper' key={index}>
                                                <Grid container spacing={2} direction={isXsDown ? 'column' : 'row'}>
                                                    <Grid item xs={12} sm={8} container alignItems='center'>
                                                        <Box className='main-title' color='textSecondary'>
                                                            <Typography variant='h5'>{t(text)}</Typography>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={12} sm={4} container justifyContent='center'>
                                                        <img src={imgUrl} alt="safety-img" />
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        );
                                    }
                                    return (
                                        <Paper elevation={1} className='paper' key={index}>
                                            <Grid container spacing={2} direction={isXsDown ? 'column-reverse' : 'row'}>
                                                <Grid item xs={12} sm={8} container justifyContent='center'>
                                                    <img src={imgUrl} alt="safety-img" />
                                                </Grid>
                                                <Grid item xs={12} sm={4} container alignItems='center'>
                                                    <Box className='main-title' color='textSecondary'>
                                                        <Typography variant='h5'>{t(text)}</Typography>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    );
                                })
                            }
                        </CustomTabPanel>
                    </Grid>
                    <Grid item xs={12} sm={11}>
                        <Link href="/help/safe_shopping/buy">
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
