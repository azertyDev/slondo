import React, {FC} from "react";
import {Grid} from "@material-ui/core";
import {WithT} from "i18next";
import {CustomSelect} from "@src/components/post/create_post/form_page/components/custom_select/CustomSelect";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {useStyles} from './useStyles';
import {FormikType} from "@root/interfaces/Formik";
import {TypeSelect} from "@src/components/post/create_post/form_page/components/type_select/TypeSelect";
import {PreviewValues} from "@src/components/post/create_post/form_page/params_form/PreviewValues";


type ParkingLotsAndBoxesPropsType = {
    isPreview: boolean,
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
        isPreview,
        handleSelect
    } = props;

    const {
        values,
        errors,
        touched,
        handleBlur
    } = formik;

    const previewVals = {
        estate_type: values.estate_type,
        area: values.area,
        parking_spaces: values.parking_spaces,
        payments: values.payments
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {isPreview
                ? <PreviewValues t={t} values={previewVals}/>
                : <>
                    <Grid container spacing={2}>
                        <Grid item container xs={12} alignItems='center'>
                            <TypeSelect
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
                                name='area'
                                value={values.area ?? ''}
                                errorMsg={
                                    errors.area && touched.area
                                        ? t(`errors:${errors.area as string}`)
                                        : ''
                                }
                            />
                        </Grid>
                        <Grid item container xs={4}>
                            <CustomFormikField
                                name='parking_spaces'
                                value={values.parking_spaces ?? ''}
                                errorMsg={
                                    errors.parking_spaces && touched.parking_spaces
                                        ? t(`errors:${errors.parking_spaces as string}`)
                                        : ''
                                }
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
                </>}
        </div>
    )
};