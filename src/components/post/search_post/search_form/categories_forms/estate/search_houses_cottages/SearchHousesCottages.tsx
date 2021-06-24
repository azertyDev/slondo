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
import {ShowHide} from '@src/components/elements/show_hide/ShowHide';
import {CheckboxSelect} from '@src/components/elements/checkbox_select/CheckboxSelect';
import {ActionButtons} from '@src/components/post/search_post/search_form/ActionButtons';


export const SearchHousesCottages: FC<CommonFiltersType> = (props) => {
    const {
        isRent,
        onSubmit,
        filters,
        handleReset,
        urlParams
    } = props;

    const initVals = {
        estate_type: null,
        room: [],
        general_area_from: '',
        general_area_to: '',
        land_area_from: '',
        land_area_to: '',
        material: [],
        metro: [],
        repair: [],
        furnished: false,
        with_pledge: false
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

    const {handleSelect, handleNumericInput, handleSetValsByParams, handleCheckbox} = useHandlers(values, setValues);

    const {t} = useTranslation('filters');

    useEffect(() => {
        handleSetValsByParams(urlParams, filters);
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
                        name='room'
                        disableRequire
                        values={values}
                        onBlur={handleBlur}
                        items={filters.room}
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
                        handleInput={handleNumericInput}
                        labelTxt={t('general_area')}
                        firstInputProps={{
                            value: values.general_area_from,
                            name: 'general_area_from',
                            placeholder: t(`filters:from`)
                        }}
                        secondInputProps={{
                            value: values.general_area_to,
                            name: 'general_area_to',
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
                        labelTxt={t('land_area')}
                        firstInputProps={{
                            value: values.land_area_from,
                            name: 'land_area_from',
                            placeholder: t(`filters:from`)
                        }}
                        secondInputProps={{
                            value: values.land_area_to,
                            name: 'land_area_to',
                            placeholder: t(`filters:to`)
                        }}
                    />
                </Grid>
            </Grid>
            <ShowHide
                className='add-params'
                showTxt={t('common:externalParams')}
            >
                <Grid item container spacing={1} xs={12}>
                    <Grid
                        item
                        container
                        sm={4}
                        xs={12}
                    >
                        <DropDownSelect
                            multiple
                            disableRequire
                            name='material'
                            values={values}
                            onBlur={handleBlur}
                            handleSelect={handleSelect}
                            items={filters.material}
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
                            name='metro'
                            values={values}
                            onBlur={handleBlur}
                            handleSelect={handleSelect}
                            items={filters.metro}
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
                            name='repair'
                            values={values}
                            onBlur={handleBlur}
                            handleSelect={handleSelect}
                            items={filters.repair}
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
                            name='heating'
                            values={values}
                            onBlur={handleBlur}
                            handleSelect={handleSelect}
                            items={filters.heating}
                        />
                    </Grid>
                    <Grid item container xs={12} sm={8} spacing={1}>
                        {isRent && (
                            <Grid item container xs={12} sm={4} alignItems='flex-end'>
                                <CheckboxSelect
                                    name='with_pledge'
                                    labelText={t('filters:with_pledge')}
                                    checked={values.with_pledge}
                                    onChange={handleCheckbox}
                                />
                            </Grid>
                        )}
                        <Grid item container xs={12} sm={8} alignItems='flex-end'>
                            <CheckboxSelect
                                name='furnished'
                                labelText={t('filters:furnished')}
                                checked={values.furnished}
                                onChange={handleCheckbox}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </ShowHide>
            <Grid item container xs={12}>
                <ActionButtons handleReset={handleReset} />
            </Grid>
        </CustomFormikProvider>
    );
};
