import React, {FC} from "react";
import {WithT} from "i18next";
import {Checkbox, Grid, Typography} from "@material-ui/core";
import {CustomSelect} from "@src/components/elements/custom_select/CustomSelect";
import {NumberSelector} from "@src/components/elements/number_selector/NumberSelector";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {FormikType} from "@root/interfaces/Formik";
import {SelectOptions} from "@src/components/post/create_post/form_page/select_options/SelectOptions";
import {useStyles} from './useStyles';


type ApartmentsPropsType = {
    type,
    filters,
    isPreview: boolean,
    formik: FormikType<any>,
    handleCheckbox: (e) => void,
    handleSelect: (k, v) => void,
} & WithT;

export const Apartments: FC<ApartmentsPropsType> = (props) => {
    const {
        t,
        type,
        filters,
        formik,
        isPreview,
        handleCheckbox,
        handleSelect
    } = props;

    const isRent = type.id === 2 || type.id === 3;

    const {
        values,
        setValues,
        errors,
        touched,
        handleBlur
    } = formik;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {isPreview
                    ? <div>Preview</div>
                    : <>
                        <Grid item container xs={isRent ? 4 : 12} alignItems='center'>
                            <SelectOptions
                                t={t}
                                values={values}
                                errors={errors}
                                touched={touched}
                                name='estate_type'
                                handleSelect={handleSelect}
                                options={filters.estate_type}
                            />
                        </Grid>
                        {isRent && (
                            <>
                                <Grid item container xs={4} alignItems='center'>
                                    <CustomSelect
                                        t={t}
                                        name='payments'
                                        values={values}
                                        onBlur={handleBlur}
                                        items={filters.payments}
                                        handleSelect={handleSelect}
                                    />
                                </Grid>
                                <Grid item container xs={4} alignItems='center'>
                                    <Typography>
                                        <strong>
                                            {t('utilities')}
                                        </strong>
                                    </Typography>
                                    <Checkbox
                                        name='utilities'
                                        color='primary'
                                        onChange={handleCheckbox}
                                        checked={values.utilities ?? false}
                                    />
                                </Grid>
                            </>
                        )}
                        <Grid item xs={4}>
                            <NumberSelector
                                t={t}
                                count={9}
                                name='floor'
                                errors={errors}
                                touched={touched}
                                values={values}
                                setValues={setValues}
                            />
                        </Grid>
                        <Grid item container xs={4}>
                            <NumberSelector
                                t={t}
                                count={9}
                                name='number_of_floors'
                                errors={errors}
                                touched={touched}
                                values={values}
                                setValues={setValues}
                            />
                        </Grid>
                        <Grid item container xs={4}>
                            <NumberSelector
                                t={t}
                                count={5}
                                name='rooms'
                                errors={errors}
                                touched={touched}
                                values={values}
                                setValues={setValues}
                            />
                        </Grid>
                        <Grid item xs={4}>
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
                                name='living_area'
                                errors={errors}
                                touched={touched}
                                value={values.living_area ?? ''}
                            />
                        </Grid>
                        <Grid item container xs={4}>
                            <CustomFormikField
                                t={t}
                                name='kitchen_area'
                                errors={errors}
                                touched={touched}
                                value={values.kitchen_area ?? ''}
                            />
                        </Grid>
                    </>}
            </Grid>
        </div>
    )
};