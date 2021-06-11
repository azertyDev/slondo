import {FC, ReactNode, useEffect, useState} from 'react';
import {WithT} from 'i18next';
import {Grid} from '@material-ui/core';
import {useRouter} from 'next/router';
import {HasAuction} from '@src/common_data/site_services';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {postTypes} from '@src/common_data/post_types';
import {DeployedSelect} from '@src/components/elements/deployed_select/DeployedSelect';
import {SiteServices} from '@src/components/post/create_post/form_page/common_form/site_services/SiteServices';
import {CheckboxSelect} from '@src/components/elements/checkbox_select/CheckboxSelect';
import {FromToInputs} from '@src/components/elements/from_to_inputs/FromToInputs';
import {
    cookies,
    toUrlParams,
    transformCyrillic,
    normalizeFiltersByCategory, manufacturersDataNormalize
} from '@src/helpers';
import {useHandlers} from '@src/hooks/useHandlers';
import {SearchCar} from '@src/components/search_posts/categories_forms/search_car/SearchCar';
import {SearchRegular} from '@src/components/search_posts/categories_forms/search_regular/SearchRegular';
import {transformLocations} from '@src/common_data/locations';
import {siteCategories} from '@src/common_data/siteCategories';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@src/redux/rootReducer';
import {userAPI} from '@src/api/api';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {SearchApartments} from '@src/components/search_posts/categories_forms/search_apartments/SearchApartments';
import {useStyles} from './useStyles';
import {SearchHousesCottages} from '@src/components/search_posts/categories_forms/search_houses_cottages/SearchHousesCottages';


export type CommonFiltersType = {
    onSubmit,
    filters,
    urlParams,
    handleReset: () => void
};

type SearchFormPropsType = {
    urlParams,
    categories
} & WithT;

export const SearchForm: FC<SearchFormPropsType> = (props) => {
    const {
        t,
        urlParams,
        categories
    } = props;

    const [ctgr, subctgr, typeCtgr] = categories;

    const {
        post_type,
        price_from,
        price_to,
        free,
        archive,
        safe_deal,
        exchange,
        delivery,
        ...urlFiltersParams
    } = urlParams;

    const postTypesList = [postTypes[0], postTypes[1]];
    const postType = !!archive
                     ? postTypesList[1]
                     : postTypesList.find(type => type.id === +post_type) || null;

    const initVals = {
        category: null,
        subcategory: null,
        type: null,
        post_type: null,
        price_from: '',
        price_to: '',
        free: false,
        archive: false,
        safe_deal: false,
        exchange: false,
        delivery: false
    };

    const initFilters = {
        categories: siteCategories,
        subcategories: ctgr?.subcategory || [],
        typeCategories: subctgr?.type || [],
        filtersByCtgr: {}
    };

    const dispatch = useDispatch();
    const {push} = useRouter();
    const searchTxt = useSelector((store: RootState) => store.searchTxt);

    const [values, setValues] = useState(initVals);
    const [filters, setFilters] = useState(initFilters);
    const {filtersByCtgr} = filters;

    const onSubmit = (values) => {
        push(urlByParams(values));
    };

    const {category, subcategory, type, ...commonVals} = values;

    const mainCategoryName: string = category?.name ?? '';
    const subcategoryName: string = subcategory?.name ?? '';

    const hasAuction = !!HasAuction[mainCategoryName];

    const {handleInput} = useHandlers(values, setValues);

    const handleCheckbox = (name) => ({target}) => {
        let vals: any = {...values, [name]: target.checked};
        if (name === 'free') {
            vals = {
                ...vals,
                price_from: '',
                price_to: ''
            };
        }
        setValues(vals);
    };

    const handleSelect = (name, value) => {
        if (name === 'category') {
            setValues({...initVals, category: value});
        } else {
            setValues({...values, [name]: value});
        }
    };

    const handlePostType = (_, value) => {
        value = values.post_type?.id === value.id ? null : value;
        setValues({...values, post_type: value});
    };

    const handleReset = () => {
        setValues(initVals);
        setFilters(initFilters);
    };

    const getFiltersByCtgr = (): ReactNode => {
        switch (subcategoryName) {
            case 'madeInUzb':
            case 'foreignCars':
                return <SearchCar
                    onSubmit={onSubmit}
                    filters={filtersByCtgr}
                    handleReset={handleReset}
                    urlParams={urlFiltersParams}
                />;
            case 'apartments':
                return <SearchApartments
                    type={type}
                    onSubmit={onSubmit}
                    filters={filtersByCtgr}
                    handleReset={handleReset}
                    urlParams={urlFiltersParams}
                />;
            case 'housesCottages':
                return <SearchHousesCottages
                    type={type}
                    onSubmit={onSubmit}
                    filters={filtersByCtgr}
                    handleReset={handleReset}
                    urlParams={urlFiltersParams}
                />;
            default:
                return <SearchRegular
                    onSubmit={onSubmit}
                    filters={filtersByCtgr}
                    handleReset={handleReset}
                    urlParams={urlFiltersParams}
                />;
        }
    };

    const getTypeLabelByCtgr = () => {
        switch (mainCategoryName) {
            case 'estate':
                return 'type';
            case 'service':
                return 'service_type';
            case 'job':
                return 'job_type';
            default:
                return 'good_type';
        }
    };

    function urlByParams(values): string {
        let url = '/';
        const userLocation = cookies.get('user_location');
        const params = toUrlParams({...commonVals, ...values});

        if (userLocation) {
            const {city} = userLocation;
            const region = transformLocations[userLocation.region.name];

            url = url.concat(city ? `${region[city.name]}/` : `${region.name}/`);
        } else {
            url = url.concat(`uzbekistan/`);
        }

        if (category) {
            let categoryName = `${transformCyrillic(category.ru_name)}/`;
            if (subcategory) {
                const subcategoryName = `${transformCyrillic(subcategory.ru_name)}/`;
                categoryName = `${categoryName}${subcategoryName}`;
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
            if (subcategory) {
                let filtersByCtgr = await userAPI.getFiltersByCtgr(category.id, subcategory?.id, type?.id);

                if (category.name === 'car') {
                    if (subcategory.name === 'madeInUzb') {
                        filtersByCtgr = {
                            ...filtersByCtgr.default_param,
                            manufacturer: manufacturersDataNormalize(filtersByCtgr)
                        };
                    } else {
                        filtersByCtgr = {...filtersByCtgr.default_param};
                    }
                }

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
        const vals = {
            category: ctgr || null,
            subcategory: subctgr || null,
            type: typeCtgr || null,
            post_type: postType,
            price_from: price_from || '',
            price_to: price_to || '',
            free: !!free,
            archive: !!archive,
            safe_deal: !!safe_deal,
            exchange: !!exchange,
            delivery: !!delivery
        };
        setValues(vals);
    };

    useEffect(() => {
        setInitVals();
    }, []);

    useEffect(() => {
        setFiltersByCtgr();
    }, [category, subcategory, type]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <DropDownSelect
                        t={t}
                        name='category'
                        disableRequire
                        values={values}
                        items={filters.categories}
                        handleSelect={handleSelect}
                    />
                </Grid>
                {!!values.category?.subcategory && (
                    <Grid item xs={4}>
                        <DropDownSelect
                            t={t}
                            name='subcategory'
                            disableRequire
                            values={values}
                            items={values.category.subcategory}
                            handleSelect={handleSelect}
                        />
                    </Grid>
                )}
                {!!values.subcategory?.type && (
                    <Grid item xs={4}>
                        <DropDownSelect
                            t={t}
                            name='type'
                            disableRequire
                            values={values}
                            labelTxt={getTypeLabelByCtgr()}
                            items={values.subcategory.type}
                            handleSelect={handleSelect}
                        />
                    </Grid>
                )}
                {hasAuction && (
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
                )}
                <Grid container item xs={12}>
                    <Grid item xs={4}>
                        <FromToInputs
                            disabled={values.free}
                            handleInput={handleInput}
                            labelTxt={t(mainCategoryName === 'job' ? 'salary' : 'cost')}
                            firstInputProps={{
                                value: values.price_from,
                                name: 'price_from',
                                placeholder: t(`filters:price_from`)
                            }}
                            secondInputProps={{
                                value: values.price_to,
                                name: 'price_to',
                                placeholder: t(`filters:price_to`)
                            }}
                        />
                    </Grid>
                    <Grid item container alignItems='center' xs={2}>
                        <CheckboxSelect
                            t={t}
                            name='free'
                            checked={values.free}
                            onChange={handleCheckbox('free')}
                        />
                    </Grid>
                    {values.post_type?.name === 'auc' && (
                        <Grid item container alignItems='center' xs={2}>
                            <CheckboxSelect
                                t={t}
                                name='archive'
                                checked={values.archive}
                                onChange={handleCheckbox('archive')}
                            />
                        </Grid>
                    )}
                </Grid>
                {!!mainCategoryName && (
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