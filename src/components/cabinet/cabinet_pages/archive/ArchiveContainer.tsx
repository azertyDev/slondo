import React, {FC, useEffect, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {Archive} from '@src/components/cabinet/cabinet_pages/archive/Archive';
import {withAuthRedirect} from '@src/hoc/withAuthRedirect';
import {userAPI} from '@src/api/api';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {useRouter} from 'next/router';
import {useDispatch} from 'react-redux';
import {TabsDataType} from '@root/interfaces/CabinetTabs';
import {UserInfo} from '@root/interfaces/Auth';
import {IconButton, List, ListItem, ListItemText, Typography} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useStyles} from '@src/components/cabinet/cabinet_pages/my_posts/useStyles';

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
    const classes = useStyles();
    const initialArchiveState = {
        isFetch: false,
        myArchive: {
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
        const backValue = modalContentIndex === 5 ? 3 : 1;
        setModalContentIndex(modalContentIndex - backValue);
    };
    const handleModalContentIndex = (index) => () => {
        setModalContentIndex(index);
    };

    const fetchArchivePosts = async (type?: string) => {
        try {
            if (tabIndex === 0) {
                setArchivePostsData({ ...archivePostsData, isFetch: true });
                const { data, total } = await userAPI.getUserArchivePosts({ locale });
                setArchivePostsData({ myArchive: { data, total }, isFetch: true });
            } else {
                setArchiveAucData({ ...archiveAucData, isFetch: true });
                const { data, total } = await userAPI.getUserArchivePosts({ type, locale });
                setArchivePostsData({ myArchive: { data, total }, isFetch: true });
            }
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const handleRestorePost = async () => {
        try {
            await userAPI.restoreFromArchive(postId);
            setOpenModal(false);
            await fetchArchivePosts();
            await fetchArchivePosts('auc');
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
                                primary='Восстановить'
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
                            onClick={handleRestorePost}
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

    const tabsData: TabsDataType = [
        {
            id: 0,
            title: 'Объявления',
            total: archivePostsData.myArchive.total,
            component:
                <Archive
                    list={archivePostsData.myArchive.data}
                    isFetch={archivePostsData.isFetch}
                    ModalContent={ModalContent}
                    handleModalOpen={handleOpenModal}
                    handleModalClose={handleCloseModal}
                    openModal={openModal}
                />
        },
        {
            id: 1,
            title: 'Аукционы',
            total: archiveAucData.myArchive.total,
            component:
                <Archive
                    list={archiveAucData.myArchive.data}
                    isFetch={archiveAucData.isFetch}
                    ModalContent={ModalContent}
                    handleModalOpen={handleOpenModal}
                    handleModalClose={handleCloseModal}
                    openModal={openModal}
                />
        }
    ];

    useEffect(() => {
        fetchArchivePosts();
        fetchArchivePosts('auc');
    }, []);

    const title = 'Архив';

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