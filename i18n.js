import NextI18Next from 'next-i18next'
import _default from 'next/config'
import path from 'path'

const {localeSubpaths} = _default().publicRuntimeConfig;

export const {
    i18n,
    Link,
    I18nContext,
    useTranslation,
    withTranslation,
    appWithTranslation,
} = new NextI18Next({
    defaultLanguage: 'ru',
    otherLanguages: ['uz'],
    localeSubpaths,
    localePath: path.resolve('./public/static/locales'),
});