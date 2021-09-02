import {FC} from 'react';
import Link from 'next/link';
import {useTranslation} from 'next-i18next';
import {Container, Grid, Hidden, Typography} from '@material-ui/core';
import {SocialsBlock} from '@src/components/elements/socials_block/SocialsBlock';
import {Logo} from '@src/components/elements/icons/logo/Logo';
import {useStyles} from './useStyles';

export const Footer: FC = () => {
    const {t} = useTranslation('footer');
    const year = new Date().getFullYear();
    const classes = useStyles();
    return (
        <footer className={classes.root}>
            <Container maxWidth='xl'>
                <Grid container className="footer-content" justifyContent="center">
                    <Grid container className="footer-top" spacing={1}>
                        <Hidden mdUp>
                            <Grid item container xs={12} justifyContent="center">
                                <div className="social-icons adaptive">
                                    <SocialsBlock/>
                                </div>
                            </Grid>
                        </Hidden>
                        <Grid item xs={12} md={3} container justifyContent="center">
                            <ul>
                                <li>
                                    <Link href="/help/user_agreements">
                                        <a>
                                            <Typography
                                                component='p'
                                                color="initial"
                                                variant="subtitle1"
                                            >
                                                {t('userAgreement')}
                                            </Typography>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/help">
                                        <a>
                                            <Typography
                                                component='p'
                                                color="initial"
                                                variant="subtitle1"
                                            >
                                                {t('advertise')}
                                            </Typography>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} md={3} container justifyContent="center">
                            <ul>
                                <li>
                                    <Link href="/help/feedback">
                                        <a>
                                            <Typography
                                                component='p'
                                                color="initial"
                                                variant="subtitle1"
                                            >
                                                {t('feedback')}
                                            </Typography>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} md={3} container justifyContent="center">
                            <ul>
                                <li>
                                    <Link href="/help">
                                        <a>
                                            <Typography
                                                component='p'
                                                color="initial"
                                                variant="subtitle1"
                                            >
                                                {t('help')}
                                            </Typography>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </Grid>
                        <Hidden smDown>
                            <Grid container item xs={12} md={3} justifyContent='center'>
                                <div className="social-icons">
                                    <SocialsBlock/>
                                </div>
                            </Grid>
                        </Hidden>
                    </Grid>
                    <Grid container className="footer-bottom">
                        <Grid item xs={12} md={3} container justifyContent='center' alignItems='center'>
                            <Logo/>
                        </Grid>
                        <Grid item xs={12} md={6} container justifyContent="center" alignItems='center'>
                            <Typography variant="subtitle1" component='p' color="initial">
                                {t('termsOfUse')}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3} container justifyContent="center" alignItems='center'>
                            <Typography variant="subtitle1" component='p' color="initial">
                                {`Copyright © ${year} Slondo.`}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};