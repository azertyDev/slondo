import {FC, useEffect} from 'react';
import {Grid} from '@material-ui/core';
import {useFormik} from 'formik';
import {getFieldsByFilters} from '@src/helpers';
import {CommonParamsPropsType} from '../../ThirdForm';
import {useHandlers} from '@src/hooks/useHandlers';
import {unstable_batchedUpdates} from "react-dom";
import {paramsFormSchema} from '@root/validation_schemas/postSchemas';
import {PostTitle} from '@src/components/post/create_post/third_step/third_form/post_title/PostTitle';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {ParametersIcon} from '@src/components/elements/icons';
import {CustomAccordion} from '@src/components/elements/accordion/CustomAccordion';
import {ThirdFormPreview} from '@src/components/post/create_post/third_step/third_form/ThirdFormPreview';
import {useUrlParams} from "@src/hooks";
import {useTranslation} from "next-i18next";
import {useStyles} from './useStyles';

export const RegularParams: FC<CommonParamsPropsType> = (props) => {
    const {
        categoryName,
        onSubmit,
        filters,
        isPreview,
        currentFormIndex,
        handleFormOpen
    } = props;

    const {t} = useTranslation('filters');
    const {title, params} = useUrlParams();
    const filtersLen = Object.keys(filters).length;

    const initVals: any = {
        title
    };

    const formik = useFormik({
        onSubmit,
        initialValues: initVals,
        validationSchema: paramsFormSchema
    });

    const {
        values,
        setValues
    } = formik;

    const {handleSelect, setRequireVals, setValsByUrlParams} = useHandlers(values, setValues);

    useEffect(() => {
        unstable_batchedUpdates(() => {
            setRequireVals(filters);
            filtersLen && title && setValsByUrlParams(params, filters);
        });
    }, [filtersLen]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CustomFormikProvider formik={formik}>
                <CustomAccordion
                    submitTxt='appearance'
                    isPreview={isPreview}
                    icon={<ParametersIcon/>}
                    title={t('post:parameters')}
                    open={currentFormIndex === 3}
                    isEditable={currentFormIndex < 3}
                    handleEdit={handleFormOpen(3)}
                >
                    <Grid container item spacing={2}>
                        <Grid item xs={12} md={6}>
                            <PostTitle
                                t={t}
                                formik={formik}
                                title={values.title}
                                isPreview={isPreview}
                            />
                        </Grid>
                        {isPreview
                            ? <ThirdFormPreview
                                values={values}
                                filters={filters}
                                transKey={t(`${categoryName}.`)}
                            />
                            : <Grid item container spacing={2}>
                                {getFieldsByFilters({
                                    t,
                                    filters,
                                    formik,
                                    handleSelect
                                }, categoryName)}
                            </Grid>
                        }
                    </Grid>
                </CustomAccordion>
            </CustomFormikProvider>
        </div>
    );
};