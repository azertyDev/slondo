import {FC, useState} from 'react';
import {WithT} from 'i18next';
import {SUBS_PER_PAGE} from '@src/constants';
import {TabsDataType} from '@root/interfaces/Cabinet';
import {ProfileTabsContent} from '@src/components/user_profile/tabs/ProfileTabsContent';
import {useDispatch} from 'react-redux';
import {userAPI} from '@src/api/api';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {useRouter} from 'next/router';
import {SubscriptionItem} from '@src/components/cabinet/cabinet_pages/user_social_info/subscription_item/SubscriptionItem';
import {CustomCircularProgress} from '@src/components/elements/custom_circular_progress/CustomCircularProgress';

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

    const handleTabChange = (_, newValue) => {
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
            }
            if (subType === 'subscribers') {
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

    const subscribersList = (
        <div>
            {subscribers.data.map(({id, subscriber}) =>
                <SubscriptionItem
                    key={id}
                    user={subscriber}
                    handleFollow={handleFollow}
                />
            )}
        </div>
    );

    const subscriptionsList = (
        <div>
            {subscriptions.data.map(({id, subscription}) =>
                <SubscriptionItem
                    key={id}
                    user={subscription}
                    handleFollow={handleFollow}
                />
            )}
        </div>
    );

    const tabsData: TabsDataType = [
        {
            id: 0,
            title: t('subscriptions'),
            total: subscriptions.total,
            itemsPerPage: SUBS_PER_PAGE,
            handleFetchByTab: fetchSubsByPage('subscriptions'),
            component: isFetch ? <CustomCircularProgress/> : subscriptionsList
        },
        {
            id: 1,
            title: t('subscribers'),
            total: subscribers.total,
            itemsPerPage: SUBS_PER_PAGE,
            handleFetchByTab: fetchSubsByPage('subscribers'),
            component: isFetch ? <CustomCircularProgress/> : subscribersList
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