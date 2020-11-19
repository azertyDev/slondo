import React, {FC} from "react";
import {Autocomplete} from "@material-ui/lab";
import {TextField} from "@material-ui/core";
import {AddressAutocompleteProps} from "@root/interfaces/AddressAutocomplete";


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

export const LocationAutocomplete: FC<AddressAutocompleteProps> = ({values, setValues, ...props}) => {
    const optionSelected = ({district_id, city_id}, value) => {
        return value.district_id
            ? district_id === value.district_id
            : city_id === value.city_id;
    };

    const option = (location) => {
        return location.district
            ? `${location.district}, ${location.city}, ${location.region}`
            : `${location.city}, ${location.region}`;
    };

    const onChange = (_, val) => {
        setValues({...values, location: val});
    };

    return (
        <Autocomplete
            value={values.location}
            onChange={onChange}
            noOptionsText='Город или регион с таким именем не найден'
            options={formatData(props.list)}
            getOptionSelected={optionSelected}
            getOptionLabel={option}
            renderInput={(params) => {
                return <TextField
                    fullWidth
                    focused={false}
                    variant='outlined'
                    {...params}
                    {...props}
                />
            }}
        />
    )
};