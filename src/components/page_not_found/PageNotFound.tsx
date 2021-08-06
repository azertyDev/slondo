import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import Head from 'next/head';
import {AppBar, Box, Container, Grid, Toolbar, Typography} from '@material-ui/core';
import Link from 'next/link';
import {Logo} from '@src/components/elements/icons';
import {Localization} from '@src/components/header/top/localization/Localization';
import {useStyles} from './useStyles';

export const PageNotFound: FC = () => {
    const {t} = useTranslation('errors');
    const title = t('pageNotFound');

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Head>
                <meta name="robots" content="noindex" />
                <meta name="description" content='' />
                <meta property="og:site_name" content="Slondo" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} key="ogtitle" />
                <meta property="og:description" content='' key="ogdesc" />
                <title>{title}</title>
            </Head>
            <AppBar color='transparent' elevation={0} position='sticky' className={classes.header}>
                <Container maxWidth='xl'>
                    <Toolbar disableGutters variant='dense'>
                        <Grid container>
                            <Grid
                                item
                                xs={6}
                                container
                                justifyContent='flex-start'
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
                                justifyContent='flex-end'
                                alignItems='center'
                            >
                                    <span className='localization'>
                                        <Localization />
                                    </span>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
            <main className={classes.main}>
                <Container maxWidth='xl'>
                    <Box mt={20} display='inline-block' textAlign='center'>
                        <Typography variant='h1'>
                            404
                        </Typography>
                        <Typography variant='h5'>
                            {t('pageNotFound')}
                        </Typography>
                    </Box>
                </Container>
            </main>
        </div>
    );
};