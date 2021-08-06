import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {getSEOContent} from '@src/common_data/seo_content';
import {getCtgrsByCyrillicNames, getSearchTxt} from '@src/helpers';
import {SearchForm} from '@src/components/post/search_post/search_form/SearchForm';
import {SearchResult} from '@src/components/post/search_post/search_result/SearchResult';
import {Grid, Hidden, useMediaQuery, useTheme} from '@material-ui/core';
import {HomeSidebar} from '@src/components/home/main/home_sidebar/HomeSideBar';
import {PageNotFound} from "@src/components/page_not_found/PageNotFound";
import {useStyles} from './useStyles';

type SearchPostsByFiltersPropsType = {
    query,
    locale: string,
    userLocation,
    locationExist: boolean
};

export const SearchPost: FC<SearchPostsByFiltersPropsType> = (props) => {
    const {
        query,
        locale,
        userLocation,
        locationExist
    } = props;

    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    const {t} = useTranslation('locations');
    const {user_location, categories, ...urlParams} = query;
    const {region, city} = userLocation;

    const translatedLocation = t(`${city?.name ? `${region.name}.${city.name}` : region?.name ? `${region.name}.name` : 'uzbekistan'}`);

    const categoriesByCyrillicNames = getCtgrsByCyrillicNames(categories as string[]);
    const [ctgr, subctgr, typeCtgr] = categoriesByCyrillicNames;

    const searchTermFromUrl = getSearchTxt(categories as string[]);

    // SEO
    const seoContent = getSEOContent(ctgr, subctgr, typeCtgr, translatedLocation, locale);

    const seoTxt = seoContent.text;

    const description = searchTermFromUrl
        ? `${searchTermFromUrl} ${locale === 'ru' ? 'в' : ''} ${translatedLocation}${locale === 'uz' ? 'da' : 'е'} SLONDO.uz`
        : seoContent.description;

    let title = searchTermFromUrl ? `${searchTermFromUrl} - SLONDO.uz` : seoContent.title;

    if (ctgr) {
        title = searchTermFromUrl
            ? `${searchTermFromUrl} - ${t(`site_categories:${typeCtgr?.name ?? subctgr?.name ?? ctgr?.name ?? ''}`)} - SLONDO.uz`
            : seoContent.title;
    }

    const classes = useStyles();
    return locationExist
        ? <MainLayout title={title} description={description} seoTxt={seoTxt}>
            <div className={classes.root}>
                <Grid container spacing={isSm ? 0 : 2}>
                    <Grid item xs={12} sm={12} lg={9} zeroMinWidth>
                        <SearchForm
                            urlParams={urlParams}
                            categories={categoriesByCyrillicNames}
                        />
                        <SearchResult
                            urlParams={urlParams}
                            searchTermFromUrl={searchTermFromUrl}
                            categories={categoriesByCyrillicNames}
                        />
                    </Grid>
                    <Hidden mdDown>
                        <Grid item xs={3}>
                            <HomeSidebar/>
                        </Grid>
                    </Hidden>
                </Grid>
            </div>
        </MainLayout>
        : <PageNotFound/>;
};