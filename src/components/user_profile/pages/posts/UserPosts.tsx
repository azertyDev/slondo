import {FC, useContext, useState} from 'react';
import {unstable_batchedUpdates} from 'react-dom';
import {userAPI} from '@src/api/api';
import {InitPostsType, DoubleTabType, TabsType} from '@root/interfaces/Cabinet';
import {ErrorCtx} from '@src/context';
import {DoubleTabs} from '@src/components/cabinet/components/tabs_content/DoubleTabs';
import {useTranslation} from 'next-i18next';
import {ProfilePageProps} from '@src/components/user_profile/UserProfile';

export const UserPosts: FC<ProfilePageProps> = ({user_id}) => {
    const {setErrorMsg} = useContext(ErrorCtx);
    const {t} = useTranslation('cabinet');

    const initUserPostsState: InitPostsType = {
        total: 0,
        data: []
    };

    const [isFetch, setIsFetch] = useState(false);

    const [posts, setPosts] = useState(initUserPostsState);
    const [postsArch, setPostsArch] = useState(initUserPostsState);

    const [auctions, setAuctions] = useState(initUserPostsState);
    const [auctionsArch, setAuctionsArch] = useState(initUserPostsState);

    const fetchUserPosts =
        (secondTab = false) =>
        async (page = 1, secondSubTab = false) => {
            try {
                const type = secondTab ? 'auc' : 'post';
                const archive = secondSubTab ? 1 : 0;

                setIsFetch(true);
                const {data, total} = await userAPI.getUserPosts(
                    user_id,
                    type,
                    archive,
                    page
                );

                unstable_batchedUpdates(async () => {
                    setIsFetch(false);
                    secondTab
                        ? secondSubTab
                            ? setAuctionsArch({data, total})
                            : setAuctions({data, total})
                        : secondSubTab
                        ? setPostsArch({data, total})
                        : setPosts({data, total});
                });
            } catch (e) {
                unstable_batchedUpdates(async () => {
                    setIsFetch(false);
                    setErrorMsg(e.message);
                });
            }
        };

    const firstTabFetch = fetchUserPosts();
    const secondTabFetch = fetchUserPosts(true);

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
                    posts: postsArch.data,
                    total: postsArch.total,
                    emptyPage: null
                }
            }
        },
        secondTab: {
            id: 1,
            title: t('securePosts'),
            innerTabsData: {
                innerFirstTab: {
                    posts: auctions.data,
                    total: auctions.total,
                    emptyPage: null
                },
                innerSecondTab: {
                    total: auctionsArch.total,
                    posts: auctionsArch.data,
                    emptyPage: null
                }
            }
        }
    };

    return (
        <DoubleTabs
            isFetch={isFetch}
            tabsData={tabsData}
            handlePromoteOpen={() => null}
            handleDetailedOpen={() => null}
            handleNotificationsOpen={() => null}
            fetchFirstTabPosts={firstTabFetch}
            fetchSecondTabPosts={secondTabFetch}
        />
    );
};
