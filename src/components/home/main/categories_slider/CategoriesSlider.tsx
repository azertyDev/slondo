import React, { FC, useEffect } from 'react';
import { WithT } from 'i18next';
import { Typography } from '@material-ui/core';
import { CustomSlider } from '@src/components/elements/custom_slider/CustomSlider';
import { settings } from './sliderSettings';
import { Link } from '@root/i18n';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/redux/rootReducer';
import { setErrorMsgAction } from '@root/src/redux/slices/errorSlice';
import { categories_list } from '@src/components/common_data/categoriesList';
import { useStyles } from './useStyles';

export const CategoriesSlider: FC<WithT> = ({ t }) => {
    const { error } = useSelector((store: RootState) => store.categories);

    const dispatch = useDispatch();

    useEffect(() => {
        !!error && dispatch(setErrorMsgAction(error));
    }, [error]);

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
                            <a title={category.name}>
                                <div className="category">
                                    <div className="bg-layer">
                                        <div className="medium">
                                            <img
                                                src={category.image.url}
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
