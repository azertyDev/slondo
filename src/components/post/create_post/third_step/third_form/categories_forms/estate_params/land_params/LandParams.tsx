import {FC, useEffect} from 'react';
import {Grid} from '@material-ui/core';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {DeployedSelect} from '@src/components/elements/deployed_select/DeployedSelect';
import {ThirdFormPreview} from '@root/src/components/post/create_post/third_step/third_form/ThirdFormPreview';
import {CommonParamsPropsType} from '../../../ThirdForm';
import {getErrorMsg} from '@src/helpers';
import {useHandlers} from '@src/hooks/useHandlers';
import {useFormik} from 'formik';
import {paramsFormSchema} from '@root/validation_schemas/postSchemas';
import {PostTitle} from '@root/src/components/post/create_post/third_step/third_form/post_title/PostTitle';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {ParametersIcon} from '@src/components/elements/icons';
import {CustomAccordion} from '@src/components/elements/accordion/CustomAccordion';
import {useUrlParams} from "@src/hooks";
import {useTranslation} from "next-i18next";
import {useStyles} from './useStyles';

export const LandParams: FC<CommonParamsPropsType> = (props) => {
    const {
        type,
        isPreview,
        onSubmit,
        filters,
        currentFormIndex,
        categoryName,
        handleFormOpen
    } = props;

    const {t} = useTranslation('filters');

    const {title, params} = useUrlParams();
    const filtersLen = Object.keys(filters).length;

    const initVals: any = {
        title,
        estate_type: null,
        area: ''
    };

    const formik = useFormik({
        onSubmit,
        initialValues: initVals,
        validationSchema: paramsFormSchema
    });

    const {
        values,
        setValues,
        errors,
        touched,
        handleBlur
    } = formik;

    const {
        handleSelect,
        handleFracInput,
        setValsByUrlParams
    } = useHandlers(values, setValues);

    useEffect(() => {
        filtersLen && title && setValsByUrlParams(params, filters);
    }, [filtersLen]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CustomFormikProvider formik={formik}>
                <CustomAccordion
                    submitTxt='appearance'
                    icon={<ParametersIcon/>}
                    isPreview={isPreview}
                    title={t('post:parameters')}
                    open={currentFormIndex === 3}
                    isEditable={currentFormIndex < 3}
                    handleEdit={handleFormOpen(3)}
                >
                    <Grid item xs={12} sm={6}>
                        <PostTitle isPreview={isPreview} title={values.title} formik={formik} t={t}/>
                    </Grid>
                    <Grid container item spacing={2}>
                        {isPreview
                            ? <ThirdFormPreview
                                values={values}
                                filters={filters}
                                transKey={t(`${categoryName}.`)}
                            />
                            : <>
                                <Grid item container xs={12} spacing={2}>
                                    <Grid item xs={12} md={7} lg={4}>
                                        <DeployedSelect
                                            categoryName={categoryName}
                                            values={values}
                                            name='estate_type'
                                            options={filters.estate_type}
                                            handleSelect={handleSelect}
                                            errorMsg={getErrorMsg(errors.estate_type, touched.estate_type, t)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={3} lg={4}>
                                        <DeployedSelect
                                            categoryName={categoryName}
                                            values={values}
                                            name='location'
                                            options={filters.location}
                                            handleSelect={handleSelect}
                                            errorMsg={getErrorMsg(errors.location, touched.location, t)}
                                        />
                                    </Grid>
                                </Grid>
                                {type.id !== 1 && (
                                    <Grid item container xs={12} sm={4}>
                                        <DropDownSelect
                                            name='payment'
                                            items={filters.payment}
                                            values={values}
                                            onBlur={handleBlur}
                                            handleSelect={handleSelect}
                                            transKey={`${categoryName}.`}
                                            labelTxt={t(`${categoryName}.payment.name`)}
                                        />
                                    </Grid>
                                )}
                                <Grid item xs={12} sm={4}>
                                    <FormikField
                                        t={t}
                                        name='area'
                                        value={values.area ?? ''}
                                        onChange={handleFracInput}
                                        labelText={t('estate.area_in_hundred.name')}
                                        errorMsg={getErrorMsg(errors.area, touched.area, t)}
                                    />
                                </Grid>
                                <Grid item container xs={12} sm={4}>
                                    <DropDownSelect
                                        name='posted'
                                        items={filters.posted}
                                        values={values}
                                        onBlur={handleBlur}
                                        transKey={`${categoryName}.`}
                                        labelTxt={t(`${categoryName}.posted.name`)}
                                        handleSelect={handleSelect}
                                    />
                                </Grid>
                                <Grid item container xs={12} sm={4}>
                                    <DropDownSelect
                                        name='sewerage'
                                        items={filters.sewerage}
                                        values={values}
                                        onBlur={handleBlur}
                                        transKey={`${categoryName}.`}
                                        labelTxt={t(`${categoryName}.sewerage.name`)}
                                        handleSelect={handleSelect}
                                    />
                                </Grid>
                                <Grid item container xs={12} sm={4}>
                                    <DropDownSelect
                                        name='gas'
                                        items={filters.gas}
                                        values={values}
                                        onBlur={handleBlur}
                                        transKey={`${categoryName}.`}
                                        labelTxt={t(`${categoryName}.gas.name`)}
                                        handleSelect={handleSelect}
                                    />
                                </Grid>
                                <Grid item container xs={12} sm={4}>
                                    <DropDownSelect
                                        name='water'
                                        items={filters.water}
                                        values={values}
                                        onBlur={handleBlur}
                                        transKey={`${categoryName}.`}
                                        labelTxt={t(`${categoryName}.water.name`)}
                                        handleSelect={handleSelect}
                                    />
                                </Grid>
                                <Grid item container xs={12} sm={4}>
                                    <DropDownSelect
                                        name='electricity'
                                        items={filters.electricity}
                                        values={values}
                                        onBlur={handleBlur}
                                        transKey={`${categoryName}.`}
                                        handleSelect={handleSelect}
                                        labelTxt={t(`${categoryName}.electricity.name`)}
                                    />
                                </Grid>
                            </>}
                    </Grid>
                </CustomAccordion>
            </CustomFormikProvider>
        </div>
    );
};