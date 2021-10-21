import {FC} from 'react';
import ErrorPage from '@root/pages/_error';
import {useTranslation} from 'react-i18next';
import {SearchForm} from '@src/components/post/search_post/search_form/SearchForm';
import {SearchResult} from '@src/components/post/search_post/search_result/SearchResult';
import {
    Container,
    Grid,
    Hidden,
    useMediaQuery,
    useTheme
} from '@material-ui/core';
import {HomeSidebar} from '@src/components/home/main/home_sidebar/HomeSideBar';
import {SEOTextComponent} from '@src/components/elements/seo_text_component/SEOTextComponent';
import {Footer} from '@src/components/footer/Footer';
import {ErrorModal} from '@src/components/error_modal/ErrorModal';
import {CustomHead} from '@src/components/head/CustomHead';
import {SearchHeader} from '@src/components/post/search_post/search_header/SearchHeader';
import {getSEOContent} from "@src/common_data/seo_content";
import {categoriesNormalize, CtgrsByCyrillicNameType, transformCyrillic} from "@src/helpers";
import {useStyles} from './useStyles';
import {useRouter} from "next/router";

type SearchPostProps = {
    urlParams,
    urlCategories,
    location,
    site_categories,
    searchTermFromUrl,
    statusCode: number,
}

export const SearchPost: FC<SearchPostProps> = (props) => {
    const {
        urlCategories,
        site_categories,
        location,
        statusCode,
        urlParams,
        searchTermFromUrl
    } = props;

    const {locale} = useRouter();
    const {t} = useTranslation('locations');
    const isSmDown = useMediaQuery(useTheme().breakpoints.down('sm'));

    const siteCategories = categoriesNormalize(site_categories);

    const ctgrsByCyrName = getCtgrsByCyrillicNames(urlCategories, siteCategories);
    const [ctgr, subctgr = null, typectgr = null] = ctgrsByCyrName;

    const userLocation = t(location);

    const seoContent = getSEOContent({
        ctgr,
        subctgr,
        typectgr,
        locale,
        location: userLocation
    });

    let seoTitle = seoContent.title;
    const seoTxt = seoContent.text;

    const description = searchTermFromUrl
        ? `${searchTermFromUrl} ${locale === 'ru' ? 'в' : ''} ${userLocation}${locale === 'uz' ? 'da' : 'е'} SLONDO.uz`
        : seoContent.description;

    if (ctgr && searchTermFromUrl) {
        seoTitle =
            `${searchTermFromUrl} - ${t(`common:categories:${typectgr?.name ?? subctgr?.name ?? ctgr?.name ?? ''}`)} - SLONDO.uz`;
    }


    const classes = useStyles();
    return statusCode !== 200
        ? <ErrorPage statusCode={statusCode}/>
        : <>
            <CustomHead
                title={seoTitle}
                description={description}
            />
            <div className={classes.root}>
                <SearchHeader/>
                <main>
                    <Container
                        maxWidth="xl"
                        className='layout-container'
                    >
                        <Grid container spacing={isSmDown ? 0 : 2}>
                            <Grid item xs={12} lg={9} zeroMinWidth>
                                <SearchForm
                                    urlParams={urlParams}
                                    categories={ctgrsByCyrName}
                                    siteCategories={siteCategories}
                                />
                                <SearchResult
                                    urlParams={urlParams}
                                    categories={ctgrsByCyrName}
                                    searchTermFromUrl={searchTermFromUrl}
                                />
                            </Grid>
                            <Hidden mdDown>
                                <Grid item xs={3}>
                                    <HomeSidebar/>
                                </Grid>
                            </Hidden>
                        </Grid>
                        {!!seoTxt && <SEOTextComponent text={seoTxt}/>}
                    </Container>
                </main>
                <Hidden smDown>
                    <Footer/>
                </Hidden>
            </div>
            <ErrorModal/>
        </>;
};

function getCtgrsByCyrillicNames(
    urlCategories: string[] = [],
    siteCategories
): CtgrsByCyrillicNameType | [] {
    if (urlCategories.length) {
        const [categoryName, subCtgrName, typeCtgrName] = urlCategories;

        return siteCategories.reduce((acc: any, ctgr) => {
            if (transformCyrillic(ctgr.ru_name) === categoryName) {
                acc.push(ctgr);
                ctgr.subcategory.forEach(subctgr => {
                    if (transformCyrillic(subctgr.ru_name) === subCtgrName) {
                        acc.push(subctgr);
                        if (typeCtgrName) {
                            subctgr.type?.forEach(type => {
                                if (transformCyrillic(type.ru_name) === typeCtgrName) {
                                    acc.push(type);
                                }
                            });
                        }
                    }
                });
            }
            return acc;
        }, []);
    }

    return [];
}
