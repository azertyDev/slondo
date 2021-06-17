import {FC, useEffect, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {MyAuctions} from '@src/components/cabinet/cabinet_pages/my_auctions/MyAuctions';
import {withAuthRedirect} from '@src/hocs/withAuthRedirect';
import {userAPI} from '@src/api/api';
import {useDispatch} from 'react-redux';
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
import {InitialCabinetCardState, OffersStateType, TabsDataType} from '@root/interfaces/Cabinet.js';
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
import {useStyles} from './useStyles';

export const MyAuctionsContainer: FC = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation(['cabinet', 'common']);

    const initialState: InitialCabinetCardState = {
        isFetch: false,
        myPosts: {
            total: 0,
            data: []
        }
    };
    const initialNotificationState: initialNotificationType = {
        isFetch: false,
        data: []
    };
    const initialSelectedAuction: CardDataType = {
        id: null,
        ads_type: '',
        adsable: {
            id: null,
            sub_category: {id: null, name: ''},
            type: {id: null, name: ''}
        },
        auction: {
            id: null,
            is_accepted: null,
            winner: {
                id: null,
                name: '',
                surname: '',
                phone: '',
                avatar: '',
                created_at: '',
                available_days: '',
                available_start_time: '',
                available_end_time: ''
            },
            winner_id: null,
            number_of_bets: null,
            number_of_offers: null,
            auto_renewal: null,
            offer: {
                id: null,
                price: null,
                user: {
                    id: null,
                    name: '',
                    surname: '',
                    phone: '',
                    avatar: '',
                    created_at: '',
                    available_days: '',
                    available_start_time: '',
                    available_end_time: ''
                }
            },
            bet: {
                auction_id: null,
                bet: null,
                id: null,
                number_of_bets: null
            }
        },
        author: {
            id: null,
            name: '',
            surname: '',
            phone: '',
            avatar: '',
            created_at: '',
            available_days: '',
            available_start_time: '',
            available_end_time: ''
        },
        observer: {
            number_of_notifications: null,
            number_of_favorites: null,
            number_of_views: null
        },
        available_days: [],
        available_start_time: '',
        available_end_time: '',
        category: {id: null, name: ''},
        city: {id: null, name: ''},
        created_at: '',
        creator: false,
        currency: {id: null, name: ''},
        delivery: null,
        description: '',
        district: {id: null, name: ''},
        exchange: null,
        expiration_at: '',
        favorite: false,
        image: '',
        price: null,
        region: {id: null, name: ''},
        safe_deal: null,
        status: '',
        subscribed: false,
        title: '',
        user_id: null
    };
    const initialOffersState: OffersStateType = {
        isFetch: false,
        total: null,
        data: []
    };

    const [auctionData, setAuctionData] = useState(initialState);
    const [participatingData, setParticipatingData] = useState(initialState);
    const [auctionArchiveData, setAuctionArchiveData] = useState(initialState);
    const [participatingArchiveData, setParticipatingArchiveData] = useState(initialState);
    const [offersData, setOffersData] = useState(initialOffersState);
    const [selectedAuction, setSelectedAuction] = useState<CardDataType>(initialSelectedAuction);
    const [tabIndex, setTabIndex] = useState(0);
    const [modalContentIndex, setModalContentIndex] = useState(1);
    const [notification, setNotification] = useState(initialNotificationState);
    const [auctionId, setAuctionId] = useState(null);
    const [phone, setPhone] = useState(null);
    const [page, setPage] = useState(1);
    const [itemsCount, setItemsCount] = useState(0);
    const [childTabValue, setChildTabValue] = useState(0);
    const {modalOpen: openDialog, handleModalOpen: handleOpenDialog, handleModalClose: handleCloseDialog} = useModal();

    const {modalOpen: settingsModalOpen, handleModalClose: closeSettingsModal, handleModalOpen: openSettingsModal} = useModal();
    const {modalOpen: notificationsOpen, handleModalClose: closeNotificationsModal, handleModalOpen: openNotificationsModal} = useModal();
    const {modalOpen: detailedModalOpen, handleModalClose: closeDetailedModal, handleModalOpen: openDetailedModal} = useModal();

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
            await userAPI.deactivateById(ads_id);
            closeDetailedModal();
            if (tabIndex === 0) {
                await fetchAuctionData('auc');
            } else {
                await fetchAuctionData();
            }
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const handleRejectVictory = (auction_id) => async () => {
        try {
            await userAPI.rejectVictory(auction_id);
            if (tabIndex === 0) {
                await fetchAuctionData('auc');
            } else {
                await fetchAuctionData();
            }
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const fetchAuctionNotifications = post => async () => {
        try {
            if (post.id !== selectedAuction.id) {
                const params = {
                    page,
                    itemsPerPage: ITEMS_PER_PAGE,
                    ads_id: post.id
                };
                setNotification({...notification, isFetch: true});
                const {data, total} = await userAPI.getNotificationById(params);
                setItemsCount(total);
                setSelectedAuction({...selectedAuction, ...post});
                setNotification({...notification, data, isFetch: false});
            }
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const fetchAuctionData = async (type?: string) => {
        try {
            const isCreatedAuction = type === 'auc';
            if (isCreatedAuction) {
                setAuctionData({...auctionData, isFetch: true});
                const {data, total} = await userAPI.getMyPosts({type, onlySecure: 0});
                setAuctionData({myPosts: {data, total}, isFetch: false});
            } else {
                setParticipatingData({...auctionData, isFetch: true});
                const {data, total, message} = await userAPI.getAuctionSubs();
                message
                ? setParticipatingData(initialState)
                : setParticipatingData({myPosts: {data, total}, isFetch: false});
            }
        } catch (e) {
            dispatch(setErrorMsgAction(e));
        }
    };
    const fetchAuctionArchiveData = async (type?: string) => {
        try {
            const isCreatedAuction = type === 'auc';
            if (isCreatedAuction) {
                const params = {
                    type,
                    secure: 0,
                    page: 1,
                    itemsPerPage: ITEMS_PER_PAGE
                };
                setAuctionArchiveData({...auctionArchiveData, isFetch: true});
                const {data, total} = await userAPI.getUserArchivePosts(params);
                setAuctionArchiveData({myPosts: {data, total}, isFetch: false});
            } else {
                setParticipatingArchiveData({...participatingArchiveData, isFetch: true});
                const {data, total, message} = await userAPI.getAuctionSubArchive();
                message
                ? setParticipatingArchiveData(initialState)
                : setParticipatingArchiveData({myPosts: {data, total}, isFetch: false});
            }
        } catch (e) {
            dispatch(setErrorMsgAction(e));
        }
    };
    const fetchAllOffers = (auction_id: number) => async () => {
        try {
            auction_id && setSelectedAuction({...selectedAuction, id: auction_id});
            handleOpenDialog();
            setModalContentIndex(10);
            setOffersData({...offersData, isFetch: true});
            const {data, total} = await userAPI.getAllOffersById(auction_id);
            setOffersData({...offersData, data, total, isFetch: false});
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const fetchUserPhone = (user_id) => async () => {
        try {
            const {phone} = await userAPI.getPhoneByUserId(user_id);
            setPhone(phone);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const acceptOfferThePrice = (offer_id: number, is_accepted: boolean) => async () => {
        try {
            handleCloseDialog();
            await userAPI.acceptOfferThePrice(offer_id, is_accepted);
            if (tabIndex === 0) {
                await fetchAuctionData('auc');
            } else {
                await fetchAuctionData();
            }
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const riceInTape = (post_id: number) => async () => {
        try {
            await userAPI.ricePostInTape(post_id);
            setModalContentIndex(1);
            closeSettingsModal();
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const handleDeleteNotification = (id, ads_id) => async () => {
        try {
            setNotification({...notification, isFetch: true});
            await userAPI.deleteUserNotification(id);
            const {data} = await userAPI.getNotificationById(ads_id);
            setNotification({...notification, data, isFetch: false});
        } catch (e) {
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
                            onClick={riceInTape(selectedAuction.id)}
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
                        component="nav"
                        aria-label="main"
                        className={classes.settingsList}
                        disablePadding
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
            // case 10:
            //     return <Box className='offers-info'>
            //         <Box>
            //             <Typography variant='h6'>Все предложения</Typography>
            //             <Typography variant='subtitle2'>{`Аукцион №: ${selectedAuction.id}`}</Typography>
            //         </Box>
            //         <Box width={1}>
            //             {offersData.data.map(offer => {
            //                 return (
            //                     <Box px={5} py={2} display='flex' key={offer.id}>
            //                         <Box>
            //                             <UserInfoWithAvatar owner={offer.user} isOwner={false} />
            //                         </Box>
            //                         <Box>
            //                             <Typography variant='subtitle2'>
            //                                 {offer.created_at}
            //                             </Typography>
            //                             <div>
            //                                 <Typography variant='subtitle2'>
            //                                     Предложенная цена
            //                                 </Typography>
            //                                 {offer.price}
            //                             </div>
            //                             <div>
            //                                 <CustomButton
            //                                     className='accept'
            //                                     onClick={acceptOfferThePrice(offer.id, true)}
            //                                 >
            //                                     <DoneAllIcon />
            //                                     <Typography
            //                                         variant="subtitle2"
            //                                         color="initial"
            //                                     >
            //                                         Принять
            //                                     </Typography>
            //                                 </CustomButton>
            //                                 <CustomButton
            //                                     className='decline'
            //                                     onClick={acceptOfferThePrice(offer.id, false)}
            //                                 >
            //                                     <CloseIcon />
            //                                     <Typography
            //                                         variant="subtitle2"
            //                                         color="initial"
            //                                     >
            //                                         Отказать
            //                                     </Typography>
            //                                 </CustomButton>
            //                             </div>
            //                         </Box>
            //                     </Box>
            //                 );
            //             })}
            //         </Box>
            //     </Box>;
            // case 11:
            //     return <Box className={classes.promoteInfo}>
            //         <Box mb='20px' textAlign='center'>
            //             <Typography variant='h6'>Рекламировать объявление</Typography>
            //             <Typography variant='subtitle2'>{`Аукцион №: ${selectedAuction.id}`}</Typography>
            //         </Box>
            //         <Box mb='20px'>
            //             <Paper className='promote-item'>
            //                 <Box maxWidth='180px'>
            //                     <Typography variant='h6' gutterBottom>Поднять в топ</Typography>
            //                     <Typography variant='subtitle1'>Действует 3 дня</Typography>
            //                     <Typography variant='subtitle2'>
            //                         Объявление появляется в ленте в 40 чаще и выделяется анимацией.
            //                     </Typography>
            //                     <Typography variant='h5'>60 000 сум</Typography>
            //                 </Box>
            //                 <Box display='flex' alignItems='flex-end' width='180px'>
            //                     <CustomButton>
            //                         <Typography variant='subtitle1'>Поднять в ТОП</Typography>
            //                         <ChevronRight width='20px' height='20px' />
            //                     </CustomButton>
            //                     <img src={'/img/promote-img.jpg'} alt="promote-img" />
            //                 </Box>
            //             </Paper>
            //         </Box>
            //     </Box>;
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
             : (modalContentIndex !== 10 && modalContentIndex !== 11 && (
                        <IconButton
                            size="medium"
                            aria-label="back"
                            className='prev-btn'
                            onClick={handlePrevMenu}
                        >
                            <ArrowBackIcon fontSize="inherit"/>
                        </IconButton>
                    )
             )
            }
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

    const creatorAuctionCards = auctionData.myPosts.data.map(data => (
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

    const participantsAuctionCards = participatingData.myPosts.data.map(data => (
        <Box mb={3} key={data.id}>
            <CabinetCard
                cardData={data}
                handleDetailedOpen={handleDetailedOpen}
                handleSettingsOpen={handleSettingsOpen}
                handleNotificationsOpen={handleNotificationsOpen}
            />
        </Box>
    ));

    const archiveAuctionCards = auctionArchiveData.myPosts.data.map(data => (
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

    const participatingArchiveAuctionCards = participatingArchiveData.myPosts.data.map(data => (
        <Box mb={3} key={data.id}>
            <CabinetCard
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
                TabIndicatorProps={{
                    style: {
                        display: 'none'
                    }
                }}
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
                {auctionData.isFetch ? <CircularProgress color="primary"/> : creatorAuctionCards}
            </CustomTabPanel>
            <CustomTabPanel value={childTabValue} index={1}>
                {auctionArchiveData.isFetch ? <CircularProgress color="primary"/> : archiveAuctionCards}
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
                TabIndicatorProps={{
                    style: {
                        display: 'none'
                    }
                }}
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
                {participatingData.isFetch ? <CircularProgress color="primary"/> : participantsAuctionCards}
            </CustomTabPanel>
            <CustomTabPanel value={childTabValue} index={1}>
                {participatingArchiveData.isFetch ?
                 <CircularProgress color="primary"/> : participatingArchiveAuctionCards}
            </CustomTabPanel>
        </>
    );

    const tabsData: TabsDataType = [
        {
            id: 0,
            title: t('createdAuc'),
            total: auctionData.myPosts.total,
            itemsPerPage: ITEMS_PER_PAGE,
            handleFetchByPage: null,
            component:
                <MyAuctions
                    auctionTabs={createdAuctionTabs}
                />
        },
        {
            id: 1,
            title: t('participatingAuc'),
            total: participatingData.myPosts.total,
            itemsPerPage: ITEMS_PER_PAGE,
            handleFetchByPage: null,
            component:
                <MyAuctions
                    auctionTabs={participatingAuctionTabs}
                />
        }
    ];

    useEffect(() => {
        fetchAuctionData();
        fetchAuctionData('auc');
        fetchAuctionArchiveData();
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
                handleDeactivate={handleDeactivate}
                detailedModalOpen={detailedModalOpen}
                handleSettingsOpen={handleSettingsOpen}
                handleDetailedClose={closeDetailedModal}
                handleRejectVictory={handleRejectVictory}
                handleNotificationsOpen={handleNotificationsOpen}
            />
            <CabinetModal
                maxWidth='xs'
                openDialog={settingsModalOpen}
                handleCloseDialog={handleSettingsClose}
            >
                <ModalContent />
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
                {notification.data?.map(notification => (
                    <Box
                        key={notification.id}
                        mb={1}
                    >
                        <Notification
                            t={t}
                            data={notification}
                            handleDeleteNotification={handleDeleteNotification}
                            fetchUserPhone={fetchUserPhone}
                            phone={phone}
                        />
                    </Box>
                ))}
                {!!notification.data?.length && (
                    <Box display='flex' justifyContent='center'>
                        {pagination}
                    </Box>
                )}
            </CabinetModal>
        </>
    );
};

export default withAuthRedirect(MyAuctionsContainer);