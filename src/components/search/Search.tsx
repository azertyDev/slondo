import React, {FC} from 'react';
import {useRouter} from 'next/router';
import {Typography} from "@material-ui/core";
import {MainLayout} from "@src/components/main_layout/MainLayout";
import {useTranslation} from "react-i18next";
import {PageNotFound} from "@src/components/page_not_found/PageNotFound";
import {defaultSEOContent, getSEOContent} from "@src/common_data/seo_content";
import {SEOTextComponent} from "@src/components/elements/seo/SEOTextComponent";
import {getCtgrsByCyrillicNames} from "@src/helpers";


export const Search: FC = () => {
    const {t} = useTranslation(['categories', 'locations']);
    const {
        query,
        locale
    } = useRouter();

    const {location, categories, q} = query;
    const [subCtgrName, typeCtgrName] = categories as string[];

    const [subCtgr, typeCtgr] = getCtgrsByCyrillicNames(subCtgrName, typeCtgrName);

    const is404 = typeCtgrName && !typeCtgr || !subCtgr || categories.length > 2;

    let seoContent = subCtgr ? getSEOContent(subCtgr.name, location as string)[locale] : defaultSEOContent[locale];
    if (typeCtgr) seoContent = seoContent[typeCtgr.name];

    const title = q ? `${q} - ${typeCtgr ? t(typeCtgr.name) : t(subCtgr.name)} - SLONDO.uz` : seoContent.title;
    const description = q ? `${q} SLONDO.uz` : seoContent.description;

    return !is404
           ? (
               <MainLayout title={title} description={description}>
                   <Typography>
                       {t(subCtgr.name)}
                   </Typography>
                   <SEOTextComponent text={seoContent.text}/>
               </MainLayout>
           ) : <PageNotFound/>;
};