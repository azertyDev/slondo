import React from 'react'
import {MainSlider} from '../header/sliders/mainSlider/MainSlider'
import {CategoriesSlider} from '../header/sliders/categoriesSlider/CategoriesSlider'
import {MainContent} from './mainContent/MainContent'
import {Container, Hidden, Slide, Typography, useScrollTrigger} from "@material-ui/core"
import {useStyles} from './useStyle'


export const Home = () => {
    const trigger = useScrollTrigger();
    const classes = useStyles();
    return (
        <>
            <main>
                <div className={classes.mainSlider}>
                    <MainSlider/>
                </div>
                <Container maxWidth='lg'>
                    <div className={classes.categorySlider}>
                        <CategoriesSlider/>
                    </div>
                    <div className={classes.mainContent}>
                        <MainContent/>
                    </div>
                </Container>
            </main>
            <Hidden mdUp>
                <div className={classes.createAdBlock}>
                    <Slide appear={false} direction='up' in={!trigger}>
                        <a href='/create_advertisement'>
                            <Typography variant='h6'>
                                Создать объявление
                            </Typography>
                        </a>
                    </Slide>
                </div>
            </Hidden>
        </>
    )
}
