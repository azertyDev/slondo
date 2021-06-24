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


export const SearchParkingLotsBoxes: FC<CommonFiltersType> = (props) => {
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
        parking_spaces_from: '',
        parking_spaces_to: ''
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

    const {handleSelect, handleNumericInput, handleSetValsByParams} = useHandlers(values, setValues);

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
                    <FromToInputs
                        handleInput={handleNumericInput}
                        labelTxt={t('parking_spaces')}
                        firstInputProps={{
                            value: values.parking_spaces_from,
                            name: 'parking_spaces_from',
                            placeholder: t(`filters:from`)
                        }}
                        secondInputProps={{
                            value: values.parking_spaces_to,
                            name: 'parking_spaces_to',
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
            </Grid>
            <Grid item container xs={12}>
                <ActionButtons handleReset={handleReset} />
            </Grid>
        </CustomFormikProvider>
    );
};
