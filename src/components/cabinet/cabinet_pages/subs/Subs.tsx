import {FC, useContext, useEffect, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {SubsTab} from '@src/components/cabinet/cabinet_pages/subs/subsTab/SubsTab';
import {userAPI} from '@src/api/api';
import {TabsDataType} from '@root/interfaces/Cabinet';
import {SUBS_PER_PAGE} from '@src/constants';
import {ErrorCtx} from "@src/context";
import {unstable_batchedUpdates} from "react-dom";

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
    const [tabIndex, setTabIndex] = useState(0);
    const [isFetch, setIsFetch] = useState(false);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };
    const fetchSubs = async (param) => {
        try {
            const {subscribers, subscriptions} = subs;

            setIsFetch(true);

            const subsData = await userAPI.getSubs(param);

            if (param === 'subscribers') {
                subscribers.data = subsData.data;
                subscribers.total = subsData.total;
            } else {
                subscriptions.data = subsData.data;
                subscriptions.total = subsData.total;
            }
            unstable_batchedUpdates(() => {
                setSubs({...subs});
                setIsFetch(false);
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setErrorMsg(e.message);
            });
        }
    };

    useEffect(() => {
        unstable_batchedUpdates(() => {
            fetchSubs('subscribers');
            fetchSubs('subscriptions');
        });
    }, []);

    const tabsData: TabsDataType = [
        {
            id: 0,
            title: 'Подписки',
            itemsPerPage: SUBS_PER_PAGE,
            handleFetchByTab: () => '',
            component: <SubsTab
                isFetch={isFetch}
                subs={subs.subscriptions.data}
            />
        },
        {
            id: 1,
            title: 'Подписчики',
            itemsPerPage: SUBS_PER_PAGE,
            handleFetchByTab: () => '',
            component: <SubsTab
                subscribers
                isFetch={isFetch}
                subs={subs.subscribers.data}
            />
        }
    ];

    return (
        <TabsContent
            tabIndex={tabIndex}
            tabsData={tabsData}
            handleTabChange={handleTabChange}
        />
    );
};

