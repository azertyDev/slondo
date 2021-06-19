import {FC} from 'react';
import {Grid} from '@material-ui/core';
import {useFormik} from 'formik';
import {useHandlers} from '@src/hooks/useHandlers';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {CommonParamsPropsType} from '@src/components/post/create_post/form_page/params_form/ParamsFormContainer';
import {CustomAccordion} from '@src/components/elements/accordion/CustomAccordion';
import {ParametersIcon} from '@src/components/elements/icons';
import {PostTitle} from '@src/components/post/create_post/form_page/params_form/post_title/PostTitle';
import {paramsFormSchema} from '@root/validation_schemas/createPostSchemas';
import {getFieldsByFilters} from '@src/helpers';
import {CheckboxSelect} from '@src/components/elements/checkbox_select/CheckboxSelect';


export const ElectronicsParams: FC<CommonParamsPropsType> = (props) => {
    const {
        t,
        type,
        onSubmit,
        filters,
        isPreview,
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

    const {handleSelect, handleCheckbox} = useHandlers(values, setValues);

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
                    })}
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
                                checked={values.build_in_speakers}
                                name='build_in_speakers'
                                onChange={handleCheckbox}
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
                                checked={values.usb_connector}
                                onChange={handleCheckbox}
                            />
                        </Grid>
                    </Grid>
                )}
            </CustomAccordion>
        </CustomFormikProvider>
    );
};