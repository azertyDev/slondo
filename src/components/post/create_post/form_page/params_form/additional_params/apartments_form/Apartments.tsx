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

    const isDailyRent = type.name === 'dailyRent';
    const isRent = type.id === 2 || type.id === 3;

    const {
        values,
        setValues,
        errors,
        touched,
        handleBlur
    } = formik;

    const previewVals = {
        estate_type: values.estate_type,
        payments: values.payments,
        utilities: values.utilities,
        floor: values.floor,
        number_of_floors: values.number_of_floors,
        rooms: values.rooms,
        area: values.area,
        living_area: values.living_area,
        kitchen_area: values.kitchen_area,
        posted: values.posted
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {isPreview
                    ? <PreviewValues t={t} values={previewVals}/>
                    : <>
                        <Grid container item xs={12}>
                            <Grid item container xs={isRent ? 4 : 12} alignItems='center'>
                                <OptionsRow
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
                                    {!isDailyRent && (
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
                                    )}
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