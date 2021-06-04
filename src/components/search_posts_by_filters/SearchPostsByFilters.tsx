import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {getSEOContent} from '@src/common_data/seo_content';
import {getSearchTxt} from '@src/helpers';
import {SearchForm} from '@src/components/search_posts_by_filters/search_form/SearchForm';
import {SearchResult} from '@src/components/search_posts_by_filters/search_result/SearchResult';
import {Grid, Hidden, Typography} from '@material-ui/core';
import {HomeSidebar} from '@src/components/home/main/home_sidebar/HomeSideBar';
import {useStyles} from './useStyles';

type SearchPostsByFiltersPropsType = {
    locale: string,
    initPosts,
    initTotal: number,
    userLocation,
    categories,
    urlParams
};

export const SearchPostsByFilters: FC<SearchPostsByFiltersPropsType> = (props) => {
    const {
        locale,
        initPosts,
        initTotal,
        userLocation,
        categories,
        urlParams
    } = props;

    const {t} = useTranslation('filters');

    const translatedLocation = t(`locations:${userLocation?.city?.name ?? userLocation?.region?.name ?? 'uzbekistan'}`);

    const [ctgr, subCtgr, typeCtgr] = categories;
    const searchTxtFromUrl = getSearchTxt(categories as string[]);

    // SEO
    const seoContent = getSEOContent(ctgr, subCtgr, typeCtgr, translatedLocation, locale);
    const seoTxt = seoContent.text;
    const description = searchTxtFromUrl
                        ? `${searchTxtFromUrl} ${locale === 'ru' ? 'в' : ''} ${translatedLocation}${locale === 'uz' ? 'da' : ''} SLONDO.uz`
                        : seoContent.description;
    let title = searchTxtFromUrl ? `${searchTxtFromUrl} - SLONDO.uz` : seoContent.title;
    if (ctgr) {
        title = searchTxtFromUrl
                ? `${searchTxtFromUrl} - ${t(`categories:${typeCtgr?.name ?? subCtgr?.name ?? ctgr?.name ?? ''}`)} - SLONDO.uz`
                : seoContent.title;
    }

    const classes = useStyles();
    return (
        <MainLayout title={title} description={description} seoTxt={seoTxt}>
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} md={9}>
                        <Typography variant='h5'>
                            {t('common:youLookingFor')}
                        </Typography>
                        <SearchForm
                            t={t}
                            urlParams={urlParams}
                            categories={categories}
                        />
                        <SearchResult
                            t={t}
                            categories={categories}
                            urlParams={urlParams}
                            initPosts={initPosts}
                            initTotal={initTotal}
                            searchTxtFromUrl={searchTxtFromUrl}
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