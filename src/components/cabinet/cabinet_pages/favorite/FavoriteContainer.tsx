import {FC, useEffect, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {Favorite} from '@src/components/cabinet/cabinet_pages/favorite/Favorite';
import {withAuthRedirect} from '@root/src/hocs/withAuthRedirect';
import {userAPI} from '@src/api/api';
import {useDispatch} from 'react-redux';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {Box, IconButton, List, ListItem, ListItemText, Typography} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {InitialCabinetCardState, TabsDataType} from '@root/interfaces/Cabinet';
import {useTranslation} from 'next-i18next';
import {CabinetCard} from '@src/components/cabinet/components/cabinet_card/CabinetCard';
import {ITEMS_PER_PAGE} from '@src/constants';
import {useModal} from '@src/hooks/useModal';
import {DetailedPostView} from '@src/components/cabinet/components/detailed_post_view/DetailedPostView';
import {initialCardData} from '@src/components/cabinet/cabinet_pages/my_posts/MyPosts';
import {useStyles} from './useStyles';

const FavoriteContainer: FC = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation(['cabinet', 'notifications', 'categories', 'common', 'locations']);
    const classes = useStyles();

    const initialFavoriteState: InitialCabinetCardState = {
        total: 0,
        data: []
    };

    const [isFetch, setIsFetch] = useState(false);
    const [favoritePostData, setFavoritePostData] = useState(initialFavoriteState);
    const [favoriteAucData, setFavoriteAucData] = useState(initialFavoriteState);
    const [postId, setPostId] = useState<number>(null);
    const [tabIndex, setTabIndex] = useState(0);
    const [selectedPost, setSelectedPost] = useState(initialCardData);
    const [modalContentIndex, setModalContentIndex] = useState(1);
    const {modalOpen, handleModalOpen, handleModalClose} = useModal();
    const {modalOpen: detailedModalOpen, handleModalClose: closeDetailedModal, handleModalOpen: openDetailedModal} = useModal();

    const handleDetailedOpen = (postId: number, post) => () => {
        postId && setPostId(postId);
        setSelectedPost(post);
        openDetailedModal();
    };
    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };
    const handleOpenModal = (id: number) => () => {
        handleModalOpen();
        setPostId(id);
    };
    const handlePrevMenu = () => {
        const backValue = modalContentIndex === 5 ? 3 : 1;
        setModalContentIndex(modalContentIndex - backValue);
    };
    const fetchFavoriteData = async (type) => {
        try {
            const isPost = type === 'post';
            setIsFetch(true);
            if (isPost) {
                setFavoritePostData(favoritePostData);
                const {data, total} = await userAPI.getFavorites({type});
                setFavoritePostData({data, total});
            } else {
                setFavoriteAucData(favoriteAucData);
                const {data, total} = await userAPI.getFavorites({type});
                setFavoriteAucData({data, total});
            }
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const handleRemoveFavorite = async () => {
        try {
            await userAPI.favoriteAds(postId);
            if (tabIndex === 0) {
                await fetchFavoriteData('post');
            } else {
                await fetchFavoriteData('auc');
            }
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
        handleModalClose();
    };
    const handleNotificationsOpen = (postId: number) => () => {
        postId && setPostId(postId);
        closeDetailedModal();
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
                                primaryTypographyProps={{variant: 'subtitle1'}}
                            />
                        </ListItem>
                        <ListItem
                            button
                            onClick={handleModalClose}
                        >
                            <ListItemText
                                primary='Нет'
                                primaryTypographyProps={{variant: 'subtitle1'}}
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
                   <ArrowBackIcon fontSize="inherit"/>
               </IconButton>
            }
            {getModalContent()}
        </>
    );

    useEffect(() => {
        fetchFavoriteData('post');
        fetchFavoriteData('auc');
    }, []);

    const favoritePostCards = favoritePostData.data.map(data => (
        <Box mb={3} key={data.id}>
            <CabinetCard
                cardData={data}
                handleOpenModal={handleOpenModal}
                handleDetailedOpen={handleDetailedOpen}
            />
        </Box>
    ));

    const favoriteAucCards = favoriteAucData.data.map(data => (
        <Box mb={3} key={data.id}>
            <CabinetCard
                cardData={data}
                handleOpenModal={handleOpenModal}
                handleDetailedOpen={handleDetailedOpen}
            />
        </Box>
    ));

    const tabsData: TabsDataType = [
        {
            id: 0,
            title: t('posts'),
            total: favoritePostData.total,
            itemsPerPage: ITEMS_PER_PAGE,
            handleFetchByPage: null,
            component: (
                <Favorite
                    openModal={modalOpen}
                    favoriteCards={favoritePostCards}
                    ModalContent={ModalContent}
                    handleModalOpen={handleOpenModal}
                    handleClose={handleModalClose}
                />
            )
        },
        {
            id: 1,
            title: t('auctions'),
            total: favoriteAucData.total,
            itemsPerPage: ITEMS_PER_PAGE,
            handleFetchByPage: null,
            component: (
                <Favorite
                    favoriteCards={favoriteAucCards}
                    handleClose={handleModalClose}
                    handleModalOpen={handleOpenModal}
                    openModal={modalOpen}
                    ModalContent={ModalContent}
                />
            )
        }
    ];

    const title = t('favorite');

    return (
        <>
            <TabsContent
                title={title}
                handleTabChange={handleTabChange}
                tabIndex={tabIndex}
                tabsData={tabsData}
                headerTitle={title}
            />
            <DetailedPostView
                data={selectedPost}
                detailedModalOpen={detailedModalOpen}
                handleDetailedClose={closeDetailedModal}
                handleNotificationsOpen={handleNotificationsOpen}
            />
        </>
    );
};

export default withAuthRedirect(FavoriteContainer);