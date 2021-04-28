import React, {FC, useEffect, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {Archive} from '@src/components/cabinet/cabinet_pages/archive/Archive';
import {withAuthRedirect} from '@src/hoc/withAuthRedirect';
import {userAPI} from '@src/api/api';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {useDispatch} from 'react-redux';
import {UserInfo} from '@root/interfaces/Auth';
import {Box, Grid, IconButton, List, ListItem, ListItemText, Typography} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useTranslation} from 'next-i18next';
import {useStyles} from '@src/components/cabinet/cabinet_pages/archive/useStyles';
import {InitialCabinetCardState, InitValuesType, TabsDataType} from '@root/interfaces/Cabinet';
import {CabinetCard} from '@src/components/cabinet/cabinet_card/CabinetCard';
import {SecondaryCabinetCard} from '@src/components/cabinet/components/SecondaryCabinetCard';
import {ButtonComponent} from '@src/components/elements/button/Button';

const ArchiveContainer: FC = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation('cabinet');
    const classes = useStyles();

    const initialValues: InitValuesType = {id: null, name: ''};
    const initialUserInfo: UserInfo = {
        id: null,
        name: '',
        surname: '',
        phone: '',
        avatar: '',
        created_at: '',
        available_days: '',
        available_start_time: '',
        available_end_time: ''
    };
    const initialArchiveState: InitialCabinetCardState = {
        isFetch: false,
        myPosts: {
            total: 0,
            data: [
                {
                    ads_type: '',
                    adsable: {
                        id: null,
                        sub_category: initialValues,
                        type: initialValues
                    },
                    auction: {
                        id: null,
                        winner: initialUserInfo,
                        number_of_bets: null,
                        is_accepted: null,
                        winner_id: null,
                        number_of_offers: null,
                        offer: null
                    },
                    author: initialUserInfo,
                    available_days: [{
                        id: null,
                        name: ''
                    }],
                    category: initialValues,
                    city: initialValues,
                    created_at: '',
                    creator: false,
                    currency: initialValues,
                    delivery: null,
                    description: '',
                    district: initialValues,
                    exchange: null,
                    expiration_at: '',
                    favorite: false,
                    id: null,
                    image: '',
                    number_of_views: null,
                    price: null,
                    region: initialValues,
                    safe_deal: null,
                    status: '',
                    subscribed: false,
                    title: '',
                    user_id: null
                }
            ]
        }
    };

    const [tabIndex, setTabIndex] = useState(0);
    const [archivePostsData, setArchivePostsData] = useState(initialArchiveState);
    const [archiveAucData, setArchiveAucData] = useState(initialArchiveState);
    const [openModal, setOpenModal] = useState(false);
    const [modalContentIndex, setModalContentIndex] = useState(1);
    const [postId, setPostId] = useState(null);

    const handleOpenModal = (postId: number, index?: number) => () => {
        setOpenModal(true);
        setModalContentIndex(index);
        postId && setPostId(postId);
    };
    const handleCloseModal = () => {
        setOpenModal(false);
    };
    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };
    const handlePrevMenu = () => {
        const backValue = modalContentIndex === 5 ? 4 : 1;
        setModalContentIndex(modalContentIndex - backValue);
    };
    const handleModalContentIndex = (index) => () => {
        setModalContentIndex(index);
    };
    const fetchArchivePosts = async (type: string) => {
        const isPostType = type === 'post';
        const stateByType = isPostType ? archivePostsData : archiveAucData;
        const setStateByType = isPostType ? setArchivePostsData : setArchiveAucData;
        try {
            setStateByType({ ...stateByType, isFetch: true });
            const { data, total } = await userAPI.getUserArchivePosts({ type });
            setStateByType({ myPosts: { data, total }, isFetch: false });
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const handleRestorePost = (type: string) => async () => {
        try {
            setOpenModal(false);
            await userAPI.restoreFromArchive(postId);
            await fetchArchivePosts(type);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const handleDeletePost = (type?: string) => async () => {
        try {
            setOpenModal(false);
            await userAPI.deleteArchivePost(postId);
            await fetchArchivePosts(type);
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
                                onClick={handleModalContentIndex(5)}
                            >
                                <ListItemText
                                    primary='Удалить'
                                    primaryTypographyProps={{ variant: 'subtitle1' }}
                                />
                            </ListItem>
                    </List>
                </>;
            case 2:
                return <>
                    <Typography className="title" variant="h6">
                        Подтвердите восстановление
                    </Typography>
                    <List
                        component="nav"
                        aria-label="main"
                        className={classes.settingsList}
                        disablePadding
                    >
                        <ListItem
                            button
                            onClick={handleRestorePost('post')}
                        >
                            <ListItemText
                                primary='Да'
                                primaryTypographyProps={{ variant: 'subtitle1' }}
                            />
                        </ListItem>
                        <ListItem
                            button
                            onClick={handleCloseModal}
                        >
                            <ListItemText
                                primary='Нет'
                                primaryTypographyProps={{ variant: 'subtitle1' }}
                            />
                        </ListItem>
                    </List>
                </>;
            case 5:
                return <>
                    <Typography className="title" variant="h6">
                        Подтвердите удаление
                    </Typography>
                    <List
                        component="nav"
                        aria-label="main"
                        className={classes.settingsList}
                        disablePadding
                    >
                        <ListItem
                            button
                            onClick={handleDeletePost('post')}
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
                                primaryTypographyProps={{ variant: 'subtitle1' }}
                            />
                        </ListItem>
                    </List>
                </>;
        }
    };
    const ModalContent = () => (
        <>
            {modalContentIndex === 1
                ? (
                    <Typography className="title" variant="h6">
                        Объявление № {postId}
                    </Typography>
                )
                : (modalContentIndex === 5 && (
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

    const archivePostCard = archivePostsData.myPosts.data.map(data => (
        <Box mb={3} key={data.id}>
            <Grid container>
                <Grid item xs={9}>
                    <CabinetCard
                        cardData={data}
                        handleModalOpen={handleOpenModal}
                    />
                    {data.status !== 'sold' && (
                        <Box mt={1}>
                            <ButtonComponent
                                className={classes.submitBtn}
                                onClick={handleOpenModal(data.id, 2)}
                            >
                                <Typography variant='subtitle1'>
                                    Восстановить объявление
                                </Typography>
                            </ButtonComponent>
                        </Box>
                    )}
                </Grid>
            </Grid>
        </Box>
    ));

    const archiveAucCard = archiveAucData.myPosts.data.map(data => (
        <Box mb={3} key={data.id}>
            <Grid container>
                <Grid item xs={9}>
                    <CabinetCard
                        cardData={data}
                        handleModalOpen={handleOpenModal}
                    />
                </Grid>
                <Grid item xs={3}>
                    <SecondaryCabinetCard
                        user={data}
                    />
                </Grid>
            </Grid>
        </Box>
    ));

    const tabsData: TabsDataType = [
        {
            id: 0,
            title: t('posts'),
            total: archivePostsData.myPosts.total,
            component:
                <Archive
                    ModalContent={ModalContent}
                    handleModalClose={handleCloseModal}
                    openModal={openModal}
                    archiveCard={archivePostCard}
                />
        },
        {
            id: 1,
            title: t('auctions'),
            total: archiveAucData.myPosts.total,
            component:
                <Archive
                    ModalContent={ModalContent}
                    handleModalClose={handleCloseModal}
                    openModal={openModal}
                    archiveCard={archiveAucCard}
                />
        }
    ];

    useEffect(() => {
        fetchArchivePosts('post');
        fetchArchivePosts('auc');
    }, []);

    const title = t('archive');

    return (
        <TabsContent
            tabIndex={tabIndex}
            handleTabChange={handleTabChange}
            title={title}
            tabsData={tabsData}
            headerTitle={title}
        />
    );
};

export default withAuthRedirect(ArchiveContainer);