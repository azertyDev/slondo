import React, {FC} from "react";
import {WithT} from "i18next";
import {Grid} from "@material-ui/core";
import {CustomSelect} from "@src/components/elements/custom_select/CustomSelect";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {FormikType} from "@root/interfaces/Formik";
import {useStyles} from './useStyles';
import {SelectOptions} from "@src/components/post/create_post/form_page/select_options/SelectOptions";


type LandPropsType = {
    filters,
    type,
    formik: FormikType<any>,
    handleSelect: (k, v) => void
} & WithT;

export const LandParams: FC<LandPropsType> = (props) => {
    const {
        t,
        type,
        formik,
        filters,
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
                <Grid item container xs={12} justify='space-between' alignItems='center'>
                    <Grid item xs={6}>
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
                    <Grid item xs={3}>
                        <SelectOptions
                            t={t}
                            errors={errors}
                            touched={touched}
                            values={values}
                            name='location'
                            options={filters.location}
                            handleSelect={handleSelect}
                        />
                    </Grid>
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
                    </Grid>
                )}
                <Grid item xs={4}>
                    <CustomFormikField
                        t={t}
                        errors={errors}
                        touched={touched}
                        name='area'
                        labelText='land_area'
                        value={values.area ?? ''}
                    />
                </Grid>
                <Grid item container xs={4}>
                    <CustomSelect
                        t={t}
                        name='electricity'
                        items={filters.electricity}
                        values={values}
                        onBlur={handleBlur}
                        handleSelect={handleSelect}
                    />
                </Grid>
                <Grid item container xs={4}>
                    <CustomSelect
                        t={t}
                        name='sewerage'
                        items={filters.sewerage}
                        values={values}
                        onBlur={handleBlur}
                        handleSelect={handleSelect}
                    />
                </Grid>
                <Grid item container xs={4}>
                    <CustomSelect
                        t={t}
                        name='gas'
                        items={filters.gas}
                        values={values}
                        onBlur={handleBlur}
                        handleSelect={handleSelect}
                    />
                </Grid>
                <Grid item container xs={4}>
                    <CustomSelect
                        t={t}
                        name='water'
                        items={filters.water}
                        values={values}
                        onBlur={handleBlur}
                        handleSelect={handleSelect}
                    />
                </Grid>
                <Grid item container xs={4}>
                    <CustomSelect
                        t={t}
                        name='posted'
                        items={filters.posted}
                        values={values}
                        onBlur={handleBlur}
                        handleSelect={handleSelect}
                    />
                </Grid>
            </Grid>
        </div>
    )
};