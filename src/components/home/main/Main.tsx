import React, {FC} from 'react';
import {
    Hidden,
    Slide,
    Typography,
    useScrollTrigger,
    Grid,
    Container
} from '@material-ui/core';
import {MainSlider} from './main_slider/MainSlider';
import {CategoriesSlider} from './categories_slider/CategoriesSlider';
import {PostsSliderContainer} from './posts_slider/PostsSliderContainer';
import {PostsTabsContainer} from './posts_tabs/PostsTabsContainer';
import Link from 'next/link';
import {useTranslation} from 'next-i18next';
import {SEOTextComponent} from '@src/components/elements/seo_text/SEOTextComponent';
import {HomeSidebar} from '@src/components/home/main/home_sidebar/HomeSideBar';
import {useStyles} from './useStyles';


export const Main: FC = () => {
    const {t} = useTranslation(['main']);

    const trigger = useScrollTrigger();

    const classes = useStyles();
    return (
        <main>
            <div className={classes.root}>
                <div className="main-slider-wrapper">
                    <MainSlider/>
                </div>
                <Container maxWidth="xl" className="content-wrapper">
                    <div className="categories-slider-wrapper">
                        <CategoriesSlider t={t}/>
                    </div>
                    <Grid container>
                        <Grid item lg={9} xs={12} className='main-content'>
                            <section className='posts-slider-wrapper'>
                                <PostsSliderContainer/>
                            </section>
                            <section>
                                <PostsTabsContainer t={t}/>
                            </section>
                        </Grid>
                        <Hidden mdDown>
                            <Grid item lg={3} className="right-content">
                                <HomeSidebar/>
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
                                                {t('header:createPost')}
                                            </Typography>
                                        </div>
                                    </Slide>
                                </a>
                            </Link>
                        </div>
                    </Hidden>
                    <SEOTextComponent/>
                </Container>
            </div>
        </main>
    );
};
