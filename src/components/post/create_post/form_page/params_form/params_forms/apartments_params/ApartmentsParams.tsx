import {FC} from 'react';
import {Grid} from '@material-ui/core';
import {WithT} from 'i18next';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {
    HandleOptionCheckboxType,
    OptionsSelect
} from '@src/components/post/create_post/form_page/components/options_select/OptionsSelect';
import {PreviewValues} from '../../PreviewValues';
import {FormikType} from '@root/interfaces/Formik';
import {getErrorMsg} from '@src/helpers';
import {useStyles} from './useStyles';
import {DeployedSelect} from '@src/components/post/create_post/form_page/components/deployed_select/DeployedSelect';
import {CheckboxSelect} from '@src/components/elements/checkbox_select/CheckboxSelect';
import {NumberSelect} from '@src/components/post/create_post/form_page/components/number_select/NumberSelect';
import {FormikField} from '@src/components/elements/formik_field/FormikField';


type RegularFormPropsType = {
    type,
    isPreview: boolean,
    filters,
    formik: FormikType<any>,
    handleCheckbox: (e) => void,
    handleInput: (e) => void,
    handleSelect: (k, v) => void,
    handleOptionCheckbox: HandleOptionCheckboxType
} & WithT;

export const ApartmentsParams: FC<RegularFormPropsType> = (props) => {
    const {
        t,
        type,
        formik,
        filters,
        isPreview,
        handleInput,
        handleSelect,
        handleCheckbox,
        handleOptionCheckbox
    } = props;

    const isDailyRent = type.name === 'dailyRent';
    const isRent = type.id === 2 || type.id === 3;

    const {
        values,
        setValues,
        errors,
        touched,
        handleBlur
    } = formik;

    // const previewVals = {
    //     material: values.material,
    //     layout: values.layout,
    //     repair: values.repair,
    //     lift: values.lift,
    //     bathroom: values.bathroom,
    //     balcony: values.balcony,
    //     metro: values.metro,
    //     amenities: values.amenities,
    //     infrastructure: values.infrastructure
    // };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {isPreview
                 ? <PreviewValues t={t} values={values}/>
                 : <>
                     <Grid container item xs={12}>
                         <Grid item container xs={12} alignItems='center'>
                             <Grid item container xs={4} alignItems='center'>
                                 <DeployedSelect
                                     t={t}
                                     values={values}
                                     errors={errors}
                                     touched={touched}
                                     name='estate_type'
                                     handleSelect={handleSelect}
                                     options={filters.estate_type}
                                 />
                             </Grid>
                             <Grid item container xs={2} alignItems='center'>
                                 <CheckboxSelect
                                     t={t}
                                     name='furnished'
                                     labelText={t('filters:furnished')}
                                     checked={values.furnished}
                                     onChange={handleCheckbox}
                                 />
                             </Grid>
                         </Grid>
                         {isRent && (
                             <>
                                 {!isDailyRent && (
                                     <Grid item container xs={4} alignItems='center'>
                                         <DropDownSelect
                                             t={t}
                                             name='payments'
                                             values={values}
                                             onBlur={handleBlur}
                                             items={filters.payments}
                                             handleSelect={handleSelect}
                                         />
                                     </Grid>
                                 )}
                                 <Grid item container xs={4} alignItems='center'>
                                     <CheckboxSelect
                                         t={t}
                                         name='utilities'
                                         labelText={t('filters:utilities')}
                                         checked={values.utilities}
                                         onChange={handleCheckbox}
                                     />
                                 </Grid>
                                 <Grid item container xs={4} alignItems='center'>
                                     <CheckboxSelect
                                         t={t}
                                         name='with_pledge'
                                         labelText={t('filters:with_pledge')}
                                         checked={values.with_pledge}
                                         onChange={handleCheckbox}
                                     />
                                 </Grid>
                             </>
                         )}
                     </Grid>
                     <Grid item xs={4}>
                         <NumberSelect
                             t={t}
                             count={9}
                             name='floor'
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
                             name='rooms'
                             errors={errors}
                             touched={touched}
                             values={values}
                             setValues={setValues}
                         />
                     </Grid>
                     <Grid item xs={4}>
                         <FormikField
                             t={t}
                             name='area'
                             labelText={t('filters:area')}
                             value={values.area ?? ''}
                             onChange={handleInput}
                             errorMsg={getErrorMsg(errors.area, touched.area, t)}
                         />
                     </Grid>
                     <Grid item container xs={4}>
                         <FormikField
                             t={t}
                             name='living_area'
                             labelText={t('filters:living_area')}
                             value={values.living_area ?? ''}
                             onChange={handleInput}
                             errorMsg={getErrorMsg(errors.living_area, touched.living_area, t)}
                         />
                     </Grid>
                     <Grid item container xs={4}>
                         <FormikField
                             t={t}
                             name='kitchen_area'
                             labelText={t('filters:kitchen_area')}
                             value={values.kitchen_area ?? ''}
                             onChange={handleInput}
                             errorMsg={getErrorMsg(errors.kitchen_area, touched.kitchen_area, t)}
                         />
                     </Grid>
                     <Grid item container xs={4}>
                         <FormikField
                             t={t}
                             name='ceiling_height'
                             labelText={t('filters:ceiling_height')}
                             value={values.ceiling_height ?? ''}
                             onChange={handleInput}
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
                             name='layout'
                             values={values}
                             onBlur={handleBlur}
                             items={filters.layout}
                             handleSelect={handleSelect}
                             errorMsg={getErrorMsg(errors.layout, touched.layout, t)}
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
                             name='lift'
                             values={values}
                             onBlur={handleBlur}
                             items={filters.lift}
                             handleSelect={handleSelect}
                             errorMsg={getErrorMsg(errors.lift, touched.lift, t)}
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
                             name='balcony'
                             values={values}
                             onBlur={handleBlur}
                             items={filters.balcony}
                             handleSelect={handleSelect}
                             errorMsg={getErrorMsg(errors.balcony, touched.balcony, t)}
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
        </div>
    );
};