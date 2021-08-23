import {FC, useEffect, useState} from 'react';
import Link from 'next/link';
import {Breadcrumbs, Typography} from '@material-ui/core';
import {useTranslation} from 'react-i18next';
import {cookies, transformCyrillic} from '@src/helpers';
import {site_categories} from '@src/common_data/site_categories';
import {transLocations} from '@root/transformedLocations';
import {useStyles} from './useStyles';

type BreadcrumbsPropsType = {
    category: string,
    subcategory: string,
    type: string
}

export const BreadcrumbsComponent: FC<BreadcrumbsPropsType> = ({category, subcategory, type}) => {
    const {t} = useTranslation('categories');

    const userLocation = cookies.get('user_location');
    const [location, setLocation] = useState('uzbekistan');

    const mainCtgr = site_categories.find(ctgr => ctgr.name === category);
    const subCtgr = mainCtgr?.subcategory?.find(subCtgr => subCtgr.name === subcategory);
    const typeCtgr = subCtgr?.type?.find(typeCtgr => typeCtgr.name === type);

    const categoryName = transformCyrillic(mainCtgr?.ru_name);
    const subCategoryName = transformCyrillic(subCtgr?.ru_name);
    const typeName = transformCyrillic(typeCtgr?.ru_name);

    const categoryLink = `/${location}/${categoryName}`;
    const subCategoryLink = `${categoryLink}/${subCategoryName}`;
    const subCategoryTypeLink = `${subCategoryLink}/${typeName}`;

    useEffect(() => {
        if (userLocation) {
            const {region, city} = userLocation;
            setLocation(city
                ? transLocations[region.name][city.name]
                : transLocations[region.name].name
            );
        }
    }, [userLocation]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Breadcrumbs
                separator='•'
                aria-label="breadcrumb"
                className='bc'
            >
                <Link href={categoryLink}>
                    <a>
                        <Typography variant='subtitle1'>
                            {t(`categories:${category}.name`)}
                        </Typography>
                    </a>
                </Link>
                <Link href={subCategoryLink}>
                    <a>
                        <Typography variant='subtitle1'>
                            {t(`categories:${category}.${subcategory}.name`)}
                        </Typography>
                    </a>
                </Link>
                {typeCtgr !== undefined && type && (
                    <Link href={subCategoryTypeLink}>
                        <a>
                            <Typography variant='subtitle1' component='h1'>
                                {t(`categories:${category}.${subcategory}.${type}.name`)}
                            </Typography>
                        </a>
                    </Link>
                )}
            </Breadcrumbs>
        </div>
    );
};
