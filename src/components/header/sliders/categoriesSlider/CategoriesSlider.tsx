import React, {FC} from 'react';
import {WithT} from "i18next";
import {Typography} from '@material-ui/core';
import {CustomSlider} from "@src/components/elements/custom_slider/CustomSlider";
import {settings} from './sliderSettings';
import {Link} from "@root/i18n";
import {useStyles} from './useStyles';
import {Skeleton} from "@material-ui/lab";
import {Categories} from "@root/interfaces/Categories";


export const CategoriesSlider: FC<WithT & { categories: Categories }> = (props) => {
    const {t, categories} = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h4">{t('popularCategories')}</Typography>
            <div className="category-slider">
                <CustomSlider {...settings}>
                    {categories.error
                        ? <Typography className="error-text">{categories.error}</Typography>
                        : categories.list.map(category => (
                            <Link href="#" key={category.id}>
                                <a title={category.name}>
                                    {categories.isFetch
                                        ? <>
                                            <Skeleton variant="circle" width={100} height={100}/>
                                            <Skeleton variant="text" width={100} height={16}/>
                                        </>
                                        : <>
                                            <img src={category.images.url.default} alt="category"/>
                                            <Typography>{category.name}</Typography>
                                        </>}
                                </a>
                            </Link>
                        ))
                    }</CustomSlider>
            </div>
        </div>
    )
};
