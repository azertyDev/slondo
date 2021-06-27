import {FC, useEffect, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {withAuthRedirect} from '@src/hocs/withAuthRedirect';
import {userAPI} from '@src/api/api';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {useDispatch} from 'react-redux';
import {
    Avatar,
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
    TextField,
    Typography
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useTranslation} from 'next-i18next';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {InitialCabinetCardState, TabsDataType} from '@root/interfaces/Cabinet';
import {CardDataType} from '@root/interfaces/CardData';
import {CabinetCard} from '@src/components/cabinet/components/cabinet_card/CabinetCard';
import {ITEMS_PER_PAGE} from '@src/constants';
import {initialNotificationType} from '@src/components/cabinet/cabinet_pages/notifications/NotificationsContainer';
import {useModal} from '@src/hooks/useModal';
import {DetailedPostView} from '@src/components/cabinet/components/detailed_post_view/DetailedPostView';
import {CabinetModal} from '@src/components/cabinet/components/cabinet_modal/CabinetModal';
import {Notification} from '@src/components/cabinet/cabinet_pages/notifications/notification_card/Notification';
import {CustomPagination} from '@src/components/elements/custom_pagination/CustomPagination';
import {CustomTabPanel} from '@src/components/elements/custom_tab_panel/CustomTabPanel';
import {UserInfo} from '@root/interfaces/Auth';
import {useStyles} from './useStyles';

export const initialCardData: CardDataType = {
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
        number_of_notifications: 0,
        number_of_favorites: 0,
        number_of_views: 0
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

const MyPosts: FC = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation(['cabinet', 'notifications', 'categories', 'common', 'locations']);
    const classes = useStyles();

    const deactivateReasons = {
        soldOnSlondoId: 1,
        archiveId: 2
    };
    const {soldOnSlondoId, archiveId} = deactivateReasons;
    const initialUserState: UserInfo = {
        id: null,
        name: '',
        surname: '',
        phone: '',
        avatar: null,
        created_at: '',
        available_days: ''
    };
    const initialPostsState: InitialCabinetCardState = {
        total: 0,
        data: []
    };

    const [isFetch, setIsFetch] = useState(false);
    const [userData, setUserData] = useState(initialUserState);
    const [userPhone, setUserPhone] = useState('998');
    const [postData, setPostData] = useState(initialPostsState);
    const [securePosts, setSecurePosts] = useState(initialPostsState);
    const [archiveSecurePostData, setArchiveSecurePostData] = useState(initialPostsState);
    const [archivePostData, setArchivePostData] = useState(initialPostsState);
    const [notification, setNotification] = useState<initialNotificationType[]>([]);
    const [tabIndex, setTabIndex] = useState(0);
    const [modalContentIndex, setModalContentIndex] = useState(1);
    const [reasonId, setReasonId] = useState(null);
    const [postId, setPostId] = useState(null);
    const [phone, setPhone] = useState(null);
    const [errorMsg, setErrMsg] = useState('');
    const [selectedPost, setSelectedPost] = useState(initialCardData);
    const [page, setPage] = useState(1);
    const [itemsCount, setItemsCount] = useState(0);
    const [childTabValue, setChildTabValue] = useState(0);

    const {modalOpen: settingsModalOpen, handleModalClose: closeSettingsModal, handleModalOpen: openSettingsModal} = useModal();
    const {modalOpen: notificationsOpen, handleModalClose: closeNotificationsModal, handleModalOpen: openNotificationsModal} = useModal();
    const {modalOpen: detailedModalOpen, handleModalClose: closeDetailedModal, handleModalOpen: openDetailedModal} = useModal();

    const handleSettingsOpen = (postId: number, post, index: number) => () => {
        openSettingsModal();
        closeDetailedModal();
        postId && setPostId(postId);
        setModalContentIndex(index);
        setSelectedPost(post);
    };
    const handleSettingsClose = () => {
        closeSettingsModal();
        setModalContentIndex(1);
    };
    const handleDetailedOpen = (postId: number, post) => () => {
        postId && setPostId(postId);
        setSelectedPost(post);
        openDetailedModal();
    };
    const handleChildTabChange = (event, newValue) => {
        setChildTabValue(newValue);
    };
    const handleNotificationsOpen = (postId: number) => () => {
        postId && setPostId(postId);
        openNotificationsModal();
        closeDetailedModal();
    };
    const handleModalContentIndex = (index, reasonId?) => () => {
        setModalContentIndex(index);
        reasonId && setReasonId(reasonId);
    };
    const handlePrevMenu = () => {
        const backValue = modalContentIndex === 5 ? 3 : 1;
        setModalContentIndex(modalContentIndex - backValue);
    };
    const handlePagePagination = (event, value) => {
        setPage(value);
    };
    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };
    const handleTextField = async ({target}) => {
        const phone = target.value;
        setUserPhone(phone);
        try {
            if (phone.length === 12) {
                setIsFetch(true);
                const user = await userAPI.getUserByPhoneNumber(phone);
                setUserData(user);
                setIsFetch(false);
            }
        } catch (e) {
            setErrMsg(e.message);
        }
    };
    const fetchPostData = async (secure: number) => {
        try {
            const params = {
                type: 'post',
                archive: 0,
                secure
            };

            setIsFetch(true);

            const {data, total} = await userAPI.getMyPosts(params);

            secure ? setSecurePosts({data, total}) : setPostData({data, total});
            setIsFetch(false);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const fetchArchivePosts = async (secure: number) => {
        try {
            const params = {
                type: 'post',
                archive: 1,
                secure
            };
            setIsFetch(true);

            const {data, total} = await userAPI.getMyPosts(params);

            secure ? setArchiveSecurePostData({data, total}) : setArchivePostData({data, total});
            setIsFetch(false);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const fetchNotifications = post => async () => {
        try {
            if (post.id !== selectedPost.id) {
                const params = {
                    page,
                    itemsPerPage: ITEMS_PER_PAGE,
                    ads_id: post.id
                };
                setIsFetch(true);

                const {data, total} = await userAPI.getNotificationById(params);

                setItemsCount(total);
                setNotification(data);
                setSelectedPost({...selectedPost, ...post});
                setIsFetch(false);
            }
        } catch (e) {
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
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const handleDeactivate = async () => {
        try {
            setIsFetch(true);

            await userAPI.deactivateById(postId, reasonId);

            closeSettingsModal();
            setModalContentIndex(1);

            tabIndex === 0 ? await fetchPostData(0) : await fetchPostData(1);

            setIsFetch(false);
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
                            onClick={handleModalContentIndex(2)}
                        >
                            <ListItemText
                                primary='Деактивировать'
                                primaryTypographyProps={{variant: 'subtitle1'}}
                            />
                        </ListItem>
                        <ListItem button>
                            <ListItemText
                                primary="Поднять в ленте"
                                primaryTypographyProps={{variant: 'subtitle1'}}
                                secondary="(можно использовать 3 раза неделю)"
                                secondaryTypographyProps={{variant: 'subtitle2'}}
                            />
                        </ListItem>
                    </List>
                </>;
            case 2:
                return <>
                    <Typography variant='h6' className="title">
                        Деактивация
                    </Typography>
                    <List
                        component="nav"
                        aria-label="main"
                        className={classes.settingsList}
                        disablePadding
                    >
                        <ListItem
                            button
                            onClick={handleModalContentIndex(3, soldOnSlondoId)}
                        >
                            <ListItemText
                                primary={t('sold_on_slondo')}
                                primaryTypographyProps={{variant: 'subtitle1'}}
                            />
                        </ListItem>
                        <ListItem
                            button
                            onClick={handleModalContentIndex(5, archiveId)}
                        >
                            <ListItemText
                                primary={t('addToArchive')}
                                primaryTypographyProps={{variant: 'subtitle1'}}
                            />
                        </ListItem>
                    </List>
                </>;
            case 3:
                return <>
                    <Typography
                        variant='h6'
                        className="title"
                        onClick={handleModalContentIndex(3)}
                    >
                        Продал на Slondo
                    </Typography>
                    <Box
                        display='flex'
                        justifyContent='space-between'
                        className={classes.userPhoneAndData}
                        mt={3}
                        width='100%'
                    >
                        <TextField
                            id="outlined-helperText"
                            label="Номер покупателя"
                            value={userPhone}
                            onChange={handleTextField}
                            helperText={errorMsg !== '' ? errorMsg : '(Нажмите отправить если не знаете номер)'}
                            variant="outlined"
                        />
                        <Box className={classes.userData}>
                            {isFetch
                             ? <Typography>loading...</Typography>
                             : <>
                                 <Avatar src={userData.avatar ?? ''}/>
                                 <Typography variant='subtitle2' noWrap>
                                     {userData.name}
                                     {userData.surname}
                                 </Typography>
                             </>}
                        </Box>
                    </Box>
                    <Box
                        mt={1}
                        width='100%'
                    >
                        <CustomButton onClick={handleDeactivate} className={classes.submitBtn}>
                            <Typography variant='subtitle1'>Отправить</Typography>
                        </CustomButton>
                    </Box>
                </>;
            case 5:
                return <>
                    <Typography variant='h6' className="title">
                        Вы уверены что хотите <br/>добавить объявление в архив?
                    </Typography>
                    <Box display='flex' flexDirection='column'>
                        <CustomButton onClick={handleDeactivate}>Да</CustomButton>
                        <CustomButton onClick={handlePrevMenu}>Вернуться</CustomButton>
                    </Box>
                </>;
        }
    };
    const ModalContent = () => (
        <>
            {modalContentIndex === 1
             ? <Typography className="title" variant="h6">
                 {`${t(`common:${selectedPost.ads_type}`)} №: ${selectedPost.id}`}
             </Typography>
             : modalContentIndex === 5
               ? null
               : <IconButton
                   className='prev-btn'
                   aria-label="back"
                   size="medium"
                   onClick={handlePrevMenu}
               >
                   <ArrowBackIcon fontSize="inherit"/>
               </IconButton>
            }
            {getModalContent()}
        </>
    );

    useEffect(() => {
        fetchPostData(0);
        fetchPostData(1);
        fetchArchivePosts(0);
        fetchArchivePosts(1);
    }, []);

    const myPostCards = postData.data.map((data) => (
        <Box mb={3} key={data.id}>
            <CabinetCard
                cardData={data}
                handleSettingsOpen={handleSettingsOpen}
                handleDetailedOpen={handleDetailedOpen}
                handleNotificationsOpen={handleNotificationsOpen}
                fetchAuctionNotifications={fetchNotifications}
            />
        </Box>
    ));

    const securePostCards = securePosts.data.map((data) => (
        <Box mb={3} key={data.id}>
            <CabinetCard
                cardData={data}
                handleSettingsOpen={handleSettingsOpen}
                handleDetailedOpen={handleDetailedOpen}
                handleNotificationsOpen={handleNotificationsOpen}
                fetchAuctionNotifications={fetchNotifications}
            />
        </Box>
    ));

    const archivePostCards = archivePostData.data.map((data) => (
        <Box mb={3} key={data.id}>
            <CabinetCard
                archive
                cardData={data}
                handleSettingsOpen={handleSettingsOpen}
                handleDetailedOpen={handleDetailedOpen}
                handleNotificationsOpen={handleNotificationsOpen}
                fetchAuctionNotifications={fetchNotifications}
            />
        </Box>
    ));

    const archiveSecurePostCards = archiveSecurePostData.data.map((data) => (
        <Box mb={3} key={data.id}>
            <CabinetCard
                archive
                cardData={data}
                handleSettingsOpen={handleSettingsOpen}
                handleDetailedOpen={handleDetailedOpen}
                handleNotificationsOpen={handleNotificationsOpen}
                fetchAuctionNotifications={fetchNotifications}
            />
        </Box>
    ));

    const postTabs = (
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
                {isFetch ? <CircularProgress color="primary"/> : myPostCards}
            </CustomTabPanel>
            <CustomTabPanel value={childTabValue} index={1}>
                {isFetch ? <CircularProgress color="primary"/> : archivePostCards}
            </CustomTabPanel>
        </>
    );

    const securePostTabs = (
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
                {isFetch ? <CircularProgress color="primary"/> : securePostCards}
            </CustomTabPanel>
            <CustomTabPanel value={childTabValue} index={1}>
                {isFetch ? <CircularProgress color="primary"/> : archiveSecurePostCards}
            </CustomTabPanel>
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

    const tabsData: TabsDataType = [
        {
            id: 0,
            title: t('posts'),
            total: postData.total,
            itemsPerPage: ITEMS_PER_PAGE,
            handleFetchByTab: null,
            component: postTabs
            // <MyPosts
            //     isFetch={postData.isFetch}
            //     myPostCards={myPostCards}
            // />
        },
        {
            id: 1,
            title: t('securePosts'),
            total: securePosts.total,
            itemsPerPage: ITEMS_PER_PAGE,
            handleFetchByTab: null,
            component: securePostTabs
            // <MyPosts
            //     isFetch={securePosts.isFetch}
            //     myPostCards={securePostCards}
            // />
        }
    ];

    return (
        <>
            <TabsContent
                tabsData={tabsData}
                tabIndex={tabIndex}
                title={t('myPosts')}
                headerTitle={t('myPosts')}
                handleTabChange={handleTabChange}
            />
            {/* Modals */}
            <CabinetModal
                maxWidth='xs'
                fullWidth={false}
                openDialog={settingsModalOpen}
                handleCloseDialog={handleSettingsClose}
            >
                <ModalContent/>
            </CabinetModal>
            <DetailedPostView
                data={selectedPost}
                detailedModalOpen={detailedModalOpen}
                handleSettingsOpen={handleSettingsOpen}
                handleDetailedClose={closeDetailedModal}
                handleNotificationsOpen={handleNotificationsOpen}
            />
            <CabinetModal
                openDialog={notificationsOpen}
                handleCloseDialog={closeNotificationsModal}
            >
                <Box
                    display='flex'
                    justifyContent='center'
                >
                    <Typography variant='subtitle1'>
                        Уведомления (история)
                    </Typography>
                </Box>
                <Box
                    display='flex'
                    flexDirection='row'
                    justifyContent='space-between'
                    alignItems='center'
                >
                    <Typography>
                        {`${t(`common:${selectedPost.ads_type}`)} №: ${selectedPost.id}`}
                    </Typography>
                    <FormControlLabel
                        control={
                            <Switch
                                // checked={state.checkedA}
                                // onChange={handleChange}
                                name="checkedA"
                                color='secondary'
                            />
                        }
                        label="Уведомлять меня"
                        labelPlacement="start"
                    />
                </Box>
                {notification?.map(notification => (
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
                {!!notification?.length && (
                    <Box display='flex' justifyContent='center'>
                        {pagination}
                    </Box>
                )}
            </CabinetModal>
        </>
    );
};

export default withAuthRedirect(MyPosts);
