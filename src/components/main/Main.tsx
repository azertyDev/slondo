import React, {FC} from 'react';
import {
    Fab,
    Hidden,
    Slide,
    Typography,
    useScrollTrigger,
    Grid,
    Container,
} from '@material-ui/core';
import {WithT} from 'i18next';
import {MainSlider} from '@src/components/header/sliders/mainSlider/MainSlider';
import {CategoriesSliderContainer} from '@src/components/header/sliders/categoriesSlider/CategoriesSliderContainer';
import {AncmntsSliderContainer} from "@src/components/home/mainContent/ancmnts_slider/AncmntsSliderContainer";
import {AncmntsTabsContainer} from '@src/components/home/mainContent/ancmnts_tabs/AncmntsTabsContainer';
import {ScrollTop} from '@src/components/elements/scroll_top/ScrollTop';
import {Link, withTranslation} from '@root/i18n';
import {Banner} from "@src/components/elements/banner/Banner";
import {FaqComponent} from "@src/components/elements/faq_component/FaqComponent";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {useStyles} from './useStyles';


export const Main: FC<WithT> = ({t}) => {
    const trigger = useScrollTrigger();

    const classes = useStyles();
    return (
        <main>
            <div className={classes.root}>
                <div className='main-slider-wrapper'>
                    <MainSlider/>
                </div>
                <Container maxWidth="xl" className='content-wrapper'>
                    <div className='categories-slider-wrapper'>
                        <CategoriesSliderContainer t={t}/>
                    </div>
                    <Grid container>
                        <Grid item md={9} xs={12} className='main-content'>
                            <section className='ancmnts-slider-wrapper'>
                                <AncmntsSliderContainer t={t}/>
                            </section>
                            <section>
                                <AncmntsTabsContainer t={t}/>
                            </section>
                        </Grid>
                        <Hidden smDown>
                            <Grid item md={3} className='right-content'>
                                <section className='faq-wrapper'>
                                    <FaqComponent/>
                                </section>
                                <section className='banner-wrapper'>
                                    <Banner height="345px"/>
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
                            <KeyboardArrowUpIcon/>
                        </Fab>
                    </ScrollTop>
                </Container>
            </div>
        </main>
    );
};

export default withTranslation(['main', 'common'])(Main);
