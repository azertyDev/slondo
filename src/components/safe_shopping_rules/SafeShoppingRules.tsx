import {useState, cloneElement} from 'react';
import {AppBar, Box, Container, Grid, Paper, Tab, Tabs, Toolbar, Typography, useScrollTrigger} from '@material-ui/core';
import Link from 'next/link';
import { Logo } from '../elements/icons';
import { Localization } from '../header/top/localization/Localization';
import { CustomTabPanel } from '../elements/custom_tab_panel/CustomTabPanel';
import {useTranslation} from 'react-i18next';
import { useStyles } from './useStyles'

function HideOnScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });
    
    return cloneElement(children, {
        elevation: trigger ? 4 : 0,
    })
}

const cardItemsData = {
    forSeller: [
        {
            imgUrl: '/img/safe_shopping/for_seller/advice_1.png',
            text: 'forSeller.advice_1'
        },
        {
            imgUrl: '/img/safe_shopping/for_seller/advice_2.png',
            text: 'forSeller.advice_2'
        },
        {
            imgUrl: '/img/safe_shopping/for_seller/advice_3.png',
            text: 'forSeller.advice_3'
        },
        {
            imgUrl: '/img/safe_shopping/for_seller/advice_4.png',
            text: 'forSeller.advice_4'
        },
        {
            imgUrl: '/img/safe_shopping/for_seller/advice_5.png',
            text: 'forSeller.advice_5'
        },
        {
            imgUrl: '/img/safe_shopping/for_seller/advice_6.png',
            text: 'forSeller.advice_6'
        },
        {
            imgUrl: '/img/safe_shopping/for_seller/advice_7.png',
            text: 'forSeller.advice_7'
        },
    ],
    forBuyer: [
        {
            imgUrl: '/img/safe_shopping/for_buyer/advice_1.png',
            text: 'forBuyer.advice_1'
        },
        {
            imgUrl: '/img/safe_shopping/for_buyer/advice_2.png',
            text: 'forBuyer.advice_2'
        },
        {
            imgUrl: '/img/safe_shopping/for_buyer/advice_3.png',
            text: 'forBuyer.advice_3'
        },
        {
            imgUrl: '/img/safe_shopping/for_buyer/advice_4.png',
            text: 'forBuyer.advice_4'
        },
        {
            imgUrl: '/img/safe_shopping/for_buyer/advice_5.png',
            text: 'forBuyer.advice_5'
        },
        {
            imgUrl: '/img/safe_shopping/for_buyer/advice_6.png',
            text: 'forBuyer.advice_6'
        },
        {
            imgUrl: '/img/safe_shopping/for_buyer/advice_7.png',
            text: 'forBuyer.advice_7'
        },
    ]
}

export const SafeShoppingRules = (props) => {
    const { forSeller, forBuyer } = cardItemsData;
    const { t } = useTranslation('safe_shopping');
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (_, newValue: number) => {
        setTabValue(newValue);
    };
    
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <HideOnScroll {...props}>
                <AppBar color='transparent' elevation={0} position='sticky'>
                    <Container maxWidth='lg'>
                        <Toolbar disableGutters className='toolbar' variant="dense">
                            <Grid container>
                                <Grid
                                    item
                                    xs={6} 
                                    container 
                                    justify='flex-start' 
                                    alignItems='center'
                                >
                                    <Link href='/'>
                                        <a>
                                            <Logo/>
                                        </a>
                                    </Link>
                                </Grid>
                                <Grid 
                                    item 
                                    xs={6} 
                                    container 
                                    justify='flex-end' 
                                    alignItems='center'
                                >
                                    <Localization/>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>
            <Container maxWidth='lg' style={{ paddingTop: 50 }}>
                <Grid container spacing={2} justify='center'>
                    <Grid item xs={12}>
                        <Paper elevation={1} className='paper'>
                            <Grid container>
                                <Grid item xs={6} container justify='center'>
                                    <img
                                        src="/img/safety.png"
                                        alt="safety-img"
                                        className='safety-img'
                                    />
                                </Grid>
                                <Grid item xs={6} container alignItems='center' zeroMinWidth>
                                    <Box className='main-title'>
                                        <Typography variant='h3' gutterBottom className='fw600'>
                                            {t('hero.title')}
                                        </Typography>
                                        <Typography variant='h5'>
                                            {t('hero.description')}
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} container>
                        <Grid item xs={6} container justify='center' alignItems='center'>
                            <Typography variant='h5' className='fw600'>
                                {t('howItWorks')}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Tabs
                                value={tabValue}
                                variant="fullWidth"
                                className='tabs'
                                selectionFollowsFocus
                                indicatorColor="primary"
                                onChange={handleTabChange}
                                TabIndicatorProps={{ style: { display: 'none' } }}
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
                    <Grid item xs={11}>
                        <CustomTabPanel value={tabValue} index={0}>
                            {
                                forSeller.map(({ imgUrl, text }, index) => {
                                    return (
                                        <Paper elevation={1} className='paper' key={index}>
                                            <Grid container>
                                                <Grid item xs={6} container justify='center'>
                                                    <img src={imgUrl} alt="safety-img" />
                                                </Grid>
                                                <Grid item xs={6} container alignItems='center'>
                                                    <Box className='main-title'>
                                                        <Typography variant='h5'>{t(text)}</Typography>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    )
                                })
                            }
                        </CustomTabPanel>
                        <CustomTabPanel value={tabValue} index={1}>
                            {
                                forBuyer.map(({ imgUrl, text }, index) => {
                                    return (
                                        <Paper elevation={1} className='paper' key={index}>
                                            <Grid container>
                                                <Grid item xs={6} container justify='center'>
                                                    <img src={imgUrl} alt="safety-img" />
                                                </Grid>
                                                <Grid item xs={6} container alignItems='center'>
                                                    <Box className='main-title'>
                                                        <Typography variant='h5'>{t(text)}</Typography>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    )
                                })
                            }
                        </CustomTabPanel>
                    </Grid>
                </Grid>
                    
            </Container>
        </div>
    )
}
