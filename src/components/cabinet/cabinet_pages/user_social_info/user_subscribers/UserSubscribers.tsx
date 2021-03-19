import React, {FC} from 'react';
import {SubscriptionItem} from '@src/components/cabinet/cabinet_pages/user_social_info/subscription_item/SubscriptionItem';
import {SubscriberType} from '@root/interfaces/Auth';
import {useStyles} from './useStyles';


export const UserSubscribers: FC<{ subscribers: SubscriberType[] }> = ({ subscribers }) => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {subscribers.map(subscriber => <SubscriptionItem key={subscriber.id} {...subscriber} />)}
        </div>
    );
};
