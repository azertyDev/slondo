import React, {FC} from "react";
import {Checkbox, Grid, Typography} from "@material-ui/core";
import {WithT} from "i18next";
import {CustomSelect} from "@src/components/elements/custom_select/CustomSelect";
import {useStyles} from './useStyles';
import {FormikType} from "@root/interfaces/Formik";
import {SelectOptions} from "@src/components/post/create_post/form_page/select_options/SelectOptions";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";


type CommercialPropertyPropsType = {
    filters,
    type,
    formik: FormikType<any>,
    handleSelect: (k, v) => void,
    handleOptionCheckbox: (k, v) => () => void,
} & WithT;

export const CommercialPropertyParams: FC<CommercialPropertyPropsType> = (props) => {
    const {
        t,
        filters,
        type,
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
                    <CustomSelect
                        t={t}
                        name='location'
                        items={filters.location}
                        values={values}
                        onBlur={handleBlur}
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
                {filters.amenities && (
                    <div className='options-wrapper'>
                        <Typography variant='subtitle1'>
                            <strong>
                                {t('amenities')}
                            </strong>
                        </Typography>
                        <Grid container>
                            {filters.amenities.map((item) => {
                                const checked = !!values.amenities?.some(({id}) => id === item.id);
                                return (
                                    <Grid
                                        item
                                        sm={4}
                                        xs={12}
                                        container
                                        key={item.id}
                                        alignItems='center'
                                    >
                                        <Checkbox
                                            color='primary'
                                            name={item.name}
                                            checked={checked}
                                            onChange={handleOptionCheckbox('amenities', item)}
                                        />
                                        <Typography>
                                            {t(item.name)}
                                        </Typography>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </div>
                )}
            </Grid>
        </div>
    )
};