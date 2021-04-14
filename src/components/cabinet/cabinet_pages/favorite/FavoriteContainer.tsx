import React, {FC, useEffect, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {Favorite} from '@src/components/cabinet/cabinet_pages/favorite/Favorite';
import {withAuthRedirect} from '@root/src/hoc/withAuthRedirect';
import {userAPI} from '@src/api/api';
import {useDispatch} from 'react-redux';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {useRouter} from 'next/router';
import {IconButton, List, ListItem, ListItemText, Typography} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useStyles} from './useStyles';
import {InitialCabinetCardState, TabsDataType} from '@root/interfaces/Cabinet';
import {useTranslation} from 'next-i18next';

const FavoriteContainer: FC = () => {
    const dispatch = useDispatch();
    const { locale } = useRouter();
    const { t } = useTranslation('cabinet');
    const classes = useStyles();

    const initialFavoriteState: InitialCabinetCardState = {
        isFetch: false,
        myPosts: {
            total: 0,
            data: []
        }
    };
    const [favoritePostData, setFavoritePostData] = useState(initialFavoriteState);
    const [favoriteAucData, setFavoriteAucData] = useState(initialFavoriteState);
    const [selectedFavoriteId, setSelectedFavoriteId] = useState<number>(null);
    const [openModal, setOpenModal] = useState(false);
    const [tabIndex, setTabIndex] = useState(0);
    const [modalContentIndex, setModalContentIndex] = useState(1);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };
    const handleModalOpen = (id: number) => () => {
        setOpenModal(true);
        setSelectedFavoriteId(id);
    };
    const handleModalClose = () => {
        setOpenModal(false);
    };
    const handlePrevMenu = () => {
        const backValue = modalContentIndex === 5 ? 3 : 1;
        setModalContentIndex(modalContentIndex - backValue);
    };
    const fetchFavoriteData = async (type) => {
        try {
            const isPost = type === 'post';
            if (isPost) {
                setFavoritePostData({ ...favoritePostData, isFetch: true });
                const { data, total } = await userAPI.getFavorites({ locale });
                setFavoritePostData({ myPosts: { data, total }, isFetch: false });
            } else {
                setFavoriteAucData({ ...favoriteAucData, isFetch: true });
                const { data, total } = await userAPI.getFavorites({ type, locale });
                setFavoriteAucData({ myPosts: { data, total }, isFetch: false });
            }
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const handleRemoveFavorite = async () => {
        try {
            await userAPI.favoriteAds(selectedFavoriteId);
            if (tabIndex === 0) {
                await fetchFavoriteData('post');
            } else {
                await fetchFavoriteData('auc');
            }
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
        setOpenModal(false);
    };
    const getModalContent = () => {
        switch (modalContentIndex) {
            case 1:
                return <>
                    <Typography className="title" variant="h6">
                        Подтвердите
                    </Typography>
                    <List
                        component="nav"
                        aria-label="main"
                        className={classes.settingsList}
                        disablePadding
                    >
                        <ListItem
                            button
                            onClick={handleRemoveFavorite}
                        >
                            <ListItemText
                                primary='Да'
                                primaryTypographyProps={{ variant: 'subtitle1' }}
                            />
                        </ListItem>
                        <ListItem
                            button
                            onClick={handleModalClose}
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
                    Объявление № {selectedFavoriteId}
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
        fetchFavoriteData('post');
        fetchFavoriteData('auc');
    }, []);

    const tabsData: TabsDataType = [
        {
            id: 0,
            title: t('posts'),
            total: favoritePostData.myPosts.total,
            component: (
                <Favorite
                    isFetch={favoritePostData.isFetch}
                    list={favoritePostData.myPosts.data}
                    handleClose={handleModalClose}
                    handleModalOpen={handleModalOpen}
                    openModal={openModal}
                    ModalContent={ModalContent}
                />
            )
        },
        {
            id: 1,
            title: t('auctions'),
            total: favoriteAucData.myPosts.total,
            component: (
                <Favorite
                    isFetch={favoriteAucData.isFetch}
                    list={favoriteAucData.myPosts.data}
                    handleClose={handleModalClose}
                    handleModalOpen={handleModalOpen}
                    openModal={openModal}
                    ModalContent={ModalContent}
                />
            )
        }
    ];

    const title = t('favorite');

    return (
        <TabsContent
            title={title}
            handleTabChange={handleTabChange}
            tabIndex={tabIndex}
            tabsData={tabsData}
            headerTitle={title}
        />
    );
};

export default withAuthRedirect(FavoriteContainer);