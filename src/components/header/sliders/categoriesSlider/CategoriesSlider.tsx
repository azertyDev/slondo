import React from 'react'
import SlickSlider from 'react-slick'
import {Typography} from '@material-ui/core'
import {CarIcon} from '../../../elements/icons'
import {settings} from './sliderSettings'
import {useStyles} from './useStyles'


export const CategoriesSlider = () => {

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
                        <Typography>Электроника</Typography>
                    </a>
                    <a href="#">
                        <img src={CarIcon}/>
                        <Typography>Красота и здоровье</Typography>
                    </a>
                    <a href="#">
                        <img src={CarIcon}/>
                        <Typography>Все для дома</Typography>
                    </a>
                    <a href="#">
                        <img src={CarIcon}/>
                        <Typography>Телефоны и планшеты</Typography>
                    </a>
                    <a href="#">
                        <img src={CarIcon}/>
                        <Typography>Компьютерная техника</Typography>
                    </a>
                    <a href="#">
                        <img src={CarIcon}/>
                        <Typography>Женский гардероб</Typography>
                    </a>
                    <a href="#">
                        <img src={CarIcon}/>
                        <Typography>Услуги</Typography>
                    </a>
                    <a href="#">
                        <img src={CarIcon}/>
                        <Typography>Отдых и спорт</Typography>
                    </a>
                </SlickSlider>
            </div>
        </div>
    )
};
