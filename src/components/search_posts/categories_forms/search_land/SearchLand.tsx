import {FC, useEffect} from 'react';
import {useFormik} from 'formik';
import {Grid} from '@material-ui/core';
import {useTranslation} from 'react-i18next';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {CommonFiltersType} from '@src/components/search_posts/search_form/SearchForm';
import {useHandlers} from '@src/hooks/useHandlers';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {FromToInputs} from '@src/components/elements/from_to_inputs/FromToInputs';


export const SearchLand: FC<CommonFiltersType> = (props) => {
    const {
        onSubmit,
        filters,
        handleReset,
        urlParams
    } = props;

    const initVals = {
        estate_type: null,
        area_from: '',
        area_to: '',
        electricity: null,
        sewerage: null,
        gas: null,
        water: null
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

    const {handleSelect, handleInput, setValsByParams} = useHandlers(values, setValues);

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
                        t={t}
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
                        t={t}
                        multiple
                        name='location'
                        disableRequire
                        values={values}
                        onBlur={handleBlur}
                        items={filters.location}
                        handleSelect={handleSelect}
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
                        labelTxt={t('area_in_hundred')}
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
                        t={t}
                        multiple
                        disableRequire
                        name='electricity'
                        values={values}
                        onBlur={handleBlur}
                        handleSelect={handleSelect}
                        items={filters.electricity}
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
                        name='sewerage'
                        values={values}
                        onBlur={handleBlur}
                        handleSelect={handleSelect}
                        items={filters.sewerage}
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
                        name='gas'
                        values={values}
                        onBlur={handleBlur}
                        handleSelect={handleSelect}
                        items={filters.gas}
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
                        name='water'
                        values={values}
                        onBlur={handleBlur}
                        handleSelect={handleSelect}
                        items={filters.water}
                    />
                </Grid>
            </Grid>
            <Grid item container justify='flex-end' xs={12} className='actions-btns'>
                <CustomButton onClick={handleReset}>{t('filters:reset')}</CustomButton>
                <CustomButton type='submit'>{t('filters:apply')}</CustomButton>
            </Grid>
        </CustomFormikProvider>
    );
};
