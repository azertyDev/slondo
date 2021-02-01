import React, {FC} from "react";
import {Typography} from "@material-ui/core";
import {LocationAutocomplete} from "@src/components/elements/location_autocomplete/LocationAutocomplete";


export const Location: FC<any> = (props) => {
    const {
        isPreview,
        errors,
        touched,
        handleBlur,
        handleLocation,
        locations,
    } = props;

    return (
        <div>
            <Typography variant="subtitle1">
                <strong>
                    Местоположение
                    {!isPreview
                    && <span className='error-text'>*</span>}
                </strong>
                {errors.location && touched.location
                && <span className='error-text'> {errors.location}</span>}
            </Typography>
            <LocationAutocomplete
                name='location'
                placeholder='Выберите город или регион'
                onChange={handleLocation}
                disabled={isPreview}
                list={locations.data}
                onBlur={handleBlur}
                className={errors.location && touched.location
                    ? 'error-border'
                    : ''}
            />
        </div>
    )
}