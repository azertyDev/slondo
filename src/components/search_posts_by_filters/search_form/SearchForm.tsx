import {FC, ReactNode, useEffect} from 'react';
import {WithT} from 'i18next';
import {Grid} from '@material-ui/core';
import {useFormik} from 'formik';
import {CategoriesDropdown} from '@src/components/elements/categories_dropdown/CategoriesDropdown';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {postTypes} from '@src/common_data/post_types';
import {PriceFromTo} from '@src/components/elements/price_from_to/PriceFromTo';
import {DeployedSelect} from '@src/components/elements/deployed_select/DeployedSelect';
import {SiteServices} from '@src/components/post/create_post/form_page/common_form/site_services/SiteServices';
import {CheckboxSelect} from '@src/components/elements/checkbox_select/CheckboxSelect';
import {cookies, CtgrsByCyrillicNameType, transformCyrillic} from '@src/helpers';
import {useHandlers} from '@src/hooks/useHandlers';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {CarForm} from '@src/components/search_posts_by_filters/categories_forms/car_form/CarForm';
import {ApartmentsParams} from '@src/components/post/create_post/form_page/params_form/params_forms/apartments_params/ApartmentsParams';
import {HousesCottagesParams} from '@src/components/post/create_post/form_page/params_form/params_forms/houses_cotteges_params/HousesCottagesParams';
import {LandParams} from '@src/components/post/create_post/form_page/params_form/params_forms/land_params/LandParams';
import {ParkingLotsBoxes} from '@src/components/post/create_post/form_page/params_form/params_forms/parking_lots_boxes_params/ParkingLotsBoxes';
import {CommercialPropertyParams} from '@src/components/post/create_post/form_page/params_form/params_forms/commercial_property_params/CommercialPropertyParams';
import {RegularForm} from '@src/components/search_posts_by_filters/categories_forms/regular_form/RegularForm';
import {useStyles} from './useStyles';
import {useRouter} from 'next/router';
import {transformLocations} from '@src/common_data/locations';
import {categories_list} from '@src/common_data/categories_list';


export type CommonFiltersType = {
    formik,
    filters,
    handleInput,
    handleSelect,
    handleOptionCheckbox?
};

type SearchFormPropsType = {
    filters,
    categoryName: string,
    ctgrsByQuery: CtgrsByCyrillicNameType,
} & WithT;

export const SearchForm: FC<SearchFormPropsType> = (props) => {
    const {
        t,
        filters,
        categoryName,
        ctgrsByQuery
    } = props;

    const postTypesList = [postTypes[0], postTypes[1]];

    const [ctgr, subCtgr, typeCtgr = null] = ctgrsByQuery;

    const initVals: any = {
        category: null,
        type: null,
        post_type: null,
        price_from: '',
        price_to: '',
        free: false,
        safe_deal: false,
        exchange: false,
        delivery: false
    };

    const {push} = useRouter();

    const onSubmit = (values) => {
        const url = generateUrlByParams(values);
        push(url);
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

    const {handleInput, handleOptionCheckbox} = useHandlers(values, setValues);

    const handleCheckbox = (name) => ({target}) => {
        setValues({...values, [name]: target.checked});
    };

    const handleReset = () => {
        setValues(initVals);
    };

    const handleSelect = (name, value) => {
        if (name === 'category') {
            setValues({
                ...initVals,
                type: null,
                [name]: value
            });
        } else {
            setValues({...values, [name]: value});
        }
    };

    const handlePostType = (_, value) => {
        value = values.post_type?.id === value.id ? null : value;
        setValues({...values, post_type: value});
    };

    const getFiltersByCtgr = (): ReactNode => {
        switch (values.category?.name) {
            case 'foreignCars':
            case 'madeInUzb':
                return <CarForm
                    formik={formik}
                    handleInput={handleInput}
                    handleSelect={handleSelect}
                    filters={filters.filtersByCtgr}
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
                    handleSelect={handleSelect}
                    filters={filters.filtersByCtgr}
                    handleOptionCheckbox={handleOptionCheckbox}
                />;
        }
    };

    function generateUrlByParams(params): string {
        let url = '/';
        const location = cookies.get('user_location');
        const {category, type, ...otherParams} = params;

        if (location) {
            const {city, region} = location;
            const {cities, regions} = transformLocations;
            url = url.concat(city ? `${cities[city.name]}/` : `${regions[region.name]}/`);
        } else {
            url = url.concat(`uzbekistan/`);
        }

        if (category) {
            let transformedCategoryName = transformCyrillic(category.ru_name);
            if (category.parents) {
                const parentCtgrRuName = categories_list.find(ctgr => ctgr.name === category.parents[0].name).ru_name;
                transformedCategoryName = `${transformCyrillic(parentCtgrRuName)}/${transformedCategoryName}/`;
            }
            url = url.concat(transformedCategoryName);
        }

        if (type) {
            url = url.concat(`${transformCyrillic(type.ru_name)}/`);
        }

        // Object.keys(params).forEach(k => {
        //
        // });
        console.log(url);
        return url;
    }

    const setInitVals = () => {
        let vals: any = {
            category: subCtgr ?? ctgr
        };

        if (ctgr.name === 'car') {
            vals = {
                ...vals,
                year: '',
                engine_capacity: '',
                mileage: ''
            };
        }

        if (typeCtgr) {
            vals.type = typeCtgr;
        }

        setValues({...values, ...vals});
    };

    useEffect(() => {
        setInitVals();
    }, []);

    console.log('values', values);
    console.log('filters', filters);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CustomFormikProvider formik={formik}>
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
                                labelTxt='good_type'
                                disableRequire
                                values={values}
                                onBlur={handleBlur}
                                items={values.category.type}
                                handleSelect={handleSelect}
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
                                disabled={values.free}
                                handleInput={handleInput}
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
                    </Grid>
                    <Grid item xs={12}>
                        <SiteServices
                            t={t}
                            iconMode
                            isAuction={false}
                            values={values}
                            categoryName={categoryName}
                            handleCheckbox={handleCheckbox}
                        />
                    </Grid>
                    {getFiltersByCtgr()}
                </Grid>
                <div className='actions-btns'>
                    <CustomButton onClick={handleReset}>{t('filters:reset')}</CustomButton>
                    <CustomButton type='submit'>{t('filters:apply')}</CustomButton>
                </div>
            </CustomFormikProvider>
        </div>
    );
};