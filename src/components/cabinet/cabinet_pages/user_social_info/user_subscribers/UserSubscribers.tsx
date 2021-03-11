import React, {useEffect} from 'react';
import {SubscriptionItem} from "@src/components/cabinet/cabinet_pages/user_social_info/subscription_item/SubscriptionItem";

// styles
import {useStyles} from './useStyles';
import {userAPI} from "@src/api/api";

export const UserSubscribers = (props) => {
    const classes = useStyles();

    useEffect(() => {
        userAPI.getSubscribers()
            .then(result => console.warn(result))
            .catch(error => console.warn("error", error))
    }, [])

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
