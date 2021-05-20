import {FC} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {
    HandleOptionCheckboxType,
    OptionsSelect
} from '@src/components/elements/options_select/OptionsSelect';
import {PreviewValues} from '../../PreviewValues';
import {getErrorMsg} from '@src/helpers';
import {BodySelect} from '@src/components/elements/body_select/BodySelect';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {CheckboxSelect} from '@src/components/elements/checkbox_select/CheckboxSelect';
import {CategoriesCommonType} from '../../ParamsFormContainer';
import {useStyles} from './useStyles';


type RegularFormPropsType = {
    isMadeInUzb?: boolean,
    valuesByYear?,
    handleSelect: (k, v) => void,
    handleInput: (e) => void,
    handleCheckbox: (e) => void,
    handleOptionCheckbox: HandleOptionCheckboxType
} & CategoriesCommonType;

export const CarParams: FC<RegularFormPropsType> = (props) => {
    const {
        t,
        isPreview,
        formik,
        filters,
        valuesByYear,
        isMadeInUzb,
        handleInput,
        handleSelect,
        handleCheckbox,
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
                                         <FormikField
                                             t={t}
                                             name='engine_capacity'
                                             labelText='engine_capacity'
                                             value={values.engine_capacity}
                                             onChange={handleInput}
                                             errorMsg={getErrorMsg(errors.engine_capacity, touched.engine_capacity, t)}
                                         />
                                     </Grid>
                                     <Grid
                                         item
                                         container
                                         sm={4}
                                         xs={12}
                                     >
                                         <FormikField
                                             t={t}
                                             name='mileage'
                                             labelText='mileage'
                                             value={values.mileage ?? ''}
                                             onChange={handleInput}
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
                                     <Grid
                                         item
                                         xs={12}
                                     >
                                         <Typography variant='h5'>
                                             <strong>{t('filters:comfort_title')}</strong>
                                         </Typography>
                                     </Grid>
                                     <Grid
                                         item
                                         container
                                         sm={4}
                                         xs={12}
                                     >
                                         <DropDownSelect
                                             t={t}
                                             name='climate'
                                             values={values}
                                             onBlur={handleBlur}
                                             items={filters.climate}
                                             handleSelect={handleSelect}
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
                                             name='power_steering'
                                             values={values}
                                             onBlur={handleBlur}
                                             items={filters.power_steering}
                                             handleSelect={handleSelect}
                                         />
                                     </Grid>
                                     <Grid item container xs={12}>
                                         <Grid
                                             item
                                             container
                                             sm={4}
                                             xs={12}
                                         >
                                             <OptionsSelect
                                                 t={t}
                                                 name='power_windows'
                                                 values={values}
                                                 options={filters.power_windows}
                                                 handleOptionCheckbox={handleOptionCheckbox}
                                             />
                                         </Grid>
                                         <Grid
                                             item
                                             container
                                             sm={4}
                                             xs={12}
                                         >
                                             <OptionsSelect
                                                 t={t}
                                                 name='steering'
                                                 values={values}
                                                 options={filters.steering}
                                                 handleOptionCheckbox={handleOptionCheckbox}
                                             />
                                         </Grid>
                                         <Grid
                                             item
                                             container
                                             sm={4}
                                             xs={12}
                                         >
                                             <OptionsSelect
                                                 t={t}
                                                 name='seat_heating'
                                                 values={values}
                                                 options={filters.seat_heating}
                                                 handleOptionCheckbox={handleOptionCheckbox}
                                             />
                                         </Grid>
                                         <Grid
                                             item
                                             container
                                             sm={4}
                                             xs={12}
                                         >
                                             <OptionsSelect
                                                 t={t}
                                                 name='adjustable_seats'
                                                 values={values}
                                                 options={filters.adjustable_seats}
                                                 handleOptionCheckbox={handleOptionCheckbox}
                                             />
                                         </Grid>
                                     </Grid>
                                     <Grid
                                         item
                                         container
                                         sm={4}
                                         xs={12}
                                         alignItems='flex-end'
                                     >
                                         <DropDownSelect
                                             t={t}
                                             multiple
                                             name='comfort'
                                             values={values}
                                             onBlur={handleBlur}
                                             items={filters.comfort}
                                             handleSelect={handleSelect}
                                         />
                                     </Grid>
                                     <Grid
                                         item
                                         xs={12}
                                     >
                                         <Typography variant='h5'>
                                             <strong>{t('filters:salon')}</strong>
                                         </Typography>
                                     </Grid>
                                     <Grid
                                         item
                                         container
                                         sm={4}
                                         xs={12}
                                     >
                                         <DropDownSelect
                                             t={t}
                                             name='seats'
                                             values={values}
                                             onBlur={handleBlur}
                                             items={filters.seats}
                                             handleSelect={handleSelect}
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
                                             name='upholstery'
                                             values={values}
                                             onBlur={handleBlur}
                                             items={filters.upholstery}
                                             handleSelect={handleSelect}
                                         />
                                     </Grid>
                                     <Grid
                                         item
                                         container
                                         sm={4}
                                         xs={12}
                                         alignItems='flex-end'
                                     >
                                         <DropDownSelect
                                             t={t}
                                             multiple
                                             name='multimedia'
                                             values={values}
                                             onBlur={handleBlur}
                                             items={filters.multimedia}
                                             handleSelect={handleSelect}
                                         />
                                     </Grid>
                                     <Grid
                                         item
                                         xs={12}
                                     >
                                         <Typography variant='h5'>
                                             <strong>{t('filters:driving_assistance')}</strong>
                                         </Typography>
                                     </Grid>
                                     <Grid
                                         item
                                         container
                                         sm={4}
                                         xs={12}
                                         alignItems='flex-end'
                                     >
                                         <DropDownSelect
                                             t={t}
                                             multiple
                                             name='assistance'
                                             values={values}
                                             onBlur={handleBlur}
                                             items={filters.assistance}
                                             handleSelect={handleSelect}
                                         />
                                     </Grid>
                                     <Grid
                                         item
                                         container
                                         xs={12}
                                     >
                                         <OptionsSelect
                                             t={t}
                                             name='parking'
                                             values={values}
                                             options={filters.parking}
                                             handleOptionCheckbox={handleOptionCheckbox}
                                         />
                                     </Grid>
                                     <Grid
                                         item
                                         xs={12}
                                     >
                                         <Typography variant='h5'>
                                             <strong>{t('filters:safety_title')}</strong>
                                         </Typography>
                                     </Grid>
                                     <Grid
                                         item
                                         container
                                         sm={4}
                                         xs={12}
                                         alignItems='flex-end'
                                     >
                                         <DropDownSelect
                                             t={t}
                                             multiple
                                             name='airbags'
                                             values={values}
                                             onBlur={handleBlur}
                                             items={filters.airbags}
                                             handleSelect={handleSelect}
                                         />
                                     </Grid>
                                     <Grid
                                         item
                                         container
                                         sm={4}
                                         xs={12}
                                         alignItems='flex-end'
                                     >
                                         <DropDownSelect
                                             t={t}
                                             multiple
                                             name='safety'
                                             values={values}
                                             onBlur={handleBlur}
                                             items={filters.safety}
                                             handleSelect={handleSelect}
                                         />
                                     </Grid>
                                     <Grid
                                         item
                                         container
                                         xs={12}
                                     >
                                         <OptionsSelect
                                             t={t}
                                             name='anti_theft'
                                             values={values}
                                             options={filters.anti_theft}
                                             handleOptionCheckbox={handleOptionCheckbox}
                                         />
                                     </Grid>
                                     <Grid
                                         item
                                         xs={12}
                                     >
                                         <Typography variant='h5'>
                                             <strong>{t('filters:visibility')}</strong>
                                         </Typography>
                                     </Grid>
                                     <Grid
                                         item
                                         container
                                         sm={4}
                                         xs={12}
                                     >
                                         <DropDownSelect
                                             t={t}
                                             name='headlight'
                                             values={values}
                                             onBlur={handleBlur}
                                             items={filters.headlight}
                                             handleSelect={handleSelect}
                                         />
                                     </Grid>
                                     <Grid
                                         item
                                         container
                                         sm={4}
                                         xs={12}
                                         alignItems='flex-end'
                                     >
                                         <DropDownSelect
                                             t={t}
                                             multiple
                                             name='view'
                                             labelTxt='car_view'
                                             values={values}
                                             onBlur={handleBlur}
                                             items={filters.view}
                                             handleSelect={handleSelect}
                                         />
                                     </Grid>
                                     <Grid
                                         item
                                         container
                                         sm={4}
                                         xs={12}
                                         alignItems='flex-end'
                                     >
                                         <DropDownSelect
                                             t={t}
                                             multiple
                                             name='other'
                                             values={values}
                                             onBlur={handleBlur}
                                             items={filters.other}
                                             handleSelect={handleSelect}
                                         />
                                     </Grid>
                                 </>
                             )}
                         </>
                     )}
                 </>
                }
            </Grid>
        </div>
    );
};