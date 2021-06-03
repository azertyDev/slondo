import {FC, ReactNode, useEffect, useState} from 'react';
import {WithT} from 'i18next';
import {Grid} from '@material-ui/core';
import {useRouter} from 'next/router';
import {CategoriesDropdown} from '@src/components/elements/categories_dropdown/CategoriesDropdown';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
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
import {CarForm} from '@src/components/search_posts_by_filters/categories_forms/car_form/CarForm';
import {RegularForm} from '@src/components/search_posts_by_filters/categories_forms/regular_form/RegularForm';
import {transformLocations} from '@src/common_data/locations';
import {siteCategories} from '@src/common_data/siteCategories';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@src/redux/rootReducer';
import {userAPI} from '@src/api/api';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {useStyles} from './useStyles';


export type CommonFiltersType = {
    onSubmit,
    filters,
    urlParams,
    handleResetMainParams: () => void
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

    const [values, setValues] = useState(initVals);
    const [filters, setFilters] = useState(initFilters);
    const {filtersByCtgr} = filters;

    const onSubmit = (values) => {
        push(urlByParams(values));
    };

    const {category, type, ...commonVals} = values;
    const mainCategoryName: string = category?.parents?.[0].name ?? category?.name ?? '';

    const isJobCtgr = mainCategoryName === 'job';

    const typeLabel = mainCategoryName === 'service' ? 'service_type' : isJobCtgr ? 'job_type' : 'good_type';

    const {handleInput} = useHandlers(values, setValues);
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

    const handleSelect = (name, value) => {
        if (name === 'category') {
            setValues({
                ...initVals,
                category: value
            });
        } else {
            setValues({...values, [name]: value});
        }
    };

    const handlePostType = (_, value) => {
        value = values.post_type?.id === value.id ? null : value;
        setValues({...values, post_type: value});
    };

    const handleResetMainParams = () => {
        setValues(initVals);
    };

    const getFiltersByCtgr = (): ReactNode => {
        switch (mainCategoryName) {
            case 'foreignCars':
            case 'madeInUzb':
                return <CarForm
                    onSubmit={onSubmit}
                    filters={filtersByCtgr}
                    urlParams={urlFiltersParams}
                    handleResetMainParams={handleResetMainParams}
                />;
            default:
                return <RegularForm
                    onSubmit={onSubmit}
                    filters={filtersByCtgr}
                    urlParams={urlFiltersParams}
                    handleResetMainParams={handleResetMainParams}
                />;
        }
    };

    function urlByParams(values): string {
        let url = '/';
        const location = cookies.get('user_location');
        const params = toUrlParams({...commonVals, ...values});

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
            if (category?.parents) {
                const ctgr = category.parents[0];

                let filtersByCtgr = await userAPI.getFiltersByCtgr(ctgr.id, category.id, type?.id);
                if (filtersByCtgr.default_param) filtersByCtgr = filtersByCtgr.default_param;
                filtersByCtgr = normalizeFiltersByCategory(filtersByCtgr, type);

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

    const setInitVals = () => {
        const vals: any = {
            category: subCtgr || ctgr || null,
            type: typeCtgr || null,
            post_type: postTypesList.find(type => type.id === +post_type) || null,
            price_from: price_from || '',
            price_to: price_to || '',
            safe_deal: !!safe_deal,
            exchange: !!exchange,
            delivery: !!delivery
        };

        setValues(vals);
    };

    useEffect(() => {
        setInitVals();
    }, [urlParams]);

    useEffect(() => {
        setFiltersByCtgr();
    }, [category, type]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <CategoriesDropdown
                        t={t}
                        name='category'
                        handleSelect={handleSelect}
                        filters={filters.categories}
                        category={values.category}
                    />
                </Grid>
                {!!values.category?.type && (
                    <Grid item xs={4}>
                        <DropDownSelect
                            t={t}
                            name='type'
                            labelTxt={typeLabel}
                            disableRequire
                            values={values}
                            items={values.category.type}
                            handleSelect={handleSelect}
                        />
                    </Grid>
                )}
                <Grid item xs={4}>
                    <DeployedSelect
                        t={t}
                        disableRequire
                        values={values}
                        name='post_type'
                        options={postTypesList}
                        handleSelect={handlePostType}
                    />
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={4}>
                        <PriceFromTo
                            t={t}
                            name={isJobCtgr ? 'salary' : 'cost'}
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
                )}
                {getFiltersByCtgr()}
            </Grid>
        </div>
    );
};