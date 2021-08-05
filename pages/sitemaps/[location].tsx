/* eslint-disable @typescript-eslint/no-extra-semi */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import {GetServerSideProps} from 'next';
import {getSitemap, getStringValues, transformCyrillic} from "@src/helpers";
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

    if (locationExist) {
        const fields = categories_list.reduce((fieldsAcc, ctgr) => {
            const fields = [
                getSitemapParams(`${location}/${transformCyrillic(ctgr.ru_name)}`)
            ];

            ctgr.subcategory.forEach(subctgr => {
                const mainCtgrUrl = `${location}/${transformCyrillic(ctgr.ru_name)}`;
                const subctgrCyrillicName = transformCyrillic(subctgr.ru_name);

                fields.push(
                    getSitemapParams(`${mainCtgrUrl}/${subctgrCyrillicName}`)
                );

                if (subctgr.type !== undefined) {
                    subctgr.type.forEach(typeCtgr => {
                        const typectgrCyrillicName = transformCyrillic(typeCtgr.ru_name);
                        fields.push(
                            getSitemapParams(`${mainCtgrUrl}/${subctgrCyrillicName}/${typectgrCyrillicName}`)
                        );
                    });
                }
            });

            return [...fieldsAcc, ...fields];
        }, []);

        return getSitemap(ctx, [getSitemapParams(location), ...fields]);
    } else {
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

    function getSitemapParams(url) {
        const loc = `${siteUrl}/${url}`;
        return {
            loc,
            alternateRefs: [
                {
                    href: loc,
                    hreflang: 'ru'
                },
                {
                    href: `${siteUrl}/uz/${url}`,
                    hreflang: 'uz'
                }
            ]
        };
    }
};

// Default export to prevent next.js errors
export default function locationsSiteMap() {
    return <PageNotFound/>;
};