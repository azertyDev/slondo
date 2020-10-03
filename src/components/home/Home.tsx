import React from 'react'
import {MainSlider} from '../header/sliders/mainSlider/MainSlider'
import {CategorySlider} from '../header/sliders/categorySlider/CategorySlider'
import {MainContent} from './mainContent/MainContent'
import {Container} from "@material-ui/core"
import {useStyles} from './useStyle'


export const Home = () => {
    const classes = useStyles();
    return (
        <>
            <main>
                <div className={classes.mainSlider}>
                    <MainSlider/>
                </div>
                <Container maxWidth='lg'>
                    <div className={classes.categorySlider}>
                        <CategorySlider/>
                    </div>
                    <div className={classes.mainContent}>
                        <MainContent/>
                    </div>
                </Container>
            </main>
        </>
    )
}
