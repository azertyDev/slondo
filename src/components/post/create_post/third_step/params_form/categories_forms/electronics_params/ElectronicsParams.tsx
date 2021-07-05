import {FC, useEffect} from 'react';
import {Grid} from '@material-ui/core';
import {useFormik} from 'formik';
import {useHandlers} from '@src/hooks/useHandlers';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {CommonParamsPropsType} from '@src/components/post/create_post/third_step/params_form/ParamsFormContainer';
import {CustomAccordion} from '@src/components/elements/accordion/CustomAccordion';
import {ParametersIcon} from '@src/components/elements/icons';
import {PostTitle} from '@src/components/post/create_post/third_step/params_form/post_title/PostTitle';
import {paramsFormSchema} from '@root/validation_schemas/createPostSchemas';
import {getFieldsByFilters} from '@src/helpers';
import {CheckboxSelect} from '@src/components/elements/checkbox_select/CheckboxSelect';


export const ElectronicsParams: FC<CommonParamsPropsType> = (props) => {
    const {
        t,
        type,
        filters,
        isPreview,
        onSubmit,
        categoryName,
        currentFormIndex,
        handleFormOpen
    } = props;

    const isMonitors = type.name === 'monitors';

    const initVals: any = {
        title: ''
    };

    if (isMonitors) {
        initVals.build_in_speakers = false;
        initVals.usb_connector = false;
    }

    const formik = useFormik({
        onSubmit,
        initialValues: initVals,
        validationSchema: paramsFormSchema
    });

    const {
        values,
        setValues
    } = formik;

    const {handleSelect, handleCheckbox, setRequireVals} = useHandlers(values, setValues);

    useEffect(() => {
        setRequireVals(filters);
    }, [filters]);

    return (
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
                <Grid item xs={6}>
                    <PostTitle
                        t={t}
                        formik={formik}
                        title={values.title}
                        isPreview={isPreview}
                    />
                </Grid>
                <Grid container spacing={2}>
                    {getFieldsByFilters({
                        t,
                        isPreview,
                        filters,
                        formik,
                        handleSelect
                    }, categoryName)}
                </Grid>
                {isMonitors && (
                    <Grid container spacing={2}>
                        <Grid
                            item
                            container
                            xs={12}
                            sm={4}
                        >
                            <CheckboxSelect
                                name='build_in_speakers'
                                labelTxt={t('build_in_speakers')}
                                checked={values.build_in_speakers}
                                handleCheckbox={handleCheckbox}
                            />
                        </Grid>
                        <Grid
                            item
                            container
                            xs={12}
                            sm={4}
                        >
                            <CheckboxSelect
                                name='usb_connector'
                                labelTxt={t('usb_connector')}
                                checked={values.usb_connector}
                                handleCheckbox={handleCheckbox}
                            />
                        </Grid>
                    </Grid>
                )}
            </CustomAccordion>
        </CustomFormikProvider>
    );
};