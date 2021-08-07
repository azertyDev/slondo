import {FC, useEffect} from 'react';
import {useFormik} from 'formik';
import {Grid} from '@material-ui/core';
import {CommonFiltersType} from '@src/components/post/search_post/search_form/SearchForm';
// import {useTranslation} from 'react-i18next';
// import {CheckboxSelect} from '@src/components/elements/checkbox_select/CheckboxSelect';
import {useHandlers} from '@src/hooks/useHandlers';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {ActionButtons} from '@src/components/post/search_post/search_form/ActionButtons';
import {useTranslation} from "react-i18next";

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

    const {t} = useTranslation('filters');
    const isVacancy = subcategory?.name === 'vacancy';

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

    // const handleCheckbox = ({target}) => {
    //     setValues({
    //         ...values,
    //         urgent: {id: target.checked ? 1 : null}
    //     });
    // };

    useEffect(() => {
        sameWithUrlCtgr && setValsByParams(urlParams, filters);
    }, [filters]);

    useEffect(() => {
        resetForm();
    }, [category, subcategory, type]);

    return (
        <CustomFormikProvider formik={formik}>
            <Grid container spacing={1}>
                {!!subcategory && <>
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
                            transKey='job.'
                            items={filters.employment}
                            handleSelect={handleSelect}
                            labelTxt={t(`job.employment.name`)}
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
                            name='experience'
                            values={values}
                            transKey='job.'
                            items={filters.experience}
                            handleSelect={handleSelect}
                            labelTxt={t(`job.${isVacancy ? 'require_experience' : 'experience'}.name`)}
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
                            transKey='job.'
                            values={values}
                            items={filters.nature}
                            handleSelect={handleSelect}
                            labelTxt={t(`job.nature.name`)}
                        />
                    </Grid>
                </>}
                {/*<Grid*/}
                {/*    item*/}
                {/*    container*/}
                {/*    xs={12}*/}
                {/*    sm={4}*/}
                {/*>*/}
                {/*    <CheckboxSelect*/}
                {/*        checked={!!values.urgent.id}*/}
                {/*        labelTxt={t('urgent_work')}*/}
                {/*        handleCheckbox={handleCheckbox}*/}
                {/*    />*/}
                {/*</Grid>*/}
                <Grid item container xs={12}>
                    <ActionButtons handleReset={handleReset}/>
                </Grid>
            </Grid>
        </CustomFormikProvider>
    );
};