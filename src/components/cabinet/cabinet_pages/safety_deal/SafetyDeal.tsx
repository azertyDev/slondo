import {FC, useEffect} from 'react';
import {UserPaymentCard} from '@src/components/elements/safe_deal/UserPaymentCard';
import {useUserPaymentCard} from "@src/hooks";
import {useStyles} from './useStyles';

export const SafetyDeal: FC = () => {
    const {
        userCard,
        fetchUserCard,
        isFetchUserCard,
        handleResetUserCard
    } = useUserPaymentCard();

    useEffect(() => {
        fetchUserCard();
    }, []);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <UserPaymentCard
                userCard={userCard}
                fetchUserCard={fetchUserCard}
                isFetchUserCard={isFetchUserCard}
                handleResetUserCard={handleResetUserCard}
            />
        </div>
    );
};