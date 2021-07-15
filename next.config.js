/* eslint-disable @typescript-eslint/no-var-requires */
const {i18n} = require('./next-i18next.config');

module.exports = {
    i18n,
    webpack5: true,
    images: {
        domains: ['backend.slondo.uz'],
    }
};