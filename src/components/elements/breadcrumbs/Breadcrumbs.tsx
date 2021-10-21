import {FC, useContext} from 'react';
import Link from 'next/link';
import {Breadcrumbs, Typography} from '@material-ui/core';
import {useTranslation} from 'react-i18next';
import {transformCyrillic} from '@src/helpers';
import {useStyles} from './useStyles';
import {CategoriesCtx} from "@src/context";

type BreadcrumbsPropsType = {
    category: string,
    subcategory: string,
    type: string
}

export const BreadcrumbsComponent: FC<BreadcrumbsPropsType> = ({category, subcategory, type}) => {
    const {t} = useTranslation('categories');
    const siteCategories = useContext(CategoriesCtx);

    const mainCtgr = siteCategories.find(ctgr => ctgr.name === category);
    const subCtgr = mainCtgr?.subcategory?.find(subCtgr => subCtgr.name === subcategory);
    const typeCtgr = subCtgr?.type?.find(typeCtgr => typeCtgr.name === type);

    const categoryName = transformCyrillic(mainCtgr?.ru_name);
    const subCategoryName = transformCyrillic(subCtgr?.ru_name);
    const typeName = transformCyrillic(typeCtgr?.ru_name);

    const categoryLink = `/uzbekistan/${categoryName}`;
    const subCategoryLink = `${categoryLink}/${subCategoryName}`;
    const subCategoryTypeLink = `${subCategoryLink}/${typeName}`;

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
