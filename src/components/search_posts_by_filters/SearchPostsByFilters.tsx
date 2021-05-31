import {FC, useState} from 'react';
import {userAPI} from '@src/api/api';
import {useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {getSEOContent} from '@src/common_data/seo_content';
import {
    getSearchTxt,
    getCtgrsByCyrillicNames,
} from '@src/helpers';
import {SearchForm} from '@src/components/search_posts_by_filters/search_form/SearchForm';
import {SearchResult} from '@src/components/search_posts_by_filters/search_result/SearchResult';
import {setErrorMsgAction} from '@root/src/redux/slices/errorSlice';
import {Grid, Hidden, Typography} from '@material-ui/core';
import {HomeSidebar} from '@src/components/home/main/home_sidebar/HomeSideBar';
import {useRouter} from 'next/router';
import {useStyles} from './useStyles';

export const SearchPostsByFilters: FC = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation('filters');
    const {query, locale} = useRouter();
    const {location, categories, ...urlParams} = query;

    const searchTxtFromUrl = getSearchTxt(categories as string[]);
    const ctgrsByCyrillicName = getCtgrsByCyrillicNames(categories as string[]);
    const [ctgr, subCtgr, typeCtgr] = ctgrsByCyrillicName;

    // SEO
    const seoContent = getSEOContent(ctgr, subCtgr, typeCtgr, t(`locations:${location}`), locale);
    const seoTxt = seoContent.text;
    const description = searchTxtFromUrl ? `${searchTxtFromUrl} SLONDO.uz` : seoContent.description;
    let title = searchTxtFromUrl ? `${searchTxtFromUrl} - SLONDO.uz` : seoContent.title;
    if (ctgr) title = searchTxtFromUrl ? `${searchTxtFromUrl} - ${t(`categories:${typeCtgr?.name ?? subCtgr?.name ?? ctgr?.name ?? ''}`)} - SLONDO.uz` : seoContent.title;

    const [posts, setPosts] = useState([]);

    const getPostsByFilters = async () => {
        try {
            const query: any = {
                page: 1,
                itemsPerPage: 25,
                ...urlParams
            };

            if (searchTxtFromUrl) query.title = searchTxtFromUrl;
            if (ctgr) query.category_id = ctgr.id;
            if (subCtgr) query.sub_category_id = subCtgr.id;
            if (typeCtgr) query.type_id = typeCtgr.id;

            const posts = (await userAPI.getPostsByFilters(query)).data;
            setPosts(posts);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    // useEffect(() => {
    //     getPostsByFilters();
    // }, [query]);

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
                        <SearchResult posts={posts}/>
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