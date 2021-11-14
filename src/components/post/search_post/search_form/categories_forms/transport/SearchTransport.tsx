import {FC, useEffect} from 'react';
import {Grid} from '@material-ui/core';
import {getFieldsByFilters} from '@src/helpers';
import {CommonFiltersType} from '@src/components/post/search_post/search_form/SearchForm';
import {useTranslation} from 'react-i18next';
import {useHandlers} from '@src/hooks/useHandlers';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {excludeCtgrsForYear} from '@src/components/post/create_post/third_step/third_form/categories_forms/transport_params/TransportParams';
import {FromToInputs} from '@src/components/elements/from_to_inputs/FromToInputs';

type SearchRegularPropsType = {
    type,
    category,
    subcategory
} & CommonFiltersType;

export const SearchTransport: FC<SearchRegularPropsType> = (props) => {
    const {
        type,
        categoryName,
        category,
        subcategory,
        sameWithUrlCtgr,
        formik,
        filters,
        urlParams
    } = props;

    const {t} = useTranslation('filters');
    const isYearExclude = excludeCtgrsForYear.some(k => k === type?.name);
    const hasEngineCapacity = type?.name === 'motorcycles' || type?.name === 'mopedsAndScooters';
    const hasMileage = subcategory?.name === 'motorcyclesAndMotorTech' || subcategory?.name === 'busesAndTrucks';

    const initVals: any = {};

    if (!isYearExclude) {
        initVals.year_from = '';
        initVals.year_to = '';
    }

    if (hasEngineCapacity) {
        initVals.engine_capacity_from = '';
        initVals.engine_capacity_to = '';
    }

    if (hasMileage) {
        initVals.mileage_from = '';
        initVals.mileage_to = '';
    }

    const {
        values,
        setValues,
        resetForm
    } = formik;

    const {
        handleSelect,
        setValsByParams,
        handleFracInput,
        handleNumericInput
    } = useHandlers(values, setValues);

    useEffect(() => {
        sameWithUrlCtgr && setValsByParams(urlParams, filters);
    }, [filters]);

    useEffect(() => {
        resetForm();
    }, [category, subcategory, type]);

    return (
        <CustomFormikProvider formik={formik}>
            <Grid container spacing={1}>
                {getFieldsByFilters({
                        t,
                        filters,
                        formik,
                        handleSelect
                    },
                    categoryName,
                    true
                )}
                {hasEngineCapacity && (
                    <Grid
                        item
                        container
                        xs={12}
                        sm={4}
                    >
                        <FromToInputs
                            handleInput={handleFracInput}
                            labelTxt={t('engine_capacity')}
                            firstInputProps={{
                                value: values.engine_capacity_from,
                                name: 'engine_capacity_from',
                                placeholder: t(`filters:from`)
                            }}
                            secondInputProps={{
                                value: values.engine_capacity_to,
                                name: 'engine_capacity_to',
                                placeholder: t(`filters:to`)
                            }}
                        />
                    </Grid>
                )}
                {!isYearExclude && (
                    <Grid
                        item
                        container
                        xs={12}
                        sm={4}
                    >
                        <FromToInputs
                            handleInput={handleNumericInput}
                            labelTxt={t('year')}
                            firstInputProps={{
                                value: values.year_from,
                                name: 'year_from',
                                placeholder: t(`filters:from`)
                            }}
                            secondInputProps={{
                                value: values.year_to,
                                name: 'year_to',
                                placeholder: t(`filters:to`)
                            }}
                        />
                    </Grid>
                )}
                {hasMileage && (
                    <Grid
                        item
                        container
                        xs={12}
                        sm={4}
                    >
                        <FromToInputs
                            handleInput={handleNumericInput}
                            labelTxt={t('mileage')}
                            firstInputProps={{
                                value: values.mileage_from,
                                name: 'mileage_from',
                                placeholder: t(`filters:from`)
                            }}
                            secondInputProps={{
                                value: values.mileage_to,
                                name: 'mileage_to',
                                placeholder: t(`filters:to`)
                            }}
                        />
                    </Grid>
                )}
            </Grid>
        </CustomFormikProvider>
    );
};