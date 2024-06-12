// import fs from 'fs';
// import Axios from "axios";
// import CyrillicToTranslit from "cyrillic-to-translit-js";
// import https from 'https';

// const agent = new https.Agent({
//     rejectUnauthorized: false
// });

// const transFromCyrillic = (locations) => {
//     const transform = new CyrillicToTranslit().transform;

//     return locations?.map(loc => {
//         loc.ru_name = transform(loc.ru_name)
//             .toLowerCase()
//             .replace(/\s+/g, '-');

//         if (loc.cities) {
//             loc.cities = transFromCyrillic(loc.cities);
//         }

//         return loc;
//     });
// };

// const getLocationsNames = async () => {
//     const names = [];

//     const regions = await Axios.create({
//         httpsAgent: agent,
//         withCredentials: true,
//         baseURL: 'https://backend.slondo.uz/api/'
//     })
//         .get(`location`)
//         .then(res => transFromCyrillic(res.data));

//     regions.forEach(region => {
//         names.push(region.ru_name);
//         if (region.cities) {
//             names.push(...region.cities.map(city => city.ru_name));
//         }
//     });

//     return names;
// };

// (async function () {
//     const serverUrl = process.env.SERVER_URL;
//     const names = await getLocationsNames();
//     const locations = ['uzbekistan', ...names];

//     let sitemaps = '';
//     const robotsTxt = `
// # *
// User-agent: *
// Allow: /
// Allow: /help/how_to_create_post
// Allow: /help/how_to_create_auction
// Allow: /help/how_to_participate
// Allow: /help/how_to_register

// # *
// User-agent: *
// Disallow: /cabinet
// Disallow: /create
// Disallow: /help
// Disallow: /user
// Disallow: /localhost
// Disallow: /192.*

// # Host
// Host: ${serverUrl}

// # Sitemaps
// Sitemap: ${serverUrl}/sitemap.xml`;

//     locations.forEach(loc => {
//         sitemaps = sitemaps.concat(`<sitemap><loc>${serverUrl}/sitemaps/${loc}.xml</loc><lastmod>${new Date().toISOString()}</lastmod></sitemap>`);
//     });

//     const xml = `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemaps}</sitemapindex>`;

//     fs.writeFile('public/sitemap.xml', xml, (err) => {
//         if (err) throw err;
//     });

//     fs.writeFile('public/robots.txt', robotsTxt, (err) => {
//         if (err) throw err;
//     });
// })();