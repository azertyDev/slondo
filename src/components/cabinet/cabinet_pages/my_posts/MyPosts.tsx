import {FC, useContext, useState} from 'react';
import {userAPI} from '@src/api/api';
import {useTranslation} from 'next-i18next';
import {DoubleTabType, InitPostsType, TabsType} from '@root/interfaces/Cabinet';
import {CardDataType} from '@root/interfaces/CardData';
import {INNER_URLS, ITEMS_PER_PAGE} from '@src/constants';
import {useModal} from '@src/hooks/useModal';
import {DetailedModal} from '@src/components/cabinet/components/detailed_post_modal/DetailedModal';
import {NotificationModal} from '@src/components/cabinet/components/notification_modal/NotificationModal';
import {SettingsModal} from '@src/components/cabinet/components/settings_modal/SettingsModal';
import {ErrorCtx} from '@src/context';
import {EmptyPage} from '@src/components/cabinet/components/empty_page/EmptyPage';
import {initCardData} from '@src/common_data/common';
import {DoubleTabs} from '@src/components/cabinet/components/tabs_content/DoubleTabs';
import {PromoteModal} from '../../components/promote_modal/PromoteModal';
import {usePagination} from '@src/hooks';

export const MyPosts: FC = () => {
    const {t} = useTranslation('cabinet');
    const {setErrorMsg} = useContext(ErrorCtx);

    const initialPostsState: InitPostsType = {
        total: 0,
        data: []
    };

    const [isFetch, setIsFetch] = useState(false);
    const [selectedPost, setSelectedPost] = useState(initCardData);

    const [postData, setPostData] = useState(initialPostsState);
    const [archivePostData, setArchivePostData] = useState(initialPostsState);

    const [securePosts, setSecurePosts] = useState(initialPostsState);
    const [archiveSecurePostData, setArchiveSecurePostData] =
        useState(initialPostsState);

    const {
        modalOpen: settingsOpen,
        handleModalClose: handleCloseSettings,
        handleModalOpen: handleOpenSettings
    } = useModal();

    const {
        modalOpen: detailedModalOpen,
        handleModalClose: closeDetailedModal,
        handleModalOpen: openDetailedModal
    } = useModal();

    const {
        modalOpen: notificationsOpen,
        handleModalClose: closeNotificationsModal,
        handleModalOpen: openNotificationsModal
    } = useModal();

    const {
        modalOpen: promoteOpen,
        handleModalClose: handleClosePromote,
        handleModalOpen: handleOpenPromote
    } = useModal();

    const handleDetailedOpen = post => () => {
        openDetailedModal();
        setSelectedPost(post);
    };

    const handleNotificationsOpen = (post: CardDataType) => () => {
        setSelectedPost(post);
        openNotificationsModal();
    };

    const handleSettingsOpen = (post: CardDataType) => () => {
        handleOpenSettings();
        setSelectedPost(post);
    };

    const handlePromoteOpen = post => () => {
        handleOpenPromote();
        setSelectedPost(post);
    };

    const getPosts =
        (isSafeShop = false) =>
        async (page = 1) => {
            try {
                setIsFetch(true);
                const {data, total} = await userAPI.getMyPosts({
                    type: 'post',
                    archive: 0,
                    secure: isSafeShop ? 1 : 0,
                    page,
                    itemsPerPage: ITEMS_PER_PAGE
                });
                isSafeShop
                    ? setSecurePosts({data, total})
                    : setPostData({data, total});
                setIsFetch(false);
            } catch (e) {
                setIsFetch(false);
                setErrorMsg(e.message);
            }
        };

    const getArchPosts =
        (isSafeShop = false) =>
        async (page = 1) => {
            try {
                setIsFetch(true);
                const {data, total} = await userAPI.getMyPosts({
                    type: 'post',
                    archive: 1,
                    secure: isSafeShop ? 1 : 0,
                    page,
                    itemsPerPage: ITEMS_PER_PAGE
                });
                isSafeShop
                    ? setArchiveSecurePostData({data, total})
                    : setArchivePostData({data, total});
                setIsFetch(false);
            } catch (e) {
                setIsFetch(false);
                setErrorMsg(e.message);
            }
        };

    const [postsPagination, postPage, fetchPosts] = usePagination(getPosts());

    const [safePostsPagination, safePostPage, fetchSafePosts] =
        usePagination(getPosts(true));

    const [archPostsPagination, archPostsPage, fetchArchPosts] = usePagination(
        getArchPosts()
    );

    const [
        secureArchPostsPagination,
        secureArchPostsPage,
        fetchSecureArchPosts
    ] = usePagination(getArchPosts(true));

    const refresh = async () => {
        await Promise.all([
            fetchPosts(),
            fetchSafePosts(),
            fetchArchPosts(),
            fetchSecureArchPosts()
        ]);
    };

    const tabsData: TabsType<DoubleTabType> = {
        firstTab: {
            id: 0,
            title: t('posts'),
            innerTabsData: {
                innerFirstTab: {
                    posts: postData.data,
                    total: postData.total,
                    emptyPage: (
                        <EmptyPage
                            link={INNER_URLS.create_post}
                            tutorialLink={INNER_URLS.create_post_guide}
                            label={t('cabinet:empty.post')}
                            tutorialText={t('post:howToCreatePost')}
                            action={t('cabinet:empty.create_post')}
                        />
                    )
                },
                innerSecondTab: {
                    posts: archivePostData.data,
                    total: archivePostData.total,
                    emptyPage: <EmptyPage label={t('empty.archive')} />
                }
            }
        },
        secondTab: {
            id: 1,
            title: t('securePosts'),
            innerTabsData: {
                innerFirstTab: {
                    posts: securePosts.data,
                    total: securePosts.total,
                    emptyPage: (
                        <EmptyPage
                            link={INNER_URLS.create_post}
                            tutorialLink={INNER_URLS.create_post_guide}
                            label={t('cabinet:empty.post')}
                            action={t('header:createPost')}
                            tutorialText={t('post:howToCreatePost')}
                        />
                    )
                },
                innerSecondTab: {
                    posts: archiveSecurePostData.data,
                    total: archiveSecurePostData.total,
                    emptyPage: <EmptyPage label={t('empty.archive')} />
                }
            }
        }
    };

    return (
        <>
            <DoubleTabs
                isFetch={isFetch}
                tabsData={tabsData}
                pages={[
                    postPage,
                    safePostPage,
                    archPostsPage,
                    secureArchPostsPage
                ]}
                handlePromoteOpen={handlePromoteOpen}
                handleDetailedOpen={handleDetailedOpen}
                handleSettingsOpen={handleSettingsOpen}
                handleNotificationsOpen={handleNotificationsOpen}
                paginationHandlers={[
                    postsPagination,
                    safePostsPagination,
                    archPostsPagination,
                    secureArchPostsPagination
                ]}
            />
            <DetailedModal
                post={selectedPost}
                open={detailedModalOpen}
                onClose={closeDetailedModal}
                handleRefresh={refresh}
            />
            <SettingsModal
                post={selectedPost}
                open={settingsOpen}
                handleRefresh={refresh}
                onClose={handleCloseSettings}
            />
            <NotificationModal
                post={selectedPost}
                open={notificationsOpen}
                handleRefresh={refresh}
                onClose={closeNotificationsModal}
            />
            <PromoteModal
                postType="post"
                postId={selectedPost.id}
                openDialog={promoteOpen}
                handleRefresh={refresh}
                handleCloseDialog={handleClosePromote}
            />
        </>
    );
};
