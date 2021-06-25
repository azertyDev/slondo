import React, {FC} from 'react';
import {WithT} from 'i18next';
import Link from 'next/link';
import {Typography} from '@material-ui/core';
import {CustomSlider} from '@src/components/elements/custom_slider/CustomSlider';
import {settings} from './sliderSettings';
import {site_categories} from "@src/common_data/site_categories";
import {useStyles} from './useStyles';
import { transformCyrillic } from '@root/src/helpers';


export const CategoriesSlider: FC<WithT> = ({t}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className="title" variant="h2">
                {t('popularCategories')}
            </Typography>
            <div className="category-slider">
                <CustomSlider {...settings}>
                    {site_categories.map((category) =>{
                        const location = 'uzbekistan';
                        const categoryName = transformCyrillic(category.ru_name);

                            return (
                                <Link href={`${location}/${categoryName}`}>
                                <a title={t(`categories:${category.name}`)}>
                                    <div className="category">
                                        <div className="bg-layer">
                                            <div className="medium">
                                                <img
                                                    src={category.icon.url}
                                                    alt={category.name}
                                                />
                                            </div>
                                        </div>
                                        <span className="category-name">
                                            {t(`categories:${category.name}`)}
                                        </span>
                                    </div>
                                </a>
                            </Link>
                        )}
                    )}
                </CustomSlider>
            </div>
        </div>
    );
};
