import React, {FC} from 'react';
import {WithT} from 'i18next';
import {Grid} from '@material-ui/core';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {NumberSelect} from '@src/components/post/create_post/form_page/components/number_select/NumberSelect';
import {CustomFormikField} from '@src/components/elements/custom_formik_field/CustomFormikField';
import {FormikType} from '@root/interfaces/Formik';
import {DeployedSelect} from '@src/components/post/create_post/form_page/components/deployed_select/DeployedSelect';
import {PreviewValues} from '@src/components/post/create_post/form_page/params_form/PreviewValues';
import {CheckboxSelect} from '@src/components/elements/checkbox_select/CheckboxSelect';
import {getErrorMsg} from '@src/helpers';
import {useStyles} from './useStyles';


type ApartmentsPropsType = {
    type,
    filters,
    isPreview: boolean,
    formik: FormikType<any>,
    handleCheckbox: (e) => void,
    handleSelect: (k, v) => void,
} & WithT;

export const ApartmentsForm: FC<ApartmentsPropsType> = (props) => {
    const {
        t,
        type,
        filters,
        formik,
        isPreview,
        handleCheckbox,
        handleSelect
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

    const previewVals = {
        estate_type: values.estate_type,
        furnished: values.furnished,
        payments: values.payments,
        utilities: values.utilities,
        with_pledge: values.with_pledge,
        floor: values.floor,
        number_of_floors: values.number_of_floors,
        rooms: values.rooms,
        area: values.area,
        living_area: values.living_area,
        kitchen_area: values.kitchen_area,
        ceiling_height: values.ceiling_height,
        posted: values.posted
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {isPreview
                 ? <PreviewValues t={t} values={previewVals}/>
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
                                     labelText='furnished'
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
                         <CustomFormikField
                             t={t}
                             name='area'
                             labelText='area'
                             value={values.area ?? ''}
                             errorMsg={getErrorMsg(errors.area, touched.area, t)}
                         />
                     </Grid>
                     <Grid item container xs={4}>
                         <CustomFormikField
                             t={t}
                             name='living_area'
                             labelText='living_area'
                             value={values.living_area ?? ''}
                             errorMsg={getErrorMsg(errors.living_area, touched.living_area, t)}
                         />
                     </Grid>
                     <Grid item container xs={4}>
                         <CustomFormikField
                             t={t}
                             name='kitchen_area'
                             labelText='kitchen_area'
                             value={values.kitchen_area ?? ''}
                             errorMsg={getErrorMsg(errors.kitchen_area, touched.kitchen_area, t)}
                         />
                     </Grid>
                     <Grid item container xs={4}>
                         <CustomFormikField
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
                 </>}
            </Grid>
        </div>
    );
};