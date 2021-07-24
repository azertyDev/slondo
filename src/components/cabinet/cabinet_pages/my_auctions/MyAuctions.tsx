import {FC, useContext, useEffect, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {userAPI} from '@src/api/api';
import {useTranslation} from 'next-i18next';
import {unstable_batchedUpdates} from "react-dom";
import {
    Box,
    Tab,
    Tabs,
    Typography,
    CircularProgress
} from '@material-ui/core';
import {InitialCabinetCardState, TabsDataType} from '@root/interfaces/Cabinet.js';
import {CabinetCard} from '@src/components/cabinet/components/cabinet_card/CabinetCard';
import {ITEMS_PER_PAGE} from '@src/constants';
import {CustomTabPanel} from '@src/components/elements/custom_tab_panel/CustomTabPanel';
import {useModal} from '@src/hooks/useModal';
import {CardDataType} from '@root/interfaces/CardData';
import {DetailedPostModalContainer} from '@src/components/cabinet/components/detailed_post_modal/DetailedPostModalContainer';
import {initialCardData} from '@src/components/cabinet/cabinet_pages/my_posts/MyPosts';
import {NotificationModal} from '@src/components/cabinet/components/notifation_modal/NotificationModal';
import {SettingsModal} from "@src/components/cabinet/components/settings_modal/SettingsModal";
import {ErrorCtx} from "@src/context";
import {useStyles} from './useStyles';
import {EmptyPage} from '@src/components/cabinet/components/empty_page/EmptyPage';

export const MyAuctions: FC = () => {
    const {t} = useTranslation('cabinet');
    const {setErrorMsg} = useContext(ErrorCtx);

    const initialState: InitialCabinetCardState = {
        total: 0,
        data: []
    };

    const [isFetch, setIsFetch] = useState(false);
    const [auctionData, setAuctionData] = useState(initialState);
    const [participatingData, setParticipatingData] = useState(initialState);
    const [auctionArchiveData, setAuctionArchiveData] = useState(initialState);
    const [participatingArchiveData, setParticipatingArchiveData] = useState(initialState);
    const [selectedAuction, setSelectedAuction] = useState<CardDataType>(initialCardData);

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
            closeDetailedModal();
            await fetchAuctionData(1);
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            setErrorMsg(e.message);
        }
    };

    const fetchAuctionData = async (page) => {
        try {
            setIsFetch(true);
            const params = {
                type: 'auc',
                archive: 0,
                secure: 0,
                page,
                itemsPerPage: ITEMS_PER_PAGE
            };

            const [myAuctions, myParticipating] = await Promise.all([
                userAPI.getMyPosts(params),
                userAPI.getParticipatingAucs(params)
            ]);

            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setAuctionData({data: myAuctions.data, total: myAuctions.total});
                setParticipatingData({data: myParticipating.data, total: myParticipating.total});
            });

        } catch (e) {
            setIsFetch(false);
            setErrorMsg(e.message);
        }
    };

    const fetchAuctionArchiveData = async (page) => {
        try {
            setIsFetch(true);
            const params = {
                type: 'auc',
                archive: 1,
                secure: 0,
                page,
                itemsPerPage: ITEMS_PER_PAGE
            };

            const [myArchAucs, archParticipatingAucs] = await Promise.all([
                userAPI.getMyPosts(params),
                userAPI.getArchiveParticipatingAucs(params)
            ]);

            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setAuctionArchiveData({data: myArchAucs.data, total: myArchAucs.total});
                setParticipatingArchiveData({data: archParticipatingAucs.data, total: archParticipatingAucs.total});
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setErrorMsg(e.message);
            });
        }
    };

    const handleRefresh = () => {
        unstable_batchedUpdates(() => {
            fetchAuctionData(1);
            fetchAuctionArchiveData(1);
        });
    };

    const classes = useStyles();
    const tabsContent = (fstTabPosts: CardDataType[], secTabPosts: CardDataType[]) => {
        return (
            <>
                <Tabs
                    aria-label="tabs"
                    value={childTabValue}
                    onChange={handleChildTabChange}
                    className={classes.childTabs}
                    TabIndicatorProps={{style: {display: 'none'}}}
                >
                    <Tab
                        label={
                            <Typography variant="subtitle1">
                                Активные
                            </Typography>
                        }
                    />
                    <Tab
                        label={
                            <Typography variant="subtitle1">
                                Архивные
                            </Typography>
                        }
                    />
                </Tabs>
                <CustomTabPanel value={childTabValue} index={0}>
                    {isFetch
                        ? <CircularProgress color="primary" />
                        : fstTabPosts.length === 0
                            ? <EmptyPage
                                label={t('cabinet:empty.auction')}
                                action={t('header:createPost')}
                                link={'/create/type'}
                                tutorialLink={'#'}
                                tutorialText={t('post:howToCreateAuc')}
                            />
                            : fstTabPosts.map(data => (
                                <Box mb={3} key={data.id}>
                                    <CabinetCard
                                        cardData={data}
                                        handleSettingsOpen={handleSettingsOpen(data)}
                                        handleDetailedOpen={handleDetailedOpen(data)}
                                        handleNotificationsOpen={handleNotificationsOpen(data)}
                                    />
                                </Box>
                            ))
                    }
                </CustomTabPanel>
                <CustomTabPanel value={childTabValue} index={1}>
                    {isFetch
                        ? <CircularProgress color="primary" />
                        : fstTabPosts.length === 0
                            ? <EmptyPage label={t('cabinet:empty.archive')} />
                            : secTabPosts.map(data => (
                                <Box mb={3} key={data.id}>
                                    <CabinetCard
                                        cardData={data}
                                        handleSettingsOpen={handleSettingsOpen(data)}
                                        handleDetailedOpen={handleDetailedOpen(data)}
                                        handleNotificationsOpen={handleNotificationsOpen(data)}
                                    />
                                </Box>
                            ))}
                </CustomTabPanel>
            </>
        );
    };

    const tabsData: TabsDataType = [
        {
            id: 0,
            title: t('createdAuc'),
            itemsPerPage: ITEMS_PER_PAGE,
            handleFetchByTab: () => '',
            component: tabsContent(auctionData.data, auctionArchiveData.data)
        },
        {
            id: 1,
            title: t('participatingAuc'),
            itemsPerPage: ITEMS_PER_PAGE,
            handleFetchByTab: () => '',
            component: tabsContent(participatingData.data, participatingArchiveData.data)
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
                // title={t('myAuctions')}
                // headerTitle={t('myAuctions')}
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