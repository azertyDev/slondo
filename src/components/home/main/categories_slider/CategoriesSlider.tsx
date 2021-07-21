import {FC} from 'react';
import Link from 'next/link';
import {Typography} from '@material-ui/core';
import {CustomSlider} from '@src/components/elements/custom_slider/CustomSlider';
import {settings} from './sliderSettings';
import {site_categories} from '@src/common_data/site_categories';
import {transformCyrillic} from '@root/src/helpers';
import {useStyles} from './useStyles';
import {useTranslation} from 'next-i18next';

export const CategoriesSlider: FC = () => {
    const location = 'uzbekistan';
    const {t} = useTranslation('main');

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
                            <Link href={`/${location}/${transformCyrillic(category.ru_name)}`} key={category.id}>
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
