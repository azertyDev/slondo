import {FC, useEffect, useState} from 'react';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {useTranslation} from 'react-i18next';
import {getSEOContent} from '@src/common_data/seo_content';
import {addParentsToCtgrs, CtgrsByCyrillicNameType} from '@src/helpers';
import {useFormik} from 'formik';
import {ParsedUrlQuery} from 'querystring';
import {categories_list} from '@src/common_data/categories_list';
import {SearchForm} from '@src/components/search_posts_by_filters/search_form/SearchForm';
import {SearchResult} from '@src/components/search_posts_by_filters/search_result/SearchResult';
import {userAPI} from '@src/api/api';
import {useDispatch} from 'react-redux';
import {setErrorMsgAction} from '@root/src/redux/slices/errorSlice';
import {Grid, Hidden, Typography} from '@material-ui/core';
import {HomeSidebar} from '@src/components/home/main/home_sidebar/HomeSideBar';
import {useStyles} from './useStyles';


type SearchContainerPropsType = {
    locale: string,
    query: ParsedUrlQuery,
    ctgrsByQuery: CtgrsByCyrillicNameType
};

export const SearchPostsByFilters: FC<SearchContainerPropsType> = (props) => {
    const {
        locale,
        query,
        ctgrsByQuery
    } = props;

    const {t} = useTranslation('filters');
    const dispatch = useDispatch();

    const {location, q} = query;
    const [ctgr, subCtgr, typeCtgr = null] = ctgrsByQuery;

    // SEO
    const seoContent = getSEOContent(ctgr.name, subCtgr.name, typeCtgr, t(`locations:${location}`), locale);
    const seoTxt = seoContent ? seoContent.text : null;
    const description = q ? `${q} SLONDO.uz` : seoContent ? seoContent.description : null;
    const title = q ? `${q} - ${typeCtgr ? t(typeCtgr.name) : t(subCtgr.name)} - SLONDO.uz` : seoContent ? seoContent.title : null;

    const initFilters = {
        categories: addParentsToCtgrs(categories_list),
        subCategories: ctgr.subCategory,
        typeCategories: subCtgr.type
    };

    const initValues: any = {
        category: subCtgr ?? ctgr,
        type: typeCtgr ?? '',
        price: {
            from: '',
            to: ''
        }
    };

    const [posts, setPosts] = useState([]);
    const [filters, setFilters] = useState(initFilters);

    const onSubmit = () => {
        console.log('submit');
    };

    const formik = useFormik({
        initialValues: initValues,
        onSubmit
    });

    const {values, setValues} = formik;

    const getPostsByFilters = async () => {
        try {
            const query: any = {
                page: 1,
                itemsPerPage: 25,
                category_id: ctgr.id
            };

            if (subCtgr) query.sub_category_id = subCtgr.id;
            if (typeCtgr) query.type_id = typeCtgr.id;

            const posts = await userAPI.getPostsByFilters(query);
            setPosts(posts);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const handleSelect = (name, value) => {
        if (name === 'category') {
            setValues({[name]: value});
        } else {
            setValues({...values, [name]: value});
        }
    };

    const handleInput = ({target}) => {
        const {name, value} = target;
        if (name === 'price_from') {
            setValues({...values, price: {...values.price, from: value}});
        } else if (name === 'price_to') {
            setValues({...values, price: {...values.price, to: value}});
        } else {
            setValues({...values, [name]: value});
        }
    };

    // useEffect(() => {
    //     getPostsByFilters();
    // }, []);

    useEffect(() => {
        setValues(initValues);
    }, [ctgr, subCtgr, typeCtgr]);

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
                            formik={formik}
                            filters={filters}
                            handleInput={handleInput}
                            handleSelect={handleSelect}
                        />
                        <SearchResult resultList={[]}/>
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