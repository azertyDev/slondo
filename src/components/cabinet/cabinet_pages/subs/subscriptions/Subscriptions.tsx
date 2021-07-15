import React, {FC} from 'react';
import {SubscriptionItem} from '@src/components/cabinet/cabinet_pages/subs/subscription_item/SubscriptionItem';
import {useStyles} from './useStyles';

export const Subscriptions: FC<any> = ({ subscriptions, handleFollow }) => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {subscriptions.map(({id, subscription}) => (
                <SubscriptionItem
                    key={id}
                    handleFollow={handleFollow}
                    user={subscription}
                />)
            )}
        </div>
    );
};