import {FC, ReactElement} from 'react';
import {Checkbox, FormControlLabel, Typography} from '@material-ui/core';
import {useStyles} from './useStyles';

type ServiceItemPropsType = {
    icon?: ReactElement,
    serviceText: string,
    handleCheckbox,
    checked,
    name?: string
}

export const ServiceItem: FC<ServiceItemPropsType> = (props) => {
    const {
        name,
        icon = null,
        serviceText,
        checked,
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
                    onChange={handleCheckbox}
                />
            }
            label={
                <>
                    {icon}
                    <strong>
                        <Typography variant='subtitle1'>
                            {serviceText}
                        </Typography>
                    </strong>
                </>
            }
        />
    );
};