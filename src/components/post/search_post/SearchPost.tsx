import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {getSEOContent} from '@src/common_data/seo_content';
import {getCtgrsByCyrillicNames} from '@src/helpers';
import {SearchForm} from '@src/components/post/search_post/search_form/SearchForm';
import {SearchResult} from '@src/components/post/search_post/search_result/SearchResult';
import {Container, Grid, Hidden, useMediaQuery, useTheme} from '@material-ui/core';
import {HomeSidebar} from '@src/components/home/main/home_sidebar/HomeSideBar';
import ErrorPage from "@root/pages/_error";
import {useRouter} from "next/router";
import {Header} from "@src/components/header/Header";
import {SEOTextComponent} from "@src/components/elements/seo_text_component/SEOTextComponent";
import {Footer} from "@src/components/footer/Footer";
import {ErrorModal} from "@src/components/error_modal/ErrorModal";
import {CustomHead} from "@src/components/head/CustomHead";
import {useStyles} from './useStyles';

type SearchPostProps = {
    statusCode: number
}

export const SearchPost: FC<SearchPostProps> = ({statusCode}) => {
    const {query: {path, ...urlParams}} = useRouter();
    const is404 = statusCode === 404;

    const [location, ...categories] = path as string[];

    const {locale} = useRouter();
    const {t} = useTranslation('locations');
    const isSm = useMediaQuery(useTheme().breakpoints.down('sm'));

    const ctgrsByCyrName = getCtgrsByCyrillicNames(categories as string[]);
    const [ctgr, subctgr, typeCtgr] = ctgrsByCyrName;

    const searchTermFromUrl = urlParams.q as string || '';

    // SEO
    const seoContent = getSEOContent(ctgr, subctgr, typeCtgr, location, locale);

    const seoTxt = seoContent.text;

    const description = searchTermFromUrl
        ? `${searchTermFromUrl} ${locale === 'ru' ? 'в' : ''} ${location}${locale === 'uz' ? 'da' : 'е'} SLONDO.uz`
        : seoContent.description;

    let title = searchTermFromUrl ? `${searchTermFromUrl} - SLONDO.uz` : seoContent.title;

    if (ctgr) {
        title = searchTermFromUrl
            ? `${searchTermFromUrl} - ${t(`site_categories:${typeCtgr?.name ?? subctgr?.name ?? ctgr?.name ?? ''}`)} - SLONDO.uz`
            : seoContent.title;
    }

    const classes = useStyles();
    return is404
        ? <ErrorPage statusCode={statusCode}/>
        : <>
            <CustomHead
                title={title}
                description={description}
            />
            <div className={classes.root}>
                <Header/>
                <main>
                    <Container
                        maxWidth="xl"
                        style={{
                            paddingTop: '48px',
                            position: 'relative'
                        }}
                    >
                        <div>
                            <Grid container spacing={isSm ? 0 : 2}>
                                <Grid item xs={12} sm={12} lg={9} zeroMinWidth>
                                    <SearchForm
                                        urlParams={urlParams}
                                        categories={ctgrsByCyrName}
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
                        </div>
                        {!!seoTxt && <SEOTextComponent text={seoTxt}/>}
                    </Container>
                </main>
                <Hidden xsDown>
                    <Footer/>
                </Hidden>
            </div>
            <ErrorModal/>
        </>;
};