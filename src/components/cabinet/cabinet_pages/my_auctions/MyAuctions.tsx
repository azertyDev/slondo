import {FC, useContext, useEffect, useState} from 'react';
import {unstable_batchedUpdates} from "react-dom";
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {userAPI} from '@src/api/api';
import {useTranslation} from 'next-i18next';
import {InitPostsType, TabsDataType} from '@root/interfaces/Cabinet.js';
import {INNER_URLS, ITEMS_PER_PAGE} from '@src/constants';
import {useModal} from '@src/hooks/useModal';
import {CardDataType} from '@root/interfaces/CardData';
import {DetailedPostModalContainer} from '@src/components/cabinet/components/detailed_post_modal/DetailedPostModalContainer';
import {NotificationModal} from '@src/components/cabinet/components/notifation_modal/NotificationModal';
import {SettingsModal} from "@src/components/cabinet/components/settings_modal/SettingsModal";
import {ErrorCtx} from "@src/context";
import {initCardData} from "@src/common_data/common";
import {EmptyPage} from '@src/components/cabinet/components/empty_page/EmptyPage';
import {CabinetTabs} from "@src/components/cabinet/components/cabinet_tabs/CabinetTabs";

export const MyAuctions: FC = () => {
    const {t} = useTranslation('cabinet');
    const {setErrorMsg} = useContext(ErrorCtx);

    const initialState: InitPostsType = {
        total: 0,
        data: []
    };

    const [isFetch, setIsFetch] = useState(false);
    const [auctionData, setAuctionData] = useState(initialState);
    const [participatingData, setParticipatingData] = useState(initialState);
    const [auctionArchiveData, setAuctionArchiveData] = useState(initialState);
    const [participatingArchiveData, setParticipatingArchiveData] = useState(initialState);
    const [selectedAuction, setSelectedAuction] = useState<CardDataType>(initCardData);

    const [tabIndex, setTabIndex] = useState(0);
    const [childTabValue, setChildTabValue] = useState(0);

    const {modalOpen: settingsOpen, handleModalClose: handleCloseSettings, handleModalOpen: handleOpenSettings} = useModal();
    const {modalOpen: detailedModalOpen, handleModalClose: closeDetailedModal, handleModalOpen: openDetailedModal} = useModal();
    const {modalOpen: notificationsOpen, handleModalClose: closeNotificationsModal, handleModalOpen: openNotificationsModal} = useModal();

    const handleDetailedOpen = (post: CardDataType) => () => {
        openDetailedModal();
        setSelectedAuction(post);
    };

    const handleNotificationsOpen = (post: CardDataType) => () => {
        openNotificationsModal();
        setSelectedAuction(post);
    };

    const handleSettingsOpen = (post: CardDataType) => () => {
        handleOpenSettings();
        setSelectedAuction(post);
    };

    const handleTabChange = (_, newValue) => {
        setTabIndex(newValue);
    };

    const handleChildTabChange = (event, newValue) => {
        setChildTabValue(newValue);
    };

    const handleDeactivate = (ads_id?: number) => async () => {
        try {
            setIsFetch(true);
            await userAPI.deactivatePost(ads_id);
            await fetchAuctionData(1);
            closeDetailedModal();
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            setErrorMsg(e.message);
        }
    };

    const fetchAuctionData = async (page, archive = 0) => {
        try {
            const isArch = archive === 1;

            const params = {
                archive,
                page,
                itemsPerPage: ITEMS_PER_PAGE
            };

            setIsFetch(true);

            const [auctions, participating] = await Promise.all(
                [
                    userAPI.getMyPosts({...params, type: 'auc', secure: 0}),
                    userAPI.getParticipatingAucs(params)
                ]
            );

            unstable_batchedUpdates(() => {
                setIsFetch(false);
                if (isArch) {
                    setAuctionArchiveData({data: auctions.data, total: auctions.total});
                    setParticipatingArchiveData({data: participating.data, total: participating.total});
                } else {
                    setAuctionData({data: auctions.data, total: auctions.total});
                    setParticipatingData({data: participating.data, total: participating.total});
                }
            });

        } catch (e) {
            setIsFetch(false);
            setErrorMsg(e.message);
        }
    };

    const handleRefresh = () => {
        unstable_batchedUpdates(() => {
            fetchAuctionData(1);
            fetchAuctionData(1, 1);
        });
    };

    const tabsData: TabsDataType = [
        {
            id: 0,
            title: t('createdAuc'),
            itemsPerPage: ITEMS_PER_PAGE,
            handleFetchByTab: () => '',
            component: (
                <CabinetTabs
                    isFetch={isFetch}
                    onChange={handleChildTabChange}
                    fstTabData={{
                        posts: auctionData.data,
                        emptyPage: <EmptyPage
                            link={INNER_URLS.create_post}
                            tutorialLink={INNER_URLS.create_auc_guide}
                            label={t('cabinet:empty.auction')}
                            tutorialText={t('post:howToCreateAuc')}
                            action={t('cabinet:empty.create_auction')}
                        />
                    }}
                    secTabData={{
                        posts: auctionArchiveData.data,
                        emptyPage: <EmptyPage label={t('empty.archive')}/>
                    }}
                    childTabValue={childTabValue}
                    handleDetailedOpen={handleDetailedOpen}
                    handleSettingsOpen={handleSettingsOpen}
                    handleNotificationsOpen={handleNotificationsOpen}
                />
            )
        },
        {
            id: 1,
            title: t('participatingAuc'),
            itemsPerPage: ITEMS_PER_PAGE,
            handleFetchByTab: () => '',
            component: (
                <CabinetTabs
                    isFetch={isFetch}
                    onChange={handleChildTabChange}
                    fstTabData={{
                        posts: participatingData.data,
                        emptyPage: <EmptyPage label={t('empty.no_participating')}/>
                    }}
                    secTabData={{
                        posts: participatingArchiveData.data,
                        emptyPage: <EmptyPage label={t('empty.archive')}/>
                    }}
                    childTabValue={childTabValue}
                    handleDetailedOpen={handleDetailedOpen}
                    handleSettingsOpen={handleSettingsOpen}
                    handleNotificationsOpen={handleNotificationsOpen}
                />
            )
        }
    ];

    useEffect(() => {
        handleRefresh();
    }, []);

    return (
        <>
            <TabsContent
                tabsData={tabsData}
                tabIndex={tabIndex}
                handleTabChange={handleTabChange}
            />
            <DetailedPostModalContainer
                post={selectedAuction}
                open={detailedModalOpen}
                onClose={closeDetailedModal}
                handleRefresh={handleRefresh}
                handleDeactivate={handleDeactivate(selectedAuction.id)}
            />
            <SettingsModal
                post={selectedAuction}
                open={settingsOpen}
                handleRefresh={handleRefresh}
                onClose={handleCloseSettings}
            />
            <NotificationModal
                post={selectedAuction}
                open={notificationsOpen}
                handleRefresh={handleRefresh}
                onClose={closeNotificationsModal}
            />
        </>
    );
};