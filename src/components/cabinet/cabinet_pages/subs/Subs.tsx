import {FC, useContext, useEffect, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {Subscribers} from '@src/components/cabinet/cabinet_pages/subs/subscribers/Subscribers';
import {Subscriptions} from '@src/components/cabinet/cabinet_pages/subs/subscriptions/Subscriptions';
import {userAPI} from '@src/api/api';
import {TabsDataType} from '@root/interfaces/Cabinet';
import {SUBS_PER_PAGE} from '@src/constants';
import {ErrorCtx} from "@src/context";

export const Subs: FC = () => {
    const initialState = {
        subscribers: {
            total: 0,
            data: []
        },
        subscriptions: {
            total: 0,
            data: []
        }
    };

    const {setErrorMsg} = useContext(ErrorCtx);

    const [subs, setSubs] = useState(initialState);
    const [isFetch, setIsFetch] = useState(false);
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };
    const fetchSubs = async (param) => {
        try {
            const {subscribers, subscriptions} = subs;
            const isSubscribers = param === 'subscribers';

            setIsFetch(true);
            setSubs({...subs});

            const subsData = await userAPI.getSubs(param);

            if (isSubscribers) {
                subscribers.data = subsData.data;
                subscribers.total = subsData.total;
            } else {
                subscriptions.data = subsData.data;
                subscriptions.total = subsData.total;
            }

            setSubs({...subs});

            setIsFetch(false);
        } catch (e) {
            setIsFetch(false)
            setErrorMsg(e.message);
        }
    };

    useEffect(() => {
        fetchSubs('subscribers');
        fetchSubs('subscriptions');
    }, []);

    const tabsData: TabsDataType = [
        {
            id: 0,
            title: 'Подписки',
            itemsPerPage: SUBS_PER_PAGE,
            handleFetchByTab: () => '',
            component: <Subscriptions
                isFetch={isFetch}
                subscriptions={subs.subscriptions.data}
                handleRefresh={() => fetchSubs('subscriptions')}
            />
        },
        {
            id: 1,
            title: 'Подписчики',
            itemsPerPage: SUBS_PER_PAGE,
            handleFetchByTab: () => '',
            component: <Subscribers
                isFetch={isFetch}
                subscribers={subs.subscribers.data}
                handleRefresh={() => fetchSubs('subscribers')}
            />
        }
    ];

    return (
        <TabsContent
            tabIndex={tabIndex}
            handleTabChange={handleTabChange}
            tabsData={tabsData}
        />
    );
};

