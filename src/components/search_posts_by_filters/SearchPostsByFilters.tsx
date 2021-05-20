import {FC, ReactNode, useEffect, useState} from 'react';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {useTranslation} from 'react-i18next';
import {getSEOContent} from '@src/common_data/seo_content';
import {addParentsToCtgrs, CtgrsByCyrillicNameType, normalizeFiltersByCategory} from '@src/helpers';
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
import {fractionalFields, numericFields} from '@src/common_data/form_fields';
import {numberRegEx} from '@src/common_data/reg_exs';
import {CarParams} from '@src/components/post/create_post/form_page/params_form/params_forms/car_params/CarParams';
import {ApartmentsParams} from '@src/components/post/create_post/form_page/params_form/params_forms/apartments_params/ApartmentsParams';
import {HousesCottagesParams} from '@src/components/post/create_post/form_page/params_form/params_forms/houses_cotteges_params/HousesCottagesParams';
import {LandParams} from '@src/components/post/create_post/form_page/params_form/params_forms/land_params/LandParams';
import {ParkingLotsBoxes} from '@src/components/post/create_post/form_page/params_form/params_forms/parking_lots_boxes_params/ParkingLotsBoxes';
import {CommercialPropertyParams} from '@src/components/post/create_post/form_page/params_form/params_forms/commercial_property_params/CommercialPropertyParams';
import {RegularParams} from '@src/components/post/create_post/form_page/params_form/params_forms/regular_params/RegularParams';


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
        typeCategories: subCtgr.type,
        filtersByCtgr: {}
    };

    const initValues: any = {
        category: subCtgr ?? ctgr,
        type: typeCtgr ?? '',
        price_from: '',
        price_to: '',
        free: false,
        safe_deal: false,
        exchange: false,
        delivery: false
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

    const setFiltersByCtgr = async () => {
        try {
            const filtersByCtgr = await userAPI.getDataForCreatePost(ctgr.id, subCtgr.id, typeCtgr.id);
            setFilters({
                ...filters,
                filtersByCtgr: normalizeFiltersByCategory(filtersByCtgr, typeCtgr)
            });
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const handleReset = () => {
        setValues(initValues);
    };

    const handleSelect = (name, value) => {
        if (name === 'category') {
            setValues({...initValues, [name]: value});
        } else {
            setValues({...values, [name]: value});
        }
    };

    const handlePostType = (_, value) => {
        value = values.post_type?.id === value.id ? null : value;
        setValues({...values, post_type: value});
    };

    const handleInput = ({target: {name, value}}) => {
        const isNumericField = numericFields.some((n => n === name));
        const isFractionalField = fractionalFields.some((n => n === name));

        if ((isNumericField && RegExp(numberRegEx).test(value)) || !isNumericField) {
            if ((!isFractionalField) || (isFractionalField && value.length < 4)) {
                if (isFractionalField && value.length === 2 && value[1] !== '.') {
                    value = value.replace(/(?<=^.{1})./, `.${value[1]}`);
                }
            }
            setValues({...values, [name]: value});
        }
    };

    const handleCheckbox = name => ({target}) => {
        setValues({...values, [name]: target.checked});
    };

    const handleOptionCheckbox = (name, item) => {
        if (values[name]) {
            const isExst = values[name].some(({id}) => id === item.id);
            if (isExst) {
                values[name].forEach(({id}, i) => id === item.id && values[name].splice(i, 1));
            } else {
                values[name].push(item);
            }
        } else {
            values[name] = [item];
        }
        setValues({...values});
    };

    const getFiltersByCtgr = (): ReactNode => {
        switch (subCtgr.name) {
            case 'foreignCars':
            case 'madeInUzb':
                return <CarParams
                    t={t}
                    formik={formik}
                    filters={filters}
                    handleSelect={handleSelect}
                    handleInput={handleInput}
                    handleCheckbox={handleCheckbox}
                    handleOptionCheckbox={handleOptionCheckbox}
                />;
            case 'apartments':
                return <ApartmentsParams
                    t={t}
                    type={typeCtgr}
                    formik={formik}
                    filters={filters}
                    handleInput={handleInput}
                    handleSelect={handleSelect}
                    handleCheckbox={handleCheckbox}
                    handleOptionCheckbox={handleOptionCheckbox}
                />;
            case 'housesCottages':
                return <HousesCottagesParams
                    t={t}
                    type={typeCtgr}
                    formik={formik}
                    filters={filters}
                    handleSelect={handleSelect}
                    handleCheckbox={handleCheckbox}
                    handleOptionCheckbox={handleOptionCheckbox}
                />;
            case 'land':
                return <LandParams
                    t={t}
                    type={typeCtgr}
                    formik={formik}
                    filters={filters}
                    handleSelect={handleSelect}
                />;
            case 'parkingLotsAndBoxes':
                return <ParkingLotsBoxes
                    t={t}
                    type={typeCtgr}
                    formik={formik}
                    filters={filters}
                    handleSelect={handleSelect}
                />;
            case 'commercialProperty':
                return <CommercialPropertyParams
                    t={t}
                    type={typeCtgr}
                    formik={formik}
                    filters={filters}
                    handleSelect={handleSelect}
                    handleOptionCheckbox={handleOptionCheckbox}
                />;
            default:
                return <RegularParams
                    t={t}
                    formik={formik}
                    filters={filters.filtersByCtgr}
                    handleSelect={handleSelect}
                />;
        }
    };

    // useEffect(() => {
    //     getPostsByFilters();
    // }, []);

    useEffect(() => {
        setFiltersByCtgr();
        setValues(initValues);
    }, [ctgrsByQuery]);

    console.log('values', values);
    console.log('filters', filters);
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
                            categoryName={ctgr.name}
                            handleInput={handleInput}
                            handleReset={handleReset}
                            handleSelect={handleSelect}
                            handlePostType={handlePostType}
                            handleCheckbox={handleCheckbox}
                            getFiltersByCtgr={getFiltersByCtgr}
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