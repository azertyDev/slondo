import {FC, useEffect} from 'react';
import {Grid} from '@material-ui/core';
import {getFieldsByFilters} from '@src/helpers';
import {CommonFiltersType} from '@src/components/post/search_post/search_form/SearchForm';
import {useTranslation} from 'react-i18next';
import {useFormik} from 'formik';
import {useHandlers} from '@src/hooks/useHandlers';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {excludeCtgrsForYear} from '@src/components/post/create_post/form_page/params_form/categories_forms/transport_params/TransportParams';
import {FromToInputs} from '@src/components/elements/from_to_inputs/FromToInputs';
import {ActionButtons} from '@src/components/post/search_post/search_form/ActionButtons';

type SearchRegularPropsType = {
    type,
    category,
    subcategory
} & CommonFiltersType;

export const SearchTransport: FC<SearchRegularPropsType> = (props) => {
    const {
        type,
        category,
        subcategory,
        onSubmit,
        filters,
        urlParams,
        handleReset
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

    const formik = useFormik({
        onSubmit,
        initialValues: initVals
    });

    const {
        values,
        setValues,
        resetForm
    } = formik;

    const {handleSelect, handleSetValsByParams, handleNumericInput} = useHandlers(values, setValues);

    useEffect(() => {
        handleSetValsByParams(urlParams, filters);
    }, [filters]);

    useEffect(() => {
        resetForm();
    }, [category, subcategory, type]);

    return (
        <CustomFormikProvider formik={formik}>
            <Grid container spacing={1}>
                {getFieldsByFilters(
                    {
                        t,
                        filters,
                        formik,
                        handleSelect
                    },
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
                            handleInput={handleNumericInput}
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
                <Grid item container xs={12}>
                    <ActionButtons handleReset={handleReset} />
                </Grid>
            </Grid>
        </CustomFormikProvider>
    );
};