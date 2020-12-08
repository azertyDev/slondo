import React from 'react';
import {SubscriptionItem} from "@src/components/cabinet/cabinet_pages/user_social_info/subscription_item/SubscriptionItem";

// styles
import {useStyles} from './useStyles';

export const UserSubscribers = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <SubscriptionItem buttonText="Подписаться"/>
            <SubscriptionItem buttonText="Подписаться"/>
            <SubscriptionItem buttonText="Подписаться"/>
            <SubscriptionItem buttonText="Подписаться"/>
            <SubscriptionItem buttonText="Подписаться"/>
            <SubscriptionItem buttonText="Подписаться"/>
            <SubscriptionItem buttonText="Подписаться"/>
            <SubscriptionItem buttonText="Подписаться"/>
            <SubscriptionItem buttonText="Подписаться"/>
            <SubscriptionItem buttonText="Подписаться"/>
        </div>
    )
}
