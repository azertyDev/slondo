import React, {FC} from "react";
import {WithT} from "i18next";
import {Checkbox, Grid, Typography} from "@material-ui/core";
import {CustomSelect} from "@src/components/elements/custom_select/CustomSelect";
import {NumberSelector} from "@src/components/elements/number_selector/NumberSelector";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {FormikType} from "@root/interfaces/Formik";
import {SelectOptions} from "@src/components/post/create_post/form_page/select_options/SelectOptions";
import {useStyles} from './useStyles';


type HousesCottagesPropsType = {
    filters,
    type,
    isPreview: boolean,
    formik: FormikType<any>,
    handleCheckbox: (e) => void,
    handleSelect: (k, v) => void
} & WithT;

export const HousesCottages: FC<HousesCottagesPropsType> = (props) => {
    const {
        t,
        filters,
        type,
        formik,
        isPreview,
        handleCheckbox,
        handleSelect
    } = props;

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
                        <Grid item container xs={12} spacing={2} alignItems='center'>
                            <Grid item container xs={4}>
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
                            {type.id !== 1 && (
                                <>
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
                        </Grid>
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