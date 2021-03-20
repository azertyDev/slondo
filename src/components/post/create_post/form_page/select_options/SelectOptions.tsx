import React, {FC} from "react";
import {ButtonComponent} from "@src/components/elements/button/Button";
import {useStyles} from './useStyles';
import {Typography} from "@material-ui/core";
import {WithT} from "i18next";
import {isRequired} from "@src/helpers";

type SelectOptionsPropsType = {
    name: string,
    values,
    errors,
    touched,
    handleSelect: (n, v) => void,
    options: any[]
} & WithT;

export const SelectOptions: FC<SelectOptionsPropsType> = (props) => {
    const {
        t,
        name,
        values,
        errors,
        touched,
        handleSelect,
        options = []
    } = props;

    const handleClick = (name, item) => () => {
        handleSelect(name, item)
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="subtitle1">
                <strong>
                    {t(name)}
                    {isRequired(name) && <span className='error-text'>*&nbsp;</span>}
                </strong>
                {errors[name] && touched[name] && (
                    <span className='error-text'>
                        {t(errors[name] as string)}
                    </span>
                )}
            </Typography>
            <div className='options'>
                {options.map(item =>
                    <ButtonComponent
                        key={item.id}
                        onClick={handleClick(name, item)}
                        className={values[name]?.id === item.id ? 'selected' : ''}
                    >
                        {item.name}
                    </ButtonComponent>)}
            </div>
        </div>
    )
};