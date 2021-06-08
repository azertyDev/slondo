import React, {FC, useEffect, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {UserSubscribers} from '@src/components/cabinet/cabinet_pages/user_social_info/user_subscribers/UserSubscribers';
import {UserSubscriptions} from '@src/components/cabinet/cabinet_pages/user_social_info/user_subscribes/UserSubscriptions';
import {userAPI} from '@src/api/api';
import {useDispatch} from 'react-redux';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';

export const UserSocialInfoContainer: FC = () => {
    const dispatch = useDispatch();
    const initialState = {
        isFetch: false,
        subscribers: {
            total: 0,
            data: []
        },
        subscriptions: {
            total: 0,
            data: []
        }
    };

    const [subs, setSubs] = useState(initialState);
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    const fetchSubs = async (param) => {
        try {
            const { subscribers, subscriptions } = subs;
            const isSubscribers = param === 'subscribers';

            subs.isFetch = true;
            setSubs({ ...subs });

            const subsData = await userAPI.getSubs(param);
            subs.isFetch = false;
            if (isSubscribers) {
                subscribers.data = subsData.data;
                subscribers.total = subsData.total;
            } else {
                subscriptions.data = subsData.data;
                subscriptions.total = subsData.total;
            }

            setSubs({ ...subs });
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const handleFollow = (userId) => async () => {
        try {
            await userAPI.follow(userId);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    useEffect(() => {
        fetchSubs('subscribers');
        fetchSubs('subscriptions');
    }, []);

    const tabsData = [
        {
            id: 0,
            title: 'Подписки',
            total: subs.subscriptions.total,
            component: <UserSubscriptions subscriptions={subs.subscriptions.data} handleFollow={handleFollow} />
        },
        {
            id: 1,
            title: 'Подписчики',
            total: subs.subscribers.total,
            component: <UserSubscribers subscribers={subs.subscribers.data} handleFollow={handleFollow}/>
        }
    ];

    const title = 'Подписки';

    return (
        <TabsContent
            tabIndex={tabIndex}
            handleTabChange={handleTabChange}
            title={title}
            tabsData={tabsData}
            headerTitle={title}
        />
    );
};



