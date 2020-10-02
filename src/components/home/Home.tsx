import React from 'react'
import {MainSlider} from '../header/sliders/mainSlider/MainSlider'
import {CategorySlider} from '../header/sliders/categorySlider/CategorySlider'
import {MainContent} from './mainContent/MainContent'
import {Footer} from '../footer/Footer'
import {Container} from "@material-ui/core";

export const Home = () => {
    return (
        <>
            <MainSlider/>
            <Container maxWidth='lg'>
                <CategorySlider/>
                <MainContent/>
            </Container>
            <Footer/>
        </>
    )
}
