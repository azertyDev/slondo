import React from "react";
import {useTranslation} from "react-i18next";


export const PageNotFound = () => {
    const {t} = useTranslation('errors');
    return (
        <h1>{t('pageNotFound')}</h1>
    )
};