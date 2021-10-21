import {FC, useContext} from 'react';
import Link from 'next/link';
import {settings} from './sliderSettings';
import {useTranslation} from 'next-i18next';
import {Typography} from '@material-ui/core';
import {CustomSlider} from '@src/components/elements/custom_slider/CustomSlider';
import {transformCyrillic} from '@root/src/helpers';
import {CategoriesCtx, UserLocationCtx} from "@src/context";
import {useStyles} from './useStyles';

export const CategoriesSlider: FC = () => {
    const {t} = useTranslation('main');
    const {region, city} = useContext(UserLocationCtx).userLocation;
    const categories = useContext(CategoriesCtx);

    const userLocation = region
        ? city ? city.ru_name : region.ru_name
        : 'uzbekistan';

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className="title" variant="h2">
                {t('popularCategories')}
            </Typography>
            <div className="category-slider">
                <CustomSlider {...settings}>
                    {categories.map(({name, ru_name, iconUrl}, i) => {
                        const ctgrName = t(`categories:${name}.name`);
                        return (
                            <Link
                                key={i}
                                href={`/${userLocation}/${transformCyrillic(ru_name)}`}
                            >
                                <a title={ctgrName}>
                                    <div className="category">
                                        <div className="bg-layer">
                                            <img
                                                alt={ctgrName}
                                                src={iconUrl}
                                            />
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
