import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {getSEOContent} from '@src/common_data/seo_content';
import {
    cookies,
    getSearchTxt,
    getCtgrsByCyrillicNames
} from '@src/helpers';
import {SearchForm} from '@src/components/search_posts_by_filters/search_form/SearchForm';
import {SearchResult} from '@src/components/search_posts_by_filters/search_result/SearchResult';
import {Grid, Hidden, Typography} from '@material-ui/core';
import {HomeSidebar} from '@src/components/home/main/home_sidebar/HomeSideBar';
import {useRouter} from 'next/router';
import {useStyles} from './useStyles';


export const SearchPostsByFilters: FC = () => {
    const {query, locale} = useRouter();
    const {t} = useTranslation('filters');
    const {location, categories, ...urlParams} = query;
    const userLocation = cookies.get('user_location');
    const translatedLocation = t(`locations:${userLocation?.city?.name ?? userLocation?.region?.name ?? 'uzbekistan'}`);

    const searchTxtFromUrl = getSearchTxt(categories as string[]);
    const ctgrsByCyrillicName = getCtgrsByCyrillicNames(categories as string[]);
    const [ctgr, subCtgr, typeCtgr] = ctgrsByCyrillicName;

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
                            categories={ctgrsByCyrillicName}
                        />
                        <SearchResult
                            t={t}
                            query={query}
                            urlParams={urlParams}
                            searchTxtFromUrl={searchTxtFromUrl}
                            categories={ctgrsByCyrillicName}
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