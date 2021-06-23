import {FC} from 'react';
import {Checkbox, FormControlLabel, Typography} from '@material-ui/core';
import {SwitchBaseProps} from '@material-ui/core/internal/SwitchBase';
import {useTranslation} from 'react-i18next';
import {useStyles} from './useStyles';


type CheckboxPropsType = {
    ns?: string,
    disabled?: boolean,
    checked: boolean,
    name: string,
    labelText?: string,
    onChange?: SwitchBaseProps['onChange']
};

export const CheckboxSelect: FC<CheckboxPropsType> = (props) => {
    const {
        ns,
        name,
        labelText,
        disabled,
        checked = false,
        onChange
    } = props;

    const {t} = useTranslation(ns || 'filters');

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <FormControlLabel
                control={
                    <Checkbox
                        name={name}
                        checked={checked}
                        onChange={onChange} />
                }
                disabled={disabled}
                label={t(`${labelText ?? name}`)}
            />
        </div>
    )
};