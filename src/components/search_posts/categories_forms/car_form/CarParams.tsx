import {FC, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Grid} from '@material-ui/core';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {getErrorMsg} from '@src/helpers';
import {CommonFiltersType} from '@src/components/search_posts/search_form/SearchForm';
import {useFormik} from 'formik';
import {useHandlers} from '@src/hooks/useHandlers';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {FromToInputs} from '@src/components/elements/from_to_inputs/FromToInputs';
import {ShowHide} from '@src/components/elements/show_hide/ShowHide';


export const CarParams: FC<CommonFiltersType> = (props) => {
    const {
        onSubmit,
        filters,
        handleReset,
        urlParams
    } = props;

    const initVals = {
        manufacturer: null,
        model: null,
        transmission: [],
        year_from: '',
        year_to: '',
        mileage_from: '',
        mileage_to: ''
    };

    const formik = useFormik<any>({
        initialValues: initVals,
        onSubmit
    });

    const {
        values,
        setValues,
        errors,
        touched,
        handleBlur
    } = formik;

    const {handleSelect, handleInput, setValsByParams} = useHandlers(values, setValues);

    const {t} = useTranslation('filters');

    useEffect(() => {
        setValsByParams(urlParams, filters);
    }, [filters]);

    console.log('urlParams', urlParams);
    console.log('filters', filters);
    console.log('values', values);

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
                        t={t}
                        name='manufacturer'
                        disableRequire
                        values={values}
                        onBlur={handleBlur}
                        items={filters.manufacturer}
                        handleSelect={handleSelect}
                        errorMsg={getErrorMsg(errors.manufacturer, touched.manufacturer, t)}
                    />
                </Grid>
                <Grid
                    item
                    container
                    sm={4}
                    xs={12}
                >
                    <DropDownSelect
                        t={t}
                        name='model'
                        disableRequire
                        values={values}
                        onBlur={handleBlur}
                        handleSelect={handleSelect}
                        items={values.manufacturer?.models}
                        errorMsg={getErrorMsg(errors.model, touched.model, t)}
                    />
                </Grid>
                <Grid
                    item
                    container
                    sm={4}
                    xs={12}
                >
                    <FromToInputs
                        handleInput={handleInput}
                        labelTxt={t('year')}
                        firstInputProps={{
                            value: values.mileage_from,
                            name: 'year_from',
                            placeholder: t(`filters:from`)
                        }}
                        secondInputProps={{
                            value: values.mileage_to,
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
                        handleInput={handleInput}
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
                        t={t}
                        multiple
                        disableRequire
                        name='transmission'
                        values={values}
                        onBlur={handleBlur}
                        handleSelect={handleSelect}
                        items={filters.transmission}
                        errorMsg={getErrorMsg(errors.transmission, touched.transmission, t)}
                    />
                </Grid>
                <Grid item container xs={12}>
                    <ShowHide
                        showTxt={t('common:externalParams')}
                        hideTxt={t('common:hide')}
                    >
                        <div>Parameters</div>
                    </ShowHide>
                </Grid>
                <Grid item container justify='flex-end' xs={12} className='actions-btns'>
                    <CustomButton onClick={handleReset}>{t('filters:reset')}</CustomButton>
                    <CustomButton type='submit'>{t('filters:apply')}</CustomButton>
                </Grid>
            </Grid>
        </CustomFormikProvider>
    );
};
