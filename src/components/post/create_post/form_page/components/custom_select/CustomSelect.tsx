import React, {FC} from "react";
import {WithT} from "i18next";
import {NativeSelect, Typography} from "@material-ui/core";
import {isRequired} from "@src/helpers";
import {useStyles} from './useStyles';


type CustomSelectPropsType = {
    name: string;
    values,
    onBlur,
    items: ItemsType[];
    handleSelect: (k, v) => void;
    errors?,
    touched?
} & WithT;

type ItemsType = {
    id: number,
    name: string,
    icon?: { url: string },
    hex_color_code?: string
};

export const CustomSelect: FC<CustomSelectPropsType> = (props) => {
    const {
        t,
        name,
        items = [],
        handleSelect,
        onBlur,
        values,
        errors,
        touched
    } = props;

    const isCurrency = name === 'currency';
    const optionKey = name === 'duration' ? 'hours' : 'name';

    const onChange = ({target: {name, value}}) => {
        const selectedItem = items.find(item => item.id === +value) || null;
        handleSelect(name, selectedItem);
    };

    const classes = useStyles();
    return (
        <>
            {!isCurrency && (
                <Typography variant="subtitle1">
                    <strong>
                        {t(name)}
                        {isRequired(name) && <span className='error-text'>*&nbsp;</span>}
                    </strong>
                    {errors?.[name] && touched[name] && (
                        <span className='error-text'>
                        {t(errors[name] as string)}
                    </span>
                    )}
                </Typography>
            )}
            <NativeSelect
                disableUnderline
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                value={values[name]?.id ?? 0}
                className={classes.root + `${errors?.[name] && touched[name] ? ' error-border' : ''}`}
            >
                {!isCurrency && (
                    <option value={0}>
                        {t('noSelect')}
                    </option>
                )}
                {items.map(item =>
                    <option
                        key={item.id}
                        value={item.id}
                    >
                        {name === 'currency' ? t(`common:${item.name}`) : item[optionKey]}
                    </option>
                )}
            </NativeSelect>
        </>
    )
};