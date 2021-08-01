const fs = require('fs');
const transformLocations = require('./transformedLocations');

const getStringValues = (obj) => {
    const values = [];
    const keys = Object.keys(obj);

    if (keys.length !== 0) {
        keys.forEach(k => {
            if (typeof obj[k] === 'string') {
                values.push(obj[k]);
            } else if (typeof obj[k] === 'object') {
                values.push(...getStringValues(obj[k]));
            }
        });
    }

    return values;
};

(function () {
    const serverUrl = process.env.SERVER_URL || 'http://localhost:3317';
    const locations = ['uzbekistan', ...getStringValues(transformLocations)];

    let sitemaps = '';
    const robotsTxt = `
# *
User-agent: *
Allow: /
Allow: /help/how_to_create_post
Allow: /help/how_to_create_auction
Allow: /help/how_to_participate
Allow: /help/how_to_register

# *
User-agent: *
Disallow: /cabinet
Disallow: /create
Disallow: /sitemaps
Disallow: /help

# Host
Host: ${serverUrl}

# Sitemaps
Sitemap: ${serverUrl}/sitemap.xml`;

    locations.forEach(loc => {
        sitemaps = sitemaps.concat(`<sitemap><loc>${serverUrl}/sitemaps/${loc}.xml</loc><lastmod>${new Date().toISOString()}</lastmod></sitemap>`);
    });

    const xml = `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemaps}</sitemapindex>`;


    fs.writeFile('public/sitemap.xml', xml, (err) => {
        if (err) throw err;
    });

    fs.writeFile('public/robots.txt', robotsTxt, (err) => {
        if (err) throw err;
    });
})();