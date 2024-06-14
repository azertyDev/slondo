/* eslint-disable @typescript-eslint/no-var-requires */
const {i18n} = require('./next-i18next.config');

module.exports = {
    eslint: {
        ignoreDuringBuilds: true
    },
    poweredByHeader: false,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        });

        return config;
    },
    output: 'standalone',
    swcMinify: false,
    i18n
};
