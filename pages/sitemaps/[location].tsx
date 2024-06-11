/* eslint-disable @typescript-eslint/no-extra-semi */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { userAPI } from "@src/api/api";
import { PageNotFound } from "@src/components/page_not_found/PageNotFound";
import { getSitemap, transformCyrillic } from "@src/helpers";
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const xmlRegEx = new RegExp(/\.xml$/);
    const queryLoc = ctx.query.location as string;
    const locationName = queryLoc.replace(xmlRegEx, '');
    const siteUrl = process.env.SERVER_URL || 'http://localhost:3317';

    const [regions, categories] = await Promise.all([userAPI.getLocations(), userAPI.getCategories()]);

    const locationExist = xmlRegEx.test(queryLoc) && regions.some(loc => {
        if (loc.ru_name === locationName) return true;
        if (loc.cities.some(c => c.ru_name === locationName)) return true;
    });

    if (locationName === 'uzbekistan' || locationExist) {
        const fields = categories.reduce((fieldsAcc, ctgr) => {
            const fields = [
                getSitemapParams(`${locationName}/${transformCyrillic(ctgr.ru_name)}`)
            ];

            ctgr.subcategory.forEach(subctgr => {
                const mainCtgrUrl = `${locationName}/${transformCyrillic(ctgr.ru_name)}`;
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

        return getSitemap(ctx, [getSitemapParams(locationName), ...fields]);
    } else {
        const locale = ctx.locale;
        ctx.res.statusCode = 404;

        return {
            props: {
                ...await serverSideTranslations(
                    locale,
                    ['errors']
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