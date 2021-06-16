import React, {FC, useState} from 'react';
import {TabsDataType} from '@root/interfaces/Cabinet';
import {WithT} from 'i18next';
import {ProfileTabsContent} from '@src/components/user_profile/tabs/ProfileTabsContent';
import {useDispatch} from 'react-redux';
import {userAPI} from '@src/api/api';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {useRouter} from 'next/router';
import {SubscriptionItem} from '@src/components/cabinet/cabinet_pages/user_social_info/subscription_item/SubscriptionItem';
import {SUBS_PER_PAGE} from '@src/constants';
import {CustomLoader} from '@src/components/elements/custom_loader/CustomLoader';

export const UserFollowsList: FC<WithT> = ({t}) => {
    const dispatch = useDispatch();
    const {query: {user_id}} = useRouter();
    const initialSubs = {
        total: 0,
        data: []
    };

    const [tabIndex, setTabIndex] = useState(0);
    const [isFetch, setIsFetch] = useState(false);
    const [subscriptions, setSubscriptions] = useState(initialSubs);
    const [subscribers, setSubscribers] = useState(initialSubs);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    const fetchSubsByPage = (subType: string) => async (page) => {
        try {
            const fetchParams = {
                user_id,
                page,
                itemsPerPage: SUBS_PER_PAGE
            };
            setIsFetch(true);

            if (subType === 'subscriptions') {
                const subscriptions = await userAPI.getUserSubscriptions(fetchParams);
                setSubscriptions({data: subscriptions.data, total: subscriptions.total});
            } else if (subType === 'subscribers') {
                const subscribers = await userAPI.getUserSubscribers(fetchParams);
                setSubscribers({data: subscribers.data, total: subscribers.total});
            }

            setIsFetch(false);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
            setIsFetch(false);
        }
    };

    const handleFollow = (userId) => async () => {
        try {
            await userAPI.follow(userId);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const subscribersList = subscribers.data.map(({id, subscriber}) => (
        <SubscriptionItem
            key={id}
            user={subscriber}
            handleFollow={handleFollow}
        />
    ));

    const subscriptionsList = subscriptions.data.map(({id, subscription}) => (
        <SubscriptionItem
            key={id}
            user={subscription}
            handleFollow={handleFollow}
        />
    ));

    const tabsData: TabsDataType = [
        {
            id: 0,
            title: t('Подписки'),
            total: subscriptions.total,
            itemsPerPage: SUBS_PER_PAGE,
            handleFetchByPage: fetchSubsByPage('subscriptions'),
            component: <div>{isFetch ? <CustomLoader color='secondary' /> : subscriptionsList}</div>
        },
        {
            id: 1,
            title: t('Подписчики'),
            total: subscribers.total,
            itemsPerPage: SUBS_PER_PAGE,
            handleFetchByPage: fetchSubsByPage('subscribers'),
            component: <div>{isFetch ? <CustomLoader /> : subscribersList}</div>
        }
    ];

    return (
        <ProfileTabsContent
            tabIndex={tabIndex}
            tabsData={tabsData}
            handleTabChange={handleTabChange}
        />
    );
};