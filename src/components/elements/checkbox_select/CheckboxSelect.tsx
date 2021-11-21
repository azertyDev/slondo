import {FC, ReactElement} from 'react';
import {Checkbox, FormControlLabel, Typography} from '@material-ui/core';
import {useStyles} from './useStyles';

type ServiceItemPropsType = {
    disabled?:boolean,
    icon?: ReactElement,
    labelTxt: string,
    handleCheckbox,
    checked,
    name?: string
}

export const CheckboxSelect: FC<ServiceItemPropsType> = (props) => {
    const {
        disabled,
        name,
        icon = null,
        labelTxt,
        checked = false,
        handleCheckbox
    } = props;

    const classes = useStyles({checked});
    return (
        <FormControlLabel
            className={classes.serviceItem}
            control={
                <Checkbox
                    name={name}
                    color="primary"
                    checked={checked}
                    disabled={disabled}
                    onChange={handleCheckbox}
                />
            }
            label={
                <>
                    {icon}
                    <strong>
                        <Typography variant='subtitle1'>
                            {labelTxt}
                        </Typography>
                    </strong>
                </>
            }
        />
    );
};