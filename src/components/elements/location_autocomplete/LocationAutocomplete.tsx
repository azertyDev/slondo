import React, {AllHTMLAttributes, FC} from "react";
import {Autocomplete} from "@material-ui/lab";
import {TextField} from "@material-ui/core";
import {AddressAutocompleteProps} from "@root/interfaces/AddressAutocomplete";
import {useTranslation} from "@root/i18n";


const formatData = (list) => {
    return list.reduce((acc, row) => {
        row.cities.forEach(city => {
            if (city.district.length) {
                city.district.forEach(district => {
                    acc = [
                        ...acc,
                        {
                            region_id: row.id,
                            region: row.name,
                            city_id: city.id,
                            city: city.name,
                            district_id: district.id,
                            district: district.name
                        }
                    ];
                });
            } else {
                acc = [
                    ...acc,
                    {
                        region_id: row.id,
                        region: row.name,
                        city_id: city.id,
                        city: city.name
                    }
                ];
            }
        });
        return acc;
    }, []);
};

type LocationAutocompletePropsType = AddressAutocompleteProps & AllHTMLAttributes<string>;

export const LocationAutocomplete: FC<LocationAutocompletePropsType> = (props) => {
    const {t} = useTranslation(['common']);
    const {list, onChange, disabled} = props;

    const optionSelected = ({district_id, city_id}, value) =>
        value.district_id
            ? district_id === value.district_id
            : city_id === value.city_id;

    const option = (location) =>
        location.district
            ? `${location.district}, ${location.city}, ${location.region}`
            : `${location.city}, ${location.region}`;

    return (
        <Autocomplete
            disabled={disabled}
            onChange={onChange}
            getOptionLabel={option}
            options={formatData(list)}
            getOptionSelected={optionSelected}
            noOptionsText={t('cityOrRegionNotFound')}
            renderInput={params =>
                <TextField
                    {...params}
                    fullWidth
                    focused={false}
                    variant='outlined'
                    placeholder={t('choiceLocation')}
                />}
        />
    )
};