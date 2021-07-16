import {FC, useEffect, useState} from 'react';
import {Breadcrumbs} from '@material-ui/core';
import Link from 'next/link';
import {useTranslation} from 'react-i18next';
import {cookies, transformCyrillic} from '@src/helpers';
import {site_categories} from '@src/common_data/site_categories';
import {transformLocations} from '@src/common_data/locations';
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
    const typeCtgr = subCtgr?.type?.find(type => type.name === type);

    console.log(mainCtgr);

    const categoryName = transformCyrillic(mainCtgr?.ru_name);
    const subCategoryName = transformCyrillic(subCtgr?.ru_name);
    const typeName = transformCyrillic(typeCtgr?.ru_name);

    const categoryLink = `/${location}/${categoryName}`;
    const subCategoryLink = `/${location}/${categoryName}/${subCategoryName}`;
    const subCategoryTypeLink = `/${location}/${categoryName}/${subCategoryName}/${typeName}`;

    useEffect(() => {
        if (userLocation) {
            const {region, city} = userLocation;
            setLocation(city
                ? transformLocations[region.name][city.name]
                : transformLocations[region.name].name
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
                    <a>{t(`categories:${category}.name`)}</a>
                </Link>
                <Link href={subCategoryLink}>
                    <a>{t(`categories:${category}.${subcategory}.name`)}</a>
                </Link>
                {type && (
                    <Link href={subCategoryTypeLink}>
                        <a>{t(`categories:${category}.${subcategory}.${type}.name`)}</a>
                    </Link>
                )}
            </Breadcrumbs>
        </div>
    );
};
