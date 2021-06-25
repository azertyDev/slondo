import {FC, useEffect} from 'react';
import {Grid} from '@material-ui/core';
import {CommonFiltersType} from '@src/components/post/search_post/search_form/SearchForm';
import {useTranslation} from 'react-i18next';
import {useFormik} from 'formik';
import {useHandlers} from '@src/hooks/useHandlers';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {CheckboxSelect} from '@src/components/elements/checkbox_select/CheckboxSelect';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {ActionButtons} from '@src/components/post/search_post/search_form/ActionButtons';

type SearchRegularPropsType = {
    type,
    category,
    subcategory
} & CommonFiltersType;

export const SearchJob: FC<SearchRegularPropsType> = (props) => {
    const {
        type,
        category,
        subcategory,
        onSubmit,
        filters,
        urlParams,
        handleReset,
        sameWithUrlCtgr
    } = props;

    const isVacancy = subcategory?.name === 'vacancies';

    const {t} = useTranslation('filters');

    const initVals: any = {
        employment: [],
        experience: [],
        nature: [],
        urgent: {id: null}
    };

    const formik = useFormik({
        onSubmit,
        initialValues: initVals
    });

    const {
        values,
        setValues,
        resetForm
    } = formik;

    const {handleSelect, setValsByParams} = useHandlers(values, setValues);

    const handleCheckbox = ({target}) => {
        setValues({
            ...values,
            urgent: {id: target.checked ? 1 : null}
        });
    };

    useEffect(() => {
        sameWithUrlCtgr && setValsByParams(urlParams, filters);
    }, [filters]);

    useEffect(() => {
        resetForm();
    }, [category, subcategory, type]);

    return (
        <CustomFormikProvider formik={formik}>
            <Grid container spacing={1}>
                <Grid
                    item
                    container
                    xs={12}
                    sm={4}
                >
                    <DropDownSelect
                        multiple
                        name='employment'
                        values={values}
                        items={filters.employment}
                        handleSelect={handleSelect}
                    />
                </Grid>
                <Grid
                    item
                    container
                    xs={12}
                    sm={4}
                >
                    <DropDownSelect
                        multiple
                        name={isVacancy ? 'require_experience' : 'experience'}
                        values={values}
                        items={filters.experience}
                        handleSelect={handleSelect}
                    />
                </Grid>
                <Grid
                    item
                    container
                    xs={12}
                    sm={4}
                >
                    <DropDownSelect
                        multiple
                        name='nature'
                        values={values}
                        items={filters.nature}
                        handleSelect={handleSelect}
                    />
                </Grid>
                <Grid
                    item
                    container
                    xs={12}
                    sm={4}
                >
                    <CheckboxSelect
                        name='urgent_work'
                        labelText={t('filters:urgent_work')}
                        checked={!!values.urgent.id}
                        onChange={handleCheckbox}
                    />
                </Grid>
                <Grid item container xs={12}>
                    <ActionButtons handleReset={handleReset} />
                </Grid>
            </Grid>
        </CustomFormikProvider>
    );
};