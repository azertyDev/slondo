/* eslint-disable @typescript-eslint/no-extra-semi */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import {GetServerSideProps} from 'next';
import {getStringValues, transformCyrillic} from "@src/helpers";
import {getServerSideSitemap} from 'next-sitemap';
import {transformLocations} from "@root/transformedLocations";
import {categories_list} from "@src/common_data/site_categories";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {PageNotFound} from "@src/components/page_not_found/PageNotFound";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const xmlRegEx = new RegExp(/\.xml$/);
    const queryLoc = ctx.query.location as string;
    const siteUrl = process.env.SERVER_URL || 'http://localhost:3317';

    const location = queryLoc.replace(xmlRegEx, '');
    const locations = [...getStringValues(transformLocations), 'uzbekistan'];
    const locationExist = locations.some(loc => xmlRegEx.test(queryLoc) && loc === location);

    const addOpts = {
        priority: 0.7,
        changefreq: 'daily'

    };

    const fields = categories_list.reduce((fieldsAcc, ctgr) => {
        const fields = [
            {
                loc: `${siteUrl}/${location}`,
                lastmod: new Date().toISOString(),
                ...addOpts,
                alternateRefs: [
                    {
                        href: `${siteUrl}/ru/${location}`,
                        hreflang: 'ru'
                    },
                    {
                        href: `${siteUrl}/uz/${location}`,
                        hreflang: 'uz'
                    }
                ]
            },
            {
                loc: `${siteUrl}/${location}/${transformCyrillic(ctgr.ru_name)}`,
                lastmod: new Date().toISOString(),
                ...addOpts,
                alternateRefs: [
                    {
                        href: `${siteUrl}/ru/${location}/${transformCyrillic(ctgr.ru_name)}`,
                        hreflang: 'ru'
                    },
                    {
                        href: `${siteUrl}/uz/${location}/${transformCyrillic(ctgr.ru_name)}`,
                        hreflang: 'uz'
                    }
                ]
            }
        ];

        ctgr.subcategory.forEach(subctgr => {
            const mainCtgrUrl = `${location}/${transformCyrillic(ctgr.ru_name)}`;
            const subctgrCyrillicName = transformCyrillic(subctgr.ru_name);

            fields.push({
                loc: `${siteUrl}/${mainCtgrUrl}/${subctgrCyrillicName}`,
                lastmod: new Date().toISOString(),
                ...addOpts,
                alternateRefs: [
                    {
                        href: `${siteUrl}/ru/${mainCtgrUrl}/${subctgrCyrillicName}`,
                        hreflang: 'ru'
                    },
                    {
                        href: `${siteUrl}/uz/${mainCtgrUrl}/${subctgrCyrillicName}`,
                        hreflang: 'uz'
                    }
                ]
            });

            if (subctgr.type !== undefined) {
                subctgr.type.forEach(typeCtgr => {
                    const typectgrCyrillicName = transformCyrillic(typeCtgr.ru_name);

                    fields.push({
                        loc: `${siteUrl}/${mainCtgrUrl}/${subctgrCyrillicName}/${typectgrCyrillicName}`,
                        lastmod: new Date().toISOString(),
                        ...addOpts,
                        alternateRefs: [
                            {
                                href: `${siteUrl}/ru/${mainCtgrUrl}/${subctgrCyrillicName}/${typectgrCyrillicName}`,
                                hreflang: 'ru'
                            },
                            {
                                href: `${siteUrl}/uz/${mainCtgrUrl}/${subctgrCyrillicName}/${typectgrCyrillicName}`,
                                hreflang: 'uz'
                            }
                        ]
                    });
                });
            }
        });

        return [...fieldsAcc, ...fields];
    }, []);

    if (!locationExist) {
        const locale = ctx.locale;
        ctx.res.statusCode = 404;

        return {
            props: {
                ...await serverSideTranslations(
                    locale,
                    [
                        'errors'
                    ]
                )
            }
        };
    }

    return getServerSideSitemap(ctx, locationExist ? fields : []);
};

// Default export to prevent next.js errors
export default function locationsSiteMap() {
    return <PageNotFound/>;
};