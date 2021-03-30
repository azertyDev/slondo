import React, {FC} from "react";
import {ButtonComponent} from "@src/components/elements/button/Button";
import {Typography} from "@material-ui/core";
import {WithT} from "i18next";
import {isRequired} from "@src/helpers";
import {useStyles} from '../options_select/useStyles';


type SelectOptionsPropsType = {
    name: string,
    values,
    errors,
    touched,
    handleSelect: (n, v) => void,
    options: any[]
} & WithT;

export const TypeSelect: FC<SelectOptionsPropsType> = (props) => {
    const {
        t,
        name,
        values,
        errors,
        touched,
        handleSelect,
        options = []
    } = props;

    const handleClick = (item) => () => {
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
            </Typography>
            <div className='options'>
                {options.map(item =>
                    <ButtonComponent
                        key={item.id}
                        onClick={handleClick(item)}
                        className={values[name]?.id === item.id ? 'selected' : ''}
                    >
                        {item.name}
                    </ButtonComponent>)}
            </div>
            <Typography variant="subtitle1">
                {errors[name] && touched[name] && (
                    <span className='error-text'>
                        {t(`errors:${errors[name]}`)}
                    </span>
                )}
            </Typography>
        </div>
    )
};