import {FC} from 'react';
import {Container, Grid, Hidden, Typography} from '@material-ui/core';
import {SocialsBlock} from '@src/components/elements/socials_block/SocialsBlock';
import {useTranslation} from 'next-i18next';
import Link from 'next/link';
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
                                                        {t('footer:aboutSlondo')}
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
                                                        {t('footer:help')}
                                                    </Typography>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/security">
                                                <a>
                                                    <Typography
                                                        variant="subtitle1"
                                                        color="initial"
                                                    >
                                                        {t('footer:security')}
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
                                                        {t('footer:yourReview')}
                                                    </Typography>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
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
                                                    {t('footer:feedback')}
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
                                                    {t('footer:howToAddPost')}
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
                                                    {t('footer:safe_shopping')}
                                                </Typography>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/sitemap">
                                            <a>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="initial"
                                                >
                                                    {t('footer:sitemap')}
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
                                                        {t('footer:promotions')}
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
                                                        {t('footer:bonuses')}
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
                                                        {t('footer:auctionRules')}
                                                    </Typography>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/legal/userAgreements">
                                                <a>
                                                    <Typography
                                                        variant="subtitle1"
                                                        color="initial"
                                                    >
                                                        {t('footer:licenseAgreement')}
                                                    </Typography>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </Grid>
                            </Hidden>
                            <Hidden smDown>
                                <Grid container item xs={12} md={3}>
                                    <div className="social-icons">
                                        <SocialsBlock/>
                                    </div>
                                </Grid>
                            </Hidden>
                        </Grid>
                        <div className="footer-bottom">
                            <Grid item xs={12} container justify='center' alignItems='center'>
                                <Logo/>
                            </Grid>
                            <Grid item container justify="center" alignItems='center'>
                                <Typography variant="subtitle1" color="initial">
                                    {t('footer:termsOfUse')}
                                </Typography>
                            </Grid>
                            <Grid item container justify="center" alignItems='center'>
                                <Typography variant="subtitle1" color="initial">
                                    Copyright © 2020 Slondo.
                                </Typography>
                            </Grid>
                        </div>
                    </Grid>
                </Container>
            </div>
        </footer>
    );
};