import React, {FC} from "react";
import {Grid} from "@material-ui/core";
import {WithT} from "i18next";
import {CustomSelect} from "@src/components/post/create_post/form_page/components/custom_select/CustomSelect";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {FormikType} from "@root/interfaces/Formik";
import {TypeSelect} from "@src/components/post/create_post/form_page/components/type_select/TypeSelect";
import {PreviewValues} from "@src/components/post/create_post/form_page/params_form/PreviewValues";
import {getErrorMsg} from "@src/helpers";
import {useStyles} from './useStyles';


type ParkingLotsAndBoxesPropsType = {
    isPreview: boolean,
    filters,
    type,
    formik: FormikType<any>,
    handleSelect: (k, v) => void
} & WithT;

export const ParkingLotsBoxes: FC<ParkingLotsAndBoxesPropsType> = (props) => {
    const {
        t,
        filters,
        type,
        formik,
        isPreview,
        handleSelect
    } = props;

    const {
        values,
        errors,
        touched,
        handleBlur
    } = formik;

    const previewVals = {
        estate_type: values.estate_type,
        area: values.area,
        parking_spaces: values.parking_spaces,
        payments: values.payments,
        posted: values.posted
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {isPreview
             ? <PreviewValues t={t} values={previewVals}/>
             : <>
                 <Grid container spacing={2}>
                     <Grid item container xs={12} alignItems='center'>
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
                     <Grid item container xs={4}>
                         <CustomFormikField
                             name='area'
                             labelText={t('area')}
                             value={values.area ?? ''}
                             errorMsg={getErrorMsg(errors.area, touched.area, t)}
                         />
                     </Grid>
                     <Grid item container xs={4}>
                         <CustomFormikField
                             name='parking_spaces'
                             labelText={t('parking_spaces')}
                             value={values.parking_spaces ?? ''}
                             errorMsg={getErrorMsg(errors.parking_spaces, touched.parking_spaces, t)}
                         />
                     </Grid>
                     {type.id !== 1 && (
                         <Grid item container xs={4}>
                             <CustomSelect
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
                 </Grid>
             </>}
        </div>
    );
};