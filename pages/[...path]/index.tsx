import {GetServerSideProps} from 'next';
import {getStringValues} from "@src/helpers";
import {transLocations} from "@root/transformedLocations";
import {SearchPost} from "@src/components/post/search_post/SearchPost";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

export const getServerSideProps: GetServerSideProps = async ({locale, query, res}) => {
    if (!checkQuery(query.path[0])) {
        res.statusCode = 404;
    }
    return ({
        props: {
            statusCode: res.statusCode,
            ...await serverSideTranslations(
                locale,
                [
                    'main',
                    'cabinet',
                    'filters',
                    'auction',
                    'header',
                    'footer',
                    'notifications',
                    'categories',
                    'common',
                    'locations',
                    'errors',
                    'post',
                    'auth_reg'
                ]
            )
        }
    });
};

function checkQuery(loc: string): boolean {
    return getStringValues(transLocations).some(l => l === loc);
}

export default SearchPost;