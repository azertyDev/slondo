import {FC, useContext, useState} from 'react';
import {unstable_batchedUpdates} from "react-dom";
import {userAPI} from '@src/api/api';
import {useTranslation} from 'next-i18next';
import {DoubleTabType, InitPostsType, TabsType} from '@root/interfaces/Cabinet.js';
import {INNER_URLS, ITEMS_PER_PAGE} from '@src/constants';
import {useModal} from '@src/hooks/useModal';
import {CardDataType} from '@root/interfaces/CardData';
import {DetailedModal} from '@src/components/cabinet/components/detailed_post_modal/DetailedModal';
import {NotificationModal} from '@src/components/cabinet/components/notifation_modal/NotificationModal';
import {SettingsModal} from "@src/components/cabinet/components/settings_modal/SettingsModal";
import {ErrorCtx} from "@src/context";
import {initCardData} from "@src/common_data/common";
import {EmptyPage} from '@src/components/cabinet/components/empty_page/EmptyPage';
import {DoubleTabs} from "@src/components/cabinet/components/tabs_content/DoubleTabs";

export const MyAuctions: FC = () => {
    const {t} = useTranslation('cabinet');
    const {setErrorMsg} = useContext(ErrorCtx);

    const initialState: InitPostsType = {
        total: 0,
        data: []
    };

    const [isFetch, setIsFetch] = useState(false);
    const [selectedAuction, setSelectedAuction] = useState<CardDataType>(initCardData);

    const [auctionData, setAuctionData] = useState(initialState);
    const [auctionArchiveData, setAuctionArchiveData] = useState(initialState);

    const [participatingData, setParticipatingData] = useState(initialState);
    const [participatingArchiveData, setParticipatingArchiveData] = useState(initialState);

    const {
        modalOpen: settingsOpen,
        handleModalClose: handleCloseSettings,
        handleModalOpen: handleOpenSettings
    } = useModal();

    const {
        modalOpen: detailedModalOpen,
        handleModalClose: closeDetailedModal,
        handleModalOpen: openDetailedModal
    } = useModal();

    const {
        modalOpen: notificationsOpen,
        handleModalClose: closeNotificationsModal,
        handleModalOpen: openNotificationsModal
    } = useModal();

    const handleDetailedOpen = (post: CardDataType) => () => {
        unstable_batchedUpdates(() => {
            openDetailedModal();
            setSelectedAuction(post);
        });
    };

    const handleNotificationsOpen = (post: CardDataType) => () => {
        unstable_batchedUpdates(() => {
            openNotificationsModal();
            setSelectedAuction(post);
        });
    };

    const handleSettingsOpen = (post: CardDataType) => () => {
        unstable_batchedUpdates(() => {
            handleOpenSettings();
            setSelectedAuction(post);
        });
    };

    const handleDeactivate = (ads_id?: number) => async () => {
        try {
            unstable_batchedUpdates(async () => {
                setIsFetch(true);
                await userAPI.deactivatePost(ads_id);
                await handleRefresh();
                closeDetailedModal();
                setIsFetch(false);
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setErrorMsg(e.message);
            });
        }
    };

    const fetchTabPosts = (secondTab = false) => async (page = 1, secondSubTab = false) => {
        try {
            const params = {
                archive: secondSubTab ? 1 : 0,
                page,
                itemsPerPage: ITEMS_PER_PAGE
            };

            setIsFetch(true);

            const {data, total} = await (
                secondTab
                    ? userAPI.getParticipatingAucs(params)
                    : userAPI.getMyPosts({...params, type: 'auc', secure: 0})
            );

            unstable_batchedUpdates(() => {
                secondTab
                    ? secondSubTab ? setParticipatingArchiveData({data, total}) : setParticipatingData({data, total})
                    : secondSubTab ? setAuctionArchiveData({data, total}) : setAuctionData({data, total});
                setIsFetch(false);
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setErrorMsg(e.message);
            });
        }
    };

    const firstTabFetch = fetchTabPosts();
    const secondTabFetch = fetchTabPosts(true);

    const handleRefresh = async () => {
        await Promise.all([
            firstTabFetch(),
            secondTabFetch(),
            firstTabFetch(1, true),
            secondTabFetch(1, true)
        ]);
    };

    const tabsData: TabsType<DoubleTabType> = {
        firstTab: {
            id: 0,
            title: t('auctions'),
            innerTabsData: {
                innerFirstTab: {
                    posts: auctionData.data,
                    total: auctionData.total,
                    emptyPage: <EmptyPage
                        link={INNER_URLS.create_post}
                        tutorialLink={INNER_URLS.create_auc_guide}
                        label={t('cabinet:empty.auction')}
                        tutorialText={t('post:howToCreateAuc')}
                        action={t('cabinet:empty.create_auction')}
                    />
                },
                innerSecondTab: {
                    posts: auctionArchiveData.data,
                    total: auctionArchiveData.total,
                    emptyPage: <EmptyPage label={t('empty.archive')}/>
                }
            }
        },
        secondTab: {
            id: 1,
            title: t('participatingAuc'),
            innerTabsData: {
                innerFirstTab: {
                    posts: participatingData.data,
                    total: participatingData.total,
                    emptyPage: <EmptyPage label={t('empty.no_participating')}/>
                },
                innerSecondTab: {
                    posts: participatingArchiveData.data,
                    total: participatingArchiveData.total,
                    emptyPage: <EmptyPage label={t('empty.archive')}/>
                }
            }
        }
    };

    return (
        <>
            <DoubleTabs
                isFetch={isFetch}
                tabsData={tabsData}
                fetchFirstTabPosts={firstTabFetch}
                fetchSecondTabPosts={secondTabFetch}
                handleDetailedOpen={handleDetailedOpen}
                handleSettingsOpen={handleSettingsOpen}
                handleNotificationsOpen={handleNotificationsOpen}
            />
            <DetailedModal
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