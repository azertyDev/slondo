import React, {FC} from 'react';
import {Typography} from '@material-ui/core';
import {CustomSlider} from "@src/components/elements/custom_slider/CustomSlider";
import {settings} from './sliderSettings';
import {Link} from "@root/i18n";
import {WithT} from "i18next";
import {useStyles} from './useStyles';
import {Skeleton} from "@material-ui/lab";
import {Categories} from "@root/interfaces/Categories";


export const CategoriesSlider: FC<WithT & { sliderData: Categories }> = (props) => {
    const {t, sliderData} = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h4">{t('popularCategories')}</Typography>
            <div className="category-slider">
                <CustomSlider {...settings}>
                    {
                        sliderData.error
                            ? <Typography className="error-text">{sliderData.error}</Typography>
                            : sliderData.list.map(category => (
                                <Link href="#" key={category.id}>
                                    <a title={category.name}>
                                        {
                                            sliderData.isFetch
                                                ? <>
                                                    <Skeleton variant="circle" width={100} height={100}/>
                                                    <Skeleton variant="text"/>
                                                </>
                                                : <>
                                                    <img src={category.images.url.extra} alt="category"/>
                                                    <Typography>{category.name}</Typography>
                                                </>
                                        }
                                    </a>
                                </Link>
                            ))
                    }
                </CustomSlider>
            </div>
        </div>
    )
};