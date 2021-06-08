import {FC, useEffect, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {withAuthRedirect} from '@root/src/hocs/withAuthRedirect';
import {userAPI} from '@src/api/api';
import {useDispatch} from 'react-redux';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {Box, Grid, IconButton, List, ListItem, ListItemText, Typography} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {InitialCabinetCardState, TabsDataType} from '@root/interfaces/Cabinet';
import {useTranslation} from 'next-i18next';
import {CabinetCard} from '@src/components/cabinet/cabinet_card/CabinetCard';
import {BannedPosts} from '@src/components/cabinet/cabinet_pages/banned_posts/BannedPosts';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useModal} from '@src/hooks/useModal';
import {ITEMS_PER_PAGE} from '@src/constants';
import {useStyles} from './useStyles';

const BannedPostsContainer: FC = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation(['cabinet', 'notifications', 'categories', 'common', 'locations']);
    const classes = useStyles();

    const initialBannedPostsState: InitialCabinetCardState = {
        isFetch: false,
        myPosts: {
            total: 0,
            data: []
        }
    };

    const [postData, setPostData] = useState(initialBannedPostsState);
    const [aucData, setAucData] = useState(initialBannedPostsState);
    const [selectedPostId, setSelectedPostId] = useState<number>(null);
    const [tabIndex, setTabIndex] = useState(0);
    const [modalContentIndex, setModalContentIndex] = useState(1);
    const [message, setMessage] = useState('');
    const {modalOpen: bannedPostModal, handleModalOpen: openBannedPostModal, handleModalClose: closeBannedPostModal} = useModal();
    const {modalOpen: openSnackbar, handleModalOpen: handleOpenSnackbar, handleModalClose: handleCloseSnackbar} = useModal();

    const handleModalContentIndex = (index) => () => {
        setModalContentIndex(index);
    };
    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };
    const handleModalOpen = (id: number) => () => {
        openBannedPostModal();
        setSelectedPostId(id);
    };
    const handleModalClose = () => {
        closeBannedPostModal();
    };
    const handlePrevMenu = () => {
        const backValue = modalContentIndex === 5 ? 3 : 1;
        setModalContentIndex(modalContentIndex - backValue);
    };
    const fetchBannedPostsData = async (type: string) => {
        try {
            const isPost = type === 'post';
            if (isPost) {
                setPostData({...postData, isFetch: true});
                const {data, total} = await userAPI.getBannedPosts(type);
                setPostData({myPosts: {data, total}, isFetch: false});
            } else {
                setAucData({...aucData, isFetch: true});
                const {data, total} = await userAPI.getBannedPosts(type);
                setAucData({myPosts: {data, total}, isFetch: false});
            }
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const handleDelete = async () => {
        try {
            const {message} = await userAPI.deleteBlockedPost(selectedPostId);
            setMessage(message);
            setModalContentIndex(1);
            closeBannedPostModal();
            handleOpenSnackbar();
            if (tabIndex === 0) {
                await fetchBannedPostsData('post');
            } else {
                await fetchBannedPostsData('auc');
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
                                primary='Удалить'
                                primaryTypographyProps={{variant: 'subtitle1'}}
                            />
                        </ListItem>
                        <ListItem button>
                            <ListItemText
                                primary="Редактировать"
                            />
                        </ListItem>
                    </List>
                </>;
            case 2:
                return <>
                    <Typography variant='h6' className="title">
                        Вы уверены?
                    </Typography>
                    <Box display='flex' flexDirection='column'>
                        <CustomButton onClick={handleDelete}>Да</CustomButton>
                        <CustomButton onClick={handlePrevMenu}>Вернуться</CustomButton>
                    </Box>
                </>;
        }
    };
    const ModalContent = () => (
        <>
            {modalContentIndex === 1
                ? <Typography className="title" variant="h6">
                    Объявление № {selectedPostId}
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
        fetchBannedPostsData('post');
        fetchBannedPostsData('auc');
    }, []);

    const bannedPostCards = postData.myPosts.data.map(data => (
        <Box mb={3} key={data.id}>
            <Grid container>
                <Grid item xs={9}>
                    <CabinetCard
                        cardData={data}
                        handleModalOpen={handleModalOpen}
                    />
                </Grid>
            </Grid>
        </Box>
    ));

    const bannedAucCards = aucData.myPosts.data.map(data => (
        <Box mb={3} key={data.id}>
            <Grid container>
                <Grid item xs={9}>
                    <CabinetCard
                        cardData={data}
                        handleModalOpen={handleModalOpen}
                    />
                </Grid>
            </Grid>
        </Box>
    ));

    const tabsData: TabsDataType = [
        {
            id: 0,
            title: t('posts'),
            total: postData.myPosts.total,
            itemsPerPage: ITEMS_PER_PAGE,
            handleFetchByPage: null,
            component: (
                <BannedPosts
                    t={t}
                    bannedPostCards={bannedPostCards}
                    openModal={bannedPostModal}
                    openSnackbar={openSnackbar}
                    message={message}
                    ModalContent={ModalContent}
                    handleClose={handleModalClose}
                    handleCloseSnackbar={handleCloseSnackbar}
                />
            )
        },
        {
            id: 1,
            title: t('auctions'),
            total: aucData.myPosts.total,
            itemsPerPage: ITEMS_PER_PAGE,
            handleFetchByPage: null,
            component: (
                <BannedPosts
                    t={t}
                    bannedPostCards={bannedAucCards}
                    openModal={bannedPostModal}
                    openSnackbar={openSnackbar}
                    message={message}
                    ModalContent={ModalContent}
                    handleClose={handleModalClose}
                    handleCloseSnackbar={handleCloseSnackbar}
                />
            )
        }
    ];

    const title = t('bannedPosts');

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

export default withAuthRedirect(BannedPostsContainer);