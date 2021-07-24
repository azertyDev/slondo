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
import {paramsFormSchema} from '@root/validation_schemas/createPostSchemas';
import {PostTitle} from '@src/components/post/create_post/third_step/params_form/post_title/PostTitle';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {CustomAccordion} from '@src/components/elements/accordion/CustomAccordion';
import {ParametersIcon} from '@src/components/elements/icons';
import {useStyles} from './useStyles';
import {useUrlParams} from "@src/hooks";

export const CommercialPropertyParams: FC<CommonParamsPropsType> = (props) => {
    const {
        t,
        type,
        filters,
        isPreview,
        onSubmit,
        currentFormIndex,
        categoryName,
        handleFormOpen
    } = props;

    const {title, model} = useUrlParams();

    let initVals: any = {
        title,
        estate_type: null
    };

    if (model) {
        initVals = {
            ...initVals,
            ...model
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

    const {handleSelect, handleOptionCheckbox} = useHandlers(values, setValues);
    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));

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
                        <PostTitle isPreview={isPreview} title={values.title} formik={formik} t={t}/>
                    </Grid>
                    <Grid container spacing={2}>
                        {isPreview
                            ? <PreviewValues t={t} values={values}/>
                            : <>
                                <Grid item container xs={12}>
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
                                        labelText='area'
                                        value={values.area ?? ''}
                                        errorMsg={getErrorMsg(errors.area, touched.area, t)}
                                    />
                                </Grid>
                                <Grid item container xs={12} sm={4}>
                                    <DropDownSelect
                                        name='repair'
                                        items={filters.repair}
                                        values={values}
                                        onBlur={handleBlur}
                                        handleSelect={handleSelect}
                                    />
                                </Grid>
                                <Grid item container xs={12} sm={4}>
                                    <DropDownSelect
                                        name='posted'
                                        items={filters.posted}
                                        values={values}
                                        onBlur={handleBlur}
                                        handleSelect={handleSelect}
                                    />
                                </Grid>
                                <OptionsSelect
                                    isApratment={false}
                                    column={isXsDown}
                                    t={t}
                                    name='amenities'
                                    values={values}
                                    options={filters.amenities}
                                    handleOptionCheckbox={handleOptionCheckbox}
                                />
                            </>}
                    </Grid>
                </CustomAccordion>
            </CustomFormikProvider>
        </div>
    );
};