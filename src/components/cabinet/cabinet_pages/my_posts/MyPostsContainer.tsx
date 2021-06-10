import React, {FC, useEffect, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {MyPosts} from '@src/components/cabinet/cabinet_pages/my_posts/MyPosts';
import {withAuthRedirect} from '@src/hocs/withAuthRedirect';
import {userAPI} from '@src/api/api';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {useDispatch} from 'react-redux';
import {Avatar, Box, IconButton, List, ListItem, ListItemText, TextField, Typography} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useTranslation} from 'next-i18next';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useStyles} from './useStyles';
import {InitialCabinetCardState, initialUserStateType, TabsDataType} from '@root/interfaces/Cabinet';
import {CardDataType} from '@root/interfaces/CardData';
import {CabinetCard} from '@src/components/cabinet/cabinet_card/CabinetCard';
import {ITEMS_PER_PAGE} from '@src/constants';
import {initialNotificationType} from '@src/components/cabinet/cabinet_pages/notifications/NotificationsContainer';
import {useModal} from '@src/hooks/useModal';
import {DetailedPostView} from '@src/components/cabinet/components/detailed_post_view/DetailedPostView';
import {ResponsiveModal} from '@src/components/elements/responsive_modal/ResponsiveModal';

const MyPostsContainer: FC = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation(['cabinet', 'notifications', 'categories', 'common', 'locations']);
    const classes = useStyles();

    const deactivateReasons = {
        soldOnSlondoId: 1,
        archiveId: 2
    };
    const {soldOnSlondoId, archiveId} = deactivateReasons;
    const initialUserState: initialUserStateType = {
        isFetch: false,
        user: {
            id: null,
            name: '',
            surname: '',
            phone: '',
            avatar: null,
            created_at: '',
            available_days: ''
        }
    };
    const initialPostsState: InitialCabinetCardState = {
        isFetch: false,
        myPosts: {
            total: 0,
            data: [
                {
                    ads_type: '',
                    adsable: {
                        id: null,
                        sub_category: {
                            id: null,
                            name: ''
                        },
                        type: {
                            id: null,
                            name: ''
                        }
                    },
                    auction: {
                        id: null,
                        is_accepted: null,
                        winner: {
                            id: null,
                            name: '',
                            surname: '',
                            phone: '',
                            avatar: null,
                            created_at: '',
                            available_days: ''
                        },
                        number_of_bets: null,
                        winner_id: null
                    },
                    author: {
                        id: null,
                        name: '',
                        surname: '',
                        phone: '',
                        avatar: null,
                        created_at: '',
                        available_days: ''
                    },
                    available_days: [{
                        id: null,
                        name: ''
                    }],
                    available_start_time: '',
                    available_end_time: '',
                    category: {
                        id: null,
                        name: ''
                    },
                    city: {
                        id: null,
                        name: ''
                    },
                    created_at: '',
                    creator: false,
                    currency: {
                        id: null,
                        name: ''
                    },
                    delivery: null,
                    description: '',
                    district: {
                        id: null,
                        name: ''
                    },
                    exchange: null,
                    expiration_at: '',
                    favorite: false,
                    id: null,
                    image: '',
                    price: null,
                    region: {
                        id: null,
                        name: ''
                    },
                    safe_deal: null,
                    status: '',
                    subscribed: false,
                    title: '',
                    user_id: null
                }
            ]
        }
    };
    const initialNotificationState: initialNotificationType = {
        isFetch: false,
        data: []
    };
    const initialSelectedPost: CardDataType = {
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
    const [userData, setUserData] = useState(initialUserState);
    const [userPhone, setUserPhone] = useState('998');
    const [postData, setPostData] = useState(initialPostsState);
    const [securePosts, setSecurePosts] = useState(initialPostsState);
    const [notification, setNotification] = useState(initialNotificationState);
    const [tabIndex, setTabIndex] = useState(0);
    const [modalContentIndex, setModalContentIndex] = useState(1);
    const [reasonId, setReasonId] = useState(null);
    const [postId, setPostId] = useState(null);
    const [errorMsg, setErrMsg] = useState('');
    const [selectedPost, setSelectedPost] = useState(initialSelectedPost);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const {modalOpen: settingsModalOpen, handleModalClose: closeSettingsModal, handleModalOpen: openSettingsModal} = useModal();
    // const {modalOpen: notificationsOpen, handleModalClose: closeNotificationsModal, handleModalOpen: openNotificationsModal} = useModal();
    const {modalOpen: detailedModalOpen, handleModalClose: closeDetailedModal, handleModalOpen: openDetailedModal} = useModal();

    const handleSettingsOpen = (postId: number, post, index: number) => () => {
        openSettingsModal();
        postId && setPostId(postId);
        setModalContentIndex(index);
        setSelectedPost(post);
    };
    const handleSettingsClose = () => {
        closeSettingsModal();
        setModalContentIndex(1);
    };
    const handleDetailedOpen = (postId: number, post) => () => {
        openDetailedModal();
        postId && setPostId(postId);
        setSelectedPost(post);
    };
    const handleModalContentIndex = (index, reasonId?) => () => {
        setModalContentIndex(index);
        reasonId && setReasonId(reasonId);
    };
    const handlePrevMenu = () => {
        const backValue = modalContentIndex === 5 ? 3 : 1;
        setModalContentIndex(modalContentIndex - backValue);
    };
    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };
    const handleTextField = async ({target}) => {
        const phone = target.value;
        setUserPhone(phone);
        try {
            if (phone.length === 12) {
                setUserData({...userData, isFetch: true});
                const user = await userAPI.getUserByPhoneNumber(phone);
                setUserData({...userData, user, isFetch: false});
            }
        } catch (e) {
            setErrMsg(e.message);
        }
    };
    const fetchPostData = async (onlySecure: number) => {
        try {
            if (onlySecure) {
                setSecurePosts({...postData, isFetch: true});
                const {data, total} = await userAPI.getMyPosts({type: 'post', onlySecure});
                setSecurePosts({myPosts: {data, total}, isFetch: false});
            } else {
                setPostData({...postData, isFetch: true});
                const {data, total} = await userAPI.getMyPosts({type: 'post', onlySecure});
                setPostData({myPosts: {data, total}, isFetch: false});
            }
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
                setNotification({...notification, isFetch: true});
                const {data, total} = await userAPI.getNotificationById(params);
                setPageCount(total);
                setSelectedPost({...selectedPost, ...post});
                setNotification({...notification, data, isFetch: false});
            }
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const handleDeactivate = async () => {
        try {
            await userAPI.deactivateById(postId, reasonId);
            closeSettingsModal();
            setModalContentIndex(1);
            if (tabIndex === 0) {
                await fetchPostData(0);
            } else {
                await fetchPostData(1);
            }
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
                            {userData.isFetch
                             ? <Typography>loading...</Typography>
                             : <>
                                 <Avatar src={userData.user.avatar ?? ''}/>
                                 <Typography variant='subtitle2' noWrap>
                                     {userData.user.name}
                                     {userData.user.surname}
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
                 Объявление № {postId}
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
    }, []);

    const myPostCards = postData.myPosts.data.map((data) => (
        <Box mb={3} key={data.id}>
            <CabinetCard
                cardData={data}
                handleSettingsOpen={handleSettingsOpen}
                handleDetailedOpen={handleDetailedOpen}
                fetchAuctionNotifications={fetchNotifications}
            />
        </Box>
    ));

    const securePostCards = securePosts.myPosts.data.map((data) => (
        <Box mb={3} key={data.id}>
            <CabinetCard
                cardData={data}
                handleSettingsOpen={handleSettingsOpen}
                handleDetailedOpen={handleDetailedOpen}
                fetchAuctionNotifications={fetchNotifications}
            />
        </Box>
    ));

    const tabsData: TabsDataType = [
        {
            id: 0,
            title: t('posts'),
            total: postData.myPosts.total,
            itemsPerPage: ITEMS_PER_PAGE,
            handleFetchByPage: null,
            component:
                <MyPosts
                    isFetch={postData.isFetch}
                    myPostCards={myPostCards}
                />
        },
        {
            id: 1,
            title: t('securePosts'),
            total: securePosts.myPosts.total,
            itemsPerPage: ITEMS_PER_PAGE,
            handleFetchByPage: null,
            component:
                <MyPosts
                    isFetch={securePosts.isFetch}
                    myPostCards={securePostCards}
                />
        }
    ];

    return (
        <>
            <TabsContent
                tabIndex={tabIndex}
                handleTabChange={handleTabChange}
                title={t('myPosts')}
                tabsData={tabsData}
                headerTitle={t('myPosts')}
            />
            <ResponsiveModal
                openDialog={settingsModalOpen}
                handleCloseDialog={handleSettingsClose}
            >
                <ModalContent />
            </ResponsiveModal>
            <DetailedPostView
                data={selectedPost}
                detailedModalOpen={detailedModalOpen}
                handleDetailedClose={closeDetailedModal}
            />
        </>
    );
};

export default withAuthRedirect(MyPostsContainer);
