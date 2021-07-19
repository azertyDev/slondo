import {FC} from 'react';
import {UserPaymentCard} from '@src/components/elements/userPaymentCard/UserPaymentCard';
import {useStyles} from './useStyles';

export const SafetyDeal: FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <UserPaymentCard/>
        </div>
    );
};