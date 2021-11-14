import {FC, useContext} from 'react';
import Link from 'next/link';
import {useTranslation} from 'next-i18next';
import {Typography} from '@material-ui/core';
import {transformCyrillic} from '@root/src/helpers';
import {CategoriesCtx, UserLocationCtx} from "@src/context";
import {Slider} from "@src/components/elements/slider/Slider";
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
                <Slider config={config}>
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
                </Slider>
            </div>
        </div>
    );
};

const config = {
    itemClass: 'slide-item',
    responsive: {
        desktop: {
            breakpoint: {max: 1920, min: 1440},
            items: 7
        },
        laptop: {
            breakpoint: {max: 1440, min: 993},
            items: 5
        },
        tablet: {
            breakpoint: {max: 993, min: 426},
            items: 4,
            slidesToSlide: 4,
            partialVisibilityGutter: 15
        },
        mobile: {
            breakpoint: {max: 426, min: 0},
            items: 3,
            slidesToSlide: 3,
            partialVisibilityGutter: 10
        }
    }
};