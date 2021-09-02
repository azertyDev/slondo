import {FC, ReactNode, useContext, useEffect, useState} from 'react';
import {Box, FormControl, Grid, Hidden, MenuItem, Select, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {browser} from 'process';
import {useRouter} from 'next/router';
import {userAPI} from '@src/api/api';
import {useTranslation} from "react-i18next";
import {postTypes} from '@src/common_data/post_types';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {DeployedSelect} from '@src/components/elements/deployed_select/DeployedSelect';
import {SiteServices} from '@src/components/post/create_post/third_step/common_form/site_services/SiteServices';
import {FromToInputs} from '@src/components/elements/from_to_inputs/FromToInputs';
import {
    toUrlParams,
    transformCyrillic,
    normalizeFiltersByCategory,
    manufacturersDataNormalize, getLocationByURL
} from '@src/helpers';
import {useHandlers} from '@src/hooks/useHandlers';
import {SearchCar} from '@src/components/post/search_post/search_form/categories_forms/car/SearchCar';
import {SearchRegular} from '@src/components/post/search_post/search_form/categories_forms/regular/SearchRegular';
import {HasAuction, site_categories} from '@src/common_data/site_categories';
import {SearchEstate} from '@src/components/post/search_post/search_form/categories_forms/estate/SearchEstate';
import {SearchTransport} from '@src/components/post/search_post/search_form/categories_forms/transport/SearchTransport';
import {SearchJob} from '@src/components/post/search_post/search_form/categories_forms/job/SearchJob';
import {CheckboxSelect} from '@src/components/elements/checkbox_select/CheckboxSelect';
import {ErrorCtx, SearchCtx} from "@src/context";
import {CustomButton} from "@src/components/elements/custom_button/CustomButton";
import {FilterIcon} from "@src/components/elements/icons";
import Drawer from "@material-ui/core/Drawer";
import {ModalHeader} from "@src/components/cabinet/components/modal_header/ModalHeader";
import {useLocation} from "@src/hooks/use_location/useLocation";
import {useModal} from "@src/hooks";
import {unstable_batchedUpdates} from "react-dom";
import {useStyles} from './useStyles';

export type CommonFiltersType = {
    onSubmit?,
    filters,
    urlParams,
    isRent?: boolean,
    categoryName?: string,
    handleReset?: () => void,
    sameWithUrlCtgr: boolean
};

type SearchFormPropsType = {
    urlParams,
    categories
};

export const SearchForm: FC<SearchFormPropsType> = (props) => {
    const {
        urlParams,
        categories
    } = props;

    const {
        post_type,
        price_from,
        price_to,
        free,
        archive,
        safe_deal,
        exchange,
        delivery,
        by_filtering,
        ...urlFiltersParams
    } = urlParams;

    const postTypesList = [postTypes[0], postTypes[1]];
    const postType = !!archive
        ? postTypesList[1]
        : postTypesList.find(type => type.id === +post_type) || null;

    const initVals = {
        region: null,
        city: null,
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
        delivery: false,
        by_filtering: 'created_at'
    };

    const [ctgr, subctgr, typeCtgr] = categories;

    const initFilters = {
        categories: site_categories,
        subcategories: ctgr?.subcategory || [],
        typeCategories: subctgr?.type || [],
        filtersByCtgr: {}
    };

    const {query, push} = useRouter();
    const [queryLoc] = query.path as string[];

    const {t} = useTranslation('filters');

    const {term} = useContext(SearchCtx);
    const {setErrorMsg} = useContext(ErrorCtx);

    const [regions, setRegions] = useState([]);
    const [values, setValues] = useState(initVals);
    const [filters, setFilters] = useState(initFilters);
    const {filtersByCtgr} = filters;

    const {
        modalOpen: drawerOpen,
        handleModalOpen: handleDrawerOpen,
        handleModalClose: handleDrawerClose
    } = useModal();

    const onSubmit = async (values) => {
        await push(urlByParams(values));
        drawerOpen && handleDrawerClose();
    };

    const {category, subcategory, type} = values;
    const sameWithUrlCtgr = category?.name === ctgr?.name && subcategory?.name === subctgr?.name && type?.name === typeCtgr?.name;

    const isJob = category?.name === 'job';
    const isService = category?.name === 'service';
    const isRent = type?.id === 2 || type?.id === 3;
    const isSmDown = useMediaQuery(useTheme().breakpoints.down('sm'));

    const mainCategoryName: string = category?.name ?? '';
    const subcategoryName: string = subcategory?.name ?? '';

    const hasAuction = !!HasAuction[mainCategoryName];

    const {handleNumericInput} = useHandlers(values, setValues);

    const handleCheckbox = (name) => ({target}) => {
        let vals: any = {
            ...values,
            [name]: target.checked
        };
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
        const locations: any = {};
        const {region, city, by_filtering} = values;

        if (city) locations.city = city;
        if (region) locations.region = region;

        if (name === 'category') {
            setValues({
                ...initVals,
                ...locations,
                by_filtering,
                category: value
            });
        } else if (name === 'subcategory') {
            setValues({
                ...initVals,
                ...locations,
                by_filtering,
                category: values.category,
                subcategory: value
            });
        } else {
            setValues({...values, [name]: value});
        }
    };

    const handlePostType = (_, value) => {
        value = values.post_type?.id === value.id ? null : value;
        setValues({...values, post_type: value});
    };

    const handleReset = () => {
        const locations: any = {};
        const {region, city, by_filtering} = values;

        if (city) locations.city = city;
        if (region) locations.region = region;

        unstable_batchedUpdates(() => {
            setValues({
                ...initVals,
                ...locations,
                by_filtering,
                category,
                subcategory
            });
            setFilters(initFilters);
        });
    };

    const handleSort = async ({target: {value}}) => {
        value = {...values, by_filtering: value};
        isSmDown
            ? await push(urlByParams(value))
            : setValues(value);
    };

    const handleSelectLocation = async (loc) => {
        const value = {...values, ...loc};
        isSmDown
            ? await push(urlByParams(value))
            : setValues(value);
    };

    const {
        locationName,
        locationModal,
        handleLocModalOpen
    } = useLocation({handleSelectLocation});

    const getFiltersByCtgr = (): ReactNode => {
        switch (mainCategoryName) {
            case 'car':
                return <SearchCar
                    onSubmit={onSubmit}
                    filters={filtersByCtgr}
                    handleReset={handleReset}
                    urlParams={urlFiltersParams}
                    sameWithUrlCtgr={sameWithUrlCtgr}
                />;
            case 'transport':
                return <SearchTransport
                    type={type}
                    category={category}
                    subcategory={subcategory}
                    filters={filtersByCtgr}
                    urlParams={urlFiltersParams}
                    onSubmit={onSubmit}
                    handleReset={handleReset}
                    sameWithUrlCtgr={sameWithUrlCtgr}
                    categoryName={values.category?.name}
                />;
            case 'estate':
                return <SearchEstate
                    isRent={isRent}
                    onSubmit={onSubmit}
                    filters={filtersByCtgr}
                    handleReset={handleReset}
                    urlParams={urlFiltersParams}
                    subcategoryName={subcategoryName}
                    sameWithUrlCtgr={sameWithUrlCtgr}
                    categoryName={values.category?.name}
                />;
            case 'job':
                return <SearchJob
                    type={type}
                    category={category}
                    subcategory={subcategory}
                    onSubmit={onSubmit}
                    filters={filtersByCtgr}
                    urlParams={urlFiltersParams}
                    handleReset={handleReset}
                    sameWithUrlCtgr={sameWithUrlCtgr}
                    categoryName={values.category?.name}
                />;
            default:
                return <SearchRegular
                    type={type}
                    category={category}
                    subcategory={subcategory}
                    onSubmit={onSubmit}
                    filters={filtersByCtgr}
                    handleReset={handleReset}
                    urlParams={urlFiltersParams}
                    sameWithUrlCtgr={sameWithUrlCtgr}
                    categoryName={values.category?.name}
                />;
        }
    };

    function urlByParams(vals): string {
        let url = '/';

        vals = {...values, ...vals};

        const {
            category,
            subcategory,
            type,
            region,
            city,
            ...other
        } = vals;

        const params = toUrlParams(other, term);

        if (region) {
            url = url.concat(city ? `${city.ru_name}/` : `${region.ru_name}/`);
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

        if (type) url = url.concat(`${transformCyrillic(type.ru_name)}`);
        if (params) url = url.concat(params);

        return url;
    }

    const setFiltersByCtgr = async () => {
        try {
            if (subcategory) {
                const params: any = {
                    category_id: category.id
                };

                if (subcategory?.id) params.sub_category_id = subcategory.id;
                if (type?.id) params.type_id = type.id;

                let filtersByCtgr = await userAPI.getFiltersByCtgr(params);

                if (category.name === 'car') {
                    if (subcategory.name === 'made_uzbekistan') {
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
            setErrorMsg(e.message);
        }
    };

    const setInitVals = () => {
        const {region, city} = getLocationByURL(queryLoc, regions);

        const vals = {
            region: region || null,
            city: city || null,
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
            delivery: !!delivery,
            by_filtering: by_filtering || 'created_at'
        };

        setValues(vals);
    };

    useEffect(() => {
        if (browser) {
            const storeRegions = JSON.parse(localStorage.getItem('regions'));
            storeRegions && !regions.length && setRegions(storeRegions);
        }
    }, []);

    const classes = useStyles();
    const form = (
        <Grid
            container
            spacing={2}
            style={{padding: '9px'}}
        >
            {!isSmDown && (
                <>
                    <Grid
                        item
                        container
                        xs={12}
                        sm={6}
                        md={4}
                        alignItems='flex-end'
                    >
                        <Typography variant='subtitle1' gutterBottom>
                            {t('locations:location')}
                        </Typography>
                        <CustomButton
                            onClick={handleLocModalOpen}
                            className={classes.paramsBtn}
                        >
                            <Typography variant='caption' component='p'>
                                {locationName}
                            </Typography>
                        </CustomButton>
                    </Grid>
                    <Grid
                        item
                        container
                        xs={12}
                        sm={6}
                        md={4}
                        alignItems='flex-end'
                    >
                        <Typography variant='subtitle1' gutterBottom>
                            {t('sort_of')}
                        </Typography>
                        <FormControl
                            variant="outlined"
                            classes={{root: classes.select}}
                        >
                            <Select
                                onChange={handleSort}
                                value={values.by_filtering}
                            >
                                <MenuItem value='created_at'>{t('by_date')}</MenuItem>
                                <MenuItem value='price'>{t('by_price')}</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </>
            )}
            {(!mainCategoryName || hasAuction) && (
                <Grid item xs={12} sm={6} md={4}>
                    <DeployedSelect
                        disableRequire
                        values={values}
                        name='post_type'
                        options={postTypesList}
                        handleSelect={handlePostType}
                    />
                </Grid>
            )}
            <Grid item xs={12} sm={6} md={4}>
                <DropDownSelect
                    name='category'
                    disableRequire
                    values={values}
                    items={filters.categories}
                    handleSelect={handleSelect}
                    transKey='categories:'
                    labelTxt={t(`category`)}
                />
            </Grid>
            {!!values.category?.subcategory && (
                <Grid item xs={12} sm={6} md={4}>
                    <DropDownSelect
                        name='subcategory'
                        disableRequire
                        values={values}
                        handleSelect={handleSelect}
                        labelTxt={t(`subcategory`)}
                        items={values.category?.subcategory}
                        transKey={`categories:${category?.name}.`}
                    />
                </Grid>
            )}
            {!!values.subcategory?.type && (
                <Grid item xs={12} sm={6} md={4}>
                    <DropDownSelect
                        name='type'
                        disableRequire
                        values={values}
                        handleSelect={handleSelect}
                        items={values.subcategory.type}
                        labelTxt={t(`${category?.name}.type.name`)}
                        transKey={`categories:${category?.name}.${subcategory?.name}.`}
                    />
                </Grid>
            )}
            <Grid item xs={12} sm={6} md={4}>
                <FromToInputs
                    disabled={values.free}
                    handleInput={handleNumericInput}
                    labelTxt={t(mainCategoryName === 'job' ? 'salary' : 'cost')}
                    firstInputProps={{
                        value: values.price_from,
                        name: 'price_from',
                        placeholder: t(`price_from`)
                    }}
                    secondInputProps={{
                        value: values.price_to,
                        name: 'price_to',
                        placeholder: t(`price_to`)
                    }}
                />
            </Grid>
            {!isJob && !isService && (
                <Grid item container alignItems='flex-end' xs={6} sm={3}>
                    <CheckboxSelect
                        checked={values.free}
                        labelTxt={t('free')}
                        handleCheckbox={handleCheckbox('free')}
                    />
                </Grid>
            )}
            {values.post_type?.name === 'auc' && (
                <Grid item container alignItems='flex-end' xs={6} sm={3}>
                    <CheckboxSelect
                        checked={values.archive}
                        labelTxt={t('archive')}
                        handleCheckbox={handleCheckbox('archive')}
                    />
                </Grid>
            )}
            <SiteServices
                t={t}
                iconMode
                values={values}
                isAuction={false}
                handleCheckbox={handleCheckbox}
                categoryName={mainCategoryName}
            />
            <Grid item xs={12}>
                {getFiltersByCtgr()}
            </Grid>
        </Grid>
    );

    useEffect(() => {
        setInitVals();
    }, [urlParams]);

    useEffect(() => {
        setFiltersByCtgr();
    }, [category, subcategory, type]);

    return (
        <div className={classes.root}>
            <Hidden smDown>
                {form}
            </Hidden>
            <Hidden mdUp>
                <Box
                    height='38px'
                    display='flex'
                    alignItems='flex-end'
                    className='filter-btns'
                >
                    <CustomButton
                        color='secondary'
                        className='filter-btn'
                        onClick={handleDrawerOpen}
                    >
                        <Typography variant='caption' component='p'>
                            {t('filters')}
                        </Typography>
                        <FilterIcon/>
                    </CustomButton>
                    <CustomButton
                        onClick={handleLocModalOpen}
                        className={classes.paramsBtn}
                    >
                        <Typography variant='caption' component='p'>
                            {locationName}
                        </Typography>
                    </CustomButton>
                    <FormControl
                        variant="outlined"
                        classes={{root: classes.select}}
                    >
                        <Select
                            onChange={handleSort}
                            value={values.by_filtering}
                        >
                            <MenuItem value='created_at'>{t('by_date')}</MenuItem>
                            <MenuItem value='price'>{t('by_price')}</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Hidden>
            {locationModal}
            <Drawer
                keepMounted
                anchor='left'
                open={drawerOpen}
                onClose={handleDrawerClose}
                classes={{root: classes.drawer}}
            >
                <ModalHeader
                    title={t('filters')}
                    handleCloseDialog={handleDrawerClose}
                />
                {form}
            </Drawer>
        </div>
    );
};