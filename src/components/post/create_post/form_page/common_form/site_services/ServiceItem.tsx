import {FC, ReactElement} from 'react';
import {Checkbox, FormControlLabel, Typography} from '@material-ui/core';
import {useStyles} from './useStyles';


type ServiceItemPropsType = {
    icon: ReactElement,
    serviceText: string,
    handleCheckbox,
    checked
}

export const ServiceItem: FC<ServiceItemPropsType> = (props) => {
    const {
        icon,
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
                    checked={checked}
                    onChange={handleCheckbox}
                    color="primary"
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