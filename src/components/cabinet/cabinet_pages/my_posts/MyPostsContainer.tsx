import React, {FC, useEffect, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {MyPosts} from '@src/components/cabinet/cabinet_pages/my_posts/MyPosts';
import {withAuthRedirect} from '@src/hoc/withAuthRedirect';
import {userAPI} from '@src/api/api';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {useDispatch} from 'react-redux';
import {useRouter} from 'next/router';
import {
    Avatar,
    Box,
    Checkbox,
    FormControlLabel,
    IconButton,
    List,
    ListItem,
    ListItemText,
    TextField,
    Typography
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useTranslation} from 'next-i18next';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {useStyles} from './useStyles';
import {InitialCabinetCardState, TabsDataType} from '@root/interfaces/Cabinet';
import exp from 'constants';

type userStateType = {
    isFetch: boolean,
    user: {
        id: null,
        name: string,
        surname: string,
        phone: string,
        avatar: string
    }
}

const MyPostsContainer: FC = () => {
    const dispatch = useDispatch();
    const { locale } = useRouter();
    const { t } = useTranslation('cabinet');
    const classes = useStyles();

    const deactivateReasons = {
        soldOnSlondoId: 1,
        archiveId: 2
    };
    const { soldOnSlondoId, archiveId } = deactivateReasons;
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
                        winner: {
                            id: null,
                            name: '',
                            surname: '',
                            phone: '',
                            avatar: '',
                            created_at: ''
                        },
                        number_of_bets: null
                    },
                    author: {
                        id: null,
                        name: '',
                        surname: '',
                        phone: '',
                        avatar: '',
                        created_at: ''
                    },
                    available_days: '',
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
                    number_of_views: null,
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
    const initialUserState: userStateType = {
        isFetch: false,
        user: {
            id: null,
            name: '',
            surname: '',
            phone: '',
            avatar: null
        }
    };
    const [userData, setUserData] = useState(initialUserState);
    const [userPhone, setUserPhone] = useState('998');
    const [postData, setPostData] = useState(initialPostsState);
    const [securePosts, setSecurePosts] = useState(initialPostsState);
    const [tabIndex, setTabIndex] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [modalContentIndex, setModalContentIndex] = useState(1);
    const [reasonId, setReasonId] = useState(null);
    const [postId, setPostId] = useState(null);
    const [toArchive, setToArchive] = useState(false);
    const [errorMsg, setErrMsg] = useState('');

    // const isExtendTime = (expiredDate) => {
    //     const expDate = new Date(expiredDate).getTime() - 3;
    //     return Date.now() >= (expDate)
    //     console.log(Date.now() >= (expDate));
    // };

    // isExtendTime(securePosts.myPosts.data.length && securePosts.myPosts.data[0].expiration_at)

    const handleOpenModal = (postId) => () => {
        setOpenModal(true);
        postId && setPostId(postId);
    };
    const handleCloseModal = () => {
        setOpenModal(false);
        setModalContentIndex(1);
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
    const handleCheckbox = () => {
        setToArchive(!toArchive);
    };
    const handleDeactivate = async () => {
        try {
            await userAPI.deactivateById(postId, reasonId, toArchive);
            setOpenModal(false);
            if (tabIndex === 0) {
                await fetchPostData('post');
            } else {
                await fetchPostData();
            }
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const handleTextField = async ({ target }) => {
        const phone = target.value;
        setUserPhone(phone);
        try {
            if (phone.length === 12) {
                setUserData({ ...userData, isFetch: true });
                const user = await userAPI.getUserByPhoneNumber(phone);
                setUserData({ ...userData, user, isFetch: false });
            }
        } catch (e) {
            setErrMsg(e.message);
        }
    };
    const fetchPostData = async (type = null) => {
        try {
            const isCreatedPost = type === 'post';
            if (isCreatedPost) {
                setPostData({ ...postData, isFetch: true });
                const { data, total } = await userAPI.getMyPosts({ locale });
                setPostData({ myPosts: { data, total }, isFetch: false });
            } else {
                setSecurePosts({ ...postData, isFetch: true });
                const { data, total } = await userAPI.getMyPosts({ onlySecure: 1, locale });
                setSecurePosts({ myPosts: { data, total }, isFetch: false });
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
                                primaryTypographyProps={{ variant: 'subtitle1' }}
                            />
                        </ListItem>
                        <ListItem button>
                            <ListItemText
                                primary="Поднять в ленте"
                                primaryTypographyProps={{ variant: 'subtitle1' }}
                                secondary="(можно использовать 1 раз в 3 дня)"
                                secondaryTypographyProps={{ variant: 'subtitle2' }}
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
                                primaryTypographyProps={{ variant: 'subtitle1' }}
                            />
                        </ListItem>
                        <ListItem
                            button
                            onClick={handleModalContentIndex(5, archiveId)}
                        >
                            <ListItemText
                                primary={t('addToArchive')}
                                primaryTypographyProps={{ variant: 'subtitle1' }}
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
                            {
                                userData.isFetch
                                    ? <Typography>loading...</Typography>
                                    : <>
                                        <Avatar src={userData.user.avatar === null ? '' : userData.user.avatar} />
                                        <Typography variant='subtitle2' noWrap>
                                            {userData.user.name}
                                            {userData.user.surname}
                                        </Typography>
                                    </>
                            }
                        </Box>
                    </Box>
                    <Box
                        display='flex'
                        justifyContent='space-between'
                        mt={1}
                        className={classes.toArchive}
                        width='100%'
                    >
                        <FormControlLabel
                            control={
                                <Checkbox
                                    onChange={handleCheckbox}
                                    checked={toArchive}
                                />}
                            label="Добавить объявление в архив"
                        />
                        <ButtonComponent>
                            <Typography
                                variant="subtitle1"
                                color="initial"
                            >
                                ?
                            </Typography>
                        </ButtonComponent>
                    </Box>
                    <Box
                        mt={1}
                        width='100%'
                        className={classes.submitBtn}
                    >
                        <ButtonComponent onClick={handleDeactivate}>
                            <Typography variant='subtitle1'>Отправить</Typography>
                        </ButtonComponent>
                    </Box>
                </>;
            case 5:
                return <>
                    <Typography variant='h6' className="title">
                        Вы уверены что хотите <br />добавить объявление в архив?
                    </Typography>
                    <Box display='flex' flexDirection='column'>
                        <ButtonComponent onClick={handleDeactivate}>Да</ButtonComponent>
                        <ButtonComponent onClick={handlePrevMenu}>Вернуться</ButtonComponent>
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
                        <ArrowBackIcon fontSize="inherit" />
                    </IconButton>
            }
            {getModalContent()}
        </>
    );

    useEffect(() => {
        fetchPostData('post');
        fetchPostData();
    }, []);

    const tabsData: TabsDataType = [
        {
            id: 0,
            title: t('posts'),
            total: postData.myPosts.total,
            component:
                <MyPosts
                    isFetch={postData.isFetch}
                    list={postData.myPosts.data}
                    ModalContent={ModalContent}
                    handleModalOpen={handleOpenModal}
                    handleModalClose={handleCloseModal}
                    openModal={openModal}
                />
        },
        {
            id: 1,
            title: t('securePosts'),
            total: securePosts.myPosts.total,
            component:
                <MyPosts
                    isFetch={postData.isFetch}
                    list={securePosts.myPosts.data}
                    ModalContent={ModalContent}
                    handleModalOpen={handleOpenModal}
                    handleModalClose={handleCloseModal}
                    openModal={openModal}
                />
        }
    ];

    const title = t('myPosts');

    return (
        <TabsContent
            tabIndex={tabIndex}
            handleTabChange={handleTabChange}
            title={title} tabsData={tabsData}
            headerTitle={title}
        />
    );
};

export default withAuthRedirect(MyPostsContainer);
