import React, {FC} from "react";
import {Checkbox, Typography} from "@material-ui/core";
import {WithT} from "i18next";
import {SwitchBaseProps} from "@material-ui/core/internal/SwitchBase";
import {useStyles} from './useStyles'


type CheckboxPropsType = {
    disabled?: boolean,
    checked: boolean,
    name: string,
    onChange?: SwitchBaseProps['onChange']
} & WithT;

export const CustomCheckbox: FC<CheckboxPropsType> = (props) => {
    const {
        t,
        name,
        disabled,
        checked = false,
        onChange
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography>
                <strong>
                    {t(name)}
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