import {FC} from "react";
import {Grid} from "@material-ui/core";
import {WithT} from "i18next";
import {DropDownSelect} from "@src/components/elements/drop_down_select/DropDownSelect";
import {FormikField} from "@src/components/elements/formik_field/FormikField";
import {FormikType} from "@root/interfaces/Formik";
import {DeployedSelect} from "@src/components/elements/deployed_select/DeployedSelect";
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

    const classes = useStyles();
    return (
        <div className={classes.root}>
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
        </div>
    );
};