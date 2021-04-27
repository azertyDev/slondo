import React, {FC} from 'react';
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


type RegularFormPropsType = {
    isPreview: boolean,
    filters,
    formik: FormikType<any>,
    handleSelect: (k, v) => void,
    handleOptionCheckbox: HandleOptionCheckboxType
} & WithT;

export const HousesCottagesParams: FC<RegularFormPropsType> = (props) => {
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
        errors,
        touched,
        handleBlur
    } = formik;

    const previewVals = {
        material: values.material,
        heating: values.heating,
        gas: values.gas,
        electricity: values.electricity,
        repair: values.repair,
        sewerage: values.sewerage,
        bathroom: values.bathroom,
        water: values.water,
        garage: values.garage,
        metro: values.metro,
        amenities: values.amenities,
        infrastructure: values.infrastructure
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
                             name='heating'
                             values={values}
                             onBlur={handleBlur}
                             items={filters.heating}
                             handleSelect={handleSelect}
                             errorMsg={getErrorMsg(errors.heating, touched.heating, t)}
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
                             name='gas'
                             values={values}
                             onBlur={handleBlur}
                             items={filters.gas}
                             handleSelect={handleSelect}
                             errorMsg={getErrorMsg(errors.gas, touched.gas, t)}
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
                             name='electricity'
                             values={values}
                             onBlur={handleBlur}
                             items={filters.electricity}
                             handleSelect={handleSelect}
                             errorMsg={getErrorMsg(errors.electricity, touched.electricity, t)}
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
                             name='sewerage'
                             values={values}
                             onBlur={handleBlur}
                             items={filters.sewerage}
                             handleSelect={handleSelect}
                             errorMsg={getErrorMsg(errors.sewerage, touched.sewerage, t)}
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
                             name='water'
                             values={values}
                             onBlur={handleBlur}
                             items={filters.water}
                             handleSelect={handleSelect}
                             errorMsg={getErrorMsg(errors.water, touched.water, t)}
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
                             name='garage'
                             values={values}
                             onBlur={handleBlur}
                             items={filters.garage}
                             handleSelect={handleSelect}
                             errorMsg={getErrorMsg(errors.garage, touched.garage, t)}
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