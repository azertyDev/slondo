import React, {FC} from "react";
import {WithT} from "i18next";
import {Grid} from "@material-ui/core";
import {CustomSelect} from "@src/components/post/create_post/form_page/components/custom_select/CustomSelect";
import {NumberSelector} from "@src/components/elements/number_selector/NumberSelector";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {FormikType} from "@root/interfaces/Formik";
import {TypeSelect} from "@src/components/post/create_post/form_page/components/type_select/TypeSelect";
import {PreviewValues} from "@src/components/post/create_post/form_page/params_form/PreviewValues";
import {CustomCheckbox} from "@src/components/post/create_post/form_page/components/custom_checkbox/CustomCheckbox";
import {getErrorMsg} from "@src/helpers";
import {useStyles} from './useStyles';


type HousesCottagesPropsType = {
    filters,
    type,
    isPreview: boolean,
    formik: FormikType<any>,
    handleCheckbox: (e) => void,
    handleSelect: (k, v) => void
} & WithT;

export const HousesCottages: FC<HousesCottagesPropsType> = (props) => {
    const {
        t,
        filters,
        type,
        formik,
        isPreview,
        handleCheckbox,
        handleSelect
    } = props;

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
        location: values.location,
        payments: values.payments,
        utilities: values.utilities,
        with_pledge: values.with_pledge,
        furnished: values.furnished,
        number_of_floors: values.number_of_floors,
        rooms: values.rooms,
        number_of_bedrooms: values.number_of_bedrooms,
        general_area: values.general_area,
        land_area: values.land_area,
        living_area: values.living_area,
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
                     <Grid item container xs={12} alignItems='center'>
                         <Grid item container xs={4}>
                             <TypeSelect
                                 t={t}
                                 errors={errors}
                                 touched={touched}
                                 values={values}
                                 name='estate_type'
                                 options={filters.estate_type}
                                 handleSelect={handleSelect}
                             />
                         </Grid>
                         <Grid item container xs={2}>
                             <TypeSelect
                                 t={t}
                                 errors={errors}
                                 touched={touched}
                                 values={values}
                                 name='location'
                                 options={filters.location}
                                 handleSelect={handleSelect}
                             />
                         </Grid>
                         <Grid item container xs={3} alignItems='center'>
                             <CustomCheckbox
                                 name='furnished'
                                 labelText={t('house_furnished')}
                                 checked={values.furnished}
                                 onChange={handleCheckbox}
                             />
                         </Grid>
                     </Grid>
                     {isRent && (
                         <>
                             <Grid item container xs={4}>
                                 <CustomSelect
                                     t={t}
                                     name='payments'
                                     items={filters.payments}
                                     values={values}
                                     onBlur={handleBlur}
                                     handleSelect={handleSelect}
                                 />
                             </Grid>
                             <Grid item container xs={4} alignItems='center'>
                                 <CustomCheckbox
                                     name='utilities'
                                     labelText={t('utilities')}
                                     checked={values.utilities}
                                     onChange={handleCheckbox}
                                 />
                             </Grid>
                             <Grid item container xs={4} alignItems='center'>
                                 <CustomCheckbox
                                     name='with_pledge'
                                     labelText={t('with_pledge')}
                                     checked={values.with_pledge}
                                     onChange={handleCheckbox}
                                 />
                             </Grid>
                         </>
                     )}
                     <Grid item container>
                         <Grid item container xs={4}>
                             <NumberSelector
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
                             <NumberSelector
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
                             <NumberSelector
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
                         <CustomFormikField
                             name='general_area'
                             labelText={t('general_area')}
                             value={values.general_area ?? ''}
                             errorMsg={getErrorMsg(errors.general_area, touched.general_area, t)}
                         />
                     </Grid>
                     <Grid item container xs={4}>
                         <CustomFormikField
                             name='land_area'
                             labelText={t('land_area')}
                             value={values.land_area ?? ''}
                             errorMsg={getErrorMsg(errors.land_area, touched.land_area, t)}
                         />
                     </Grid>
                     <Grid item container xs={4}>
                         <CustomFormikField
                             name='living_area'
                             labelText={t('living_area')}
                             value={values.living_area ?? ''}
                             errorMsg={getErrorMsg(errors.living_area, touched.living_area, t)}
                         />
                     </Grid>
                     <Grid item container xs={4}>
                         <CustomFormikField
                             name='ceiling_height'
                             labelText={t('ceiling_height')}
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
                         <CustomSelect
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