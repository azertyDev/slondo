import {FC, useContext, useState} from 'react';
import {userAPI} from '@src/api/api';
import {unstable_batchedUpdates} from "react-dom";
import {SingleTabs} from '@src/components/cabinet/components/tabs_content/SingleTabs';
import {SingleTabType, TabsType} from '@root/interfaces/Cabinet';
import {SUBS_PER_PAGE} from '@src/constants';
import {ErrorCtx} from "@src/context";
import {EmptyPage} from "@src/components/cabinet/components/empty_page/EmptyPage";
import {SubsItem} from "@src/components/cabinet/cabinet_pages/subs/subs_item/SubsItem";
import {useTranslation} from "next-i18next";

export const Subs: FC = () => {
    const initialState = {
        total: 0,
        data: []
    };

    const {t} = useTranslation('cabinet');
    const {setErrorMsg} = useContext(ErrorCtx);
    const [isFetch, setIsFetch] = useState(false);
    const [subscriptions, setSubscriptions] = useState(initialState);
    const [subscribers, setSubscribers] = useState(initialState);

    const fetchSubs = async (page = 1, secondTab = false) => {
        try {
            const subsPath = secondTab ? 'subscribers' : 'subscriptions';
            setIsFetch(true);

            const {data, total} = await userAPI.getSubs(subsPath, page, SUBS_PER_PAGE);

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

    const getSubs = (subs) => (
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
            component: getSubs(subscriptions.data),
            emptyPage: <EmptyPage label={t(`empty.subscription`)}/>
        },
        secondTab: {
            id: 1,
            title: 'subscribers',
            total: subscribers.total,
            component: getSubs(subscribers.data),
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

