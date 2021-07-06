import {FC, useEffect, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {withAuthRedirect} from '@src/hocs/withAuthRedirect';
import {userAPI} from '@src/api/api';
import {useDispatch} from 'react-redux';
import {setErrorMsgAction} from '@root/src/redux/slices/errorSlice';
import {useTranslation} from 'next-i18next';
import {
    Box,
    CircularProgress,
    Tab,
    Tabs,
    Typography
} from '@material-ui/core';
import {InitialCabinetCardState, TabsDataType} from '@root/interfaces/Cabinet.js';
import {CabinetCard} from '@src/components/cabinet/components/cabinet_card/CabinetCard';
import {ITEMS_PER_PAGE} from '@src/constants';
import {CustomTabPanel} from '@src/components/elements/custom_tab_panel/CustomTabPanel';
import {useModal} from '@src/hooks/useModal';
import {CardDataType} from '@root/interfaces/CardData';
import {DetailedPostModal} from '@src/components/cabinet/components/detailed_post_modal/DetailedPostModal';
import {initialCardData} from '@src/components/cabinet/cabinet_pages/my_posts/MyPosts';
import {NotificationModal} from '@src/components/cabinet/components/notifation_modal/NotificationModal';
import {useStyles} from './useStyles';

export const MyAuctions: FC = () => {
        const dispatch = useDispatch();
        const {t} = useTranslation('cabinet');

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

        const handleTabChange = (setState) => (_, newValue) => {
            setState(newValue);
        };

        const handleDeactivate = (ads_id?: number) => async () => {
            try {
                setIsFetch(true);
                await userAPI.deactivateById(ads_id);
                closeDetailedModal();
                await fetchAuctionData(1);
                setIsFetch(false);
            } catch (e) {
                setIsFetch(false);
                dispatch(setErrorMsgAction(e.message));
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

                const [myPosts, myParticipating] = await Promise.all([userAPI.getMyPosts(params), userAPI.getAuctionSubs(params)]);

                setAuctionData({data: myPosts.data, total: myPosts.total});
                setParticipatingData({data: myParticipating.data, total: myParticipating.total});

                setIsFetch(false);
            } catch (e) {
                setIsFetch(false);
                dispatch(setErrorMsgAction(e.message));
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

                const [myPosts, auctionArchive] = await Promise.all([userAPI.getMyPosts(params), userAPI.getAuctionSubArchive(params)]);

                setAuctionArchiveData({data: myPosts.data, total: myPosts.total});
                setParticipatingArchiveData({data: auctionArchive.data, total: auctionArchive.total});

                setIsFetch(false);
            } catch (e) {
                setIsFetch(false);
                dispatch(setErrorMsgAction(e.message));
            }
        };

        const handleRefresh = () => {
            fetchAuctionData(1);
            fetchAuctionArchiveData(1);
        };

        const classes = useStyles();
        const createdAuctionTabs = (
            <>
                <Tabs
                    value={childTabValue}
                    onChange={handleTabChange(setChildTabValue)}
                    aria-label="tabs"
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
                     ? <CircularProgress color="primary"/>
                     : auctionData.data.map(data => (
                            <Box mb={3} key={data.id}>
                                <CabinetCard
                                    cardData={data}
                                    handleDetailedOpen={handleDetailedOpen}
                                    handleNotificationsOpen={handleNotificationsOpen}
                                />
                            </Box>
                        ))}
                </CustomTabPanel>
                <CustomTabPanel value={childTabValue} index={1}>
                    {isFetch
                     ? <CircularProgress color="primary"/>
                     : auctionArchiveData.data.map(data => (
                            <Box mb={3} key={data.id}>
                                <CabinetCard
                                    archive
                                    cardData={data}
                                    handleDetailedOpen={handleDetailedOpen}
                                    handleNotificationsOpen={handleNotificationsOpen}
                                />
                            </Box>
                        ))}
                </CustomTabPanel>
            </>
        );

        const participatingAuctionTabs = (
            <>
                <Tabs
                    aria-label="tabs"
                    value={childTabValue}
                    onChange={handleTabChange(setChildTabValue)}
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
                                Завершенные
                            </Typography>
                        }
                    />
                </Tabs>
                <CustomTabPanel value={childTabValue} index={0}>
                    {isFetch
                     ? <CircularProgress color="primary"/>
                     : participatingData.data.map(data => (
                            <Box mb={3} key={data.id}>
                                <CabinetCard
                                    cardData={data}
                                    handleDetailedOpen={handleDetailedOpen}
                                    handleNotificationsOpen={handleNotificationsOpen}
                                />
                            </Box>
                        ))}
                </CustomTabPanel>
                <CustomTabPanel value={childTabValue} index={1}>
                    {isFetch
                     ? <CircularProgress color="primary"/>
                     : participatingArchiveData.data.map(data => (
                            <Box mb={3} key={data.id}>
                                <CabinetCard
                                    archive
                                    cardData={data}
                                    handleDetailedOpen={handleDetailedOpen}
                                    handleNotificationsOpen={handleNotificationsOpen}
                                />
                            </Box>
                        ))}
                </CustomTabPanel>
            </>
        );

        const tabsData: TabsDataType = [
            {
                id: 0,
                title: t('createdAuc'),
                itemsPerPage: ITEMS_PER_PAGE,
                handleFetchByTab: () => '',
                component: createdAuctionTabs
            },
            {
                id: 1,
                title: t('participatingAuc'),
                itemsPerPage: ITEMS_PER_PAGE,
                handleFetchByTab: () => '',
                component: participatingAuctionTabs
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
                    title={t('myAuctions')}
                    headerTitle={t('myAuctions')}
                    handleTabChange={handleTabChange(setTabIndex)}
                />
                <DetailedPostModal
                    post={selectedAuction}
                    open={detailedModalOpen}
                    onClose={closeDetailedModal}
                    handleRefresh={handleRefresh}
                    handleNotificationsOpen={handleNotificationsOpen}
                    handleDeactivate={handleDeactivate(selectedAuction.id)}
                />
                <NotificationModal
                    post={selectedAuction}
                    open={notificationsOpen}
                    handleRefresh={handleRefresh}
                    onClose={closeNotificationsModal}
                />
            </>
        );
    }
;

export default withAuthRedirect(MyAuctions);