import React, {FC} from "react";
import {WithT} from "i18next";
import {Typography} from "@material-ui/core";
import {LocationAutocomplete} from "@src/components/elements/location_autocomplete/LocationAutocomplete";
import {useStyles} from './useStyles';


type LocationPropsType = {
    errors,
    touched,
    handleBlur,
    handleLocation,
    locations,
} & WithT;

export const Location: FC<LocationPropsType> = (props) => {
    const {
        t,
        errors,
        touched,
        handleBlur,
        handleLocation,
        locations,
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="subtitle1">
                <strong>
                    {t('location')}
                    <span className='error-text'>*</span>
                </strong>
                {errors.location && touched.location && <span className='error-text'>&nbsp;{errors.location}</span>}
            </Typography>
            <LocationAutocomplete
                name='location'
                onChange={handleLocation}
                list={locations.data}
                onBlur={handleBlur}
                className={errors.location && touched.location ? 'error-border' : ''}
            />
        </div>
    )
}