import React, {FC} from 'react';
import {SubscriptionItem} from '@src/components/cabinet/cabinet_pages/user_social_info/subscription_item/SubscriptionItem';
import {useStyles} from './useStyles';

export const UserSubscribers: FC<any> = ({ subscribers , handleFollow}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {subscribers.map(({id, subscriber}) => (
                <SubscriptionItem
                    key={id}
                    handleFollow={handleFollow}
                    user={subscriber}
                />)
            )}
        </div>
    );
};
