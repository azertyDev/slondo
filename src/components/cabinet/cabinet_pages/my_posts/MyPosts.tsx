import {FC, useContext, useEffect, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {withAuthRedirect} from '@src/hocs/withAuthRedirect';
import {userAPI} from '@src/api/api';
import {
    Box,
    CircularProgress,
    Tab,
    Tabs,
    Typography
} from '@material-ui/core';
import {unstable_batchedUpdates} from "react-dom";
import {useTranslation} from 'next-i18next';
import {InitialCabinetCardState, TabsDataType} from '@root/interfaces/Cabinet';
import {CardDataType} from '@root/interfaces/CardData';
import {CabinetCard} from '@src/components/cabinet/components/cabinet_card/CabinetCard';
import {ITEMS_PER_PAGE} from '@src/constants';
import {useModal} from '@src/hooks/useModal';
import {DetailedPostContainerModal} from '@src/components/cabinet/components/detailed_post_modal/DetailedPostContainerModal';
import {CustomTabPanel} from '@src/components/elements/custom_tab_panel/CustomTabPanel';
import {NotificationModal} from "@src/components/cabinet/components/notifation_modal/NotificationModal";
import {SettingsModal} from "@src/components/cabinet/components/settings_modal/SettingsModal";
import {ErrorCtx} from "@src/context";
import {useStyles} from './useStyles';

export const initialCardData: CardDataType = {
    id: null,
    ads_type: '',
    adsable: {
        id: null,
        sub_category: {id: null, name: ''},
        type: {id: null, name: ''}
    },
    auction: {
        id: null,
        is_accepted: null,
        winner: {
            id: null,
            name: '',
            surname: '',
            phone: '',
            avatar: '',
            created_at: '',
            rating: null,
            available_days: '',
            available_start_time: '',
            available_end_time: ''
        },
        winner_id: null,
        number_of_bets: null,
        number_of_offers: null,
        auto_renewal: null,
        offer: {
            id: null,
            price: null,
            user: {
                id: null,
                name: '',
                surname: '',
                phone: '',
                avatar: '',
                created_at: '',
                available_days: '',
                available_start_time: '',
                available_end_time: ''
            }
        },
        bet: {
            auction_id: null,
            bet: null,
            id: null,
            number_of_bets: null
        }
    },
    author: {
        id: null,
        name: '',
        surname: '',
        phone: '',
        avatar: '',
        created_at: '',
        rating: null,
        available_days: '',
        available_start_time: '',
        available_end_time: ''
    },
    observer: {
        number_of_notifications: 0,
        number_of_favorites: 0,
        number_of_views: 0
    },
    available_days: [],
    available_start_time: '',
    available_end_time: '',
    category: {id: null, name: ''},
    city: {id: null, name: ''},
    created_at: '',
    creator: false,
    currency: {id: null, name: ''},
    delivery: null,
    description: '',
    district: {id: null, name: ''},
    exchange: null,
    expiration_at: '',
    favorite: false,
    image: '',
    price: null,
    region: {id: null, name: ''},
    safe_deal: null,
    status: '',
    subscribed: false,
    title: '',
    user_id: null
};

const MyPosts: FC = () => {
    const {t} = useTranslation('cabinet');
    const {setErrorMsg} = useContext(ErrorCtx);

    const initialPostsState: InitialCabinetCardState = {
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
    const [selectedPost, setSelectedPost] = useState(initialCardData);

    const {modalOpen: settingsOpen, handleModalClose: handleCloseSettings, handleModalOpen: handleOpenSettings} = useModal();
    const {modalOpen: detailedModalOpen, handleModalClose: closeDetailedModal, handleModalOpen: openDetailedModal} = useModal();
    const {modalOpen: notificationsOpen, handleModalClose: closeNotificationsModal, handleModalOpen: openNotificationsModal} = useModal();

    const handleDetailedOpen = (post) => () => {
        openDetailedModal();
        setSelectedPost(post);
    };

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    const handleChildTabChange = (event, newValue) => {
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

    const fetchPostData = async (secure: number) => {
        try {
            const params = {
                type: 'post',
                archive: 0,
                secure
            };
            setIsFetch(true);
            const {data, total} = await userAPI.getMyPosts(params);
            secure ? setSecurePosts({data, total}) : setPostData({data, total});
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            setErrorMsg(e.message);
        }
    };

    const fetchArchivePosts = async (secure: number) => {
        try {
            const params = {
                type: 'post',
                archive: 1,
                secure
            };
            setIsFetch(true);
            const {data, total} = await userAPI.getMyPosts(params);
            secure ? setArchiveSecurePostData({data, total}) : setArchivePostData({data, total});
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            setErrorMsg(e.message);
        }
    };

    const handleRefresh = () => {
        unstable_batchedUpdates(() => {
            fetchPostData(0);
            fetchPostData(1);
            fetchArchivePosts(0);
            fetchArchivePosts(1);
        });
    };

    const tabsContent = (fstTabPosts: CardDataType[], secTabPosts: CardDataType[]) => {
        return (
            <>
                <Tabs
                    aria-label="tabs"
                    value={childTabValue}
                    onChange={handleChildTabChange}
                    className={classes.childTabs}
                    TabIndicatorProps={{style: {display: 'none'}}}
                >
                    <Tab
                        label={
                            <Typography variant="subtitle1">
                                Активные
                            </Typography>
                        }
                    />
                    <Tab
                        label={
                            <Typography variant="subtitle1">
                                Архивные
                            </Typography>
                        }
                    />
                </Tabs>
                <CustomTabPanel value={childTabValue} index={0}>
                    {isFetch
                        ? <CircularProgress color="primary"/>
                        : fstTabPosts.map((data) => (
                            <Box mb={3} key={data.id}>
                                <CabinetCard
                                    cardData={data}
                                    handleDetailedOpen={handleDetailedOpen(data)}
                                    handleSettingsOpen={handleSettingsOpen(data)}
                                    handleNotificationsOpen={handleNotificationsOpen(data)}
                                />
                            </Box>
                        ))}
                </CustomTabPanel>
                <CustomTabPanel value={childTabValue} index={1}>
                    {isFetch
                        ? <CircularProgress color="primary"/>
                        : secTabPosts.map((data) => (
                            <Box mb={3} key={data.id}>
                                <CabinetCard
                                    cardData={data}
                                    handleDetailedOpen={handleDetailedOpen(data)}
                                    handleSettingsOpen={handleSettingsOpen(data)}
                                    handleNotificationsOpen={handleNotificationsOpen(data)}

                                />
                            </Box>
                        ))}
                </CustomTabPanel>
            </>
        );
    };

    const classes = useStyles();
    const tabsData: TabsDataType = [
        {
            id: 0,
            title: t('posts'),
            itemsPerPage: ITEMS_PER_PAGE,
            handleFetchByTab: () => '',
            component: tabsContent(postData.data, archivePostData.data)
        },
        {
            id: 1,
            title: t('securePosts'),
            itemsPerPage: ITEMS_PER_PAGE,
            handleFetchByTab: () => '',
            component: tabsContent(securePosts.data, archiveSecurePostData.data)
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
                title={t('myPosts')}
                headerTitle={t('myPosts')}
                handleTabChange={handleTabChange}
            />
            <DetailedPostContainerModal
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

export default withAuthRedirect(MyPosts);
