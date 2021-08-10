import {FC} from 'react';
import {Grid, useMediaQuery, useTheme} from '@material-ui/core';
import {getErrorMsg} from '@src/helpers';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {OptionsSelect} from '@src/components/elements/options_select/OptionsSelect';
import {PreviewValues} from '@src/components/post/create_post/third_step/params_form/PreviewValues';
import {DeployedSelect} from '@src/components/elements/deployed_select/DeployedSelect';
import {CommonParamsPropsType} from '../../../ParamsFormContainer';
import {useHandlers} from '@src/hooks/useHandlers';
import {useFormik} from 'formik';
import {paramsFormSchema} from '@root/validation_schemas/postSchemas';
import {PostTitle} from '@src/components/post/create_post/third_step/params_form/post_title/PostTitle';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {CustomAccordion} from '@src/components/elements/accordion/CustomAccordion';
import {ParametersIcon} from '@src/components/elements/icons';
import {useUrlParams} from "@src/hooks";
import {useTranslation} from "next-i18next";
import {useStyles} from './useStyles';

export const CommercialPropertyParams: FC<CommonParamsPropsType> = (props) => {
    const {
        type,
        filters,
        isPreview,
        onSubmit,
        currentFormIndex,
        categoryName,
        handleFormOpen
    } = props;

    const {t} = useTranslation('filters');

    const {title, params} = useUrlParams();

    let initVals: any = {
        title,
        estate_type: null
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

    const {handleSelect, handleFracInput, handleOptionCheckbox} = useHandlers(values, setValues);
    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));

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
                        <PostTitle
                            t={t}
                            isPreview={isPreview}
                            title={values.title}
                            formik={formik}
                        />
                    </Grid>
                    <Grid container item spacing={2}>
                        {isPreview
                            ? <PreviewValues
                                values={values}
                                filters={filters}
                                transKey={t(`${categoryName}.`)}
                            />
                            : <>
                                <Grid item container xs={4}>
                                    <DeployedSelect
                                        categoryName={categoryName}
                                        name='estate_type'
                                        values={values}
                                        handleSelect={handleSelect}
                                        options={filters.estate_type}
                                        errorMsg={getErrorMsg(errors.estate_type, touched.estate_type, t)}
                                    />
                                </Grid>
                                <Grid item container xs={12} sm={4}>
                                    <DropDownSelect
                                        name='location'
                                        transKey={`${categoryName}.`}
                                        labelTxt={t(`${categoryName}.location.name`)}
                                        items={filters.location}
                                        values={values}
                                        onBlur={handleBlur}
                                        handleSelect={handleSelect}
                                    />
                                </Grid>
                                {type.id !== 1 && (
                                    <Grid item container xs={12} sm={4}>
                                        <DropDownSelect
                                            name='payment'
                                            items={filters.payment}
                                            transKey={`${categoryName}.`}
                                            labelTxt={t(`${categoryName}.payment.name`)}
                                            values={values}
                                            onBlur={handleBlur}
                                            handleSelect={handleSelect}
                                        />
                                    </Grid>
                                )}
                                <Grid item container xs={12} sm={4}>
                                    <FormikField
                                        t={t}
                                        name='area'
                                        value={values.area ?? ''}
                                        labelText={t('estate.area.name')}
                                        onChange={handleFracInput}
                                        errorMsg={getErrorMsg(errors.area, touched.area, t)}
                                    />
                                </Grid>
                                <Grid item container xs={12} sm={4}>
                                    <DropDownSelect
                                        name='repair'
                                        items={filters.repair}
                                        transKey={`${categoryName}.`}
                                        labelTxt={t(`${categoryName}.repair.name`)}
                                        values={values}
                                        onBlur={handleBlur}
                                        handleSelect={handleSelect}
                                    />
                                </Grid>
                                <Grid item container xs={12} sm={4}>
                                    <DropDownSelect
                                        name='posted'
                                        items={filters.posted}
                                        transKey={`${categoryName}.`}
                                        labelTxt={t(`${categoryName}.posted.name`)}
                                        values={values}
                                        onBlur={handleBlur}
                                        handleSelect={handleSelect}
                                    />
                                </Grid>
                                <OptionsSelect
                                    isApratment={false}
                                    column={isXsDown}
                                    name='amenities'
                                    values={values}
                                    options={filters.amenities}
                                    transKey={`${categoryName}.`}
                                    handleOptionCheckbox={handleOptionCheckbox}
                                />
                            </>}
                    </Grid>
                </CustomAccordion>
            </CustomFormikProvider>
        </div>
    );
};