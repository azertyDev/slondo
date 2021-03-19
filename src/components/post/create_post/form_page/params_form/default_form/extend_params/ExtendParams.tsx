import React, {FC} from "react";
import {WithT} from "i18next";
import {isRequired} from "@src/helpers";
import {excludedKeys} from "@src/common_data/form_fields";
import {Checkbox, Grid, Typography} from "@material-ui/core";
import {CustomSelect} from "@src/components/elements/custom_select/CustomSelect";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {FormikType} from "@root/interfaces/Formik";
import {useStyles} from "./useStyles";


type FieldsPropsType = {
    isPreview: boolean,
    filters,
    formik: FormikType<any>,
    handleSelect: (k, v) => void,
    handleOptionCheckbox: (name, item) => () => void,
} & WithT;

export const ExtendParams: FC<FieldsPropsType> = (props) => {
    const {
        t,
        isPreview,
        filters,
        formik,
        handleSelect,
        handleOptionCheckbox
    } = props;

    const {infrastructure, amenities, ...other} = filters;

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
                {isPreview
                    ? Object.keys(values).map(key => {
                        if (Object.keys(values[key]).length) {
                            if (values[key].name) {
                                return (
                                    <Grid
                                        item
                                        sm={4}
                                        xs={12}
                                        key={key}
                                    >
                                        <Typography variant="subtitle1">
                                            <strong>
                                                {t(key)}:&nbsp;
                                            </strong>
                                            {values[key].name}
                                        </Typography>
                                    </Grid>
                                )
                            } else if (key === 'ceiling_height') {
                                return (
                                    <Grid
                                        item
                                        sm={4}
                                        xs={12}
                                        key={key}
                                    >
                                        <Typography variant="subtitle1">
                                            <strong>
                                                {t(key)}:&nbsp;
                                            </strong>
                                            {values[key]}
                                        </Typography>
                                    </Grid>
                                )
                            }
                        }
                    })
                    : <>
                        {Object.keys(other).map(key => {
                            const isExcludeValue = excludedKeys.some(k => k === key);
                            const isNoEmptyArray = Array.isArray(other[key]) && other[key].length;

                            if (!isExcludeValue && isNoEmptyArray && !isRequired(key) && key !== 'payments') {
                                return (
                                    <Grid
                                        item
                                        key={key}
                                        sm={4}
                                        xs={12}
                                    >
                                        <CustomSelect
                                            t={t}
                                            name={key}
                                            values={values}
                                            errors={errors}
                                            touched={touched}
                                            onBlur={handleBlur}
                                            items={other[key]}
                                            handleSelect={handleSelect}
                                        />
                                    </Grid>
                                )
                            }
                        })}
                        <Grid item container xs={4}>
                            <CustomFormikField
                                t={t}
                                name='ceiling_height'
                                errors={errors}
                                touched={touched}
                                value={values.ceiling_height ?? ''}
                            />
                        </Grid>
                        {amenities && (
                            <div className='options-wrapper'>
                                <Typography variant='subtitle1'>
                                    <strong>
                                        {t('amenities')}
                                    </strong>
                                </Typography>
                                <Grid container>
                                    {amenities.map((item) => {
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
                                                    name={item.name}
                                                    color='primary'
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
                        {infrastructure && (
                            <div className='options-wrapper'>
                                <Typography variant='subtitle1'>
                                    <strong>
                                        {t('infrastructure')}
                                    </strong>
                                </Typography>
                                <Grid container>
                                    {infrastructure.map((item) => {
                                        const checked = !!values.infrastructure?.some(({id}) => id === item.id);
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
                                                    onChange={handleOptionCheckbox('infrastructure', item)}
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
                    </>}
            </Grid>
        </div>
    )
};