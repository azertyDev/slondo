import React, {FC, FocusEvent} from "react";
import {Autocomplete} from "@material-ui/lab";
import {TextField, Typography} from "@material-ui/core";
import {LocationsDataTypes} from "@root/interfaces/Locations";
import {useTranslation} from "next-i18next";


type AddressAutocompleteType = {
    locations: LocationsDataTypes,
    value: string,
    name: string,
    onChange: (_, location) => void,
    onBlur: { (e: FocusEvent<any>): void, <T = any>(fieldOrEvent: T): T extends string ? ((e: any) => void) : void },
    locationError,
    locationTouched,
};

export const LocationAutocomplete: FC<AddressAutocompleteType> = (props) => {
    const {
        name,
        value,
        locations,
        locationError,
        locationTouched,
        onChange,
        onBlur,
    } = props;

    const {t} = useTranslation(['post']);

    const optionSelected = (option, value) => {
        return value
            ? value.district
                ? option.district
                    ? value.district.id === option.district.id
                    : false
                : value.city ? value.city.id === option.city.id : false
            : false
    };

    const option = (location) => {
        return location
            ? location.district
                ? `${location.region.name}, ${location.city.name}, ${location.district.name}`
                : `${location.region.name}, ${location.city.name}`
            : ''
    };

    return (
        <div>
            <Typography variant="subtitle1">
                <strong>
                    {t(`common:location`)}
                    <span className='error-text'>*</span>
                </strong>
                {
                    locationError
                    && locationTouched
                    && <span className='error-text'>&nbsp;{t(locationError)}</span>
                }
            </Typography>
            <Autocomplete
                value={value}
                onChange={onChange}
                forcePopupIcon={false}
                getOptionLabel={option}
                options={locationsNormalize(locations)}
                getOptionSelected={optionSelected}
                noOptionsText={t('cityOrRegionNotFound')}
                renderInput={params =>
                    <TextField
                        {...params}
                        className={locationError && locationTouched ? 'error-border' : ''}
                        name={name}
                        onBlur={onBlur}
                        fullWidth
                        focused={false}
                        variant='outlined'
                        placeholder={t('choiceLocation')}
                    />}
            />
        </div>
    )
};

function locationsNormalize(locations) {
    return locations.reduce((acc, region) => {
        region.cities.forEach(city => {
            if (city.district.length) {
                city.district.forEach(district => {
                    acc = [
                        ...acc,
                        {
                            region: {
                                id: region.id,
                                name: region.name
                            },
                            city: {
                                id: city.id,
                                name: city.name
                            },
                            district: {
                                id: district.id,
                                name: district.name
                            }
                        }
                    ];
                });
            } else {
                acc = [
                    ...acc,
                    {
                        region: {
                            id: region.id,
                            name: region.name
                        },
                        city: {
                            id: city.id,
                            name: city.name
                        }
                    }
                ];
            }
        });
        return acc;
    }, []);
}