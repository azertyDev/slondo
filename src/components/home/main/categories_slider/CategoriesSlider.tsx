import {FC, useEffect, useState} from 'react';
import Link from 'next/link';
import {browser} from "process";
import {Typography} from '@material-ui/core';
import {CustomSlider} from '@src/components/elements/custom_slider/CustomSlider';
import {settings} from './sliderSettings';
import {site_categories} from '@src/common_data/site_categories';
import {unstable_batchedUpdates} from "react-dom";
import {useTranslation} from 'next-i18next';
import {getUserLocationName, transformCyrillic} from '@root/src/helpers';
import {useStyles} from './useStyles';

export const CategoriesSlider: FC = () => {
    const {t} = useTranslation('main');
    const [update, setUpdate] = useState(true);
    const [userLocation, setUserLocation] = useState('uzbekistan');

    useEffect(() => {
        if (browser) {
            const regions = JSON.parse(localStorage.getItem('regions')) || [];
            const location = getUserLocationName(regions);
            unstable_batchedUpdates(() => {
                location !== userLocation && setUserLocation(location);
                !update && setUpdate(true);
            });
        }
    }, [update]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className="title" variant="h2">
                {t('popularCategories')}
            </Typography>
            <div className="category-slider">
                <CustomSlider {...settings}>
                    {site_categories.map((category) => {
                        const ctgrName = t(`categories:${category.name}.name`);
                        return (
                            <Link
                                key={category.id}
                                href={`/${userLocation}/${transformCyrillic(category.ru_name)}`}
                            >
                                <a title={ctgrName}>
                                    <div className="category">
                                        <div className="bg-layer">
                                            <div className="medium">
                                                <img
                                                    alt={ctgrName}
                                                    src={category.icon.url}
                                                />
                                            </div>
                                        </div>
                                        <span className="category-name">
                                            <Typography variant='h4'>
                                                {ctgrName}
                                            </Typography>
                                        </span>
                                    </div>
                                </a>
                            </Link>
                        );
                    })}
                </CustomSlider>
            </div>
        </div>
    );
};
