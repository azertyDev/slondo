import {FC} from 'react';
import {Grid} from '@material-ui/core';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {OptionsSelect} from '@src/components/elements/options_select/OptionsSelect';
import {PreviewValues} from '../../PreviewValues';
import {getErrorMsg} from '@src/helpers';
import {DeployedSelect} from '@src/components/elements/deployed_select/DeployedSelect';
import {CheckboxSelect} from '@src/components/elements/checkbox_select/CheckboxSelect';
import {NumberSelect} from '@src/components/elements/number_select/NumberSelect';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {CommonParamsPropsType} from '../../ParamsFormContainer';
import {useHandlers} from '@src/hooks/useHandlers';
import {useFormik} from 'formik';
import {paramsFormSchema} from '@root/validation_schemas/createPostSchemas';
import {PostTitle} from '@src/components/post/create_post/form_page/params_form/post_title/PostTitle';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {useStyles} from './useStyles';


export const HousesCottagesParams: FC<CommonParamsPropsType> = (props) => {
    const {
        isSearch,
        t,
        type,
        filters,
        isPreview,
        onSubmit
    } = props;

    const isRent = type.id === 2 || type.id === 3;

    const initVals: any = {
        rooms: null,
        number_of_floors: null,
        floor: null
    };
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

    const {handleCheckbox, handleOptionCheckbox, handleSelect} = useHandlers(values, setValues);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CustomFormikProvider formik={formik} isPreview={isPreview}>
                {!isSearch && (
                    <Grid item xs={6}>
                        <PostTitle isPreview={isPreview} title={values.title} formik={formik} t={t}/>
                    </Grid>
                )}
                <Grid container spacing={2}>
                    {isPreview
                     ? <PreviewValues t={t} values={values}/>
                     : <>
                         <Grid item container xs={12} alignItems='center'>
                             <Grid item container xs={4}>
                                 <DeployedSelect
                                     t={t}
                                     formik={formik}
                                     name='estate_type'
                                     options={filters.estate_type}
                                     handleSelect={handleSelect}
                                 />
                             </Grid>
                             <Grid item container xs={2}>
                                 <DeployedSelect
                                     t={t}
                                     formik={formik}
                                     name='location'
                                     options={filters.location}
                                     handleSelect={handleSelect}
                                 />
                             </Grid>
                             <Grid item container xs={3} alignItems='center'>
                                 <CheckboxSelect
                                     t={t}
                                     name='furnished'
                                     labelText='house_furnished'
                                     checked={values.furnished}
                                     onChange={handleCheckbox}
                                 />
                             </Grid>
                         </Grid>
                         {isRent && (
                             <>
                                 <Grid item container xs={4}>
                                     <DropDownSelect
                                         t={t}
                                         name='payments'
                                         items={filters.payments}
                                         values={values}
                                         onBlur={handleBlur}
                                         handleSelect={handleSelect}
                                     />
                                 </Grid>
                                 <Grid item container xs={4} alignItems='center'>
                                     <CheckboxSelect
                                         t={t}
                                         name='utilities'
                                         labelText='utilities'
                                         checked={values.utilities}
                                         onChange={handleCheckbox}
                                     />
                                 </Grid>
                                 <Grid item container xs={4} alignItems='center'>
                                     <CheckboxSelect
                                         t={t}
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
                                     count={9}
                                     name='rooms'
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
                                 t={t}
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
                                 t={t}
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
                                 t={t}
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
                                 t={t}
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
                                 t={t}
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
                                 t={t}
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
                                 t={t}
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
                                 t={t}
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
                                 t={t}
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
                                 t={t}
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
                                 t={t}
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
            </CustomFormikProvider>
        </div>
    );
};