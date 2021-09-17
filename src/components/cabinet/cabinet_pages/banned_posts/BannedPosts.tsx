import {FC, useContext, useEffect, useState} from 'react';
import {unstable_batchedUpdates} from 'react-dom';
import {userAPI} from '@src/api/api';
import {useTranslation} from 'next-i18next';
import {ErrorCtx} from '@src/context';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {Box, IconButton, List, ListItem, ListItemText, Typography} from '@material-ui/core';
import {ArrowBack} from '@material-ui/icons';
import {InitPostsType, TabsDataType} from '@root/interfaces/Cabinet';
import {CabinetCardWrapper} from '@src/components/cabinet/components/cabinet_card/cabinet_card_wrapper/CabinetCardWrapper';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useModal} from '@src/hooks/useModal';
import {ITEMS_PER_PAGE} from '@src/constants';
import {DetailedPostModalContainer} from '@src/components/cabinet/components/detailed_post_modal/DetailedPostModalContainer';
import {initCardData} from '@src/common_data/common';
import {ResponsiveModal} from '@src/components/elements/responsive_modal/ResponsiveModal';
import {CustomCircularProgress} from "@src/components/elements/custom_circular_progress/CustomCircularProgress";
import {useStyles} from './useStyles';

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

    const {
        modalOpen: detailedModalOpen,
        handleModalOpen: openDetailedModal,
        handleModalClose: closeDetailedModal
    } = useModal();

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
            setIsFetch(true);
            await userAPI.deleteBlockedPost(selectedPost.id);
            setModalContentIndex(1);
            closeDetailedModal();
            if (tabIndex === 0) {
                await fetchBannedPostsData('post');
            } else {
                await fetchBannedPostsData('auc');
            }
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
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
                                primary={t('common:remove')}
                                primaryTypographyProps={{variant: 'subtitle1'}}
                            />
                        </ListItem>
                        <ListItem button>
                            <ListItemText
                                primary={t('auction:edit')}
                            />
                        </ListItem>
                    </List>
                </>;
            case 2:
                return <>
                    <Typography variant='h6' className="title">
                        {t('common:areYouSure')}
                    </Typography>
                    <Box display='flex' flexDirection='column'>
                        <CustomButton onClick={handleDelete}>{t('common:yes')}</CustomButton>
                        <CustomButton onClick={handlePrevMenu}>{t('common:return')}</CustomButton>
                    </Box>
                </>;
        }
    };
    const ModalContent = () => (
        <>
            {modalContentIndex === 1
                ? <Typography className="title" variant="h6">
                    {t('common:post')} № {selectedPost.id}
                </Typography>
                : modalContentIndex !== 5 && (
                <IconButton
                    className='prev-btn'
                    aria-label="back"
                    size="medium"
                    onClick={handlePrevMenu}
                >
                    <ArrowBack fontSize="inherit"/>
                </IconButton>
            )}
            {getModalContent()}
        </>
    );

    const bannedPosts = (posts) => (
        <div className={classes.root}>
            {isFetch
                ? <CustomCircularProgress/>
                : <>
                    {posts.data.map(data => (
                        <Box mb={3} key={data.id}>
                            <CabinetCardWrapper
                                cardData={data}
                                handleDetailedOpen={handleDetailedOpen(data)}
                            />
                        </Box>
                    ))}
                    <ResponsiveModal
                        openDialog={detailedModalOpen}
                        handleCloseDialog={closeDetailedModal}
                    >
                        <ModalContent/>
                    </ResponsiveModal>
                </>}
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