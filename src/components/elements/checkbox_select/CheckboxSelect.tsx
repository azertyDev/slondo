import React, {FC} from "react";
import {Checkbox, Typography} from "@material-ui/core";
import {SwitchBaseProps} from "@material-ui/core/internal/SwitchBase";
import {useStyles} from './useStyles'
import {WithT} from 'i18next';


type CheckboxPropsType = {
    disabled?: boolean,
    checked: boolean,
    name: string,
    labelText?: string,
    onChange?: SwitchBaseProps['onChange']
} & WithT;

export const CheckboxSelect: FC<CheckboxPropsType> = (props) => {
    const {
        t,
        name,
        labelText,
        disabled,
        checked = false,
        onChange
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography>
                <strong>
                    {t(`filters:${labelText ?? name}`)}
                </strong>
            </Typography>
            <Checkbox
                disabled={disabled}
                name={name}
                color='primary'
                onChange={onChange}
                checked={checked}
            />
        </div>
    )
};