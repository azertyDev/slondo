import React, {FC} from 'react';
import {Link} from '@root/i18n';
import {Fab, Hidden, Slide, Typography, useScrollTrigger, Container} from '@material-ui/core';
import {MainSlider} from '../header/sliders/mainSlider/MainSlider';
import {CategoriesSliderContainer} from "@src/components/header/sliders/categoriesSlider/CategoriesSliderContainer";
import {MainContentContainer} from '@src/components/home/mainContent/MainContentContainer';
import {useStyles} from './useStyles';
import {ScrollTop} from "@src/components/elements/scroll_top/ScrollTop";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import {WithT} from "i18next";
import Head from "next/head";
import Header from "@src/components/header/Header";
import {Footer} from "@src/components/footer/Footer";
import {ErrorModal} from "@src/components/error_modal/ErrorModal";


export const Home: FC<WithT> = ({t}) => {
    const trigger = useScrollTrigger();

    const classes = useStyles();
    return (
        <>
            <Head>
                <title>Slondo - доска объявлений</title>
            </Head>
            <Header/>
            <main style={{marginTop: '40px'}}>
                <div className={classes.mainSlider}>
                    <MainSlider/>
                </div>
                <Container maxWidth='lg'>
                    <div className={classes.categorySlider}>
                        <CategoriesSliderContainer t={t}/>
                    </div>
                    <div className={classes.mainContent}>
                        <MainContentContainer t={t}/>
                    </div>
                    <Hidden mdUp>
                        <div className={classes.createAdBlock}>
                            <Link href={'/create_advertisement'}>
                                <a>
                                    <Slide appear={false} direction="up" in={!trigger}>
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
                        <Fab color="secondary" size="small" aria-label="scroll back to top">
                            <KeyboardArrowUpIcon/>
                        </Fab>
                    </ScrollTop>
                </Container>
            </main>
            <Footer/>
            <ErrorModal/>
        </>
    )
}
