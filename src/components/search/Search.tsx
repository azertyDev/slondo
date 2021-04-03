import React, {FC} from 'react';
import {useRouter} from 'next/router';
import {Typography} from "@material-ui/core";
import {MainLayout} from "@src/components/MainLayout";
import {getCtgrByCyrillicName} from "@src/helpers";
import {useTranslation} from "react-i18next";
import {SEOTextComponent} from "@src/components/elements/seo/SEOTextComponent";
import {PageNotFound} from "@src/components/page_not_found/PageNotFound";

export const Search: FC = () => {
    const {t} = useTranslation(['categories', 'locations']);
    const {query: {location, subCategoryName, typeName}, locale} = useRouter();

    const subCategory = getCtgrByCyrillicName(subCategoryName as string);
    const type = getCtgrByCyrillicName(typeName as string);

    const is404 = !subCategory || typeName && !type;
    console.log('subCategory', subCategory);
    console.log('type', type);
    const title = is404
                  ? null
                  : `${type ? `${t(type.name)} ${locale === 'ru' ? 'в' : ''} ${t(`locations:${location}`)}` : ''}`;

    return (
        is404
        ? <PageNotFound/>
        : <MainLayout title={title} description={''}>
            <Typography>
                {t(subCategory.name)}
            </Typography>
            {type && (
                <Typography>
                    {t(type.name)}
                </Typography>
            )}
            <SEOTextComponent/>
        </MainLayout>
    );
};