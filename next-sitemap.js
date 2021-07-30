const siteUrl = process.env.SERVER_URL || 'http://localhost:3317';

module.exports = {
    siteUrl: siteUrl,
    sitemapSize: 5000,
    generateRobotsTxt: true,
    exclude: [
        '/cabinet',
        '/create',
        '/sitemap-locations.xml',
        '/sitemap-categories.xml',
        '/404'
    ],
    alternateRefs: [
        {
            href: 'https://slondo.uz/uz',
            hreflang: 'uz'
        }
    ],
    // Default transformation function
    transform: async (config, path) => {
        return {
            loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs ?? []
        };
    },
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: ['/']
            },
            {
                userAgent: '*',
                disallow: ['/cabinet', '/create']
            }
        ],
        additionalSitemaps: [
            `${siteUrl}/sitemap-locations.xml`,
            `${siteUrl}/sitemap-categories.xml`
        ]
    }
};