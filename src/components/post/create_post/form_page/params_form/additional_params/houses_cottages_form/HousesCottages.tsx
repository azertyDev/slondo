import React, {FC} from "react";
import {WithT} from "i18next";
import {Grid} from "@material-ui/core";
import {CustomSelect} from "@src/components/post/create_post/form_page/components/custom_select/CustomSelect";
import {NumberSelector} from "@src/components/elements/number_selector/NumberSelector";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {FormikType} from "@root/interfaces/Formik";
import {OptionsRow} from "@src/components/post/create_post/form_page/components/options_row/OptionsRow";
import {PreviewValues} from "@src/components/post/create_post/form_page/params_form/PreviewValues";
import {CustomCheckbox} from "@src/components/post/create_post/form_page/components/custom_checkbox/CustomCheckbox";
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

    const previewVals = {
        estate_type: values.estate_type,
        location: values.location,
        payments: values.payments,
        utilities: values.utilities,
        furnished: values.furnished,
        number_of_floors: values.number_of_floors,
        rooms: values.rooms,
        general_area: values.general_area,
        land_area: values.land_area,
        living_area: values.living_area,
        ceiling_height: values.ceiling_height,
        posted: values.posted
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {isPreview
                    ? <PreviewValues t={t} values={previewVals}/>
                    : <>
                        <Grid item container xs={12} alignItems='center'>
                            <Grid item container xs={4}>
                                <OptionsRow
                                    t={t}
                                    errors={errors}
                                    touched={touched}
                                    values={values}
                                    name='estate_type'
                                    options={filters.estate_type}
                                    handleSelect={handleSelect}
                                />
                            </Grid>
                            <Grid item container xs={3}>
                                <OptionsRow
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
                                    <CustomCheckbox
                                        t={t}
                                        name='utilities'
                                        checked={values.utilities}
                                        onChange={handleCheckbox}
                                    />
                                </Grid>
                            </>
                        )}
                        <Grid item container xs={4} alignItems='center'>
                            <CustomCheckbox
                                t={t}
                                name='furnished'
                                checked={values.furnished}
                                onChange={handleCheckbox}
                            />
                        </Grid>
                        <Grid item container>
                            <Grid item container xs={4}>
                                <NumberSelector
                                    t={t}
                                    count={5}
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
                                    count={9}
                                    name='rooms'
                                    errors={errors}
                                    touched={touched}
                                    values={values}
                                    setValues={setValues}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                            <CustomFormikField
                                t={t}
                                name='general_area'
                                errors={errors}
                                touched={touched}
                                value={values.general_area ?? ''}
                            />
                        </Grid>
                        <Grid item container xs={4}>
                            <CustomFormikField
                                t={t}
                                name='land_area'
                                errors={errors}
                                touched={touched}
                                value={values.land_area ?? ''}
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
                                name='ceiling_height'
                                errors={errors}
                                touched={touched}
                                value={values.ceiling_height ?? ''}
                            />
                        </Grid>
                        <Grid
                            item
                            container
                            sm={4}
                            xs={12}
                        >
                            <CustomSelect
                                t={t}
                                name='posted'
                                values={values}
                                errors={errors}
                                touched={touched}
                                onBlur={handleBlur}
                                items={filters.posted}
                                handleSelect={handleSelect}
                            />
                        </Grid>
                    </>}
            </Grid>
        </div>
    )
};