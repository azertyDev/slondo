import {FC, useEffect, useState} from 'react';
import {userAPI} from '@src/api/api';
import {useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {getSEOContent} from '@src/common_data/seo_content';
import {addParentsToCtgrs, CtgrsByCyrillicNameType, normalizeFiltersByCategory, setRequireVals} from '@src/helpers';
import {categories_list} from '@src/common_data/categories_list';
import {SearchForm} from '@src/components/search_posts_by_filters/search_form/SearchForm';
import {SearchResult} from '@src/components/search_posts_by_filters/search_result/SearchResult';
import {setErrorMsgAction} from '@root/src/redux/slices/errorSlice';
import {Grid, Hidden, Typography} from '@material-ui/core';
import {HomeSidebar} from '@src/components/home/main/home_sidebar/HomeSideBar';
import {useStyles} from './useStyles';


type SearchContainerPropsType = {
    locale,
    location,
    urlParams,
    ctgrsByQuery: CtgrsByCyrillicNameType
};

export const SearchPostsByFilters: FC<SearchContainerPropsType> = (props) => {
    const {
        locale,
        location,
        urlParams,
        ctgrsByQuery
    } = props;

    const dispatch = useDispatch();
    const {t} = useTranslation('filters');

    const [ctgr, subCtgr, typeCtgr = null] = ctgrsByQuery;
    console.log('urlParams', urlParams);
    console.log('ctgrsByQuery', ctgrsByQuery);
    // SEO
    const seoContent = getSEOContent(ctgr.name, subCtgr.name, typeCtgr, t(`locations:${location}`), locale);
    const seoTxt = seoContent ? seoContent.text : null;
    const description = urlParams.q ? `${urlParams.q} SLONDO.uz` : seoContent ? seoContent.description : null;
    const title = urlParams.q ? `${urlParams.q} - ${typeCtgr ? t(typeCtgr.name) : t(subCtgr.name)} - SLONDO.uz` : seoContent ? seoContent.title : null;

    const initFilters = {
        categories: addParentsToCtgrs(categories_list),
        subCategories: ctgr.subCategory,
        typeCategories: subCtgr.type,
        filtersByCtgr: {}
    };

    const [posts, setPosts] = useState([]);
    const [filters, setFilters] = useState(initFilters);
    const [values, setValues] = useState<any>({});

    const getPostsByFilters = async () => {
        try {
            const query: any = {
                page: 1,
                itemsPerPage: 25,
                category_id: ctgr.id,
                ...urlParams
            };

            if (subCtgr) query.sub_category_id = subCtgr.id;
            if (typeCtgr) query.type_id = typeCtgr.id;

            const posts = (await userAPI.getPostsByFilters(query)).data;
            setPosts(posts);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const setFiltersByCtgr = async () => {
        try {
            const filtersByCtgr = await userAPI.getDataForCreatePost(ctgr.id, subCtgr.id, typeCtgr?.id);
            setFilters({
                ...filters,
                filtersByCtgr: normalizeFiltersByCategory(
                    filtersByCtgr.default_param ?? filtersByCtgr,
                    typeCtgr
                )
            });
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    // useEffect(() => {
    //     getPostsByFilters();
    // }, []);

    useEffect(() => {
        setRequireVals(values, setValues, filters, subCtgr.name);
    }, [filters]);

    useEffect(() => {
        setFiltersByCtgr();
        setValues({});
    }, [ctgrsByQuery]);

    console.log('posts', posts);
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
                            filters={filters}
                            categoryName={ctgr.name}
                            ctgrsByQuery={ctgrsByQuery}
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