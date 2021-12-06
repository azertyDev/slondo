import {FC, useContext, useState} from 'react';
import {userAPI} from '@src/api/api';
import {unstable_batchedUpdates} from 'react-dom';
import {useTranslation} from 'next-i18next';
import {DoubleTabType, InitPostsType, TabsType} from '@root/interfaces/Cabinet';
import {CardDataType} from '@root/interfaces/CardData';
import {INNER_URLS, ITEMS_PER_PAGE} from '@src/constants';
import {useModal} from '@src/hooks/useModal';
import {DetailedModal} from '@src/components/cabinet/components/detailed_post_modal/DetailedModal';
import {NotificationModal} from '@src/components/cabinet/components/notifation_modal/NotificationModal';
import {SettingsModal} from '@src/components/cabinet/components/settings_modal/SettingsModal';
import {ErrorCtx} from '@src/context';
import {EmptyPage} from '@src/components/cabinet/components/empty_page/EmptyPage';
import {initCardData} from '@src/common_data/common';
import {DoubleTabs} from '@src/components/cabinet/components/tabs_content/DoubleTabs';
import {PromoteModal} from '../../components/promote_modal/PromoteModal';

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
        modalOpen: promoteOpen,
        handleModalClose: handleClosePromote,
        handleModalOpen: handleOpenPromote
    } = useModal();

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

    const handlePromoteOpen = post => () => {
        handleOpenPromote();
        setSelectedPost(post);
    };

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

    const fetchTabPosts =
        (secondTab = false) =>
        async (page = 1, secondSubTab = false) => {
            try {
                const params = {
                    type: 'post',
                    archive: secondSubTab ? 1 : 0,
                    secure: secondTab ? 1 : 0,
                    page,
                    itemsPerPage: ITEMS_PER_PAGE
                };
                setIsFetch(true);
                const {data, total} = await userAPI.getMyPosts(params);
                unstable_batchedUpdates(() => {
                    secondTab
                        ? secondSubTab
                            ? setArchiveSecurePostData({data, total})
                            : setSecurePosts({data, total})
                        : secondSubTab
                        ? setArchivePostData({data, total})
                        : setPostData({data, total});
                    setIsFetch(false);
                });
            } catch (e) {
                unstable_batchedUpdates(() => {
                    setIsFetch(false);
                    setErrorMsg(e.message);
                });
            }
        };

    const firstTabFetch = fetchTabPosts();
    const secondTabFetch = fetchTabPosts(true);

    const handleRefresh = async () => {
        await Promise.all([
            firstTabFetch(),
            secondTabFetch(),
            firstTabFetch(1, true),
            secondTabFetch(1, true)
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
                fetchFirstTabPosts={firstTabFetch}
                fetchSecondTabPosts={secondTabFetch}
                handlePromoteOpen={handlePromoteOpen}
                handleDetailedOpen={handleDetailedOpen}
                handleSettingsOpen={handleSettingsOpen}
                handleNotificationsOpen={handleNotificationsOpen}
            />
            <PromoteModal
                postId={selectedPost.id}
                openDialog={promoteOpen}
                handleCloseDialog={handleClosePromote}
            />
            <DetailedModal
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
