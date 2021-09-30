import {FC, useContext, useEffect, useState} from 'react';
import {unstable_batchedUpdates} from 'react-dom';
import {userAPI} from '@src/api/api';
import {InitPostsType, TabsDataType} from '@root/interfaces/Cabinet';
import {CardView} from '@src/components/elements/card/CardView';
import {CircularProgress} from '@material-ui/core';
import {ErrorCtx} from '@src/context';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
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

    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    const fetchUserPosts = async (type, archive = 0) => {
        try {
            const params = {
                user_id,
                type,
                archive
            };
            setIsFetch(true);

            const {data, total} = await userAPI.getUserPosts(params);

            unstable_batchedUpdates(async () => {
                setIsFetch(false);
                type === 'post'
                    ? !!archive ? setPostsArch({data, total}) : setPosts({data, total})
                    : !!archive ? setAuctionsArch({data, total}) : setAuctions({data, total});
            });
        } catch (e) {
            unstable_batchedUpdates(async () => {
                setIsFetch(false);
                setErrorMsg(e.message);
            });
        }
    };

    const handleRefresh = () => {
        unstable_batchedUpdates(async () => {
            fetchUserPosts('post');
            fetchUserPosts('auc');
            fetchUserPosts('post', 1);
            fetchUserPosts('auc', 1);
        });
    };

    const getUserPosts = (auction = false) => {
        return isFetch
            ? <CircularProgress color="secondary"/>
            : <CardView
                data={auction ? auctions.data : posts.data}
                isFetch={isFetch}
                listMode={false}
            />;
    };

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

    const tabsData: TabsDataType = [
        {
            id: 0,
            title: t('main:posts'),
            itemsPerPage: posts.total,
            handleFetchByTab: () => '',
            component: getUserPosts()
        },
        {
            id: 1,
            title: t('main:auctions'),
            itemsPerPage: auctions.total,
            handleFetchByTab: () => '',
            component: getUserPosts(true)
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
        </>
    );
};