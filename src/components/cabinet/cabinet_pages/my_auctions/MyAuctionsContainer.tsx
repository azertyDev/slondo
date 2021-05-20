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
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Paper,
    Tab,
    Tabs,
    Typography
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {CardDataType, InitialCabinetCardState, OffersStateType, TabsDataType} from '@root/interfaces/Cabinet.js';
import {useStyles} from './useStyles';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {ChevronRight, CloseIcon, DoneAllIcon} from '@src/components/elements/icons';
import {CabinetCard} from '@src/components/cabinet/cabinet_card/CabinetCard';
import {SecondaryCabinetCard} from '@src/components/cabinet/components/SecondaryCabinetCard';
import {initialStateType} from '@src/components/cabinet/cabinet_pages/notifications/NotificationsContainer';
import {ITEMS_PER_PAGE} from '@src/constants';
import {CustomPagination} from '@src/components/elements/custom_pagination/CustomPagination';
import {CustomTabPanel} from '@src/components/elements/custom_tab_panel/CustomTabPanel';

export const MyAuctionsContainer: FC = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation(['cabinet', 'notifications','categories', 'common', 'locations']);
    const classes = useStyles();

    const initialState: InitialCabinetCardState = {
        isFetch: false,
        myPosts: {
            total: 0,
            data: []
        }
    };
    const initialNotificationState: initialStateType = {
        isFetch: false,
        data: []
    };
    const initialSelectedAuction = {
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
        number_of_views: null,
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
    const [offersData, setOffersData] = useState(initialOffersState);
    const [selectedAuction, setSelectedAuction] = useState<CardDataType>(initialSelectedAuction);
    const [openModal, setOpenModal] = useState(false);
    const [tabIndex, setTabIndex] = useState(0);
    const [modalContentIndex, setModalContentIndex] = useState(1);
    const [showPhone, setShowPhone] = useState(false);
    const [notification, setNotification] = useState(initialNotificationState);
    const [phone, setPhone] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);

    const indexOfLastPost = page * ITEMS_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - ITEMS_PER_PAGE;
    const currentNotifications = notification.data.slice(indexOfFirstPost, indexOfLastPost);
    const [childTabValue, setChildTabValue] = useState(0);

    const handleChildTabChange = (event, newValue) => {
        setChildTabValue(newValue);
    };
    const handlePaginationPage = (event, value) => {
        setPage(value);
    };
    const handleOpenDialog = () => {
        setOpenDialog(!openDialog);
    };
    const fetchAuctionNotifications = (post) => async () => {
        try {
            if (post.id !== selectedAuction.id) {
                setNotification({...notification, isFetch: true});
                const {data} = await userAPI.getNotificationById(post.id);
                setNotification({...notification, data, isFetch: false});
                setSelectedAuction({...selectedAuction, ...post});
                setPageCount(Math.ceil(data.length / ITEMS_PER_PAGE) || 1);
            }
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const handleShowPhone = () => {
        setShowPhone(!showPhone);
    };
    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };
    const handleOpenModal = (auction_id: number, index?: number) => () => {
        setOpenModal(true);
        auction_id && setSelectedAuction({...selectedAuction, id: auction_id});
        setModalContentIndex(index);
    };
    const handleModalClose = () => {
        setOpenModal(false);
    };
    const handlePrevMenu = () => {
        const backValue = modalContentIndex === 5 ? 3 : 1;
        setModalContentIndex(modalContentIndex - backValue);
    };
    const handleModalContentIndex = (index) => () => {
        setModalContentIndex(index);
    };
    const handleDeactivate = (ads_id?: number) => async () => {
        try {
            await userAPI.deactivateById(ads_id);
            setOpenModal(false);
            if (tabIndex === 0) {
                await fetchAuctionData('auc');
            } else {
                await fetchAuctionData();
            }
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const handleAcceptVictory = (auction_id, is_accepted) => async () => {
        try {
            await userAPI.acceptVictory(auction_id, is_accepted);
            if (tabIndex === 0) {
                await fetchAuctionData('auc');
            } else {
                await fetchAuctionData();
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
    const fetchAllOffers = (auction_id: number) => async () => {
        try {
            auction_id && setSelectedAuction({...selectedAuction, id: auction_id});
            setOpenModal(true);
            setModalContentIndex(10);
            setOffersData({...offersData, isFetch: true});
            const {data, total} = await userAPI.getAllOffersById(auction_id);
            setOffersData({...offersData, data, total, isFetch: false});
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const acceptOfferThePrice = (offer_id: number, is_accepted: boolean) => async () => {
        try {
            setOpenModal(false);
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
            setOpenModal(false);
            setModalContentIndex(1);
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
    const fetchUserPhone = (user_id) => async () => {
        try {
            const {phone} = await userAPI.getPhoneByUserId(user_id);
            setPhone(phone);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };
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
                                primaryTypographyProps={{ variant: 'subtitle1' }}
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
            case 10:
                return <Box className='offers-info'>
                    <Box>
                        <Typography variant='h6'>Все предложения</Typography>
                        <Typography variant='subtitle2'>{`Аукцион №: ${selectedAuction.id}`}</Typography>
                    </Box>
                    <Box width={1}>
                        {offersData.data.map(offer => {
                            return (
                                <Box px={5} py={2} display='flex' key={offer.id}>
                                    <Box>
                                        <UserInfoWithAvatar owner={offer.user} isOwner={true}/>
                                    </Box>
                                    <Box>
                                        <Typography variant='subtitle2'>
                                            {offer.created_at}
                                        </Typography>
                                        <div>
                                            <Typography variant='subtitle2'>
                                                Предложенная цена
                                            </Typography>
                                            {offer.price}
                                        </div>
                                        <div>
                                            <CustomButton
                                                className='accept'
                                                onClick={acceptOfferThePrice(offer.id, true)}
                                            >
                                                <DoneAllIcon />
                                                <Typography
                                                    variant="subtitle2"
                                                    color="initial"
                                                >
                                                    Принять
                                                </Typography>
                                            </CustomButton>
                                            <CustomButton
                                                className='decline'
                                                onClick={acceptOfferThePrice(offer.id, false)}
                                            >
                                                <CloseIcon />
                                                <Typography
                                                    variant="subtitle2"
                                                    color="initial"
                                                >
                                                    Отказать
                                                </Typography>
                                            </CustomButton>
                                        </div>
                                    </Box>
                                </Box>
                            );
                        })}
                    </Box>
                </Box>;
            case 11:
                return <Box className={classes.promoteInfo}>
                    <Box mb='20px' textAlign='center'>
                        <Typography variant='h6'>Рекламировать объявление</Typography>
                        <Typography variant='subtitle2'>{`Аукцион №: ${selectedAuction.id}`}</Typography>
                    </Box>
                    <Box mb='20px'>
                        <Paper className='promote-item'>
                            <Box maxWidth='180px'>
                                <Typography variant='h6' gutterBottom>Поднять в топ</Typography>
                                <Typography variant='subtitle1'>Действует 3 дня</Typography>
                                <Typography variant='subtitle2'>
                                    Объявление появляется в ленте в 40 чаще и выделяется анимацией.
                                </Typography>
                                <Typography variant='h5'>60 000 сум</Typography>
                            </Box>
                            <Box display='flex' alignItems='flex-end' width='180px'>
                                <CustomButton>
                                    <Typography variant='subtitle1'>Поднять в ТОП</Typography>
                                    <ChevronRight width='20px' height='20px' />
                                </CustomButton>
                                <img src={'/img/promote-img.jpg'} alt="promote-img" />
                            </Box>
                        </Paper>
                    </Box>
                </Box>;
            default:
                return modalContentIndex;
        }
    };
    const ModalContent = () => (
        <>
            {modalContentIndex === 1
                ? <Typography className="title" variant="h6">
                    Аукцион №: {selectedAuction.id}
                </Typography>
                : (modalContentIndex !== 10 || 11 && (
                        <IconButton
                            className='prev-btn'
                            aria-label="back"
                            size="medium"
                            onClick={handlePrevMenu}
                        >
                            <ArrowBackIcon fontSize="inherit" />
                        </IconButton>
                    )
                )}
            {getModalContent()}
        </>
    );

    const pagination = (
        <CustomPagination
            pageCount={pageCount}
            currentPage={page}
            handlePaginationPage={handlePaginationPage}
        />
    );

    const creatorAuctionCards = auctionData.myPosts.data.map(data => (
        <Box mb={3} key={data.id}>
            <Grid container>
                <Grid item xs={9}>
                    <CabinetCard
                        t={t}
                        cardData={data}
                        handleModalOpen={handleOpenModal}
                        handleOpenDialog={handleOpenDialog}
                        fetchAuctionNotifications={fetchAuctionNotifications}
                    />
                    {data.creator && data.status === 'accepted' && (
                        <Box mt={1}>
                            <CustomButton className='end-auction' onClick={handleDeactivate(data.id)}>
                                <Typography variant='subtitle1'>
                                    Завершить аукцион
                                </Typography>
                            </CustomButton>
                        </Box>
                    )}
                </Grid>
                <Grid item xs={3}>
                    <SecondaryCabinetCard
                        t={t}
                        user={data}
                        offersData={offersData}
                        acceptOfferThePrice={acceptOfferThePrice}
                        fetchAllOffers={fetchAllOffers}
                        handleShowPhone={handleShowPhone}
                        showPhone={showPhone}
                    />
                </Grid>
            </Grid>
        </Box>
    ));

    const participantsAuctionCards = participatingData.myPosts.data.map(data => (
        <Box mb={3} key={data.id}>
            <Grid container>
                <Grid item xs={9}>
                    <CabinetCard
                        t={t}
                        cardData={data}
                        handleModalOpen={handleOpenModal}
                    />
                    {!data.creator && data.status === 'suspended' && (
                        <Box mt={1}>
                            <CustomButton onClick={handleAcceptVictory(data.auction.id, true)}>
                                <Typography variant='subtitle1'>Принять</Typography>
                            </CustomButton>
                            <CustomButton onClick={handleAcceptVictory(data.auction.id, false)}>
                                <Typography variant='subtitle1'>Отказать</Typography>
                            </CustomButton>
                        </Box>
                    )}
                </Grid>
                <Grid item xs={3}>
                    <SecondaryCabinetCard
                        t={t}
                        user={data}
                        handleOpenDialog={handleOpenDialog}
                        handleShowPhone={handleShowPhone}
                        showPhone={showPhone}
                        acceptOfferThePrice={acceptOfferThePrice}
                        fetchAllOffers={fetchAllOffers}
                    />
                </Grid>
            </Grid>
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
                {auctionData.isFetch ? <CircularProgress color="primary" /> : creatorAuctionCards}
            </CustomTabPanel>
            <CustomTabPanel value={childTabValue} index={1}>

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
                {participatingData.isFetch ? <CircularProgress color="primary" /> : participantsAuctionCards}
            </CustomTabPanel>
            <CustomTabPanel value={childTabValue} index={1}>
            </CustomTabPanel>
        </>
    );

    const tabsData: TabsDataType = [
        {
            id: 0,
            title: t('createdAuc'),
            total: auctionData.myPosts.total,
            component:
                <MyAuctions
                    t={t}
                    auctionTabs={createdAuctionTabs}
                    selectedAuction={selectedAuction}
                    openModal={openModal}
                    ModalContent={ModalContent}
                    handleClose={handleModalClose}
                    handleDeleteNotification={handleDeleteNotification}
                    fetchUserPhone={fetchUserPhone}
                    phone={phone}
                    openDialog={openDialog}
                    setOpenDialog={setOpenDialog}
                    pagination={pagination}
                    currentNotifications={currentNotifications}
                />
        },
        {
            id: 1,
            title: t('participatingAuc'),
            total: participatingData.myPosts.total,
            component:
                <MyAuctions
                    t={t}
                    auctionTabs={participatingAuctionTabs}
                    openModal={openModal}
                    ModalContent={ModalContent}
                    handleClose={handleModalClose}
                />
        }
    ];

    useEffect(() => {
        fetchAuctionData('auc');
        fetchAuctionData();
    }, []);

    return (
        <TabsContent
            tabIndex={tabIndex}
            handleTabChange={handleTabChange}
            title={t('myAuctions')}
            tabsData={tabsData}
            headerTitle={t('myAuctions')}
        />
    );
};

export default withAuthRedirect(MyAuctionsContainer);
