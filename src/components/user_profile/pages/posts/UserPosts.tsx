import {FC, useContext, useState} from 'react';
import {userAPI} from '@src/api/api';
import {InitPostsType, DoubleTabType, TabsType} from '@root/interfaces/Cabinet';
import {ErrorCtx} from '@src/context';
import {DoubleTabs} from '@src/components/cabinet/components/tabs_content/DoubleTabs';
import {useTranslation} from 'next-i18next';
import {ProfilePageProps} from '@src/components/user_profile/UserProfile';
import {usePagination} from '@src/hooks';
import {ITEMS_PER_PAGE} from '@src/constants';

export const UserPosts: FC<ProfilePageProps> = ({user_id}) => {
    const {setErrorMsg} = useContext(ErrorCtx);
    const {t} = useTranslation('cabinet');

    const initUserPostsState: InitPostsType = {
        total: 0,
        data: []
    };

    const [isFetch, setIsFetch] = useState(false);

    const [posts, setPosts] = useState(initUserPostsState);
    const [archPosts, setArchPosts] = useState(initUserPostsState);

    const [safePosts, setSafePosts] = useState(initUserPostsState);
    const [safeArchPosts, setArchSafePosts] = useState(initUserPostsState);

    const getPosts =
        (isSafeShop = false) =>
        async (page = 1, secondSubTab = false) => {
            try {
                setIsFetch(true);
                const {data, total} = await userAPI.getUserPosts({
                    user_id,
                    type: 'post',
                    archive: 0,
                    page,
                    secure: isSafeShop ? 1 : 0,
                    itemsPerPage: ITEMS_PER_PAGE
                });

                setIsFetch(false);
                isSafeShop
                    ? setSafePosts({data, total})
                    : setPosts({data, total});
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
                const {data, total} = await userAPI.getUserPosts({
                    user_id,
                    type: 'post',
                    archive: 1,
                    page,
                    secure: isSafeShop ? 1 : 0,
                    itemsPerPage: ITEMS_PER_PAGE
                });

                setIsFetch(false);
                isSafeShop
                    ? setArchSafePosts({data, total})
                    : setArchPosts({data, total});
            } catch (e) {
                setIsFetch(false);
                setErrorMsg(e.message);
            }
        };

    const [postPagination, postPage] = usePagination(getPosts());

    const [archPostPagination, archPostPage] = usePagination(getArchPosts());

    const [safePostPagination, safePostPage] = usePagination(getPosts(true));

    const [safeArchPostPagination, safeArchPostPage] = usePagination(
        getArchPosts(true)
    );

    const tabsData: TabsType<DoubleTabType> = {
        firstTab: {
            id: 0,
            title: t('posts'),
            innerTabsData: {
                innerFirstTab: {
                    posts: posts.data,
                    total: posts.total,
                    emptyPage: null
                },
                innerSecondTab: {
                    posts: archPosts.data,
                    total: archPosts.total,
                    emptyPage: null
                }
            }
        },
        secondTab: {
            id: 1,
            title: t('securePosts'),
            innerTabsData: {
                innerFirstTab: {
                    posts: [],
                    total: 0,
                    emptyPage: null
                },
                innerSecondTab: {
                    posts: [],
                    total: 0,
                    emptyPage: null
                }
            }
        }
    };

    return (
        <DoubleTabs
            isFetch={isFetch}
            tabsData={tabsData}
            pages={[postPage, archPostPage, safePostPage, safeArchPostPage]}
            handlePromoteOpen={() => null}
            handleDetailedOpen={() => null}
            handleNotificationsOpen={() => null}
            paginationHandlers={[
                postPagination,
                archPostPagination,
                safePostPagination,
                safeArchPostPagination
            ]}
        />
    );
};
