import React, {FC} from "react";
import {WithT} from "i18next";
import {Grid} from "@material-ui/core";
import {getErrorMsg} from "@src/helpers";
import {FormikType} from "@root/interfaces/Formik";
import {DropDownSelect} from "@src/components/post/create_post/form_page/components/drop_down_select/DropDownSelect";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {OptionsSelect} from "@src/components/post/create_post/form_page/components/options_select/OptionsSelect";
import {PreviewValues} from "@src/components/post/create_post/form_page/params_form/PreviewValues";
import {DeployedSelect} from "@src/components/post/create_post/form_page/components/deployed_select/DeployedSelect";
import {useStyles} from './useStyles';


type CommercialPropertyPropsType = {
    filters,
    type,
    isPreview: boolean,
    formik: FormikType<any>,
    handleSelect: (k, v) => void,
    handleOptionCheckbox: (k, v) => void,
} & WithT;

export const CommercialPropertyParams: FC<CommercialPropertyPropsType> = (props) => {
    const {
        t,
        type,
        filters,
        isPreview,
        formik,
        handleSelect,
        handleOptionCheckbox
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
            <Grid container spacing={2}>
                {isPreview
                 ? <PreviewValues t={t} values={values}/>
                 : <>
                     <Grid item container xs={12} alignItems='center'>
                         <DeployedSelect
                             t={t}
                             name='estate_type'
                             values={values}
                             errors={errors}
                             touched={touched}
                             options={filters.estate_type}
                             handleSelect={handleSelect}
                         />
                     </Grid>
                     <Grid item container xs={4}>
                         <DropDownSelect
                             t={t}
                             name='location'
                             items={filters.location}
                             values={values}
                             onBlur={handleBlur}
                             handleSelect={handleSelect}
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
                         </Grid>
                     )}
                     <Grid item container xs={4}>
                         <CustomFormikField
                             name='area'
                             labelText={t('area')}
                             value={values.area ?? ''}
                             errorMsg={getErrorMsg(errors.area, touched.area, t)}
                         />
                     </Grid>
                     <Grid item container xs={4}>
                         <DropDownSelect
                             t={t}
                             name='repair'
                             items={filters.repair}
                             values={values}
                             onBlur={handleBlur}
                             handleSelect={handleSelect}
                         />
                     </Grid>
                     <Grid item container xs={4}>
                         <DropDownSelect
                             t={t}
                             name='posted'
                             items={filters.posted}
                             values={values}
                             onBlur={handleBlur}
                             handleSelect={handleSelect}
                         />
                     </Grid>
                     <OptionsSelect
                         t={t}
                         name='amenities'
                         values={values}
                         handleOptionCheckbox={handleOptionCheckbox}
                         options={filters.amenities}
                     />
                 </>}
            </Grid>
        </div>
    );
};