import {FC} from 'react';
import {Grid} from '@material-ui/core';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {DeployedSelect} from '@src/components/elements/deployed_select/DeployedSelect';
import {PreviewValues} from '@src/components/post/create_post/form_page/params_form/PreviewValues';
import {getErrorMsg} from '@src/helpers';
import {CommonParamsPropsType} from '../../ParamsFormContainer';
import {useHandlers} from '@src/hooks/useHandlers';
import {useFormik} from 'formik';
import {paramsFormSchema} from '@root/validation_schemas/createPostSchemas';
import {PostTitle} from '@src/components/post/create_post/form_page/params_form/post_title/PostTitle';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {useStyles} from './useStyles';


export const ParkingLotsBoxes: FC<CommonParamsPropsType> = (props) => {
    const {
        isSearch,
        t,
        filters,
        type,
        onSubmit,
        isPreview
    } = props;

    const initVals: any = {};
    if (!isSearch) initVals.title = '';

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
            <CustomFormikProvider formik={formik} submitTxt={!isSearch ? 'appearance' : null}>
                {!isSearch && (
                    <Grid item xs={6}>
                        <PostTitle isPreview={isPreview} title={values.title} formik={formik} t={t}/>
                    </Grid>
                )}
                {isPreview
                 ? <PreviewValues t={t} values={values}/>
                 : <>
                     <Grid container spacing={2}>
                         <Grid item container xs={12} alignItems='center'>
                             <DeployedSelect
                                 t={t}
                                 formik={formik}
                                 name='estate_type'
                                 options={filters.estate_type}
                                 handleSelect={handleSelect}
                             />
                         </Grid>
                         <Grid item container xs={4}>
                             <FormikField
                                 t={t}
                                 name='area'
                                 labelText='area'
                                 value={values.area ?? ''}
                                 errorMsg={getErrorMsg(errors.area, touched.area, t)}
                             />
                         </Grid>
                         <Grid item container xs={4}>
                             <FormikField
                                 t={t}
                                 name='parking_spaces'
                                 labelText='parking_spaces'
                                 value={values.parking_spaces ?? ''}
                                 errorMsg={getErrorMsg(errors.parking_spaces, touched.parking_spaces, t)}
                             />
                         </Grid>
                         {type.id !== 1 && (
                             <Grid item container xs={4}>
                                 <DropDownSelect
                                     t={t}
                                     name='payments'
                                     items={filters.payments}
                                     values={values}
                                     onBlur={handleBlur}
                                     handleSelect={handleSelect}
                                 />
                             </Grid>)}
                         <Grid
                             item
                             container
                             sm={4}
                             xs={12}
                         >
                             <DropDownSelect
                                 t={t}
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
            </CustomFormikProvider>
        </div>
    );
};