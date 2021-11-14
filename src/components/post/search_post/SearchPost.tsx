import {FC, useEffect, useState} from 'react';
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
import {CategoriesCtx} from "@src/context";
import {useRouter} from "next/router";
import {useStyles} from './useStyles';
import {adsAPI} from "@src/api/api";
import {AdvType} from "@root/interfaces/Adv";
import {RightAdv} from "@src/components/elements/adv/right/RightAdv";
import {BottomAdv} from "@src/components/elements/adv/bottom/BottomAdv";

type SearchPostProps = {
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
        searchTermFromUrl
    } = props;

    const {locale} = useRouter();
    const {t} = useTranslation('locations');
    const isSmDown = useMediaQuery(useTheme().breakpoints.down('sm'));

    const initAds: {
        right: AdvType,
        bottom: AdvType
    } = {
        right: {
            image: null,
            url: '/uzbekistan',
            google_ads: false
        },
        bottom: {
            image: null,
            url: '/uzbekistan',
            google_ads: false
        }
    };

    const [ads, setAds] = useState(initAds);
    const {right, bottom} = ads;

    const fetchAds = async () => {
        try {
            const {sidebar, footer} = await adsAPI.getAds();
            const ads = {
                right: sidebar,
                bottom: footer
            };

            setAds(ads);
        } catch (e) {
            console.error(e.message);
        }
    };

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

    useEffect(() => {
        fetchAds();
    }, []);

    const classes = useStyles();
    return statusCode !== 200
        ? <ErrorPage statusCode={statusCode}/>
        : <>
            <CustomHead
                title={seoTitle}
                description={description}
            />
            <div className={classes.root}>
                <CategoriesCtx.Provider value={siteCategories}>
                    <SearchHeader/>
                    <main>
                        <Container
                            maxWidth="xl"
                            className='layout-container'
                        >
                            <Grid container spacing={isSmDown ? 0 : 2}>
                                <Grid item xs={12} lg={9} zeroMinWidth>
                                    <SearchForm
                                        categories={ctgrsByCyrName}
                                    />
                                    <SearchResult
                                        rightAdvData={right}
                                        categories={ctgrsByCyrName}
                                        searchTermFromUrl={searchTermFromUrl}
                                    />
                                    <div className='bot-adv-wrapper'>
                                        <BottomAdv adv={bottom}/>
                                    </div>
                                </Grid>
                                <Hidden mdDown>
                                    <Grid item xs={3}>
                                        <div className='sidebar-wrapper'>
                                            <HomeSidebar/>
                                        </div>
                                        <RightAdv
                                            adv={right}
                                            threshold={475}
                                        />
                                    </Grid>
                                </Hidden>
                            </Grid>
                            {!!seoTxt && <SEOTextComponent text={seoTxt}/>}
                        </Container>
                    </main>
                </CategoriesCtx.Provider>
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
