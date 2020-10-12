import React from 'react'
import {Link} from '../../../i18n'
import {MainSlider} from '../header/sliders/mainSlider/MainSlider'
import {CategoriesSlider} from '../header/sliders/categoriesSlider/CategoriesSlider'
import {MainContent} from './mainContent/MainContent'
import {Container, Hidden, Slide, Typography, useScrollTrigger} from "@material-ui/core"
import {MainLayout} from "../MainLayout"

// styles
import {useStyles} from './useStyle'


export const Home = (props) => {
    const {t} = props;
    const trigger = useScrollTrigger();

    const classes = useStyles();
    return (
        <MainLayout title={t('title')}>
            <div className={classes.mainSlider}>
                <MainSlider/>
            </div>
            <Container maxWidth='lg'>
                <div className={classes.categorySlider}>
                    <CategoriesSlider t={t}/>
                </div>
                <div className={classes.mainContent}>
                    <MainContent t={t}/>
                </div>
            </Container>
            <Hidden mdUp>
                <div className={classes.createAdBlock}>
                    <Link href='/create_advertisement'>
                        <a>
                            <Slide appear={false} direction='up' in={!trigger}>
                                <div>
                                    <Typography variant='h6'>
                                        {t('common:createAd')}
                                    </Typography>
                                </div>
                            </Slide>
                        </a>
                    </Link>
                </div>
            </Hidden>
        </MainLayout>
    )
}
