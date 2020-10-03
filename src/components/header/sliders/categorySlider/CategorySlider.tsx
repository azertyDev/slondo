import React from 'react'
import SlickSlider from 'react-slick'
import {Typography} from '@material-ui/core'
import {CarIcon} from '../../../elements/icons'
import {settings} from './sliderSettings'
import {useStyles} from './useStyles'


export const CategorySlider = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h4">Популярные категории</Typography>
            <div className='category-slider'>
                <SlickSlider {...settings}>
                    <a href="#">
                        <img src={CarIcon}/>
                        <Typography>Легковые автомобили</Typography>
                    </a>
                    <a href="#">
                        <img src={CarIcon}/>
                        <Typography>Легковые автомобили</Typography>
                    </a>
                    <a href="#">
                        <img src={CarIcon}/>
                        <Typography>Легковые автомобили</Typography>
                    </a>
                    <a href="#">
                        <img src={CarIcon}/>
                        <Typography>Легковые автомобили</Typography>
                    </a>
                    <a href="#">
                        <img src={CarIcon}/>
                        <Typography>Легковые автомобили</Typography>
                    </a>
                    <a href="#">
                        <img src={CarIcon}/>
                        <Typography>Легковые автомобили</Typography>
                    </a>
                    <a href="#">
                        <img src={CarIcon}/>
                        <Typography>Легковые автомобили</Typography>
                    </a>
                    <a href="#">
                        <img src={CarIcon}/>
                        <Typography>Легковые автомобили</Typography>
                    </a>
                </SlickSlider>
            </div>
        </div>
    )
};
