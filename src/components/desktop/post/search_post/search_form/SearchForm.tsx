import {FC, ReactNode, useContext} from 'react';
import {
    FormControl,
    Grid,
    MenuItem,
    Select,
    Typography,
    useMediaQuery,
    useTheme
} from '@material-ui/core';
import {useRouter} from 'next/router';
import {useTranslation} from 'next-i18next';
import {postTypes} from '@src/common_data/post_types';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {DeployedSelect} from '@src/components/elements/deployed_select/DeployedSelect';
import {SiteServices} from '@root/src/components/post/create_post/third_step/first_form/site_services/SiteServices';
import {FromToInputs} from '@src/components/elements/from_to_inputs/FromToInputs';
import {useHandlers} from '@src/hooks/useHandlers';
import {CheckboxSelect} from '@src/components/elements/checkbox_select/CheckboxSelect';
import {CategoriesCtx} from '@src/context';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useLocation} from '@src/hooks/use_location/useLocation';
import {CustomFormikProvider} from '@root/src/components/elements/custom_formik_provider/CustomFormikProvider';
import {useStyles} from './useStyles';
import {SearchCar} from './categories_forms/car/SearchCar';
import {SearchTransport} from './categories_forms/transport/SearchTransport';
import {SearchEstate} from './categories_forms/estate/SearchEstate';
import {ActionButtons} from './ActionButtons';
import {SearchJob} from './categories_forms/job/SearchJob';
import {SearchRegular} from './categories_forms/regular/SearchRegular';

export type CommonFiltersType = {
    formik;
    filters;
    urlParams;
    handleSelect: (v, n) => void;
    isRent?: boolean;
    categoryName?: string;
    handleReset?: () => void;
};

type SearchFormPropsType = {
    categories;
    filters;
    formik;
    handleReset: () => void;
    handleSelectCategory: (name: string, value) => void;
};

export const SearchForm: FC<SearchFormPropsType> = props => {
    const {formik, filters, handleReset, handleSelectCategory} = props;

    const {path, ...urlParams} = useRouter().query;

    const {
        post_type,
        price_from,
        price_to,
        free,
        archive,
        safe_deal,
        exchange,
        delivery,
        by_currency,
        page = '1',
        by_filtering = 'services_at',
        ...urlFiltersParams
    } = urlParams as {[p: string]: string};

    const currencyList = ['sum', 'уе'];

    const {t} = useTranslation('filters');
    const siteCategories = useContext(CategoriesCtx);
    const postTypesList = [postTypes[0], postTypes[1]];
    const isSmDown = useMediaQuery(useTheme().breakpoints.down('sm'));

    const {values, setValues} = formik;
    const {category, subcategory, type} = values;

    const isJob = category?.name === 'job';
    const isService = category?.name === 'service';
    const isRent = type?.id === 2 || type?.id === 3;

    const mainCategoryName: string = category?.name ?? '';
    const subcategoryName: string = subcategory?.name ?? '';

    const hasAuction = siteCategories.some(
        c => c.name === mainCategoryName && !!c.has_auction
    );

    const {handleNumericInput} = useHandlers(values, setValues);

    const handleCheckbox =
        name =>
        ({target}) => {
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
        setValues({...values, [name]: value});
    };

    const handlePostType = (name, value) => {
        value = values[name]?.id === value.id ? null : value;
        const vals = {...values, [name]: value};
        setValues(vals);
    };

    const handlePostByCurrency = (_, value) => {
        value = values.by_currency === value ? null : value;
        const vals = {...values, by_currency: value};

        setValues(vals);
    };

    const handleSort = async ({target: {value}}) => {
        value = {...values, by_filtering: value};
        setValues(value);
    };

    const handleSelectLocation = async loc => {
        const vals = {...values, ...loc};
        setValues(vals);
    };

    const {locationName, locationModal, handleLocModalOpen} = useLocation({
        handleSelectLocation
    });

    const getFormByCategory = (): ReactNode => {
        switch (mainCategoryName) {
            case 'car':
                return (
                    <SearchCar
                        formik={formik}
                        filters={filters}
                        handleSelect={handleSelect}
                        handleReset={handleReset}
                        urlParams={urlFiltersParams}
                    />
                );
            case 'transport':
                return (
                    <SearchTransport
                        type={type}
                        subcategory={subcategory}
                        filters={filters}
                        urlParams={urlFiltersParams}
                        formik={formik}
                        handleReset={handleReset}
                        handleSelect={handleSelect}
                        categoryName={values.category?.name}
                    />
                );
            case 'estate':
                return (
                    !!subcategory && (
                        <SearchEstate
                            isRent={isRent}
                            formik={formik}
                            filters={filters}
                            handleReset={handleReset}
                            urlParams={urlFiltersParams}
                            handleSelect={handleSelect}
                            subcategoryName={subcategoryName}
                            categoryName={values.category?.name}
                        />
                    )
                );
            case 'job':
                return (
                    !!subcategory && (
                        <SearchJob
                            type={type}
                            category={category}
                            subcategory={subcategory}
                            formik={formik}
                            filters={filters}
                            urlParams={urlFiltersParams}
                            handleReset={handleReset}
                            handleSelect={handleSelect}
                            categoryName={values.category?.name}
                        />
                    )
                );
            default:
                return (
                    <SearchRegular
                        type={type}
                        category={category}
                        subcategory={subcategory}
                        formik={formik}
                        filters={filters}
                        handleReset={handleReset}
                        handleSelect={handleSelect}
                        urlParams={urlFiltersParams}
                        categoryName={values.category?.name}
                    />
                );
        }
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CustomFormikProvider formik={formik}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <DropDownSelect
                            name="category"
                            disableRequire
                            values={values}
                            items={siteCategories}
                            transKey="categories:"
                            labelTxt={t(`category`)}
                            handleSelect={handleSelectCategory}
                        />
                    </Grid>
                    {!!values.category?.subcategory && (
                        <Grid item xs={12} sm={6} md={4}>
                            <DropDownSelect
                                name="subcategory"
                                disableRequire
                                values={values}
                                handleSelect={handleSelectCategory}
                                labelTxt={t(`subcategory`)}
                                items={values.category?.subcategory}
                                transKey={`categories:${category?.name}.`}
                            />
                        </Grid>
                    )}
                    {!!values.subcategory?.type && (
                        <Grid item xs={12} sm={6} md={4}>
                            <DropDownSelect
                                name="type"
                                disableRequire
                                values={values}
                                handleSelect={handleSelectCategory}
                                items={values.subcategory.type}
                                labelTxt={t(`${category?.name}.type.name`)}
                                transKey={`categories:${category?.name}.${subcategory?.name}.`}
                            />
                        </Grid>
                    )}
                    {(!mainCategoryName || hasAuction) && (
                        <Grid item xs={12} sm={6} md={4}>
                            <DeployedSelect
                                disableRequire
                                values={values}
                                name="post_type"
                                options={postTypesList}
                                handleSelect={handlePostType}
                            />
                        </Grid>
                    )}
                    {!isSmDown && (
                        <>
                            <Grid
                                item
                                container
                                xs={12}
                                sm={6}
                                md={4}
                                alignItems="flex-end"
                            >
                                <Typography variant="subtitle1" gutterBottom>
                                    {t('locations:location')}
                                </Typography>
                                <CustomButton
                                    onClick={handleLocModalOpen}
                                    className={classes.paramsBtn}
                                >
                                    <Typography variant="caption" component="p">
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
                                alignItems="flex-end"
                            >
                                <Typography variant="subtitle1" gutterBottom>
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
                                        <MenuItem value="services_at">
                                            {t('by_date')}
                                        </MenuItem>
                                        <MenuItem value="price">
                                            {t('by_price')}
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </>
                    )}
                    <Grid item xs={12} sm={6} md={4}>
                        <FromToInputs
                            disabled={values.free}
                            handleInput={handleNumericInput}
                            labelTxt={t(
                                mainCategoryName === 'job' ? 'salary' : 'cost'
                            )}
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
                        <Grid
                            item
                            container
                            alignItems="flex-end"
                            xs={6}
                            sm={4}
                        >
                            <CheckboxSelect
                                checked={values.free}
                                labelTxt={t('free')}
                                handleCheckbox={handleCheckbox('free')}
                            />
                        </Grid>
                    )}
                    <Grid item xs={12} sm={6} md={4}>
                        <DeployedSelect
                            disableRequire
                            values={values}
                            name="by_currency"
                            options={currencyList}
                            handleSelect={handlePostByCurrency}
                        />
                    </Grid>
                    {values.post_type?.name === 'auc' && (
                        <Grid
                            item
                            container
                            alignItems="flex-end"
                            xs={6}
                            sm={3}
                        >
                            <CheckboxSelect
                                checked={values.archive}
                                labelTxt={t('archive')}
                                handleCheckbox={handleCheckbox('archive')}
                            />
                        </Grid>
                    )}
                    <SiteServices
                        iconMode
                        values={values}
                        isAuction={false}
                        handleCheckbox={handleCheckbox}
                        categoryName={mainCategoryName}
                    />
                    <Grid item xs={12}>
                        {getFormByCategory()}
                    </Grid>
                    <Grid item container xs={12}>
                        <ActionButtons handleReset={handleReset} />
                    </Grid>
                </Grid>
            </CustomFormikProvider>
            {locationModal}
        </div>
    );
};
