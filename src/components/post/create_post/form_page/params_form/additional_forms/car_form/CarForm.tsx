import React, {FC} from 'react';
import {WithT} from 'i18next';
import {Grid} from '@material-ui/core';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {FormikType} from '@root/interfaces/Formik';
import {getErrorMsg} from '@src/helpers';
import {PreviewValues} from '../../PreviewValues';
import {BodySelect} from '../../../../../../elements/body_select/BodySelect';
import {CustomFormikField} from '@src/components/elements/custom_formik_field/CustomFormikField';
import {CheckboxSelect} from '@src/components/elements/checkbox_select/CheckboxSelect';
import {useStyles} from './useStyles';


type HousesCottagesPropsType = {
    filters,
    valuesByYear,
    isMadeInUzb: boolean,
    isPreview: boolean,
    formik: FormikType<any>,
    handleCheckbox: (e) => void,
    handleSelect: (k, v) => void
} & WithT;

export const CarForm: FC<HousesCottagesPropsType> = (props) => {
    const {
        t,
        formik,
        isPreview,
        isMadeInUzb,
        filters,
        valuesByYear,
        handleCheckbox,
        handleSelect
    } = props;

    const {
        values,
        errors,
        touched,
        handleBlur
    } = formik;

    const previewVals = {
        manufacturer: values.manufacturer,
        model: values.model,
        year: values.year,
        body: values.body,
        position: values.position,
        transmission: values.transmission,
        drive: values.drive,
        engine_type: values.engine_type,
        engine_capacity: values.engine_capacity,
        mileage: values.mileage,
        broken: values.broken
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {isPreview
                 ? <PreviewValues t={t} values={previewVals}/>
                 : <>
                     <Grid
                         item
                         container
                         sm={4}
                         xs={12}
                     >
                         <DropDownSelect
                             t={t}
                             name='manufacturer'
                             values={values}
                             onBlur={handleBlur}
                             items={filters.manufacturer}
                             handleSelect={handleSelect}
                             errorMsg={getErrorMsg(errors.manufacturer, touched.manufacturer, t)}
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
                             name='model'
                             values={values}
                             onBlur={handleBlur}
                             items={values.manufacturer?.models}
                             handleSelect={handleSelect}
                             errorMsg={getErrorMsg(errors.model, touched.model, t)}
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
                             name='year'
                             values={values}
                             onBlur={handleBlur}
                             items={isMadeInUzb ? values.model?.years : filters.years}
                             handleSelect={handleSelect}
                             errorMsg={getErrorMsg(errors.year, touched.year, t)}
                         />
                     </Grid>
                     {(!!values.year?.id || !isMadeInUzb) && (
                         <>
                             <Grid
                                 item
                                 container
                                 xs={12}
                             >
                                 <BodySelect
                                     t={t}
                                     values={values}
                                     bodies={filters.body}
                                     handleSelect={handleSelect}
                                     errorMsg={getErrorMsg(errors.body, touched.body, t)}
                                 />
                             </Grid>
                             {isMadeInUzb && (
                                 <Grid
                                     item
                                     container
                                     sm={4}
                                     xs={12}
                                 >
                                     <DropDownSelect
                                         t={t}
                                         name='position'
                                         values={values}
                                         onBlur={handleBlur}
                                         items={valuesByYear.positions}
                                         handleSelect={handleSelect}
                                         errorMsg={getErrorMsg(errors.position, touched.position, t)}
                                     />
                                 </Grid>
                             )}
                             {(!!values.position?.id || !isMadeInUzb) && (
                                 <>
                                     <Grid
                                         item
                                         container
                                         sm={4}
                                         xs={12}
                                     >
                                         <DropDownSelect
                                             t={t}
                                             name='transmission'
                                             values={values}
                                             onBlur={handleBlur}
                                             items={filters.transmission}
                                             handleSelect={handleSelect}
                                             errorMsg={getErrorMsg(errors.transmission, touched.transmission, t)}
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
                                             name='drive'
                                             values={values}
                                             onBlur={handleBlur}
                                             items={filters.drive}
                                             handleSelect={handleSelect}
                                             errorMsg={getErrorMsg(errors.drive, touched.drive, t)}
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
                                             name='engine_type'
                                             values={values}
                                             onBlur={handleBlur}
                                             items={filters.engine_type}
                                             handleSelect={handleSelect}
                                             errorMsg={getErrorMsg(errors.engine_type, touched.engine_type, t)}
                                         />
                                     </Grid>
                                     <Grid
                                         item
                                         container
                                         sm={4}
                                         xs={12}
                                     >
                                         <CustomFormikField
                                             t={t}
                                             name='engine_capacity'
                                             labelText='engine_capacity'
                                             value={values.engine_capacity}
                                             errorMsg={getErrorMsg(errors.engine_capacity, touched.engine_capacity, t)}
                                         />
                                     </Grid>
                                     <Grid
                                         item
                                         container
                                         sm={4}
                                         xs={12}
                                     >
                                         <CustomFormikField
                                             t={t}
                                             name='mileage'
                                             labelText='mileage'
                                             value={values.mileage ?? ''}
                                             errorMsg={getErrorMsg(errors.mileage, touched.mileage, t)}
                                         />
                                     </Grid>
                                     <Grid
                                         item
                                         container
                                         justify='flex-start'
                                         sm={4}
                                         xs={12}
                                     >
                                         <CheckboxSelect
                                             t={t}
                                             name='broken'
                                             labelText='broken'
                                             checked={values.broken}
                                             onChange={handleCheckbox}
                                         />
                                     </Grid>
                                 </>
                             )}
                         </>
                     )}
                 </>}
            </Grid>
        </div>
    );
};