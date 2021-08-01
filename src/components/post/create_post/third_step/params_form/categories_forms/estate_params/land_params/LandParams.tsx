import {FC} from 'react';
import {Grid} from '@material-ui/core';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {DeployedSelect} from '@src/components/elements/deployed_select/DeployedSelect';
import {PreviewValues} from '@src/components/post/create_post/third_step/params_form/PreviewValues';
import {CommonParamsPropsType} from '../../../ParamsFormContainer';
import {getErrorMsg} from '@src/helpers';
import {useHandlers} from '@src/hooks/useHandlers';
import {useFormik} from 'formik';
import {paramsFormSchema} from '@root/validation_schemas/createPostSchemas';
import {PostTitle} from '@src/components/post/create_post/third_step/params_form/post_title/PostTitle';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {ParametersIcon} from '@src/components/elements/icons';
import {CustomAccordion} from '@src/components/elements/accordion/CustomAccordion';
import {useUrlParams} from "@src/hooks";
import {useStyles} from './useStyles';


export const LandParams: FC<CommonParamsPropsType> = (props) => {
    const {
        t,
        type,
        isPreview,
        onSubmit,
        filters,
        currentFormIndex,
        categoryName,
        handleFormOpen
    } = props;

    const {title, params} = useUrlParams();

    let initVals: any = {
        title,
        estate_type: null,
        area: ''
    };

    if (params) {
        initVals = {
            ...initVals,
            ...params
        };
    }

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

    const {handleSelect, handleNumericInput} = useHandlers(values, setValues);

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
                            ? <PreviewValues
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
                                            name='payments'
                                            items={filters.payments}
                                            values={values}
                                            onBlur={handleBlur}
                                            transKey={`${categoryName}.`}
                                            labelTxt={t(`${categoryName}.payments.name`)}
                                            handleSelect={handleSelect}
                                        />
                                    </Grid>
                                )}
                                <Grid item xs={12} sm={4}>
                                    <FormikField
                                        t={t}
                                        name='area'
                                        value={values.area ?? ''}
                                        onChange={handleNumericInput}
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