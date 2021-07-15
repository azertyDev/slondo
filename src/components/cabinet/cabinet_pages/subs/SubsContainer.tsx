import {FC, useContext, useEffect, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {Subscribers} from '@src/components/cabinet/cabinet_pages/subs/subscribers/Subscribers';
import {Subscriptions} from '@src/components/cabinet/cabinet_pages/subs/subscriptions/Subscriptions';
import {userAPI} from '@src/api/api';
import {TabsDataType} from '@root/interfaces/Cabinet';
import {SUBS_PER_PAGE} from '@src/constants';
import {ErrorCtx} from "@src/context";
import {withAuthRedirect} from "@src/hocs/withAuthRedirect";

const SubsContainer: FC = () => {
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

    const {setErrorMsg} = useContext(ErrorCtx);

    const [subs, setSubs] = useState(initialState);
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    const fetchSubs = async (param) => {
        try {
            const {subscribers, subscriptions} = subs;
            const isSubscribers = param === 'subscribers';

            subs.isFetch = true;
            setSubs({...subs});

            const subsData = await userAPI.getSubs(param);
            subs.isFetch = false;

            if (isSubscribers) {
                subscribers.data = subsData.data;
                subscribers.total = subsData.total;
            } else {
                subscriptions.data = subsData.data;
                subscriptions.total = subsData.total;
            }

            setSubs({...subs});
        } catch (e) {
            setErrorMsg(e.message);
        }
    };

    const handleFollow = (userId) => async () => {
        try {
            await userAPI.follow(userId);
        } catch (e) {
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
            component: <Subscriptions subscriptions={subs.subscriptions.data} handleFollow={handleFollow}/>
        },
        {
            id: 1,
            title: 'Подписчики',
            itemsPerPage: SUBS_PER_PAGE,
            handleFetchByTab: () => '',
            component: <Subscribers subscribers={subs.subscribers.data} handleFollow={handleFollow}/>
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

export default withAuthRedirect(SubsContainer);


