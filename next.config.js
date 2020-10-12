require('dotenv').config();
const {nextI18NextRewrites} = require('next-i18next/rewrites');

const localeSubpaths = {
    uz: 'uz'
};

module.exports = {
    env: {
        SERVER_URL: process.env.SERVER_URL,
        PORT: process.env.PORT
    },
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {
        localeSubpaths,
    }
}