import {FC, useContext, useState} from 'react';
import {WithT} from 'i18next';
import {SingleTabType, TabsType} from '@root/interfaces/Cabinet';
import {userAPI} from '@src/api/api';
import {useRouter} from 'next/router';
import {SubsItem} from '@src/components/cabinet/cabinet_pages/subs/subs_item/SubsItem';
import {ErrorCtx} from "@src/context";
import {EmptyPage} from "@src/components/cabinet/components/empty_page/EmptyPage";
import {SingleTabs} from "@src/components/cabinet/components/tabs_content/SingleTabs";
import {unstable_batchedUpdates} from "react-dom";

export const UserFollowsList: FC<WithT> = ({t}) => {
    const {setErrorMsg} = useContext(ErrorCtx);
    const {query: {user_id}} = useRouter();
    const initialSubs = {
        total: 0,
        data: []
    };

    const [isFetch, setIsFetch] = useState(false);
    const [subscriptions, setSubscriptions] = useState(initialSubs);
    const [subscribers, setSubscribers] = useState(initialSubs);

    const fetchSubs = async (page = 1, secondTab = false) => {
        try {
            const {getUserSubscriptions, getUserSubscribers} = userAPI;
            const subsPath = secondTab ? 'subscribers' : 'subscriptions';
            setIsFetch(true);

            const {data, total} = await (
                secondTab
                    ? getUserSubscribers(user_id, page)
                    : getUserSubscriptions(user_id, page)
            );

            unstable_batchedUpdates(() => {
                setIsFetch(false);
                subsPath === 'subscribers'
                    ? setSubscribers({data, total})
                    : setSubscriptions({data, total});
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setErrorMsg(e.message);
            });
        }
    };

    const getUserSubs = (subs) => (
        <div>
            {subs.map(({id, subscription, subscriber}) =>
                <SubsItem
                    key={id}
                    user={subscription ?? subscriber}
                />
            )}
        </div>
    );

    const tabsData: TabsType<SingleTabType> = {
        firstTab: {
            id: 0,
            title: 'subscriptions',
            total: subscriptions.total,
            component: getUserSubs(subscriptions.data),
            emptyPage: <EmptyPage label={t(`empty.subscription`)}/>
        },
        secondTab: {
            id: 1,
            title: 'subscribers',
            total: subscribers.total,
            component: getUserSubs(subscribers.data),
            emptyPage: <EmptyPage label={t(`empty.subscriber`)}/>
        }
    };

    return (
        <SingleTabs
            isFetch={isFetch}
            tabsData={tabsData}
            fetchTabPosts={fetchSubs}
        />
    );
};