import {FC, useContext, useEffect, useState} from 'react';
import {userAPI} from '@src/api/api';
import {useTranslation} from 'next-i18next';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {Box, IconButton, List, ListItem, ListItemText, Typography} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {InitPostsType, TabsDataType} from '@root/interfaces/Cabinet';
import {CabinetCard} from '@src/components/cabinet/components/cabinet_card/CabinetCard';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useModal} from '@src/hooks/useModal';
import {ITEMS_PER_PAGE} from '@src/constants';
import {ErrorCtx} from "@src/context";
import {useStyles} from './useStyles';
import {DetailedPostModalContainer} from "@src/components/cabinet/components/detailed_post_modal/DetailedPostModalContainer";
import {initCardData} from "@src/common_data/common";
import {CustomModal} from "@src/components/elements/custom_modal/CustomModal";
import {CustomSnackbar} from "@src/components/elements/snackbar/Snackbar";
import {unstable_batchedUpdates} from "react-dom";

export const BannedPosts: FC = () => {
    const {t} = useTranslation('cabinet');
    const {setErrorMsg} = useContext(ErrorCtx);

    const initialBannedPostsState = {
        total: 0,
        data: []
    };

    const [isFetch, setIsFetch] = useState(false);
    const [postData, setPostData] = useState<InitPostsType>(initialBannedPostsState);
    const [aucData, setAucData] = useState<InitPostsType>(initialBannedPostsState);
    const [selectedPost, setSelectedPost] = useState(initCardData);
    const [tabIndex, setTabIndex] = useState(0);
    const [modalContentIndex, setModalContentIndex] = useState(1);
    const [message, setMessage] = useState('');

    const {modalOpen: openSnackbar, handleModalOpen: handleOpenSnackbar, handleModalClose: handleCloseSnackbar} = useModal();
    const {modalOpen: detailedModalOpen, handleModalClose: closeDetailedModal, handleModalOpen: openDetailedModal} = useModal();

    const handleModalContentIndex = (index) => () => {
        setModalContentIndex(index);
    };
    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };
    const handleDetailedOpen = (post) => () => {
        openDetailedModal();
        setSelectedPost(post);
    };
    const handlePrevMenu = () => {
        const backValue = modalContentIndex === 5 ? 3 : 1;
        setModalContentIndex(modalContentIndex - backValue);
    };
    const fetchBannedPostsData = async (type: string) => {
        try {
            setIsFetch(true);
            const {data, total} = await userAPI.getBannedPosts(type);
            type === 'post' ? setPostData({data, total}) : setAucData({data, total});
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            setErrorMsg(e.message);
        }
    };
    const handleDelete = async () => {
        try {
            const {message} = await userAPI.deleteBlockedPost(selectedPost.id);
            setMessage(message);
            setModalContentIndex(1);
            closeDetailedModal();
            handleOpenSnackbar();
            if (tabIndex === 0) {
                await fetchBannedPostsData('post');
            } else {
                await fetchBannedPostsData('auc');
            }
        } catch (e) {
            setErrorMsg(e.message);
        }
    };

    const handleRefresh = () => {
        unstable_batchedUpdates(() => {
            fetchBannedPostsData('post');
            fetchBannedPostsData('auc');
        });
    };

    const classes = useStyles();
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
                    Объявление № {selectedPost.id}
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

    const bannedPosts = (posts) => (
        <div className={classes.root}>
            {posts.data.map(data => (
                <Box mb={3} key={data.id}>
                    <CabinetCard
                        cardData={data}
                        handleDetailedOpen={handleDetailedOpen(data)}
                    />
                </Box>
            ))}
            <CustomModal
                openModal={detailedModalOpen}
                handleModalClose={closeDetailedModal}
            >
                <ModalContent/>
            </CustomModal>
            <CustomSnackbar
                message={t(message)}
                openSnackbar={openSnackbar}
                severity="success"
                handleCloseSnackbar={handleCloseSnackbar}
            />
        </div>
    );

    const tabsData: TabsDataType = [
        {
            id: 0,
            title: t('posts'),
            itemsPerPage: ITEMS_PER_PAGE,
            handleFetchByTab: () => '',
            component: bannedPosts(postData)
        },
        {
            id: 1,
            title: t('auctions'),
            itemsPerPage: ITEMS_PER_PAGE,
            handleFetchByTab: () => '',
            component: bannedPosts(aucData)
        }
    ];

    useEffect(() => {
        handleRefresh();
    }, []);

    return (
        <>
            <TabsContent
                tabIndex={tabIndex}
                tabsData={tabsData}
                handleTabChange={handleTabChange}
            />
            <DetailedPostModalContainer
                post={selectedPost}
                open={detailedModalOpen}
                onClose={closeDetailedModal}
                handleRefresh={handleRefresh}
            />
        </>
    );
};