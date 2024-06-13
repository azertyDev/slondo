const path = require('path');

const i18n = {
    defaultLocale: 'ru',
    locales: ['ru', 'uz'],
    localeSubpaths: {uz: 'uz'},
    otherLanguages: ['uz'],
    react: {
        useSuspense: false
    },
    localePath: path.resolve('./public/locales')
};

module.exports = {i18n};
