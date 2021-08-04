import {FC, useEffect} from 'react';
import {useFormik} from 'formik';
import {Grid, Typography} from '@material-ui/core';
import {CommonParamsPropsType} from '@src/components/post/create_post/third_step/params_form/ParamsFormContainer';
import {getErrorMsg, getFieldsByFilters} from '@src/helpers';
import {useHandlers} from '@src/hooks/useHandlers';
import {transportParamsSchema} from '@root/validation_schemas/createPostSchemas';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {CustomAccordion} from '@src/components/elements/accordion/CustomAccordion';
import {ParametersIcon} from '@src/components/elements/icons';
import {PostTitle} from '@src/components/post/create_post/third_step/params_form/post_title/PostTitle';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {PreviewValues} from '@src/components/post/create_post/third_step/params_form/PreviewValues';
import {useUrlParams} from "@src/hooks";
import {useStyles} from './useStyles';

export const excludeCtgrsForYear = [
    'other',
    'rowingBoats',
    'kayaksAndCanoes',
    'inflatableBoat'
];

export const TransportParams: FC<CommonParamsPropsType> = (props) => {
    const {
        t,
        onSubmit,
        filters,
        isPreview,
        type,
        categoryName,
        subcategoryName,
        currentFormIndex,
        handleFormOpen
    } = props;

    const isYearExclude = excludeCtgrsForYear.some(k => k === type.name);
    const hasEngineCapacity = type.name === 'motorcycles' || type.name === 'mopedsAndScooters';
    const hasMileage = subcategoryName === 'motorcyclesAndMotorTech' || subcategoryName === 'busesAndTrucks';

    const {title, params} = useUrlParams();

    let initVals: any = {
        title
    };

    if (params) {
        initVals = {
            ...initVals,
            ...params
        };
    }

    if (!isYearExclude) initVals.year = '';
    if (hasEngineCapacity) initVals.engine_capacity = '';
    if (hasMileage) initVals.mileage = '';

    const formik = useFormik({
        onSubmit,
        initialValues: initVals,
        validationSchema: transportParamsSchema
    });

    const {
        values,
        setValues,
        errors,
        touched
    } = formik;

    const {handleSelect, handleNumericInput, handleFracInput, setRequireVals} = useHandlers(values, setValues);

    useEffect(() => {
        setRequireVals(filters);
    }, [filters]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CustomFormikProvider formik={formik}>
                <CustomAccordion
                    submitTxt='appearance'
                    icon={<ParametersIcon/>}
                    isPreview={isPreview}
                    title={t('parameters')}
                    open={currentFormIndex === 3}
                    isEditable={currentFormIndex < 3}
                    handleEdit={handleFormOpen(3)}
                >
                    <Grid item xs={12} sm={6}>
                        <PostTitle
                            t={t}
                            formik={formik}
                            isPreview={isPreview}
                            title={values.title}
                        />
                    </Grid>
                    {isPreview
                        ? <PreviewValues
                            values={values}
                            filters={filters}
                            transKey={t(`${categoryName}.`)}
                        />
                        : <>
                            <Grid item container spacing={2}>
                                {getFieldsByFilters({
                                    t,
                                    filters,
                                    formik,
                                    handleSelect
                                }, categoryName)}
                                {hasEngineCapacity && (
                                    <Grid
                                        item
                                        container
                                        xs={12}
                                        sm={4}
                                    >
                                        {isPreview
                                            ? <Typography variant="subtitle1">
                                                <strong>
                                                    {t('filters:engine_capacity')}:&nbsp;
                                                </strong>
                                                {values.engine_capacity}
                                            </Typography>
                                            : <FormikField
                                                t={t}
                                                name='engine_capacity'
                                                value={values.engine_capacity}
                                                onChange={handleFracInput}
                                                labelText={t('estate.engine_capacity.name')}
                                                errorMsg={getErrorMsg(errors.engine_capacity, touched.engine_capacity, t)}
                                            />}
                                    </Grid>
                                )}
                                {!isYearExclude && (
                                    <Grid
                                        item
                                        container
                                        xs={12}
                                        sm={4}
                                    >
                                        {isPreview
                                            ? <Typography variant="subtitle1">
                                                <strong>
                                                    {t('filters:year')}:&nbsp;
                                                </strong>
                                                {values.year}
                                            </Typography>
                                            : <FormikField
                                                t={t}
                                                name='year'
                                                value={values.year}
                                                onChange={handleNumericInput}
                                                labelText={t('estate.year.name')}
                                                errorMsg={getErrorMsg(errors.year, touched.year, t)}
                                            />}
                                    </Grid>
                                )}
                                {hasMileage && (
                                    <Grid
                                        item
                                        container
                                        xs={12}
                                        sm={4}
                                    >
                                        {isPreview
                                            ? <Typography variant="subtitle1">
                                                <strong>
                                                    {t('filters:mileage')}:&nbsp;
                                                </strong>
                                                {values.mileage}
                                            </Typography>
                                            : <FormikField
                                                t={t}
                                                name='mileage'
                                                value={values.mileage}
                                                onChange={handleNumericInput}
                                                labelText={t('estate.mileage.name')}
                                                errorMsg={getErrorMsg(errors.mileage, touched.mileage, t)}
                                            />}
                                    </Grid>
                                )}
                            </Grid>
                        </>}
                </CustomAccordion>
            </CustomFormikProvider>
        </div>
    );
};