import {FC, useContext, useEffect, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {userAPI} from '@src/api/api';
import {unstable_batchedUpdates} from "react-dom";
import {useTranslation} from 'next-i18next';
import {InitPostsType, TabsDataType} from '@root/interfaces/Cabinet';
import {CardDataType} from '@root/interfaces/CardData';
import {ITEMS_PER_PAGE} from '@src/constants';
import {useModal} from '@src/hooks/useModal';
import {DetailedPostModalContainer} from '@src/components/cabinet/components/detailed_post_modal/DetailedPostModalContainer';
import {NotificationModal} from "@src/components/cabinet/components/notifation_modal/NotificationModal";
import {SettingsModal} from "@src/components/cabinet/components/settings_modal/SettingsModal";
import {ErrorCtx} from "@src/context";
import {EmptyPage} from '@src/components/cabinet/components/empty_page/EmptyPage';
import {initCardData} from "@src/common_data/common";
import {CabinetTabs} from "@src/components/cabinet/components/cabinet_tabs/CabinetTabs";

export const MyPosts: FC = () => {
    const {t} = useTranslation('cabinet');
    const {setErrorMsg} = useContext(ErrorCtx);

    const initialPostsState: InitPostsType = {
        total: 0,
        data: []
    };

    const [isFetch, setIsFetch] = useState(false);
    const [postData, setPostData] = useState(initialPostsState);
    const [securePosts, setSecurePosts] = useState(initialPostsState);
    const [archiveSecurePostData, setArchiveSecurePostData] = useState(initialPostsState);
    const [archivePostData, setArchivePostData] = useState(initialPostsState);
    const [tabIndex, setTabIndex] = useState(0);
    const [childTabValue, setChildTabValue] = useState(0);
    const [selectedPost, setSelectedPost] = useState(initCardData);

    const {modalOpen: settingsOpen, handleModalClose: handleCloseSettings, handleModalOpen: handleOpenSettings} = useModal();
    const {modalOpen: detailedModalOpen, handleModalClose: closeDetailedModal, handleModalOpen: openDetailedModal} = useModal();
    const {modalOpen: notificationsOpen, handleModalClose: closeNotificationsModal, handleModalOpen: openNotificationsModal} = useModal();

    const handleDetailedOpen = (post) => () => {
        openDetailedModal();
        setSelectedPost(post);
    };

    const handleTabChange = (_, newValue) => {
        setTabIndex(newValue);
    };

    const handleChildTabChange = (_, newValue) => {
        setChildTabValue(newValue);
    };

    const handleNotificationsOpen = (post: CardDataType) => () => {
        setSelectedPost(post);
        openNotificationsModal();
    };

    const handleSettingsOpen = (post: CardDataType) => () => {
        handleOpenSettings();
        setSelectedPost(post);
    };

    const fetchPosts = async (secure: number, archive: number) => {
        try {
            const params = {
                type: 'post',
                archive,
                secure
            };
            setIsFetch(true);
            const {data, total} = await userAPI.getMyPosts(params);
            unstable_batchedUpdates(() => {
                secure
                    ? !!archive ? setArchiveSecurePostData({data, total}) : setSecurePosts({data, total})
                    : !!archive ? setArchivePostData({data, total}) : setPostData({data, total});
                setIsFetch(false);
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setErrorMsg(e.message);
            });
        }
    };

    const handleRefresh = () => {
        unstable_batchedUpdates(async () => {
            await Promise.all([
                fetchPosts(0, 0),
                fetchPosts(0, 1),
                fetchPosts(1, 0),
                fetchPosts(1, 1)
            ]);
        });
    };

    const tabsData: TabsDataType = [
        {
            id: 0,
            title: t('posts'),
            itemsPerPage: ITEMS_PER_PAGE,
            handleFetchByTab: () => '',
            component: (
                <CabinetTabs
                    isFetch={isFetch}
                    onChange={handleChildTabChange}
                    fstTabData={{
                        posts: postData.data,
                        emptyPage: <EmptyPage
                            tutorialLink={'#'}
                            link={'/create/type'}
                            label={t('cabinet:empty.post')}
                            tutorialText={t('post:howToCreatePost')}
                            action={t('cabinet:empty.create_post')}
                        />
                    }}
                    secTabData={{
                        posts: archivePostData.data,
                        emptyPage: <EmptyPage label={t('empty.archive')}/>
                    }}
                    childTabValue={childTabValue}
                    handleDetailedOpen={handleDetailedOpen}
                    handleSettingsOpen={handleSettingsOpen}
                    handleNotificationsOpen={handleNotificationsOpen}
                />
            )
        },
        {
            id: 1,
            title: t('securePosts'),
            itemsPerPage: ITEMS_PER_PAGE,
            handleFetchByTab: () => '',
            component: (
                <CabinetTabs
                    isFetch={isFetch}
                    onChange={handleChildTabChange}
                    fstTabData={{
                        posts: securePosts.data,
                        emptyPage: <EmptyPage
                            label={t('cabinet:empty.post')}
                            action={t('header:createPost')}
                            link={'/create/type'}
                            tutorialLink={'#'}
                            tutorialText={t('post:howToCreatePost')}
                        />
                    }}
                    secTabData={{
                        posts: archiveSecurePostData.data,
                        emptyPage: <EmptyPage label={t('empty.archive')}/>
                    }}
                    childTabValue={childTabValue}
                    handleDetailedOpen={handleDetailedOpen}
                    handleSettingsOpen={handleSettingsOpen}
                    handleNotificationsOpen={handleNotificationsOpen}
                />
            )
        }
    ];

    useEffect(() => {
        handleRefresh();
    }, []);

    return (
        <>
            <TabsContent
                tabsData={tabsData}
                tabIndex={tabIndex}
                handleTabChange={handleTabChange}
            />
            <DetailedPostModalContainer
                post={selectedPost}
                open={detailedModalOpen}
                onClose={closeDetailedModal}
                handleRefresh={handleRefresh}
            />
            <SettingsModal
                post={selectedPost}
                open={settingsOpen}
                handleRefresh={handleRefresh}
                onClose={handleCloseSettings}
            />
            <NotificationModal
                post={selectedPost}
                open={notificationsOpen}
                handleRefresh={handleRefresh}
                onClose={closeNotificationsModal}
            />
        </>
    );
};
