import {FC, useEffect, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {withAuthRedirect} from '@src/hocs/withAuthRedirect';
import {userAPI} from '@src/api/api';
import {useDispatch, useSelector} from 'react-redux';
import {setErrorMsgAction} from '@root/src/redux/slices/errorSlice';
import {useTranslation} from 'next-i18next';
import {
    Box,
    CircularProgress,
    FormControlLabel,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Switch,
    Tab,
    Tabs,
    Typography
} from '@material-ui/core';
import {InitialCabinetCardState, TabsDataType} from '@root/interfaces/Cabinet.js';
import {CabinetCard} from '@src/components/cabinet/components/cabinet_card/CabinetCard';
import {initialNotificationType} from '@src/components/cabinet/cabinet_pages/notifications/NotificationsContainer';
import {ITEMS_PER_PAGE} from '@src/constants';
import {CustomPagination} from '@src/components/elements/custom_pagination/CustomPagination';
import {CustomTabPanel} from '@src/components/elements/custom_tab_panel/CustomTabPanel';
import {useModal} from '@src/hooks/useModal';
import {CardDataType} from '@root/interfaces/CardData';
import {DetailedPostView} from '@src/components/cabinet/components/detailed_post_view/DetailedPostView';
import {CabinetModal} from '@src/components/cabinet/components/cabinet_modal/CabinetModal';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {numberPrettier} from '@src/helpers';
import {Notification} from '@src/components/cabinet/cabinet_pages/notifications/notification_card/Notification';
import {initialCardData} from '@src/components/cabinet/cabinet_pages/my_posts/MyPosts';
import {RatingModal} from '@src/components/elements/rating_modal/RatingModal';
import {RootState} from '@src/redux/rootReducer';
import {useStyles} from './useStyles';


export const MyAuctions: FC = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation('cabinet');

    const initialState: InitialCabinetCardState = {
        total: 0,
        data: []
    };

    const userInfo = useSelector((store: RootState) => store.user.info);

    const [isFetch, setIsFetch] = useState(false);
    const [auctionData, setAuctionData] = useState(initialState);
    const [participatingData, setParticipatingData] = useState(initialState);
    const [auctionArchiveData, setAuctionArchiveData] = useState(initialState);
    const [participatingArchiveData, setParticipatingArchiveData] = useState(initialState);
    const [selectedAuction, setSelectedAuction] = useState<CardDataType>(initialCardData);
    const [tabIndex, setTabIndex] = useState(0);
    const [modalContentIndex, setModalContentIndex] = useState(1);
    const [notification, setNotification] = useState<initialNotificationType[]>([]);
    const [auctionId, setAuctionId] = useState(null);
    const [phone, setPhone] = useState(null);
    const [page, setPage] = useState(1);
    const [itemsCount, setItemsCount] = useState(0);
    const [childTabValue, setChildTabValue] = useState(0);

    const {modalOpen: settingsModalOpen, handleModalClose: closeSettingsModal, handleModalOpen: openSettingsModal} = useModal();
    const {modalOpen: notificationsOpen, handleModalClose: closeNotificationsModal, handleModalOpen: openNotificationsModal} = useModal();
    const {modalOpen: detailedModalOpen, handleModalClose: closeDetailedModal, handleModalOpen: openDetailedModal} = useModal();
    const {modalOpen: ratingOpen, handleModalOpen: handleOpenRating, handleModalClose: handleCloseRating} = useModal();


    const author = selectedAuction.author;
    const winner = selectedAuction.auction?.winner;
    const isUserWinner = winner?.id === userInfo.id;
    const userForRating = isUserWinner ? winner : author;

    const handleSettingsOpen = (auction_id: number) => () => {
        openSettingsModal();
        closeDetailedModal();
        auction_id && setSelectedAuction({...selectedAuction, id: auction_id});
        setModalContentIndex(1);
    };
    const handleSettingsClose = () => {
        closeSettingsModal();
        setModalContentIndex(1);
    };
    const handleDetailedOpen = (postId: number, post) => () => {
        openDetailedModal();
        auctionId && setAuctionId(postId);
        setSelectedAuction(post);
    };
    const handleNotificationsOpen = (postId: number) => () => {
        postId && setAuctionId(postId);
        openNotificationsModal();
        closeDetailedModal();
    };
    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };
    const handleChildTabChange = (event, newValue) => {
        setChildTabValue(newValue);
    };
    const handleModalContentIndex = (index) => () => {
        setModalContentIndex(index);
    };
    const handlePagePagination = (event, value) => {
        setPage(value);
    };
    const handlePrevMenu = () => {
        const backValue = modalContentIndex === 5 ? 3 : 1;
        setModalContentIndex(modalContentIndex - backValue);
    };
    const handleDeactivate = (ads_id?: number) => async () => {
        try {
            setIsFetch(true);
            await userAPI.deactivateById(ads_id);
            closeDetailedModal();
            handleOpenRating();
            await Promise.all([fetchAuctionData(), fetchAuctionData('auc')]);
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const handleRejectVictory = (auction_id) => async () => {
        try {
            setIsFetch(true);
            await userAPI.rejectVictory(auction_id);
            if (tabIndex === 0) {
                await fetchAuctionData('auc');
            } else {
                await fetchAuctionData();
            }
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const fetchAuctionNotifications = post => async () => {
        try {
            setIsFetch(true);
            if (post.id !== selectedAuction.id) {
                const params = {
                    ads_id: post.id,
                    page,
                    itemsPerPage: ITEMS_PER_PAGE
                };

                const {data, total} = await userAPI.getNotificationById(params);

                setItemsCount(total);
                setNotification(data);
                setSelectedAuction({...selectedAuction, ...post});
            }
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const fetchAuctionData = async (type?: string) => {
        try {
            setIsFetch(true);
            const isAuction = type === 'auc';
            const params = {
                type, archive: 0,
                secure: 0
            };

            if (isAuction) {
                const {data, total} = await userAPI.getMyPosts(params);
                setAuctionData({data, total});
            } else {
                setParticipatingData(auctionData);
                const {data, total, message} = await userAPI.getAuctionSubs();
                message ? setParticipatingData(initialState) : setParticipatingData({data, total});
            }

            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const fetchAuctionArchiveData = async (type?: string) => {
        try {
            setIsFetch(true);
            const isAuction = type === 'auc';
            if (isAuction) {
                const params = {
                    type,
                    archive: 1,
                    secure: 0,
                    page: 1,
                    itemsPerPage: ITEMS_PER_PAGE
                };

                const {data, total} = await userAPI.getMyPosts(params);
                setAuctionArchiveData({data, total});
            } else {
                const {data, total, message} = await userAPI.getAuctionSubArchive();
                message
                ? setParticipatingArchiveData(initialState)
                : setParticipatingArchiveData({data, total});
            }
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const handleDeleteNotification = (id, ads_id) => async () => {
        try {
            setIsFetch(true);

            await userAPI.deleteUserNotification(id);
            const {data} = await userAPI.getNotificationById(ads_id);

            setNotification(data);
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const fetchUserPhone = (user_id) => async () => {
        try {
            setIsFetch(true);

            const {phone} = await userAPI.getPhoneByUserId(user_id);

            setPhone(phone);
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const riseInTape = (post_id: number) => async () => {
        try {
            setIsFetch(true);

            await userAPI.ricePostInTape(post_id);

            setModalContentIndex(1);
            closeSettingsModal();
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const classes = useStyles();
    const getModalContent = () => {
        switch (modalContentIndex) {
            case 1:
                return <>
                    <List
                        component="nav"
                        aria-label="main"
                        className={classes.settingsList}
                        disablePadding
                    >
                        <ListItem
                            button
                            onClick={handleModalContentIndex(3)}
                        >
                            <ListItemText
                                primary="Деактивировать"
                                primaryTypographyProps={{variant: 'subtitle1'}}
                            />
                        </ListItem>
                        <ListItem
                            button
                            onClick={handleModalContentIndex(2)}
                        >
                            <ListItemText
                                primary="Поднять в ленте"
                                primaryTypographyProps={{variant: 'subtitle1'}}
                                secondary="(можно использовать 3 раза в неделю)"
                                secondaryTypographyProps={{variant: 'subtitle2'}}
                            />
                        </ListItem>
                    </List>
                </>;
            case 2:
                return <>
                    <List
                        component="nav"
                        aria-label="main"
                        className={classes.settingsList}
                        disablePadding
                    >
                        <ListItem
                            button
                            onClick={riseInTape(selectedAuction.id)}
                        >
                            <ListItemText
                                primary='Да'
                                primaryTypographyProps={{variant: 'subtitle1'}}
                            />
                        </ListItem>
                        <ListItem
                            button
                            onClick={handlePrevMenu}
                        >
                            <ListItemText
                                primary='Нет'
                                primaryTypographyProps={{variant: 'subtitle1'}}
                            />
                        </ListItem>
                    </List>
                </>;
            case 3:
                return <>
                    <List
                        disablePadding
                        component="nav"
                        aria-label="main"
                        className={classes.settingsList}
                    >
                        <ListItem
                            button
                            onClick={handleDeactivate(selectedAuction.id)}
                        >
                            <ListItemText
                                primary='Да'
                                primaryTypographyProps={{variant: 'subtitle1'}}
                            />
                        </ListItem>
                        <ListItem
                            button
                            onClick={handlePrevMenu}
                        >
                            <ListItemText
                                primary='Нет'
                                primaryTypographyProps={{variant: 'subtitle1'}}
                            />
                        </ListItem>
                    </List>
                </>;
            default:
                return modalContentIndex;
        }
    };
    const ModalContent = () => (
        <>
            {modalContentIndex === 1
             ? <Typography className="title" variant="h6">
                 {`${t(`common:${selectedAuction.ads_type}`)} №: ${selectedAuction.id}`}
             </Typography>
             : modalContentIndex !== 10 && modalContentIndex !== 11 && (
                <IconButton
                    size="medium"
                    aria-label="back"
                    className='prev-btn'
                    onClick={handlePrevMenu}
                >
                    <ArrowBackIcon fontSize="inherit"/>
                </IconButton>
            )}
            {getModalContent()}
        </>
    );

    const pagination = (
        <CustomPagination
            currentPage={page}
            totalItems={itemsCount}
            itemsPerPage={ITEMS_PER_PAGE}
            handlePagePagination={handlePagePagination}
        />
    );

    const creatorAuctionCards = auctionData.data.map(data => (
        <Box mb={3} key={data.id}>
            <CabinetCard
                cardData={data}
                fetchAuctionNotifications={fetchAuctionNotifications}
                handleDetailedOpen={handleDetailedOpen}
                handleSettingsOpen={handleSettingsOpen}
                handleNotificationsOpen={handleNotificationsOpen}
            />
        </Box>
    ));

    const participantsAuctionCards = participatingData.data.map(data => (
        <Box mb={3} key={data.id}>
            <CabinetCard
                cardData={data}
                handleDetailedOpen={handleDetailedOpen}
                handleSettingsOpen={handleSettingsOpen}
                handleNotificationsOpen={handleNotificationsOpen}
            />
        </Box>
    ));

    const archiveAuctionCards = auctionArchiveData.data.map(data => (
        <Box mb={3} key={data.id}>
            <CabinetCard
                archive
                cardData={data}
                fetchAuctionNotifications={fetchAuctionNotifications}
                handleDetailedOpen={handleDetailedOpen}
                handleSettingsOpen={handleSettingsOpen}
                handleNotificationsOpen={handleNotificationsOpen}
            />
        </Box>
    ));

    const participatingArchiveAuctionCards = participatingArchiveData.data.map(data => (
        <Box mb={3} key={data.id}>
            <CabinetCard
                archive
                cardData={data}
                handleDetailedOpen={handleDetailedOpen}
                handleSettingsOpen={handleSettingsOpen}
                handleNotificationsOpen={handleNotificationsOpen}
            />
        </Box>
    ));

    const createdAuctionTabs = (
        <>
            <Tabs
                value={childTabValue}
                onChange={handleChildTabChange}
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
                {isFetch ? <CircularProgress color="primary"/> : creatorAuctionCards}
            </CustomTabPanel>
            <CustomTabPanel value={childTabValue} index={1}>
                {isFetch ? <CircularProgress color="primary"/> : archiveAuctionCards}
            </CustomTabPanel>
        </>
    );

    const participatingAuctionTabs = (
        <>
            <Tabs
                value={childTabValue}
                onChange={handleChildTabChange}
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
                            Завершенные
                        </Typography>
                    }
                />
            </Tabs>
            <CustomTabPanel value={childTabValue} index={0}>
                {isFetch ? <CircularProgress color="primary"/> : participantsAuctionCards}
            </CustomTabPanel>
            <CustomTabPanel value={childTabValue} index={1}>
                {isFetch ? <CircularProgress color="primary"/> : participatingArchiveAuctionCards}
            </CustomTabPanel>
        </>
    );

    const tabsData: TabsDataType = [
        {
            id: 0,
            title: t('createdAuc'),
            total: auctionData.total,
            itemsPerPage: ITEMS_PER_PAGE,
            handleFetchByTab: null,
            component: createdAuctionTabs
        },
        {
            id: 1,
            title: t('participatingAuc'),
            total: participatingData.total,
            itemsPerPage: ITEMS_PER_PAGE,
            handleFetchByTab: null,
            component: participatingAuctionTabs
        }
    ];

    useEffect(() => {
        fetchAuctionData();
        fetchAuctionArchiveData();
        fetchAuctionData('auc');
        fetchAuctionArchiveData('auc');
    }, []);

    return (
        <>
            <TabsContent
                tabsData={tabsData}
                tabIndex={tabIndex}
                title={t('myAuctions')}
                headerTitle={t('myAuctions')}
                handleTabChange={handleTabChange}
            />
            <DetailedPostView
                data={selectedAuction}
                detailedModalOpen={detailedModalOpen}
                fetchPostData={fetchAuctionData}
                handleSettingsOpen={handleSettingsOpen}
                handleDetailedClose={closeDetailedModal}
                handleRejectVictory={handleRejectVictory}
                handleNotificationsOpen={handleNotificationsOpen}
                handleDeactivate={handleDeactivate(selectedAuction.id)}
            />
            <RatingModal
                open={ratingOpen}
                user={userForRating}
                handleCloseRating={handleCloseRating}
            />
            <CabinetModal
                maxWidth='xs'
                openDialog={settingsModalOpen}
                handleCloseDialog={handleSettingsClose}
            >
                <ModalContent/>
            </CabinetModal>
            <CabinetModal
                openDialog={notificationsOpen}
                handleCloseDialog={closeNotificationsModal}
            >
                <Box
                    display='flex'
                    alignItems='center'
                    flexDirection='column'
                >
                    <Typography variant='subtitle1' gutterBottom>
                        {t('common:notificationsStories')}
                    </Typography>
                    <Typography variant='caption'>
                        {`${t(`common:${selectedAuction.ads_type}`)} №: ${selectedAuction.id}`}
                    </Typography>
                </Box>
                <Box
                    display='flex'
                    flexDirection='row'
                    justifyContent='space-between'
                    alignItems='center'
                >
                    <Typography>
                        {`${t('common:extremeRate')}: ${numberPrettier(selectedAuction?.auction?.bet?.bet) || 0} ${t('common:sum')}`}
                    </Typography>
                    <FormControlLabel
                        control={
                            <Switch
                                // checked={state.checkedA}
                                // onChange={handleChange}
                                name="checkedA"
                                color='primary'
                            />
                        }
                        label={t('common:notifyMe')}
                        labelPlacement="start"
                    />
                </Box>
                {notification?.map(notification => (
                    <Box
                        mb={1}
                        key={notification.id}
                    >
                        <Notification
                            t={t}
                            phone={phone}
                            data={notification}
                            handleDeleteNotification={handleDeleteNotification}
                            fetchUserPhone={fetchUserPhone}
                        />
                    </Box>
                ))}
                {!!notification?.length && (
                    <Box display='flex' justifyContent='center'>
                        {pagination}
                    </Box>
                )}
            </CabinetModal>
        </>
    );
};

export default withAuthRedirect(MyAuctions);