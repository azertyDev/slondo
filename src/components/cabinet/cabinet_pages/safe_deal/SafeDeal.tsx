import {FC, useEffect} from 'react';
import {useUserPaymentCard} from "@src/hooks";
import {UserPaymentCard} from '@src/components/elements/safe_deal/UserPaymentCard';
import {useStyles} from './useStyles';
import {Grid} from '@material-ui/core';

export const SafeDeal: FC = () => {
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
        <Grid container className={classes.root}>
            <Grid item xs={12} md={8}>
                <UserPaymentCard
                    userCard={userCard}
                    fetchUserCard={fetchUserCard}
                    isFetchUserCard={isFetchUserCard}
                    handleResetUserCard={handleResetUserCard}
                />
            </Grid>
        </Grid>
    );
};