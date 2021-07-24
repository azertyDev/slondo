import {FC} from 'react';
import {Grid} from '@material-ui/core';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {DeployedSelect} from '@src/components/elements/deployed_select/DeployedSelect';
import {PreviewValues} from '@src/components/post/create_post/third_step/params_form/PreviewValues';
import {getErrorMsg} from '@src/helpers';
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


export const ParkingLotsBoxes: FC<CommonParamsPropsType> = (props) => {
    const {
        t,
        filters,
        onSubmit,
        isPreview,
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

    const {handleSelect} = useHandlers(values, setValues);

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
                    {isPreview
                        ? <PreviewValues t={t} values={values}/>
                        : <>
                            <Grid container spacing={2}>
                                <Grid item container xs={12} alignItems='center'>
                                    <DeployedSelect
                                        categoryName={categoryName}
                                        values={values}
                                        name='estate_type'
                                        options={filters.estate_type}
                                        handleSelect={handleSelect}
                                        errorMsg={getErrorMsg(errors.estate_type, touched.estate_type, t)}
                                    />
                                </Grid>
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
                                    <FormikField
                                        t={t}
                                        name='parking_spaces'
                                        labelText='parking_spaces'
                                        value={values.parking_spaces ?? ''}
                                        errorMsg={getErrorMsg(errors.parking_spaces, touched.parking_spaces, t)}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    container
                                    sm={4}
                                    xs={12}
                                >
                                    <DropDownSelect
                                        name='posted'
                                        values={values}
                                        onBlur={handleBlur}
                                        items={filters.posted}
                                        handleSelect={handleSelect}
                                        errorMsg={getErrorMsg(errors.posted, touched.posted, t)}
                                    />
                                </Grid>
                            </Grid>
                        </>}
                </CustomAccordion>
            </CustomFormikProvider>
        </div>
    );
};