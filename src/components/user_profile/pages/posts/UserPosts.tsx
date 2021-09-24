import {FC, useContext, useState} from 'react';
import {unstable_batchedUpdates} from "react-dom";
import {DoubleTabType, InitPostsType, TabsType} from '@root/interfaces/Cabinet';
// import {CardView} from '@src/components/elements/card/CardView';
import {userAPI} from '@src/api/api';
import {useRouter} from 'next/router';
import {ErrorCtx} from "@src/context";
import {DoubleTabs} from "@src/components/cabinet/components/tabs_content/DoubleTabs";
import {useTranslation} from "next-i18next";
// import {ProfileTabsContent} from '@src/components/user_profile/tabs/ProfileTabsContent';
// import {ProfileTabsContent} from "@src/components/user_profile/tabs/ProfileTabsContent";
// import {CardDataType} from "@root/interfaces/CardData";
// import {CustomTabPanel} from "@src/components/elements/custom_tab_panel/CustomTabPanel";
// import {EmptyPage} from "@src/components/cabinet/components/empty_page/EmptyPage";
// import {CabinetCardWrapper} from "@src/components/cabinet/components/cabinet_card/cabinet_card_wrapper/CabinetCardWrapper";

export const UserPosts: FC = () => {
    const {t} = useTranslation('main');
    const {setErrorMsg} = useContext(ErrorCtx);
    const {user_id} = useRouter().query;

    const initUserPostsState: InitPostsType = {
        total: 0,
        data: []
    };

    const [isFetch, setIsFetch] = useState(false);

    const [posts, setPosts] = useState(initUserPostsState);
    const [postsArch, setPostsArch] = useState(initUserPostsState);

    const [auctions, setAuctions] = useState(initUserPostsState);
    const [auctionsArch, setAuctionsArch] = useState(initUserPostsState);

    const fetchUserPosts = (isPost = false) => async (page, secondTab = false) => {
        try {
            const type = isPost ? 'post' : 'auc';
            const params = {
                type,
                user_id,
                archive: secondTab ? 1 : 0
            };
            setIsFetch(true);

            const {data, total} = await userAPI.getUserPosts(params);

            unstable_batchedUpdates(async () => {
                setIsFetch(false);
                isPost
                    ? secondTab ? setPostsArch({data, total}) : setPosts({data, total})
                    : secondTab ? setAuctionsArch({data, total}) : setAuctions({data, total});
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

    // const getUserPosts = (auction = false) => {
    //     return isFetch
    //         ? <CircularProgress color="secondary"/>
    //         : <CardView
    //             data={auction ? auctions.data : posts.data}
    //             isFetch={isFetch}
    //             listMode={false}
    //         />;
    // };

    // const getTabsContent = (fstTabPosts: CardDataType[], secTabPosts: CardDataType[]) => {
    //     return (
    //         <>
    //             <Tabs
    //                 aria-label="tabs"
    //                 value={childTabValue}
    //                 onChange={handleChildTabChange}
    //                 className={classes.childTabs}
    //                 TabIndicatorProps={{style: {display: 'none'}}}
    //             >
    //                 <Tab
    //                     label={
    //                         <Typography variant="subtitle1">
    //                             {t('active')}
    //                         </Typography>
    //                     }
    //                 />
    //                 <Tab
    //                     label={
    //                         <Typography variant="subtitle1">
    //                             {t('archive')}
    //                         </Typography>
    //                     }
    //                 />
    //             </Tabs>
    //             <CustomTabPanel value={childTabValue} index={0}>
    //                 {isFetch
    //                     ? <CircularProgress/>
    //                     : fstTabPosts.length === 0
    //                         ? <EmptyPage
    //                             label={t('cabinet:empty.post')}
    //                             action={t('header:createPost')}
    //                             link={'/create/type'}
    //                             tutorialLink={'#'}
    //                             tutorialText={t('post:howToCreatePost')}
    //                         />
    //                         : fstTabPosts.map((data) => (
    //                             <Box mb={3} key={data.id} borderRadius='10px 10px 0px 0px'>
    //                                 <CabinetCardWrapper
    //                                     cardData={data}
    //                                     handleDetailedOpen={handleDetailedOpen(data)}
    //                                     handleSettingsOpen={handleSettingsOpen(data)}
    //                                     handleNotificationsOpen={handleNotificationsOpen(data)}
    //                                 />
    //                             </Box>
    //                         ))}
    //             </CustomTabPanel>
    //             <CustomTabPanel value={childTabValue} index={1}>
    //                 {isFetch
    //                     ? <CircularProgress/>
    //                     : secTabPosts.length === 0
    //                         ? <EmptyPage label={t('cabinet:empty.archive')}/>
    //                         : secTabPosts.map((data) => (
    //                             <Box mb={3} key={data.id} borderRadius='10px 10px 0px 0px'>
    //                                 <CabinetCardWrapper
    //                                     cardData={data}
    //                                     handleNotificationsOpen={handleNotificationsOpen(data)}
    //                                 />
    //                             </Box>
    //                         ))}
    //             </CustomTabPanel>
    //         </>
    //     );
    // };

    const tabsData: TabsType<DoubleTabType> = {
        firstTab: {
            id: 0,
            title: t('posts'),
            innerTabsData: {
                innerFirstTab: {
                    total: posts.total,
                    posts: posts.data,
                    emptyPage: null
                },
                innerSecondTab: {
                    total: postsArch.total,
                    posts: postsArch.data,
                    emptyPage: null
                }
            }
        },
        secondTab: {
            id: 1,
            title: t('auctions'),
            innerTabsData: {
                innerFirstTab: {
                    total: auctions.total,
                    posts: auctions.data,
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
            fetchFirstTabPosts={firstTabFetch}
            fetchSecondTabPosts={secondTabFetch}
        />
    );
};