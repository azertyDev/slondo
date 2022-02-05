import {FC, useContext, useState} from 'react';
import {userAPI} from '@src/api/api';
import {useTranslation} from 'next-i18next';
import {
    DoubleTabType,
    InitPostsType,
    TabsType
} from '@root/interfaces/Cabinet.js';
import {INNER_URLS, ITEMS_PER_PAGE} from '@src/constants';
import {useModal} from '@src/hooks/useModal';
import {CardDataType} from '@root/interfaces/CardData';
import {DetailedModal} from '@src/components/cabinet/components/detailed_post_modal/DetailedModal';
import {NotificationModal} from '@src/components/cabinet/components/notification_modal/NotificationModal';
import {SettingsModal} from '@src/components/cabinet/components/settings_modal/SettingsModal';
import {ErrorCtx} from '@src/context';
import {initCardData} from '@src/common_data/common';
import {EmptyPage} from '@src/components/cabinet/components/empty_page/EmptyPage';
import {DoubleTabs} from '@src/components/cabinet/components/tabs_content/DoubleTabs';
import {PromoteModal} from '@src/components/cabinet/components/promote_modal/PromoteModal';
import {usePagination} from '@src/hooks';

export const MyAuctions: FC = () => {
    const {t} = useTranslation('cabinet');
    const {setErrorMsg} = useContext(ErrorCtx);

    const initialState: InitPostsType = {
        total: 0,
        data: []
    };

    const [isFetch, setIsFetch] = useState(false);
    const [selectedAuction, setSelectedAuction] =
        useState<CardDataType>(initCardData);

    const [auctionData, setAuctionData] = useState(initialState);
    const [auctionArchiveData, setAuctionArchiveData] = useState(initialState);

    const [participatingData, setParticipatingData] = useState(initialState);
    const [participatingArchiveData, setParticipatingArchiveData] =
        useState(initialState);

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

    const {
        modalOpen: promoteOpen,
        handleModalClose: handleClosePromote,
        handleModalOpen: handleOpenPromote
    } = useModal();

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

    const handlePromoteOpen = post => () => {
        handleOpenPromote();
        setSelectedAuction(post);
    };

    const handleDeactivate = (ads_id?: string) => async () => {
        try {
            setIsFetch(true);
            await userAPI.deactivatePost(ads_id);
            await refresh();
            closeDetailedModal();
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            setErrorMsg(e.message);
        }
    };

    const getAuctions =
        (isArch = false) =>
        async (page = 1) => {
            try {
                const params = {
                    archive: isArch ? 1 : 0,
                    page,
                    itemsPerPage: ITEMS_PER_PAGE
                };

                setIsFetch(true);

                const {data, total} = await userAPI.getMyPosts({
                    ...params,
                    type: 'auc',
                    secure: 0
                });

                isArch
                    ? setAuctionArchiveData({data, total})
                    : setAuctionData({data, total});
                setIsFetch(false);
            } catch (e) {
                setIsFetch(false);
                setErrorMsg(e.message);
            }
        };

    const getParticipatingAuctions =
        (isArch = false) =>
        async (page = 1) => {
            try {
                setIsFetch(true);

                const {data, total} = await userAPI.getParticipatingAucs({
                    page,
                    archive: isArch ? 1 : 0,
                    itemsPerPage: ITEMS_PER_PAGE
                });

                isArch
                    ? setParticipatingArchiveData({data, total})
                    : setParticipatingData({data, total});
                setIsFetch(false);
            } catch (e) {
                setIsFetch(false);
                setErrorMsg(e.message);
            }
        };

    const [aucPagination, aucPage, fetchAuctions] = usePagination(
        getAuctions()
    );

    const [archAucPagination, archAucPage, fetchArchAuctions] = usePagination(
        getAuctions(true)
    );

    const [participatingPagination, participatingPage, fetchParticipating] =
        usePagination(getParticipatingAuctions());

    const [
        archParticipatingPagination,
        archParticipatingPage,
        fetchArchParticipating
    ] = usePagination(getParticipatingAuctions(true));

    const refresh = async () => {
        await Promise.all([
            fetchAuctions(),
            fetchArchAuctions(),
            fetchParticipating(),
            fetchArchParticipating()
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
                    emptyPage: (
                        <EmptyPage
                            link={INNER_URLS.create_post}
                            tutorialLink={INNER_URLS.create_auc_guide}
                            label={t('cabinet:empty.auction')}
                            tutorialText={t('post:howToCreateAuc')}
                            action={t('cabinet:empty.create_auction')}
                        />
                    )
                },
                innerSecondTab: {
                    posts: auctionArchiveData.data,
                    total: auctionArchiveData.total,
                    emptyPage: <EmptyPage label={t('empty.archive')} />
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
                    emptyPage: <EmptyPage label={t('empty.no_participating')} />
                },
                innerSecondTab: {
                    posts: participatingArchiveData.data,
                    total: participatingArchiveData.total,
                    emptyPage: <EmptyPage label={t('empty.archive')} />
                }
            }
        }
    };

    return (
        <>
            <DoubleTabs
                isFetch={isFetch}
                tabsData={tabsData}
                pages={[
                    aucPage,
                    archAucPage,
                    participatingPage,
                    archParticipatingPage
                ]}
                handlePromoteOpen={handlePromoteOpen}
                handleDetailedOpen={handleDetailedOpen}
                handleSettingsOpen={handleSettingsOpen}
                handleNotificationsOpen={handleNotificationsOpen}
                paginationHandlers={[
                    aucPagination,
                    archAucPagination,
                    participatingPagination,
                    archParticipatingPagination
                ]}
            />
            <DetailedModal
                post={selectedAuction}
                open={detailedModalOpen}
                onClose={closeDetailedModal}
                handleRefresh={refresh}
                handleDeactivate={handleDeactivate(selectedAuction.id)}
            />
            <SettingsModal
                post={selectedAuction}
                open={settingsOpen}
                handleRefresh={refresh}
                onClose={handleCloseSettings}
            />
            <NotificationModal
                post={selectedAuction}
                open={notificationsOpen}
                handleRefresh={refresh}
                onClose={closeNotificationsModal}
            />
            <PromoteModal
                postType="auc"
                post={selectedAuction}
                openDialog={promoteOpen}
                handleRefresh={refresh}
                handleCloseDialog={handleClosePromote}
            />
        </>
    );
};
