import React, {FC} from "react";
import {Checkbox, Grid, Typography} from "@material-ui/core";
import {WithT} from "i18next";
import {CustomSelect} from "@src/components/elements/custom_select/CustomSelect";
import {NumberSelector} from "@src/components/elements/number_selector/NumberSelector";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {useStyles} from './useStyles';
import {FormikType} from "@root/interfaces/Formik";
import {SelectOptions} from "@src/components/post/create_post/form_page/select_options/SelectOptions";


type ParkingLotsAndBoxesPropsType = {
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
            <Grid container spacing={2}>
                <Grid item container xs={12} alignItems='center'>
                    <SelectOptions
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
                        t={t}
                        name='area'
                        errors={errors}
                        touched={touched}
                        value={values.area ?? ''}
                    />
                </Grid>
                <Grid item container xs={4}>
                    <CustomFormikField
                        t={t}
                        errors={errors}
                        touched={touched}
                        name='parking_spaces'
                        value={values.parking_spaces ?? ''}
                    />
                </Grid>
                {type.id !== 1 && (
                    <Grid item container xs={4} alignItems='center'>
                        <CustomSelect
                            t={t}
                            name='payments'
                            items={filters.payments}
                            values={values}
                            onBlur={handleBlur}
                            handleSelect={handleSelect}
                        />
                    </Grid>)}
            </Grid>
        </div>
    )
};