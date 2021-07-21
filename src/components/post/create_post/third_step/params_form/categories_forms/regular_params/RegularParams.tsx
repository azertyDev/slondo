import {FC, useEffect} from 'react';
import {Grid} from '@material-ui/core';
import {getFieldsByFilters} from '@src/helpers';
import {CommonParamsPropsType} from '../../ParamsFormContainer';
import {useHandlers} from '@src/hooks/useHandlers';
import {useFormik} from 'formik';
import {paramsFormSchema} from '@root/validation_schemas/createPostSchemas';
import {PostTitle} from '@src/components/post/create_post/third_step/params_form/post_title/PostTitle';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {ParametersIcon} from '@src/components/elements/icons';
import {CustomAccordion} from '@src/components/elements/accordion/CustomAccordion';
import {PreviewValues} from '@src/components/post/create_post/third_step/params_form/PreviewValues';
import {useRouter} from "next/router";
import {useStyles} from './useStyles';

export const RegularParams: FC<CommonParamsPropsType> = (props) => {
    const {
        t,
        categoryName,
        onSubmit,
        filters,
        isPreview,
        currentFormIndex,
        handleFormOpen
    } = props;

    const {title, model} = useRouter().query;

    let initVals: any = {
        title: title ? JSON.parse(title as string) : ''
    };

    if (model) {
        initVals = {
            ...initVals,
            ...JSON.parse(model as string)
        };
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

    const {handleSelect, setRequireVals} = useHandlers(values, setValues);

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
                    title={t('post:parameters')}
                    open={currentFormIndex === 3}
                    isEditable={currentFormIndex < 3}
                    handleEdit={handleFormOpen(3)}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <PostTitle
                                t={t}
                                formik={formik}
                                title={values.title}
                                isPreview={isPreview}
                            />
                        </Grid>
                        {isPreview
                            ? <PreviewValues t={t} values={values}/>
                            : <>
                                <Grid item container spacing={2}>
                                    {getFieldsByFilters({
                                        t,
                                        filters,
                                        formik,
                                        handleSelect
                                    }, categoryName)}
                                </Grid>
                            </>}
                    </Grid>
                </CustomAccordion>
            </CustomFormikProvider>
        </div>
    );
};