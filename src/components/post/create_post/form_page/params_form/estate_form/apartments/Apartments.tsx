import React, {FC, useEffect} from "react";
import {Checkbox, Grid, Typography} from "@material-ui/core";
import {CustomSelect} from "@src/components/elements/customSelect/CustomSelect";
import {WithT} from "i18next";
import {ButtonComponent} from "@src/components/elements/button/Button";
import {useStyles} from './useStyles';
import {NumberSelector} from "@src/components/post/create_post/form_page/params_form/estate_form/number_selector/NumberSelector";


type ApartmentsPropsType = {
    filters,
    values,
    setValues,
    errors,
    touched,
    handleBlur,
} & WithT;

export const Apartments: FC<ApartmentsPropsType> = (props) => {
    const {
        t,
        filters,
        values,
        errors,
        touched,
        setValues,
        handleBlur
    } = props;

    const handleEstateType = (type) => () => {
        setValues({...values, estate_type: type})
    };

    const handleSelect = (key, value) => {
        setValues({...values, [key]: value});
    };

    const handleCheckbox = ({target}) => {
        setValues({...values, [target.name]: target.checked});
    };

    useEffect(() => {
        values.floor = null;
        values.number_of_floors = null;
        setValues({...values});
    }, []);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item container xs={4} alignItems='center'>
                    <Typography variant="subtitle1">
                        <strong>
                            {t('estate_type')}
                            <span className='error-text'>*&nbsp;</span>
                        </strong>
                        {errors && errors.estate_type && touched.estate_type && (
                            <span className='error-text'>
                                {t(errors.estate_type as string)}
                            </span>
                        )}
                    </Typography>
                    {filters.estate_type && (
                        <div className='estate-type-btns'>
                            {filters.estate_type.map(eType =>
                                <ButtonComponent
                                    key={eType.id}
                                    className={values.estate_type && values.estate_type.id === eType.id ? 'selected' : ''}
                                    onClick={handleEstateType(eType)}
                                >
                                    {eType.name}
                                </ButtonComponent>)}
                        </div>
                    )}
                </Grid>
                {filters.payments && (
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
                <Grid item container xs={4} alignItems='center'>
                    <Typography>
                        <strong>
                            {t('utilities')}
                        </strong>
                    </Typography>
                    <Checkbox
                        name='utilities'
                        color='primary'
                        checked={values.delivery}
                        onChange={handleCheckbox}
                    />
                </Grid>
                <Grid item xs={4}>
                    <NumberSelector
                        t={t}
                        count={9}
                        name='floor'
                        errors={errors}
                        touched={touched}
                    />
                </Grid>
                <Grid item container xs={4}>
                    <NumberSelector
                        t={t}
                        count={9}
                        name='number_of_floors'
                        errors={errors}
                        touched={touched}
                    />
                </Grid>
                <Grid item container xs={4}>
                    <NumberSelector
                        t={t}
                        count={9}
                        name='number_of_floors'
                        errors={errors}
                        touched={touched}
                    />
                </Grid>
                <Grid item xs={4}>Test</Grid>
                <Grid item container xs={4}>Test</Grid>
                <Grid item container xs={4}>Test</Grid>
            </Grid>
        </div>
    )
};