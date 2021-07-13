import {FC} from 'react';
import Link from 'next/link';
import {useTranslation} from 'next-i18next';
import {Container, Grid, Hidden, Typography} from '@material-ui/core';
import {SocialsBlock} from '@src/components/elements/socials_block/SocialsBlock';
import {Logo} from '@src/components/elements/icons/logo/Logo';
import {useStyles} from './useStyles';

export const Footer: FC = () => {
    const {t} = useTranslation('footer');

    const classes = useStyles();
    return (
        <footer className={classes.root}>
            <div className='footer-wrapper'>
                <Container maxWidth='xl'>
                    <Grid container className="footer-content" justify="center">
                        <Grid container className="footer-top">
                            <Hidden mdUp>
                                <Grid item container xs={12} justify="center">
                                    <div className="social-icons adaptive">
                                        <SocialsBlock/>
                                    </div>
                                </Grid>
                            </Hidden>
                            <Grid item xs={12} md={3} container justify="center">
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <a>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="initial"
                                                >
                                                    {t('userAgreement')}
                                                </Typography>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="initial"
                                                >
                                                    {t('advertise')}
                                                </Typography>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </Grid>
                            <Grid item xs={12} md={3} container justify="center">
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <a>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="initial"
                                                >
                                                    {t('feedback')}
                                                </Typography>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </Grid>
                            <Hidden smDown>
                                <Grid item xs={12} md={3} container justify="center">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <Typography
                                                        variant="subtitle1"
                                                        color="initial"
                                                    >
                                                        {t('help')}
                                                    </Typography>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </Grid>
                            </Hidden>
                            <Hidden smDown>
                                <Grid container item xs={12} md={3} justify='center'>
                                    <div className="social-icons">
                                        <SocialsBlock/>
                                    </div>
                                </Grid>
                            </Hidden>
                        </Grid>
                        <Grid container className="footer-bottom">
                            <Grid item xs={12} md={3} container justify='center' alignItems='center'>
                                <Logo/>
                            </Grid>
                            <Grid item xs={12} md={6} container justify="center" alignItems='center'>
                                <Typography variant="subtitle1" color="initial">
                                    {t('termsOfUse')}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={3} container justify="center" alignItems='center'>
                                <Typography variant="subtitle1" color="initial">
                                    Copyright © 2020 Slondo.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </footer>
    );
};