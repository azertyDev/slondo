import React, {FC} from "react";
import {Grid} from "@material-ui/core";
import {WithT} from "i18next";
import {CustomSelect} from "@src/components/post/create_post/form_page/components/custom_select/CustomSelect";
import {
    HandleOptionCheckboxType,
    OptionsSection
} from "@src/components/post/create_post/form_page/components/options_section/OptionsSection";
import {PreviewValues} from "../../PreviewValues";
import {FormikType} from "@root/interfaces/Formik";
import {useStyles} from "./useStyles";


type RegularFormPropsType = {
    isPreview: boolean,
    filters,
    formik: FormikType<any>,
    handleSelect: (k, v) => void,
    handleOptionCheckbox: HandleOptionCheckboxType
} & WithT;

export const ApartmentsParams: FC<RegularFormPropsType> = (props) => {
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
        layout: values.layout,
        repair: values.repair,
        lift: values.lift,
        bathroom: values.bathroom,
        balcony: values.balcony,
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
                            <CustomSelect
                                t={t}
                                name='material'
                                values={values}
                                errors={errors}
                                touched={touched}
                                onBlur={handleBlur}
                                items={filters.material}
                                handleSelect={handleSelect}
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
                                name='layout'
                                values={values}
                                errors={errors}
                                touched={touched}
                                onBlur={handleBlur}
                                items={filters.layout}
                                handleSelect={handleSelect}
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
                                name='repair'
                                values={values}
                                errors={errors}
                                touched={touched}
                                onBlur={handleBlur}
                                items={filters.repair}
                                handleSelect={handleSelect}
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
                                name='lift'
                                values={values}
                                errors={errors}
                                touched={touched}
                                onBlur={handleBlur}
                                items={filters.lift}
                                handleSelect={handleSelect}
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
                                name='bathroom'
                                values={values}
                                errors={errors}
                                touched={touched}
                                onBlur={handleBlur}
                                items={filters.bathroom}
                                handleSelect={handleSelect}
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
                                name='balcony'
                                values={values}
                                errors={errors}
                                touched={touched}
                                onBlur={handleBlur}
                                items={filters.balcony}
                                handleSelect={handleSelect}
                            />
                        </Grid>
                        <OptionsSection
                            t={t}
                            name='amenities'
                            values={values}
                            options={filters.amenities}
                            handleOptionCheckbox={handleOptionCheckbox}
                        />
                        <OptionsSection
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
    )
};