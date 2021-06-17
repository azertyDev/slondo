import {FC} from 'react';
import {Grid} from '@material-ui/core';
import {useFormik} from 'formik';
import {useHandlers} from '@src/hooks/useHandlers';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {CheckboxSelect} from '@src/components/elements/checkbox_select/CheckboxSelect';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {CommonParamsPropsType} from '@src/components/post/create_post/form_page/params_form/ParamsFormContainer';
import {CustomAccordion} from '@src/components/elements/accordion/CustomAccordion';
import {ParametersIcon} from '@src/components/elements/icons';
import {PostTitle} from '@src/components/post/create_post/form_page/params_form/post_title/PostTitle';
import {PreviewValues} from '@src/components/post/create_post/form_page/params_form/PreviewValues';
import {paramsFormSchema} from '@root/validation_schemas/createPostSchemas';


export const JobParams: FC<CommonParamsPropsType> = (props) => {
    const {
        t,
        subcategoryName,
        onSubmit,
        filters,
        isPreview,
        currentFormIndex,
        handleFormOpen
    } = props;

    const isVacancy = subcategoryName === 'vacancies';
    const hasPosition = !!filters.position;

    const initVals: any = {
        title: ''
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
                <Grid container spacing={1}>
                    {isPreview
                     ? <PreviewValues t={t} values={values}/>
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
                                 labelTxt={isVacancy ? 'require_experience' : 'experience'}
                                 values={values}
                                 items={filters.experience}
                                 handleSelect={handleSelect}
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
                                 handleSelect={handleSelect}
                             />
                         </Grid>
                         <Grid
                             item
                             container
                             xs={12}
                             sm={4}
                         >
                             <CheckboxSelect
                                 name='urgent_work'
                                 labelText={t('filters:urgent_work')}
                                 checked={!!values?.urgent_work?.id}
                                 onChange={handleCheckbox}
                             />
                         </Grid>
                     </>}
                </Grid>
            </CustomAccordion>
        </CustomFormikProvider>
    );
};