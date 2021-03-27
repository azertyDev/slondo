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
import {useStyles} from './useStyles';
import {useTranslation} from 'next-i18next';
import {ButtonComponent} from '@src/components/elements/button/Button';

const deactivateReasons = {
    soldOnSlondoId: 1,
    archiveId: 2
};

const MyPostsContainer: FC = () => {
    const dispatch = useDispatch();
    const { locale } = useRouter();
    const { t } = useTranslation('cabinet');
    const { soldOnSlondoId, archiveId } = deactivateReasons;
    const classes = useStyles();

    const initialState = {
        isFetch: false,
        myPosts: {
            total: 0,
            data: []
        },
        securePosts: {
            total: 0,
            data: []
        }
    };
    const [postData, setPostData] = useState(initialState);
    const [tabIndex, setTabIndex] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [modalContentIndex, setModalContentIndex] = useState(1);
    const [reasonId, setReasonId] = useState(null);
    const [postId, setPostId] = useState(null);
    const [toArchive, setToArchive] = useState(false);

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
        await userAPI.deactivateById(postId, reasonId, toArchive);
        setOpenModal(false);
    };

    const fetchPostData = async (type) => {
        try {
            const { myPosts, securePosts } = postData;
            const isCreatedPost = type === 'post';

            postData.isFetch = true;
            setPostData({ ...postData });

            const myPostsData = await userAPI.getMyPosts(locale, type);
            const securePostsData = await userAPI.getSecurePosts(locale, type);

            postData.isFetch = true;

            if (isCreatedPost) {
                myPosts.data = myPostsData.data;
                myPosts.total = myPostsData.total;
            } else {
                securePosts.data = securePostsData.data;
                securePosts.total = securePostsData.total;
            }

            setPostData({ ...postData });
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
                                primary={t('sold_slondo')}
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
                        width="100%"

                    >
                        <TextField
                            label="Укажите номер покупателя"
                            id="outlined"
                            defaultValue="+998"
                            helperText="(Нажмите отправить если не знаете номер)"
                            variant="outlined"
                        />
                        <Box className={classes.userData}>
                            <Avatar src='' />
                            <Typography variant='subtitle2'>
                                Умид Хикматов
                            </Typography>
                        </Box>
                        <Box>
                            <ButtonComponent color='primary'>
                                Отправить
                            </ButtonComponent>
                        </Box>
                    </Box>
                    <Box>
                        <FormControlLabel
                            control={<Checkbox onChange={handleCheckbox} />}
                            label="Добавить объявление в архив"
                        />
                    </Box>
                </>;
            case 5:
                return <>
                    <Typography variant='h6' className="title">
                        Вы уверены что хотите <br />добавить объявление в архив?
                    </Typography>
                    <Box display='flex' flexDirection='column'>
                        <ButtonComponent color="primary" onClick={handleDeactivate}>Да</ButtonComponent>
                        <ButtonComponent color="primary" onClick={handlePrevMenu}>Вернуться</ButtonComponent>
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
                : <IconButton
                    className='prev-btn'
                    aria-label="back"
                    size="medium"
                    onClick={handlePrevMenu}
                >
                    <ArrowBackIcon fontSize="inherit" />
                </IconButton>}
            {getModalContent()}
        </>
    );

    const tabsData = [
        {
            id: 0,
            title: 'Объявления',
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
            title: 'Безопасная покупка',
            total: postData.securePosts.total,
            component:
                <MyPosts
                    isFetch={postData.isFetch}
                    list={postData.securePosts.data}
                    ModalContent={ModalContent}
                    handleModalOpen={handleOpenModal}
                    handleModalClose={handleCloseModal}
                    openModal={openModal}
                />
        }
    ];

    useEffect(() => {
        fetchPostData('post');
    }, []);

    const title = 'Мои объявления';
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
