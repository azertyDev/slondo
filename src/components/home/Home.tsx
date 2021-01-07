import React, { FC } from 'react';
import {
    Fab,
    Hidden,
    Slide,
    Typography,
    useScrollTrigger,
    Grid,
    Container,
} from '@material-ui/core';
import { MainSlider } from '../header/sliders/mainSlider/MainSlider';
import { CategoriesSliderContainer } from '@src/components/header/sliders/categoriesSlider/CategoriesSliderContainer';
import { AncmntsTabsContainer } from '@src/components/home/mainContent/ancmnts_tabs/AncmntsTabsContainer';
import { WithT } from 'i18next';
import { ScrollTop } from '@src/components/elements/scroll_top/ScrollTop';
import { Link } from '@root/i18n';
import Head from 'next/head';
import Header from '@src/components/header/Header';
import { Footer } from '@src/components/footer/Footer';
import { ErrorModal } from '@src/components/error_modal/ErrorModal';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useStyles } from './useStyles';
import { Banner } from '@src/components/elements/banner/Banner';
import { FaqComponent } from '@src/components/elements/faq_component/FaqComponent';
import { AncmntsSliderContainer } from './mainContent/ancmnts_slider/AncmntsSliderContainer';
import { SocialsBlock } from '../elements/socials_block/SocialsBlock';

export const Home: FC<WithT> = ({ t }) => {
    const trigger = useScrollTrigger();

    const classes = useStyles();
    return (
        <>
            <Head>
                <title>Slondo - доска объявлений</title>
            </Head>
            <Header />
            <main style={{ marginTop: '48px' }}>
                <MainSlider />
                <Container maxWidth="xl">
                    <CategoriesSliderContainer t={t} />
                    <Grid container className={classes.content}>
                        <Grid item md={9} xs={12} className="main-content">
                            <section>
                                <AncmntsSliderContainer t={t} />
                            </section>
                            <section className="tabs-wrapper">
                                <AncmntsTabsContainer t={t} />
                            </section>
                        </Grid>
                        <Hidden smDown>
                            <Grid item md={3} className="right-content">
                                <section className="faq-wrapper">
                                    <FaqComponent />
                                    <SocialsBlock />
                                </section>
                                <section className="banner-wrapper">
                                    <Banner height="345px" />
                                </section>
                            </Grid>
                        </Hidden>
                    </Grid>
                    <Hidden mdUp>
                        <div className={classes.createAdBlock}>
                            <Link href={'/announcement/create'}>
                                <a>
                                    <Slide
                                        appear={false}
                                        direction="up"
                                        in={!trigger}
                                    >
                                        <div>
                                            <Typography variant="h6">
                                                {t('common:createAd')}
                                            </Typography>
                                        </div>
                                    </Slide>
                                </a>
                            </Link>
                        </div>
                    </Hidden>
                    <ScrollTop>
                        <Fab
                            color="secondary"
                            size="small"
                            aria-label="scroll back to top"
                        >
                            <KeyboardArrowUpIcon />
                        </Fab>
                    </ScrollTop>
                </Container>
            </main>
            <Footer />
            <ErrorModal />
        </>
    );
};
