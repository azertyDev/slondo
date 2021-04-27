import React, {FC} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {WithT} from 'i18next';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {
    HandleOptionCheckboxType,
    OptionsSelect
} from '@src/components/post/create_post/form_page/components/options_select/OptionsSelect';
import {PreviewValues} from '../../PreviewValues';
import {FormikType} from '@root/interfaces/Formik';
import {useStyles} from './useStyles';


type RegularFormPropsType = {
    isPreview: boolean,
    filters,
    formik: FormikType<any>,
    handleSelect: (k, v) => void,
    handleOptionCheckbox: HandleOptionCheckboxType
} & WithT;

export const CarParams: FC<RegularFormPropsType> = (props) => {
    const {
        t,
        formik,
        filters,
        isPreview,
        handleSelect,
        handleOptionCheckbox
    } = props;

    const {
        values,
        handleBlur
    } = formik;

    const previewVals = {
        climate: values.climate,
        power_steering: values.power_steering,
        power_windows: values.power_windows,
        steering: values.steering,
        seat_heating: values.seat_heating,
        adjustable_seats: values.adjustable_seats,
        seats: values.seats,
        upholstery: values.upholstery,
        multimedia: values.multimedia,
        parking: values.parking,
        assistance: values.assistance,
        airbags: values.airbags,
        anti_theft: values.anti_theft,
        headlight: values.headlight,
        view: values.view,
        other: values.other
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
                         xs={12}
                     >
                         <Typography variant='h5'>
                             <strong>{t('comfort')}</strong>
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
                     <OptionsSelect
                         t={t}
                         name='power_windows'
                         values={values}
                         options={filters.power_windows}
                         handleOptionCheckbox={handleOptionCheckbox}
                     />
                     <OptionsSelect
                         t={t}
                         name='steering'
                         values={values}
                         options={filters.steering}
                         handleOptionCheckbox={handleOptionCheckbox}
                     />
                     <OptionsSelect
                         t={t}
                         name='seat_heating'
                         values={values}
                         options={filters.seat_heating}
                         handleOptionCheckbox={handleOptionCheckbox}
                     />
                     <OptionsSelect
                         t={t}
                         name='adjustable_seats'
                         values={values}
                         options={filters.adjustable_seats}
                         handleOptionCheckbox={handleOptionCheckbox}
                     />
                     <Grid
                         item
                         xs={12}
                     >
                         <Typography variant='h5'>
                             <strong>{t('salon')}</strong>
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
                     <OptionsSelect
                         t={t}
                         name='multimedia'
                         values={values}
                         options={filters.multimedia}
                         handleOptionCheckbox={handleOptionCheckbox}
                     />
                     <Grid
                         item
                         xs={12}
                     >
                         <Typography variant='h5'>
                             <strong>{t('drivingAssistance')}</strong>
                         </Typography>
                     </Grid>
                     <OptionsSelect
                         t={t}
                         name='parking'
                         values={values}
                         options={filters.parking}
                         handleOptionCheckbox={handleOptionCheckbox}
                     />
                     <OptionsSelect
                         t={t}
                         name='assistance'
                         values={values}
                         options={filters.assistance}
                         handleOptionCheckbox={handleOptionCheckbox}
                     />
                     <Grid
                         item
                         xs={12}
                     >
                         <Typography variant='h5'>
                             <strong>{t('safety')}</strong>
                         </Typography>
                     </Grid>
                     <OptionsSelect
                         t={t}
                         name='airbags'
                         values={values}
                         options={filters.airbags}
                         handleOptionCheckbox={handleOptionCheckbox}
                     />
                     <OptionsSelect
                         t={t}
                         name='anti_theft'
                         values={values}
                         options={filters.anti_theft}
                         handleOptionCheckbox={handleOptionCheckbox}
                     />
                     <Grid
                         item
                         xs={12}
                     >
                         <Typography variant='h5'>
                             <strong>{t('visibility')}</strong>
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
                     <OptionsSelect
                         t={t}
                         name='view'
                         values={values}
                         options={filters.view}
                         handleOptionCheckbox={handleOptionCheckbox}
                     />
                     <OptionsSelect
                         t={t}
                         name='other'
                         values={values}
                         options={filters.other}
                         handleOptionCheckbox={handleOptionCheckbox}
                     />
                 </>
                }
            </Grid>
        </div>
    );
};