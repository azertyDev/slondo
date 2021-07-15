import {FC} from 'react';
import {Breadcrumbs} from '@material-ui/core';
import Link from 'next/link';
import {useTranslation} from 'react-i18next';
import {transformCyrillic} from '@src/helpers';
import {useStyles} from './useStyles';


type BreadcrumbsPropsType = {
    category: string,
    subcategory: string,
    type: string
}

export const BreadcrumbsComponent: FC<BreadcrumbsPropsType> = ({category, subcategory, type}) => {
    const {t} = useTranslation('categories');


    const location = 'tashkent';
    const categoryName = transformCyrillic(category.ru_name);
    const subCategoryName = transformCyrillic(subcategory.ru_name);
    // const typeName = type.name || [];
    const url = `/${location}/${categoryName}/${subCategoryName}`;

    const categoryLink = `/${location}/${categoryName}`;
    const subCategoryLink = `/${location}/${categoryName}/${subCategoryName}`;
    // const subCategoryTypeLink = `/${location}/${categoryName}/${subCategoryName}/${typeName}`;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Breadcrumbs
                separator='•'
                aria-label="breadcrumb"
                className='bc'
            >
                <Link href='#'>
                    <a>{t(`categories:${category}.name`)}</a>
                </Link>
                <Link href='#'>
                    <a>{t(`categories:${category}.${subcategory}.name`)}</a>
                </Link>
                {type && (
                    <Link href='#'>
                        <a>{t(`categories:${category}.${subcategory}.${type}.name`)}</a>
                    </Link>
                )}
            </Breadcrumbs>
        </div>
    );
};
