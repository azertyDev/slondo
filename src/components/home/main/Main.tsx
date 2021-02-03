import React, { FC } from 'react';
import {
    Hidden,
    Slide,
    Typography,
    useScrollTrigger,
    Grid,
    Container,
} from '@material-ui/core';
import {MainSlider} from './main_slider/MainSlider';
import {CategoriesSlider} from './categories_slider/CategoriesSlider';
import {PostsSliderContainer} from "./posts_slider/PostsSliderContainer";
import {PostsTabsContainer} from './posts_tabs/PostsTabsContainer';
import {ScrollTop} from '@src/components/elements/scroll_top/ScrollTop';
import {Link, useTranslation} from '@root/i18n';
import {Banner} from "@src/components/elements/banner/Banner";
import {FaqComponent} from "@src/components/elements/faq_component/FaqComponent";
import { SocialsBlock } from '../../elements/socials_block/SocialsBlock';
import {useStyles} from './useStyles';


export const Main: FC = () => {
    const { t } = useTranslation(['main', 'common']);

    const trigger = useScrollTrigger();

    const classes = useStyles();
    return (
        <main>
            <div className={classes.root}>
                <div className="main-slider-wrapper">
                    <MainSlider />
                </div>
                <Container maxWidth="xl" className="content-wrapper">
                    <div className="categories-slider-wrapper">
                        <CategoriesSlider t={t} />
                    </div>
                    <Grid container>
                        <Grid item lg={9} xs={12} className='main-content'>
                            <section className='ancmnts-slider-wrapper'>
                                <PostsSliderContainer/>
                            </section>
                            <section>
                                <PostsTabsContainer t={t}/>
                            </section>
                        </Grid>
                        <Hidden mdDown>
                            <Grid item lg={3} className="right-content">
                                <section className="faq-wrapper">
                                    <FaqComponent />
                                    <SocialsBlock/>
                                </section>
                                <section className="banner-wrapper">
                                    <Banner height="345px" />
                                </section>
                                <ScrollTop>
                                    <a
                                        aria-label="scroll back to top"
                                        className={classes.scrollTop}
                                    >
                                        <span className="MuiFab">
                                            <span className="icon"></span>
                                        </span>
                                    </a>
                                </ScrollTop>
                            </Grid>
                        </Hidden>
                    </Grid>

                    <Hidden lgUp>
                        <div className={classes.createAdBlock}>
                            <Link href={'/post/create'}>
                                <a>
                                    <Slide
                                        appear={false}
                                        direction="up"
                                        in={!trigger}
                                    >
                                        <div>
                                            <Typography variant="h6">
                                                {t('common:createAncmnt')}
                                            </Typography>
                                        </div>
                                    </Slide>
                                </a>
                            </Link>
                        </div>
                    </Hidden>
                </Container>
            </div>
        </main>
    );
};