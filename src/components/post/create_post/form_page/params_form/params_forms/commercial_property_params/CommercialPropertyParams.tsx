import {FC} from "react";
import {Grid} from "@material-ui/core";
import {getErrorMsg} from "@src/helpers";
import {DropDownSelect} from "@src/components/elements/drop_down_select/DropDownSelect";
import {FormikField} from "@src/components/elements/formik_field/FormikField";
import {OptionsSelect} from "@src/components/elements/options_select/OptionsSelect";
import {PreviewValues} from "@src/components/post/create_post/form_page/params_form/PreviewValues";
import {DeployedSelect} from "@src/components/elements/deployed_select/DeployedSelect";
import {CategoriesCommonType} from '../../ParamsFormContainer';
import {useStyles} from './useStyles';


type CommercialPropertyPropsType = {
    type,
    handleSelect: (k, v) => void,
    handleOptionCheckbox: (k, v) => void,
} & CategoriesCommonType;

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
                             formik={formik}
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
                         <FormikField
                             t={t}
                             name='area'
                             labelText='area'
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