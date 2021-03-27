import React, {FC} from 'react';
import {SubscriptionItem} from '@src/components/cabinet/cabinet_pages/user_social_info/subscription_item/SubscriptionItem';
import {useStyles} from './useStyles';

export const UserSubscriptions: FC<any> = ({ subscriptions, handleFollow }) => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {subscriptions.map(subscription => <SubscriptionItem key={subscription.id} {...subscription} handleFollow={handleFollow}/>)}
        </div>
    );
};