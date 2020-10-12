import NextI18Next from 'next-i18next'
import path from 'path'


export const {useTranslation, withTranslation, appWithTranslation, i18n} = new NextI18Next({
    defaultLanguage: 'ru',
    otherLanguages: ['uz'],
    localePath: path.resolve('./public/static/locales')
});