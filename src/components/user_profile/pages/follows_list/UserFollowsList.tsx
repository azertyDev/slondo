import {FC, useContext, useState} from 'react';
import {TabsType, SingleTabType} from '@root/interfaces/Cabinet';
import {userAPI} from '@src/api/api';
import {ErrorCtx} from "@src/context";
import {SingleTabs} from '@src/components/cabinet/components/tabs_content/SingleTabs';
import {ProfilePageProps} from '@src/components/user_profile/UserProfile';
import {SubsItem} from "@src/components/cabinet/cabinet_pages/subs/subs_item/SubsItem";
import {useTranslation} from 'next-i18next';
import {unstable_batchedUpdates} from "react-dom";

export const UserFollowsList: FC<ProfilePageProps> = ({user_id}) => {
    const {setErrorMsg} = useContext(ErrorCtx);
    const {t} = useTranslation('cabinet');

    const initialSubs = {
        total: 0,
        data: []
    };

    const [isFetch, setIsFetch] = useState(false);
    const [subscriptions, setSubscriptions] = useState(initialSubs);
    const [subscribers, setSubscribers] = useState(initialSubs);

    const fetchSubsByPage = async (page, secondTab = false) => {
        try {
            setIsFetch(true);

            const {data, total} = await (
                secondTab
                    ? userAPI.getUserSubscribers(user_id, page)
                    : userAPI.getUserSubscriptions(user_id, page)
            );

            unstable_batchedUpdates(() => {
                secondTab
                    ? setSubscribers({data, total})
                    : setSubscriptions({data, total});

                setIsFetch(false);
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setErrorMsg(e.message);
                setIsFetch(false);
            });
        }
    };

    const refresh = () => {
        unstable_batchedUpdates(() => {
            fetchSubsByPage(1);
            fetchSubsByPage(1, true);
        });
    };

    const getSubs = (subs) => (
        <>
            {subs.data.map(subs =>
                <SubsItem
                    refresh={refresh}
                    key={subs.id}
                    user={subs.subscription ?? subs.subscriber}
                />
            )}
        </>
    );
    const tabsData: TabsType<SingleTabType> = {
        firstTab: {
            id: 0,
            title: t('subscriptions'),
            total: subscriptions.total,
            component: getSubs(subscriptions),
            emptyPage: null
        },
        secondTab: {
            id: 1,
            title: t('subscribers'),
            total: subscribers.total,
            component: getSubs(subscribers),
            emptyPage: null
        }
    };

    return (
        <SingleTabs
            isFetch={isFetch}
            tabsData={tabsData}
            fetchTabPosts={fetchSubsByPage}
        />
    );
};