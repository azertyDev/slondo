import React, {FC} from "react";
import {NativeSelect} from "@material-ui/core";
import {WithT} from "i18next";
import {useStyles} from './useStyles';


type CustomSelectPropsType = {
    name: string;
    values,
    onBlur,
    error?: boolean;
    items: ItemsType[];
    handleSelect: (v, k) => void;
} & WithT;

type ItemsType = {
    id: number;
    name: string;
    icon?: { url: string };
    hex_color_code?: string;
};

export const CustomSelect: FC<CustomSelectPropsType> = (props) => {
    const {
        t,
        name,
        items,
        handleSelect,
        onBlur,
        error,
        values
    } = props;


    const onChange = ({target: {name, value}}) => {
        const selectedItem = items.find(item => item.id === +value) || {id: null};
        handleSelect(selectedItem, name);
    };

    const optionKey = name === 'duration' ? 'hours' : 'name';

    const classes = useStyles();
    return (
        <NativeSelect
            name={name}
            value={values[name] ? values[name].id ?? 0 : 0}
            onBlur={onBlur}
            onChange={onChange}
            className={classes.root + `${error ? ' error-border' : ''}`}
            disableUnderline
        >
            {items.length > 1 && (
                <option value={0}>
                    {t('noSelect')}
                </option>
            )}
            {items.map(item =>
                <option
                    key={item.id}
                    value={item.id}
                >
                    {name === 'currency' ? t(`common:${item[optionKey]}`) : item[optionKey]}
                </option>
            )}
        </NativeSelect>
    )
};