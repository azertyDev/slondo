import {cloneElement, FC} from 'react';
import {AppBar, Box, Container, Grid, Paper, Toolbar, Typography, useScrollTrigger} from '@material-ui/core';
import Link from 'next/link';
import {Logo} from '../elements/icons';
import {Localization} from '../header/top/localization/Localization';
import {useStyles} from './useStyles';
import {WithT} from 'i18next';

function HideOnScroll(props) {
    const {children, window} = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined
    });

    return cloneElement(children, {
        elevation: trigger ? 4 : 0
    });
}

const cardItemsData = {
    auction: [
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
        }
    ]
};

export const AuctionGuide: FC<WithT> = (props) => {
    const {t} = props;
    const {auction} = cardItemsData;

    const classes = useStyles();
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
                                            <Logo />
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
                                    <Localization />
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>
            <Container maxWidth='lg' style={{paddingTop: 50}}>
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
                    <Grid item xs={11}>
                        {
                            auction.map(({imgUrl, text}, index) => {
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
                                );
                            })
                        }
                    </Grid>
                </Grid>

            </Container>
        </div>
    );
};
