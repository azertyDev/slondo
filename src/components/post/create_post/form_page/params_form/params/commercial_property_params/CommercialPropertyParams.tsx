import React, {FC} from "react";
import {Grid} from "@material-ui/core";
import {WithT} from "i18next";
import {CustomSelect} from "@src/components/post/create_post/form_page/components/custom_select/CustomSelect";
import {FormikType} from "@root/interfaces/Formik";
import {OptionsRow} from "@src/components/post/create_post/form_page/components/options_row/OptionsRow";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {OptionsSection} from "@src/components/post/create_post/form_page/components/options_section/OptionsSection";
import {useStyles} from './useStyles';
import {PreviewValues} from "@src/components/post/create_post/form_page/params_form/PreviewValues";


type CommercialPropertyPropsType = {
    filters,
    type,
    isPreview: boolean,
    formik: FormikType<any>,
    handleSelect: (k, v) => void,
    handleOptionCheckbox: (k, v) => void,
} & WithT;

export const CommercialPropertyParams: FC<CommercialPropertyPropsType> = (props) => {
    const {
        t,
        type,
        filters,
        isPreview,
        formik,
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
        estate_type: values.estate_type,
        location: values.location,
        payments: values.payments,
        area: values.area,
        repair: values.repair,
        posted: values.posted,
        amenities: values.amenities
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
                        </Grid>
                        <Grid item container xs={4}>
                            <CustomSelect
                                t={t}
                                name='location'
                                items={filters.location}
                                values={values}
                                onBlur={handleBlur}
                                handleSelect={handleSelect}
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
                            </Grid>
                        )}
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
                            <CustomSelect
                                t={t}
                                name='repair'
                                items={filters.repair}
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
                        <OptionsSection
                            t={t}
                            name='amenities'
                            values={values}
                            handleOptionCheckbox={handleOptionCheckbox}
                            options={filters.amenities}
                        />
                    </>}
            </Grid>
        </div>
    )
};