import NextI18Next from 'next-i18next';
import _default from 'next/config';
import path from 'path';


const {localeSubpaths} = _default().publicRuntimeConfig;

export const {
    useTranslation,
    withTranslation,
    appWithTranslation,
    Link,
    i18n,
    Router,
} = new NextI18Next({
    strictMode: false,
    defaultLanguage: 'ru',
    otherLanguages: ['uz'],
    localeSubpaths,
    localePath: path.resolve('./public/static/locales'),
});
