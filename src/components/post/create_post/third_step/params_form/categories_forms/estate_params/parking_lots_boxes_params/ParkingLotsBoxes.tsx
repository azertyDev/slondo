import {FC, useEffect} from 'react';
import {Grid} from '@material-ui/core';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {DeployedSelect} from '@src/components/elements/deployed_select/DeployedSelect';
import {ParamsFormPreview} from '@src/components/post/create_post/third_step/params_form/ParamsFormPreview';
import {getErrorMsg} from '@src/helpers';
import {CommonParamsPropsType} from '../../../ParamsForm';
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

export const ParkingLotsBoxes: FC<CommonParamsPropsType> = (props) => {
    const {
        filters,
        onSubmit,
        isPreview,
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
        area: null
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
        handleNumericInput,
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
                    {isPreview
                        ? <ParamsFormPreview
                            values={values}
                            filters={filters}
                            transKey={t(`${categoryName}.`)}
                        />
                        : <>
                            <Grid item container spacing={2}>
                                <Grid item container xs={12} sm={4} alignItems='center'>
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
                                        value={values.area ?? ''}
                                        onChange={handleFracInput}
                                        labelText={t('estate.area.name')}
                                        errorMsg={getErrorMsg(errors.area, touched.area, t)}
                                    />
                                </Grid>
                                <Grid item container xs={12} sm={4}>
                                    <FormikField
                                        t={t}
                                        name='parking_spaces'
                                        value={values.parking_spaces ?? ''}
                                        onChange={handleNumericInput}
                                        labelText={t('estate.parking_spaces.name')}
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
                                        transKey={`${categoryName}.`}
                                        labelTxt={t(`${categoryName}.posted.name`)}
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