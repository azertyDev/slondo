import {FC} from 'react';
import {Grid} from '@material-ui/core';
import {useFormik} from 'formik';
import {useHandlers} from '@src/hooks/useHandlers';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {CheckboxSelect} from '@src/components/elements/checkbox_select/CheckboxSelect';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {CommonParamsPropsType} from '@src/components/post/create_post/third_step/params_form/ParamsFormContainer';
import {CustomAccordion} from '@src/components/elements/accordion/CustomAccordion';
import {ParametersIcon} from '@src/components/elements/icons';
import {PostTitle} from '@src/components/post/create_post/third_step/params_form/post_title/PostTitle';
import {PreviewValues} from '@src/components/post/create_post/third_step/params_form/PreviewValues';
import {paramsFormSchema} from '@root/validation_schemas/postSchemas';
import {useUrlParams} from "@src/hooks";
import {useTranslation} from "next-i18next";

export const JobParams: FC<CommonParamsPropsType> = (props) => {
    const {
        categoryName,
        subcategoryName,
        onSubmit,
        filters,
        isPreview,
        currentFormIndex,
        handleFormOpen
    } = props;

    const {t} = useTranslation('filters');

    const isVacancy = subcategoryName === 'vacancies';
    const hasPosition = !!filters.position;

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

    const formik = useFormik({
        onSubmit,
        initialValues: initVals,
        validationSchema: paramsFormSchema
    });

    const {
        values,
        setValues
    } = formik;

    const {handleSelect} = useHandlers(values, setValues);

    const handleCheckbox = ({target}) => {
        setValues({
            ...values,
            urgent_work: target.checked ? filters.urgent_work[0] : null
        });
    };

    return (
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
                        formik={formik}
                        title={values.title}
                        isPreview={isPreview}
                    />
                </Grid>
                <Grid item container spacing={1}>
                    {isPreview
                        ? <PreviewValues
                            values={values}
                            filters={filters}
                            transKey={`${categoryName}.`}
                        />
                        : <>
                            {hasPosition && (
                                <Grid
                                    item
                                    container
                                    xs={12}
                                    sm={4}
                                >
                                    <DropDownSelect
                                        name='position'
                                        values={values}
                                        items={filters.position}
                                        handleSelect={handleSelect}
                                        transKey={`${categoryName}.`}
                                        labelTxt={t(`${categoryName}.position.name`)}
                                    />
                                </Grid>
                            )}
                            <Grid
                                item
                                container
                                xs={12}
                                sm={4}
                            >
                                <DropDownSelect
                                    name='employment'
                                    values={values}
                                    items={filters.employment}
                                    handleSelect={handleSelect}
                                    transKey={`${categoryName}.`}
                                    labelTxt={t(`${categoryName}.employment.name`)}
                                />
                            </Grid>
                            <Grid
                                item
                                container
                                xs={12}
                                sm={4}
                            >
                                <DropDownSelect
                                    name='experience'
                                    values={values}
                                    items={filters.experience}
                                    transKey={`${categoryName}.`}
                                    handleSelect={handleSelect}
                                    labelTxt={`${categoryName}.${isVacancy ? 'require_experience' : 'experience'}.name`}
                                />
                            </Grid>
                            <Grid
                                item
                                container
                                xs={12}
                                sm={4}
                            >
                                <DropDownSelect
                                    name='nature'
                                    values={values}
                                    items={filters.nature}
                                    transKey={`${categoryName}.`}
                                    labelTxt={t(`${categoryName}.nature.name`)}
                                    handleSelect={handleSelect}
                                />
                            </Grid>
                            <Grid
                                item
                                container
                                xs={12}
                                sm={4}
                                alignItems='flex-end'
                            >
                                <CheckboxSelect
                                    name='urgent_work'
                                    labelTxt={t('filters:urgent_work')}
                                    checked={!!values?.urgent_work?.id}
                                    handleCheckbox={handleCheckbox}
                                />
                            </Grid>
                        </>}
                </Grid>
            </CustomAccordion>
        </CustomFormikProvider>
    );
};