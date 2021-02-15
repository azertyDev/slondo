import React, {FC} from 'react';
import {WithT} from 'i18next';
import {Link} from '@root/i18n';
import {Typography} from '@material-ui/core';
import {CustomSlider} from '@src/components/elements/custom_slider/CustomSlider';
import {settings} from './sliderSettings';
import {categories_list} from "@src/common_data/categories_list";
import {useStyles} from './useStyles';


export const CategoriesSlider: FC<WithT> = ({t}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className="title" variant="h2">
                {t('popularCategories')}
            </Typography>
            <div className="category-slider">
                <CustomSlider {...settings}>
                    {categories_list.map((category) => (
                        <Link href="#" key={category.id}>
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
                    ))}
                </CustomSlider>
            </div>
        </div>
    );
};
