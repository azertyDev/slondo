import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {getSEOContent} from '@src/common_data/seo_content';
import {getCtgrsByCyrillicNames, getSearchTxt} from '@src/helpers';
import {SearchForm} from '@src/components/search_posts/search_form/SearchForm';
import {SearchResult} from '@src/components/search_posts/search_result/SearchResult';
import {Grid, Hidden} from '@material-ui/core';
import {HomeSidebar} from '@src/components/home/main/home_sidebar/HomeSideBar';
import {useStyles} from './useStyles';

type SearchPostsByFiltersPropsType = {
    query,
    locale: string,
    userLocation,
};

export const SearchPosts: FC<SearchPostsByFiltersPropsType> = (props) => {
    const {
        query,
        locale,
        userLocation,
    } = props;

    const {t} = useTranslation('filters');
    const {location, categories, ...urlParams} = query;

    const translatedLocation = t(`locations:${userLocation?.city?.name ?? userLocation?.region?.name ?? 'uzbekistan'}`);

    const categoriesByCyrillicNames = getCtgrsByCyrillicNames(categories as string[]);
    const [ctgr, subctgr, typeCtgr] = categoriesByCyrillicNames;

    const searchTxtFromUrl = getSearchTxt(categories as string[]);

    // SEO
    const seoContent = getSEOContent(ctgr, subctgr, typeCtgr, translatedLocation, locale);

    const seoTxt = seoContent.text;

    const description = searchTxtFromUrl
                        ? `${searchTxtFromUrl} ${locale === 'ru' ? 'в' : ''} ${translatedLocation}${locale === 'uz' ? 'da' : 'е'} SLONDO.uz`
                        : seoContent.description;

    let title = searchTxtFromUrl ? `${searchTxtFromUrl} - SLONDO.uz` : seoContent.title;

    if (ctgr) {
        title = searchTxtFromUrl
                ? `${searchTxtFromUrl} - ${t(`categories:${typeCtgr?.name ?? subctgr?.name ?? ctgr?.name ?? ''}`)} - SLONDO.uz`
                : seoContent.title;
    }

    const classes = useStyles();
    return (
        <MainLayout title={title} description={description} seoTxt={seoTxt}>
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} md={9}>
                        {/*<Typography variant='h5'>*/}
                        {/*    {t('common:youLookingFor')}*/}
                        {/*</Typography>*/}
                        <SearchForm
                            t={t}
                            urlParams={urlParams}
                            categories={categoriesByCyrillicNames}
                        />
                        <SearchResult
                            t={t}
                            urlParams={urlParams}
                            searchTxtFromUrl={searchTxtFromUrl}
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
    );
};