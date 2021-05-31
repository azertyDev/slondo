import {FC, ReactNode, useEffect, useState} from 'react';
import {WithT} from 'i18next';
import {Grid} from '@material-ui/core';
import {useFormik} from 'formik';
import {useRouter} from 'next/router';
import {CategoriesDropdown} from '@src/components/elements/categories_dropdown/CategoriesDropdown';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {postTypes} from '@src/common_data/post_types';
import {PriceFromTo} from '@src/components/elements/price_from_to/PriceFromTo';
import {DeployedSelect} from '@src/components/elements/deployed_select/DeployedSelect';
import {SiteServices} from '@src/components/post/create_post/form_page/common_form/site_services/SiteServices';
import {CheckboxSelect} from '@src/components/elements/checkbox_select/CheckboxSelect';
import {
    cookies,
    CtgrsByCyrillicNameType,
    normalizeFiltersByCategory,
    toUrlParams,
    transformCyrillic
} from '@src/helpers';
import {useHandlers} from '@src/hooks/useHandlers';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {CarForm} from '@src/components/search_posts_by_filters/categories_forms/car_form/CarForm';
import {ApartmentsParams} from '@src/components/post/create_post/form_page/params_form/params_forms/apartments_params/ApartmentsParams';
import {HousesCottagesParams} from '@src/components/post/create_post/form_page/params_form/params_forms/houses_cotteges_params/HousesCottagesParams';
import {LandParams} from '@src/components/post/create_post/form_page/params_form/params_forms/land_params/LandParams';
import {ParkingLotsBoxes} from '@src/components/post/create_post/form_page/params_form/params_forms/parking_lots_boxes_params/ParkingLotsBoxes';
import {CommercialPropertyParams} from '@src/components/post/create_post/form_page/params_form/params_forms/commercial_property_params/CommercialPropertyParams';
import {RegularForm} from '@src/components/search_posts_by_filters/categories_forms/regular_form/RegularForm';
import {transformLocations} from '@src/common_data/locations';
import {siteCategories} from '@src/common_data/siteCategories';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@src/redux/rootReducer';
import {userAPI} from '@src/api/api';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {useStyles} from './useStyles';


export type CommonFiltersType = {
    formik,
    filters,
    handleInput,
    handleSelect,
    handleOptionCheckbox?
};

type SearchFormPropsType = {
    urlParams,
    categories: CtgrsByCyrillicNameType | [],
} & WithT;

export const SearchForm: FC<SearchFormPropsType> = (props) => {
    const {
        t,
        urlParams,
        categories
    } = props;

    const [ctgr, subCtgr, typeCtgr] = categories;
    const {
        post_type,
        price_from,
        price_to,
        safe_deal,
        exchange,
        delivery,
        ...urlFiltersParams
    } = urlParams;

    const postTypesList = [postTypes[0], postTypes[1]];

    const initVals: any = {
        category: null,
        type: null,
        post_type: null,
        price_from: '',
        price_to: '',
        safe_deal: false,
        exchange: false,
        delivery: false
    };

    const initFilters = {
        categories: siteCategories,
        subCategories: ctgr?.subCategory || [],
        typeCategories: subCtgr?.type || [],
        filtersByCtgr: {}
    };

    if (ctgr?.name === 'car') {
        initVals.year = '';
        initVals.mileage = '';
        initVals.engine_capacity = '';
    }

    const dispatch = useDispatch();
    const {push} = useRouter();
    const searchTxt = useSelector((store: RootState) => store.searchTxt);

    const [filters, setFilters] = useState(initFilters);
    const {filtersByCtgr} = filters;


    const onSubmit = () => {
        push(urlByParams());
    };

    const formik = useFormik({
        initialValues: initVals,
        onSubmit
    });

    const {
        values,
        setValues,
        handleBlur
    } = formik;

    const {category, type, ...otherVals} = values;
    const mainCategoryName: string = category?.parents?.[0].name ?? category?.name ?? '';


    const {handleInput, handleOptionCheckbox} = useHandlers(values, setValues);
    const [free, setFree] = useState(false);

    const handleFree = ({target}) => {
        setFree(target.checked);
        if (target.checked) {
            setValues({
                ...values,
                price_from: '0',
                price_to: ''
            });
        }
    };

    const handleCheckbox = (name) => ({target}) => {
        setValues({...values, [name]: target.checked});
    };

    const handleReset = () => {
        setValues(initVals);
    };

    const handleMainCtgrSelect = (name, value) => {
        if (name === 'category') {
            setValues({
                ...initVals,
                category: value
            });
        } else {
            setValues({...values, [name]: value});
        }
    };

    const handleParamsSelect = (name, value) => {
        setValues({
            ...values,
            [name]: value
        });
    };

    const handlePostType = (_, value) => {
        value = values.post_type?.id === value.id ? null : value;
        setValues({...values, post_type: value});
    };

    const getFiltersByCtgr = (): ReactNode => {
        switch (mainCategoryName) {
            case 'foreignCars':
            case 'madeInUzb':
                return <CarForm
                    formik={formik}
                    handleInput={handleInput}
                    handleSelect={handleParamsSelect}
                    filters={filtersByCtgr}
                />;
            // case 'apartments':
            //     return <ApartmentsParams
            //         formik={formik}
            //         handleInput={handleInput}
            //         handleSelect={handleSelect}
            //         filters={filters.filtersByCtgr}
            //     />;
            // case 'housesCottages':
            //     return <HousesCottagesParams
            //         formik={formik}
            //         handleInput={handleInput}
            //         handleSelect={handleSelect}
            //         filters={filters.filtersByCtgr}
            //     />;
            // case 'land':
            //     return <LandParams
            //         formik={formik}
            //         handleInput={handleInput}
            //         handleSelect={handleSelect}
            //         filters={filters.filtersByCtgr}
            //     />;
            // case 'parkingLotsAndBoxes':
            //     return <ParkingLotsBoxes
            //         formik={formik}
            //         handleInput={handleInput}
            //         handleSelect={handleSelect}
            //         filters={filters.filtersByCtgr}
            //     />;
            // case 'commercialProperty':
            //     return <CommercialPropertyParams
            //         formik={formik}
            //         handleInput={handleInput}
            //         handleSelect={handleSelect}
            //         filters={filters.filtersByCtgr}
            //     />;
            default:
                return <RegularForm
                    formik={formik}
                    handleInput={handleInput}
                    handleSelect={handleParamsSelect}
                    filters={filtersByCtgr}
                    handleOptionCheckbox={handleOptionCheckbox}
                />;
        }
    };

    function urlByParams(): string {
        let url = '/';
        const location = cookies.get('user_location');

        const params = toUrlParams(otherVals);

        if (location) {
            const {city, region} = location;
            const {cities, regions} = transformLocations;
            url = url.concat(city ? `${cities[city.name]}/` : `${regions[region.name]}/`);
        } else {
            url = url.concat(`uzbekistan/`);
        }

        if (category) {
            let categoryName = `${transformCyrillic(category.ru_name)}/`;
            if (category.parents) {
                const parentCtgrRuName = siteCategories.find(ctgr => ctgr.name === category.parents[0].name).ru_name;
                categoryName = `${transformCyrillic(parentCtgrRuName)}/${categoryName}`;
            }
            url = url.concat(categoryName);
        }

        if (type) url = url.concat(`${transformCyrillic(type.ru_name)}/`);
        if (searchTxt) url = url.concat(`q-${searchTxt}/`);
        if (params) url = url.concat(params);

        return url;
    }

    const setFiltersByCtgr = async () => {
        try {
            if (category) {
                const ctgr = category?.parents?.[0] || category;
                const subCtgr = category.parents ? category : null;

                let filtersByCtgr = await userAPI.getFiltersByCtgr(ctgr.id, subCtgr?.id, type?.id);
                if (filtersByCtgr.default_param) filtersByCtgr = filtersByCtgr.default_param;
                filtersByCtgr = normalizeFiltersByCategory(filtersByCtgr, typeCtgr);

                setFilters({
                    ...filters,
                    filtersByCtgr
                });
            } else {
                setFilters({
                    ...filters,
                    filtersByCtgr: {}
                });
            }
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const setValsByParams = () => {
        const vals: any = {};

        Object.keys(urlFiltersParams).forEach(k => {
            if (filtersByCtgr[k]) {
                vals[k] = filtersByCtgr[k].find(v => v.id === +urlFiltersParams[k]);
            }
        });

        setValues({
            ...values,
            ...vals,
            category: subCtgr || ctgr || null,
            type: typeCtgr || null,
            post_type: postTypesList.find(type => type.id === +post_type) || null,
            price_from: price_from || '',
            price_to: price_to || '',
            safe_deal: !!safe_deal,
            exchange: !!exchange,
            delivery: !!delivery
        });
    };

    useEffect(() => {
        setValsByParams();
    }, [urlParams, filtersByCtgr]);

    useEffect(() => {
        setFiltersByCtgr();
    }, [category, type]);

    console.log('values', values);
    console.log('urlParams', urlParams);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CustomFormikProvider formik={formik}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <CategoriesDropdown
                            t={t}
                            name='category'
                            handleSelect={handleMainCtgrSelect}
                            filters={filters.categories}
                            category={values.category}
                        />
                    </Grid>
                    {!!values.category?.type && (
                        <Grid item xs={4}>
                            <DropDownSelect
                                t={t}
                                name='type'
                                labelTxt='good_type'
                                disableRequire
                                values={values}
                                onBlur={handleBlur}
                                items={values.category.type}
                                handleSelect={handleMainCtgrSelect}
                            />
                        </Grid>
                    )}
                    <Grid item xs={4}>
                        <DeployedSelect
                            t={t}
                            formik={formik}
                            name='post_type'
                            options={postTypesList}
                            handleSelect={handlePostType}
                        />
                    </Grid>
                    <Grid container item xs={12}>
                        <Grid item xs={4}>
                            <PriceFromTo
                                t={t}
                                name='cost'
                                values={values}
                                disabled={free}
                                handleInput={handleInput}
                            />
                        </Grid>
                        <Grid item container alignItems='center' xs={2}>
                            <CheckboxSelect
                                t={t}
                                name='free'
                                checked={free}
                                onChange={handleFree}
                            />
                        </Grid>
                    </Grid>
                    {mainCategoryName !== '' && (
                        <>
                            <Grid item xs={12}>
                                <SiteServices
                                    t={t}
                                    iconMode
                                    isAuction={false}
                                    values={values}
                                    handleCheckbox={handleCheckbox}
                                    mainCategoryName={mainCategoryName}
                                />
                            </Grid>
                            {getFiltersByCtgr()}
                        </>
                    )}
                </Grid>
                <div className='actions-btns'>
                    <CustomButton onClick={handleReset}>{t('filters:reset')}</CustomButton>
                    <CustomButton type='submit'>{t('filters:apply')}</CustomButton>
                </div>
            </CustomFormikProvider>
        </div>
    );
};