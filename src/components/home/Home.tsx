import React from 'react'
import MainSlider from '../header/sliders/mainSlider/MainSlider'
import CategorySlider from '../header/sliders/categorySlider/CategorySlider'
import { MainContent } from './mainContent/MainContent'
import { Footer } from '../footer/Footer'

export const Home = () => {
    return (
        <>
            <MainSlider />
            <CategorySlider />
            <MainContent />
            <Footer />
        </>
    )
}
