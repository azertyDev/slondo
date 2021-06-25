import {FC, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Grid} from '@material-ui/core';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {CommonFiltersType} from '@src/components/post/search_post/search_form/SearchForm';
import {useFormik} from 'formik';
import {useHandlers} from '@src/hooks/useHandlers';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {FromToInputs} from '@src/components/elements/from_to_inputs/FromToInputs';
import {ShowHide} from '@src/components/elements/show_hide/ShowHide';
import {ActionButtons} from '@src/components/post/search_post/search_form/ActionButtons';

export const SearchCar: FC<CommonFiltersType> = (props) => {
    const {
        onSubmit,
        filters,
        handleReset,
        urlParams,
        sameWithUrlCtgr
    } = props;

    const initVals = {
        manufacturer: null,
        model: null,
        transmission: [],
        year_from: '',
        year_to: '',
        mileage_from: '',
        mileage_to: '',
        engine_capacity_from: '',
        engine_capacity_to: ''
    };

    const formik = useFormik<any>({
        initialValues: initVals,
        onSubmit
    });

    const {
        values,
        setValues,
        handleBlur
    } = formik;

    const {handleSelect, handleNumericInput, setValsByParams} = useHandlers(values, setValues);

    const {t} = useTranslation('filters');

    useEffect(() => {
        sameWithUrlCtgr && setValsByParams(urlParams, filters);
    }, [filters]);

    return (
        <CustomFormikProvider formik={formik}>
            <Grid item container spacing={2}>
                <Grid
                    item
                    container
                    sm={4}
                    xs={12}
                >
                    <DropDownSelect
                        name='manufacturer'
                        disableRequire
                        values={values}
                        onBlur={handleBlur}
                        items={filters.manufacturer}
                        handleSelect={handleSelect}
                    />
                </Grid>
                <Grid
                    item
                    container
                    sm={4}
                    xs={12}
                >
                    <DropDownSelect
                        name='model'
                        disableRequire
                        values={values}
                        onBlur={handleBlur}
                        handleSelect={handleSelect}
                        items={values.manufacturer?.models}
                    />
                </Grid>
                <Grid
                    item
                    container
                    sm={4}
                    xs={12}
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
                <Grid
                    item
                    container
                    sm={4}
                    xs={12}
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
                <Grid
                    item
                    container
                    sm={4}
                    xs={12}
                >
                    <DropDownSelect
                        multiple
                        disableRequire
                        name='transmission'
                        values={values}
                        onBlur={handleBlur}
                        handleSelect={handleSelect}
                        items={filters.transmission}
                    />
                </Grid>
            </Grid>
            <ShowHide
                className='add-params'
                showTxt={t('common:externalParams')}
            >
                <Grid item container spacing={2} xs={12}>
                    <Grid
                        item
                        container
                        sm={4}
                        xs={12}
                    >
                        <DropDownSelect
                            multiple
                            disableRequire
                            name='body'
                            values={values}
                            onBlur={handleBlur}
                            handleSelect={handleSelect}
                            items={filters.body}
                        />
                    </Grid>
                    <Grid
                        item
                        container
                        sm={4}
                        xs={12}
                    >
                        <DropDownSelect
                            multiple
                            disableRequire
                            name='engine_type'
                            values={values}
                            onBlur={handleBlur}
                            handleSelect={handleSelect}
                            items={filters.engine_type}
                        />
                    </Grid>
                    <Grid
                        item
                        container
                        sm={4}
                        xs={12}
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
                    <Grid
                        item
                        container
                        sm={4}
                        xs={12}
                    >
                        <DropDownSelect
                            multiple
                            disableRequire
                            name='drive'
                            values={values}
                            onBlur={handleBlur}
                            handleSelect={handleSelect}
                            items={filters.drive}
                        />
                    </Grid>
                    <Grid
                        item
                        container
                        sm={4}
                        xs={12}
                    >
                        <DropDownSelect
                            multiple
                            disableRequire
                            name='color'
                            values={values}
                            onBlur={handleBlur}
                            handleSelect={handleSelect}
                            items={filters.colors}
                        />
                    </Grid>
                    <Grid
                        item
                        container
                        sm={4}
                        xs={12}
                    >
                        <DropDownSelect
                            multiple
                            disableRequire
                            name='other'
                            labelTxt={t('additional')}
                            values={values}
                            onBlur={handleBlur}
                            handleSelect={handleSelect}
                            items={filters.other}
                        />
                    </Grid>
                </Grid>
            </ShowHide>
            <Grid item container xs={12}>
                <ActionButtons handleReset={handleReset}/>
            </Grid>
        </CustomFormikProvider>
    );
};
