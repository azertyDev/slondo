const {nextI18NextRewrites} = require('next-i18next/rewrites');

const localeSubpaths = {
    uz: 'uz'
}

module.exports = {
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {
        localeSubpaths
    }
};