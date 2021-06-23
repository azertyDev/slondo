import {FC, useEffect} from 'react';
import {Grid} from '@material-ui/core';
import {getFieldsByFilters} from '@src/helpers';
import {CommonFiltersType} from '@src/components/post/search_post/search_form/SearchForm';
import {useTranslation} from 'react-i18next';
import {useFormik} from 'formik';
import {useHandlers} from '@src/hooks/useHandlers';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {ActionButtons} from '@src/components/post/search_post/search_form/ActionButtons';

type SearchRegularPropsType = {
    type,
    category,
    subcategory
} & CommonFiltersType;

export const SearchRegular: FC<SearchRegularPropsType> = (props) => {
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

    const formik = useFormik({
        onSubmit,
        initialValues: {}
    });

    const {
        values,
        setValues,
        resetForm
    } = formik;

    const {handleSelect, handleSetValsByParams} = useHandlers(values, setValues);

    useEffect(() => {
        handleSetValsByParams(urlParams, filters);
    }, [filters]);

    useEffect(() => {
        resetForm();
    }, [category, subcategory, type]);

    return (
        <CustomFormikProvider formik={formik}>
            <Grid container spacing={1}>
                {getFieldsByFilters({
                        t,
                        formik,
                        filters,
                        handleSelect
                    },
                    true
                )}
                <Grid item container justify='flex-end' xs={12}>
                    <ActionButtons handleReset={handleReset}/>
                </Grid>
            </Grid>
        </CustomFormikProvider>
    );
};