import {FC} from 'react';
import {useStyles} from './useStyles';
import {DoubleCheckIcon} from '@src/components/elements/icons';
import {Typography} from '@material-ui/core';

type ServiceItem = {
    text: string,
    value: boolean
};

export const ServiceItem: FC<ServiceItem> = (props) => {
    const {
        value,
        text
    } = props;

    const classes = useStyles({value});
    return (
        <div className={classes.root}>
            <DoubleCheckIcon/>
            <Typography variant="subtitle2">
                {text}
            </Typography>
        </div>
    );
};
