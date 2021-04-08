import React, {FC, useEffect, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {Archive} from '@src/components/cabinet/cabinet_pages/archive/Archive';
import {withAuthRedirect} from '@src/hoc/withAuthRedirect';
import {userAPI} from '@src/api/api';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {useRouter} from 'next/router';
import {useDispatch} from 'react-redux';
import {UserInfo} from '@root/interfaces/Auth';
import {IconButton, List, ListItem, ListItemText, Typography} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useTranslation} from 'next-i18next';
import {useStyles} from '@src/components/cabinet/cabinet_pages/my_posts/useStyles';
import {InitialCabinetCardState, TabsDataType} from '@root/interfaces/Cabinet';


export type ArchivePostData = {
    id: number;
    title: string;
    safe_deal: number;
    price: string;
    number_of_views?: number;
    region: {
        id: number;
        name: string;
    };
    city: {
        id: number;
        name: string;
    };
    district?: {
        id: number;
        name: string;
    };
    currency: {
        id: number;
        name: string;
    };
    image: string;
    category?: {
        id: number;
        name: string;
        mark: string;
    };
    sub_category_id?: number;
    ads_type: string;
    created_at: string;
    delivery: number;
    exchange: number;
    accepted?: boolean;
    expected?: boolean;
    denied?: boolean;
    promote?: boolean;
    raise?: boolean;
    raiseInRape?: boolean;
    isModerated?: boolean;
    follow?: boolean;
    favorite?: boolean;
    completePurchase?: boolean;
    creator: UserInfo
};

const ArchiveContainer: FC = () => {
    const dispatch = useDispatch();
    const { locale } = useRouter();
    const { t } = useTranslation('cabinet');
    const classes = useStyles();

    const initialArchiveState: InitialCabinetCardState = {
        isFetch: false,
        myPosts: {
            total: 0,
            data: []
        }
    };
    const [tabIndex, setTabIndex] = useState(0);
    const [archivePostsData, setArchivePostsData] = useState(initialArchiveState);
    const [archiveAucData, setArchiveAucData] = useState(initialArchiveState);
    const [openModal, setOpenModal] = useState(false);
    const [modalContentIndex, setModalContentIndex] = useState(1);
    const [postId, setPostId] = useState(null);

    const handleOpenModal = (postId) => () => {
        setOpenModal(true);
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
            const { data, total } = await userAPI.getUserArchivePosts({ type, locale });
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
                        {tabIndex !== 0 && (
                            <ListItem
                                button
                                onClick={handleModalContentIndex(2)}
                            >
                                <ListItemText
                                    primary='Восстановить'
                                    primaryTypographyProps={{ variant: 'subtitle1' }}
                                />
                            </ListItem>
                        )}
                        {tabIndex === 0 && (
                            <ListItem
                                button
                                onClick={handleModalContentIndex(5)}
                            >
                                <ListItemText
                                    primary='Удалить'
                                    primaryTypographyProps={{ variant: 'subtitle1' }}
                                />
                            </ListItem>
                        )}
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
                            onClick={handlePrevMenu}
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

    const tabsData: TabsDataType = [
        {
            id: 0,
            title: t('posts'),
            total: archivePostsData.myPosts.total,
            component:
                <Archive
                    list={archivePostsData.myPosts.data}
                    isFetch={archivePostsData.isFetch}
                    ModalContent={ModalContent}
                    handleModalOpen={handleOpenModal}
                    handleModalClose={handleCloseModal}
                    openModal={openModal}
                />
        },
        {
            id: 1,
            title: t('auctions'),
            total: archiveAucData.myPosts.total,
            component:
                <Archive
                    list={archiveAucData.myPosts.data}
                    isFetch={archiveAucData.isFetch}
                    ModalContent={ModalContent}
                    handleModalOpen={handleOpenModal}
                    handleModalClose={handleCloseModal}
                    openModal={openModal}
                />
        }
    ];

    console.log('archivePostsData ', archivePostsData);
    console.log('archiveAucData ', archiveAucData);

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