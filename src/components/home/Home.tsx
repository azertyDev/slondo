import React from 'react'
import {Link} from '@root/i18n'
import {Container, Fab, Hidden, Slide, Typography, useScrollTrigger} from '@material-ui/core'
import {MainSlider} from '../header/sliders/mainSlider/MainSlider'
import {MainLayout} from '../MainLayout'
import {CategoriesSliderContainer} from "@src/components/header/sliders/categoriesSlider/CategoriesSliderContainer";
import {MainContentContainer} from '@src/components/home/mainContent/MainContentContainer'
import {useStyles} from './useStyles'
import {ScrollTop} from "@src/components/elements/scroll_top/ScrollTop";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";


export const Home = (props) => {
    const {t} = props
    const trigger = useScrollTrigger()

    const classes = useStyles();
    return (
        <MainLayout title={t('title')}>
            <div className={classes.mainSlider}>
                <MainSlider/>
            </div>
            <Container maxWidth="lg">
                <div className={classes.categorySlider}>
                    <CategoriesSliderContainer t={t}/>
                </div>
                <div className={classes.mainContent}>
                    <MainContentContainer t={t}/>
                </div>
            </Container>
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
        </MainLayout>
    )
}
