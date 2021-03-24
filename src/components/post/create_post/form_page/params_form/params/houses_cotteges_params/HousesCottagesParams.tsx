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
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";


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
                                name='heating'
                                values={values}
                                errors={errors}
                                touched={touched}
                                onBlur={handleBlur}
                                items={filters.heating}
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
                                name='gas'
                                values={values}
                                errors={errors}
                                touched={touched}
                                onBlur={handleBlur}
                                items={filters.gas}
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
                                name='electricity'
                                values={values}
                                errors={errors}
                                touched={touched}
                                onBlur={handleBlur}
                                items={filters.electricity}
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
                                name='sewerage'
                                values={values}
                                errors={errors}
                                touched={touched}
                                onBlur={handleBlur}
                                items={filters.sewerage}
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
                                name='water'
                                values={values}
                                errors={errors}
                                touched={touched}
                                onBlur={handleBlur}
                                items={filters.water}
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
                                name='metro'
                                values={values}
                                errors={errors}
                                touched={touched}
                                onBlur={handleBlur}
                                items={filters.metro}
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