import React, {FC} from 'react';
import {Breadcrumbs} from '@material-ui/core';
// styles
import {useStyles} from './useStyles';
import Link from 'next/link';
import {useTranslation} from 'react-i18next';


type BreadcrumbsPropsType = {
    category: string,
    subcategory: string,
    type?: string
}

export const BreadcrumbsComponent: FC<BreadcrumbsPropsType> = ({category, subcategory, type}) => {
    const {t} = useTranslation('categories');

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Breadcrumbs
                separator='•'
                aria-label="breadcrumb"
                className='bc'
            >
                <Link href="#">
                    <a>{t(`categories:${category}`)}</a>
                </Link>
                <Link href="#">
                    <a>{t(`categories:${subcategory}`)}</a>
                </Link>
                {type && (
                    <Link href="#">
                        <a>{t(`categories:${type}`)}</a>
                    </Link>
                )}
            </Breadcrumbs>
        </div>
    );
};
