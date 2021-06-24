import {FC, useEffect} from 'react';
import {useFormik} from 'formik';
import {Grid} from '@material-ui/core';
import {useTranslation} from 'react-i18next';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {CommonFiltersType} from '@src/components/post/search_post/search_form/SearchForm';
import {useHandlers} from '@src/hooks/useHandlers';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {FromToInputs} from '@src/components/elements/from_to_inputs/FromToInputs';
import {ActionButtons} from '@src/components/post/search_post/search_form/ActionButtons';


export const SearchCommercialProperty: FC<CommonFiltersType> = (props) => {
    const {
        isRent,
        onSubmit,
        filters,
        handleReset,
        urlParams
    } = props;

    const initVals = {
        estate_type: null,
        location: null,
        payment: null,
        repair: null,
        posted: null,
        area_from: '',
        area_to: ''
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
        setValsByParams(urlParams, filters);
    }, [filters]);

    return (
        <CustomFormikProvider formik={formik}>
            <Grid className='main-params' item container spacing={1}>
                <Grid
                    item
                    container
                    sm={4}
                    xs={12}
                >
                    <DropDownSelect
                        multiple
                        disableRequire
                        name='estate_type'
                        values={values}
                        onBlur={handleBlur}
                        handleSelect={handleSelect}
                        items={filters.estate_type}
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
                        name='location'
                        disableRequire
                        values={values}
                        onBlur={handleBlur}
                        items={filters.location}
                        handleSelect={handleSelect}
                    />
                </Grid>
                {isRent && (
                    <Grid
                        item
                        container
                        sm={4}
                        xs={12}
                    >
                        <DropDownSelect
                            multiple
                            name='payment'
                            disableRequire
                            values={values}
                            onBlur={handleBlur}
                            items={filters.payment}
                            handleSelect={handleSelect}
                        />
                    </Grid>
                )}
                <Grid
                    item
                    container
                    sm={4}
                    xs={12}
                >
                    <FromToInputs
                        handleInput={handleNumericInput}
                        labelTxt={t('area')}
                        firstInputProps={{
                            value: values.area_from,
                            name: 'area_from',
                            placeholder: t(`filters:from`)
                        }}
                        secondInputProps={{
                            value: values.area_to,
                            name: 'area_to',
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
                        name='repair'
                        disableRequire
                        values={values}
                        onBlur={handleBlur}
                        items={filters.repair}
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
                        multiple
                        name='posted'
                        disableRequire
                        values={values}
                        onBlur={handleBlur}
                        items={filters.posted}
                        handleSelect={handleSelect}
                    />
                </Grid>
            </Grid>
            <Grid item container justify='flex-end' xs={12}>
                <ActionButtons handleReset={handleReset}/>
            </Grid>
        </CustomFormikProvider>
    );
};
