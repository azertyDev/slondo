import {FC} from 'react';
import {Grid} from '@material-ui/core';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {OptionsSelect} from '@src/components/elements/options_select/OptionsSelect';
import {PreviewValues} from '../../../PreviewValues';
import {getErrorMsg} from '@src/helpers';
import {DeployedSelect} from '@src/components/elements/deployed_select/DeployedSelect';
import {CheckboxSelect} from '@src/components/elements/checkbox_select/CheckboxSelect';
import {NumberSelect} from '@src/components/elements/number_select/NumberSelect';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {CommonParamsPropsType} from '../../../ParamsFormContainer';
import {useHandlers} from '@src/hooks/useHandlers';
import {useFormik} from 'formik';
import {paramsFormSchema} from '@root/validation_schemas/createPostSchemas';
import {PostTitle} from '@src/components/post/create_post/form_page/params_form/post_title/PostTitle';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {ParametersIcon} from '@src/components/elements/icons';
import {CustomAccordion} from '@src/components/elements/accordion/CustomAccordion';
import {useStyles} from './useStyles';

export const HousesCottagesParams: FC<CommonParamsPropsType> = (props) => {
    const {
        t,
        type,
        filters,
        isPreview,
        onSubmit,
        currentFormIndex,
        handleFormOpen
    } = props;

    const isRent = type.id === 2 || type.id === 3;

    const initVals: any = {
        title: '',
        room: null,
        number_of_floors: null,
        estate_type: null,
        general_area: '',
        land_area: ''
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

    const {handleCheckbox, handleOptionCheckbox, handleSelect} = useHandlers(values, setValues);

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
                    <Grid item xs={6}>
                        <PostTitle isPreview={isPreview} title={values.title} formik={formik} t={t}/>
                    </Grid>
                    <Grid container spacing={2}>
                        {isPreview
                         ? <PreviewValues t={t} values={values}/>
                         : <>
                             <Grid item container xs={12} alignItems='center'>
                                 <Grid item container xs={4}>
                                     <DeployedSelect
                                         values={values}
                                         name='estate_type'
                                         options={filters.estate_type}
                                         handleSelect={handleSelect}
                                         errorMsg={getErrorMsg(errors.estate_type, touched.estate_type, t)}
                                     />
                                 </Grid>
                                 <Grid item container xs={2}>
                                     <DeployedSelect
                                         values={values}
                                         name='location'
                                         options={filters.location}
                                         handleSelect={handleSelect}
                                         errorMsg={getErrorMsg(errors.location, touched.location, t)}
                                     />
                                 </Grid>
                                 <Grid item container xs={3} alignItems='center'>
                                     <CheckboxSelect
                                         name='furnished'
                                         labelText='house_furnished'
                                         checked={values.furnished}
                                         onChange={handleCheckbox}
                                     />
                                 </Grid>
                             </Grid>
                             {isRent && (
                                 <>
                                     {!!filters?.payment?.length && (
                                         <Grid item container xs={4}>
                                             <DropDownSelect
                                                 name='payment'
                                                 items={filters.payment}
                                                 values={values}
                                                 onBlur={handleBlur}
                                                 handleSelect={handleSelect}
                                             />
                                         </Grid>
                                     )}
                                     <Grid item container xs={4} alignItems='center'>
                                         <CheckboxSelect
                                             name='utilities'
                                             labelText='utilities'
                                             checked={values.utilities}
                                             onChange={handleCheckbox}
                                         />
                                     </Grid>
                                     <Grid item container xs={4} alignItems='center'>
                                         <CheckboxSelect
                                             name='with_pledge'
                                             labelText='with_pledge'
                                             checked={values.with_pledge}
                                             onChange={handleCheckbox}
                                         />
                                     </Grid>
                                 </>
                             )}
                             <Grid item container>
                                 <Grid item container xs={4}>
                                     <NumberSelect
                                         t={t}
                                         count={5}
                                         name='number_of_floors'
                                         errors={errors}
                                         touched={touched}
                                         values={values}
                                         setValues={setValues}
                                     />
                                 </Grid>
                                 <Grid item container xs={4}>
                                     <NumberSelect
                                         t={t}
                                         count={5}
                                         name='number_of_bedrooms'
                                         values={values}
                                         setValues={setValues}
                                         errors={errors}
                                         touched={touched}
                                     />
                                 </Grid>
                                 <Grid item container xs={4}>
                                     <DropDownSelect
                                         name='room'
                                         values={values}
                                         onBlur={handleBlur}
                                         items={filters.room}
                                         handleSelect={handleSelect}
                                         errorMsg={getErrorMsg(errors.room, touched.room, t)}
                                     />
                                 </Grid>
                             </Grid>
                             <Grid item xs={4}>
                                 <FormikField
                                     t={t}
                                     name='general_area'
                                     labelText='general_area'
                                     value={values.general_area ?? ''}
                                     errorMsg={getErrorMsg(errors.general_area, touched.general_area, t)}
                                 />
                             </Grid>
                             <Grid item container xs={4}>
                                 <FormikField
                                     t={t}
                                     name='land_area'
                                     labelText='land_area'
                                     value={values.land_area ?? ''}
                                     errorMsg={getErrorMsg(errors.land_area, touched.land_area, t)}
                                 />
                             </Grid>
                             <Grid item container xs={4}>
                                 <FormikField
                                     t={t}
                                     name='living_area'
                                     labelText='living_area'
                                     value={values.living_area ?? ''}
                                     errorMsg={getErrorMsg(errors.living_area, touched.living_area, t)}
                                 />
                             </Grid>
                             <Grid item container xs={4}>
                                 <FormikField
                                     t={t}
                                     name='ceiling_height'
                                     labelText='ceiling_height'
                                     value={values.ceiling_height ?? ''}
                                     errorMsg={getErrorMsg(errors.ceiling_height, touched.ceiling_height, t)}
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
                             <Grid
                                 item
                                 container
                                 sm={4}
                                 xs={12}
                             >
                                 <DropDownSelect
                                     name='material'
                                     values={values}
                                     onBlur={handleBlur}
                                     items={filters.material}
                                     handleSelect={handleSelect}
                                     errorMsg={getErrorMsg(errors.material, touched.material, t)}
                                 />
                             </Grid>
                             <Grid
                                 item
                                 container
                                 sm={4}
                                 xs={12}
                             >
                                 <DropDownSelect
                                     name='heating'
                                     values={values}
                                     onBlur={handleBlur}
                                     items={filters.heating}
                                     handleSelect={handleSelect}
                                     errorMsg={getErrorMsg(errors.heating, touched.heating, t)}
                                 />
                             </Grid>
                             <Grid
                                 item
                                 container
                                 sm={4}
                                 xs={12}
                             >
                                 <DropDownSelect
                                     name='gas'
                                     values={values}
                                     onBlur={handleBlur}
                                     items={filters.gas}
                                     handleSelect={handleSelect}
                                     errorMsg={getErrorMsg(errors.gas, touched.gas, t)}
                                 />
                             </Grid>
                             <Grid
                                 item
                                 container
                                 sm={4}
                                 xs={12}
                             >
                                 <DropDownSelect
                                     name='electricity'
                                     values={values}
                                     onBlur={handleBlur}
                                     items={filters.electricity}
                                     handleSelect={handleSelect}
                                     errorMsg={getErrorMsg(errors.electricity, touched.electricity, t)}
                                 />
                             </Grid>
                             <Grid
                                 item
                                 container
                                 sm={4}
                                 xs={12}
                             >
                                 <DropDownSelect
                                     name='repair'
                                     values={values}
                                     onBlur={handleBlur}
                                     items={filters.repair}
                                     handleSelect={handleSelect}
                                     errorMsg={getErrorMsg(errors.repair, touched.repair, t)}
                                 />
                             </Grid>
                             <Grid
                                 item
                                 container
                                 sm={4}
                                 xs={12}
                             >
                                 <DropDownSelect
                                     name='sewerage'
                                     values={values}
                                     onBlur={handleBlur}
                                     items={filters.sewerage}
                                     handleSelect={handleSelect}
                                     errorMsg={getErrorMsg(errors.sewerage, touched.sewerage, t)}
                                 />
                             </Grid>
                             <Grid
                                 item
                                 container
                                 sm={4}
                                 xs={12}
                             >
                                 <DropDownSelect
                                     name='bathroom'
                                     values={values}
                                     onBlur={handleBlur}
                                     items={filters.bathroom}
                                     handleSelect={handleSelect}
                                     errorMsg={getErrorMsg(errors.bathroom, touched.bathroom, t)}
                                 />
                             </Grid>
                             <Grid
                                 item
                                 container
                                 sm={4}
                                 xs={12}
                             >
                                 <DropDownSelect
                                     name='water'
                                     values={values}
                                     onBlur={handleBlur}
                                     items={filters.water}
                                     handleSelect={handleSelect}
                                     errorMsg={getErrorMsg(errors.water, touched.water, t)}
                                 />
                             </Grid>
                             <Grid
                                 item
                                 container
                                 sm={4}
                                 xs={12}
                             >
                                 <DropDownSelect
                                     name='garage'
                                     values={values}
                                     onBlur={handleBlur}
                                     items={filters.garage}
                                     handleSelect={handleSelect}
                                     errorMsg={getErrorMsg(errors.garage, touched.garage, t)}
                                 />
                             </Grid>
                             <Grid
                                 item
                                 container
                                 sm={4}
                                 xs={12}
                             >
                                 <DropDownSelect
                                     name='metro'
                                     values={values}
                                     onBlur={handleBlur}
                                     items={filters.metro}
                                     handleSelect={handleSelect}
                                     errorMsg={getErrorMsg(errors.metro, touched.metro, t)}
                                 />
                             </Grid>
                             <OptionsSelect
                                 t={t}
                                 name='amenities'
                                 values={values}
                                 options={filters.amenities}
                                 handleOptionCheckbox={handleOptionCheckbox}
                             />
                             <OptionsSelect
                                 t={t}
                                 name='infrastructure'
                                 values={values}
                                 options={filters.infrastructure}
                                 handleOptionCheckbox={handleOptionCheckbox}
                             />
                         </>
                        }
                    </Grid>
                </CustomAccordion>
            </CustomFormikProvider>
        </div>
    );
};