import React from 'react'
import {Typography} from '@material-ui/core'
import {CarIcon} from '../../../elements/icons'
import {CustomSlider} from "../../../elements/custom_slider/CustomSlider";
import {settings} from './sliderSettings'
import {useStyles} from './useStyles'


export const CategoriesSlider = (props) => {
    const {t} = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h4">{t('popularCategories')}</Typography>
            <div className='category-slider'>
                <CustomSlider {...settings}>
                    <a href="#">
                        <img src={CarIcon} alt='icon'/>
                        <Typography>Легковые автомобили</Typography>
                    </a>
                    <a href="#">
                        <img src={CarIcon} alt='icon'/>
                        <Typography>Электроника</Typography>
                    </a>
                    <a href="#">
                        <img src={CarIcon} alt='icon'/>
                        <Typography>Красота и здоровье</Typography>
                    </a>
                    <a href="#">
                        <img src={CarIcon} alt='icon'/>
                        <Typography>Все для дома</Typography>
                    </a>
                    <a href="#">
                        <img src={CarIcon} alt='icon'/>
                        <Typography>Телефоны и планшеты</Typography>
                    </a>
                    <a href="#">
                        <img src={CarIcon} alt='icon'/>
                        <Typography>Компьютерная техника</Typography>
                    </a>
                    <a href="#">
                        <img src={CarIcon} alt='icon'/>
                        <Typography>Женский гардероб</Typography>
                    </a>
                    <a href="#">
                        <img src={CarIcon} alt='icon'/>
                        <Typography>Услуги</Typography>
                    </a>
                    <a href="#">
                        <img src={CarIcon} alt='icon'/>
                        <Typography>Отдых и спорт</Typography>
                    </a>
                </CustomSlider>
            </div>
        </div>
    )
};
