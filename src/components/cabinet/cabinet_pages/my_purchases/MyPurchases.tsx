import {FC, Fragment, useContext, useEffect, useState} from 'react';
import {unstable_batchedUpdates} from 'react-dom';
import {ErrorCtx} from "@src/context";
import {useModal} from "@src/hooks";
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {CircularProgress, Tab, Tabs, Typography} from "@material-ui/core";
import {useTranslation} from 'react-i18next';
import {ITEMS_PER_PAGE} from '@src/constants';
import {TabsDataType} from '@root/interfaces/Cabinet';
import {CardDataType} from "@root/interfaces/CardData";
import {myUzCardAPI, userCabinetAPI} from '@src/api/api';
import {CabinetCard} from '@src/components/cabinet/components/cabinet_card/CabinetCard';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {ConfirmModal} from '@src/components/elements/confirm_modal/Confirm_modal';
import {CustomTabPanel} from "@src/components/elements/custom_tab_panel/CustomTabPanel";
import {DetailedPostContainerModal} from "@src/components/cabinet/components/detailed_post_modal/DetailedPostContainerModal";
import {initialCardData} from "@src/components/cabinet/cabinet_pages/my_posts/MyPosts";
import {useStyles} from './useStyles';

export const MyPurchases: FC = () => {
    const {t} = useTranslation('cabinet');
    const {setErrorMsg} = useContext(ErrorCtx);

    const [tabIndex, setTabIndex] = useState(0);
    const [total, setTotal] = useState(0);
    const [archTotal, setArchTotal] = useState(0);
    const [isFetch, setIsFetch] = useState(false);
    const [isPerform, setIsPerform] = useState(false);
    const [purchases, setPurchases] = useState([]);
    const [archivePurchases, setArchPurchases] = useState([]);
    const [childTabValue, setChildTabValue] = useState(0);
    const [selectedPost, setSelectedPost] = useState<CardDataType>(initialCardData);

    const {modalOpen: confirmOpen, handleModalClose: handleConfirmClose, handleModalOpen: handleConfirmOpen} = useModal();
    const {modalOpen: detailedModalOpen, handleModalClose: closeDetailedModal, handleModalOpen: openDetailedModal} = useModal();

    const confirmTitle = isPerform ? 'perform_purchase' : 'dismiss_purchase';

    const handleTabChange = (_, newValue) => {
        setTabIndex(newValue);
    };

    const handleChildTabChange = (event, newValue) => {
        setChildTabValue(newValue);
    };

    const handleDetailedOpen = (post) => () => {
        setSelectedPost(post);
        openDetailedModal();
    };

    const confirmModalOpen = (post: CardDataType, perform = false) => () => {
        unstable_batchedUpdates(() => {
            handleConfirmOpen();
            setSelectedPost(post);
            setIsPerform(perform);
        });
    };

    const fetchPurchases = async (page, archive = 0) => {
        try {
            const params = {
                archive,
                page,
                itemsPerPage: ITEMS_PER_PAGE
            };
            setIsFetch(true);

            const {data, total} = await userCabinetAPI.getPurchases(params);

            !!archive ? setArchTotal(total) : setTotal(total);
            !!archive ? setArchPurchases(data) : setPurchases(data);

            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
        }
    };

    const handlePerformDismiss = async () => {
        try {
            setIsFetch(true);
            const post_id = JSON.stringify({post_id: selectedPost.id});
            await myUzCardAPI.performDismiss(post_id, isPerform);
            await fetchPurchases(1);
            handleConfirmClose();
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            setErrorMsg(e.message);
        }
    };

    const handleRefresh = () => {
        unstable_batchedUpdates(() => {
            fetchPurchases(1);
            fetchPurchases(1, 1);
        });
    };

    const classes = useStyles();
    const purchasesList = (
        <>
            <Tabs
                aria-label="tabs"
                value={childTabValue}
                className={classes.childTabs}
                onChange={handleChildTabChange}
                TabIndicatorProps={{style: {display: 'none'}}}
            >
                <Tab
                    label={
                        <Typography variant="subtitle1">
                            {t('active')}
                        </Typography>
                    }
                />
                <Tab
                    label={
                        <Typography variant="subtitle1">
                            {t('archive')}
                        </Typography>
                    }
                />
            </Tabs>
            <CustomTabPanel value={childTabValue} index={0}>
                {isFetch
                    ? <CircularProgress color="primary"/>
                    : purchases.map(post => (
                        <Fragment key={post.id}>
                            <CabinetCard cardData={post}/>
                            <div>
                                <CustomButton
                                    disabled={isFetch}
                                    onClick={confirmModalOpen(post)}
                                >
                                    {t('common:cancel')}
                                </CustomButton>
                                <CustomButton
                                    disabled={isFetch}
                                    onClick={confirmModalOpen(post, true)}
                                >
                                    {t('common:perform')}
                                </CustomButton>
                            </div>
                        </Fragment>
                    ))}
            </CustomTabPanel>
            <CustomTabPanel value={childTabValue} index={1}>
                {isFetch
                    ? <CircularProgress color="primary"/>
                    : archivePurchases.map(post =>
                        <Fragment key={post.id}>
                            <CabinetCard
                                cardData={post}
                                handleDetailedOpen={handleDetailedOpen(post)}
                            />
                        </Fragment>
                    )}
            </CustomTabPanel>
        </>
    );

    const tabsData: TabsDataType = [
        {
            id: 0,
            title: t('purchases'),
            itemsPerPage: ITEMS_PER_PAGE,
            handleFetchByTab: fetchPurchases,
            component: purchasesList
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
            <DetailedPostContainerModal
                post={selectedPost}
                open={detailedModalOpen}
                onClose={closeDetailedModal}
                handleRefresh={handleRefresh}
            />
            <ConfirmModal
                open={confirmOpen}
                title={t(confirmTitle)}
                cancelTxt={t('common:no')}
                confirmTxt={t('common:yes')}
                handleClose={handleConfirmClose}
                handleConfirm={handlePerformDismiss}
            />
        </>
    );
};