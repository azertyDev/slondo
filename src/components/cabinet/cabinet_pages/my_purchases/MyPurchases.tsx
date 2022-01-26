import {FC, useContext, useState} from 'react';
import {unstable_batchedUpdates} from 'react-dom';
import {ErrorCtx} from '@src/context';
import {useModal, usePagination} from '@src/hooks';
import {useTranslation} from 'react-i18next';
import {ITEMS_PER_PAGE} from '@src/constants';
import {initCardData} from '@src/common_data/common';
import {CardDataType} from '@root/interfaces/CardData';
import {DoubleTabType, TabsType} from '@root/interfaces/Cabinet';
import {ConfirmModal} from '@src/components/elements/confirm_modal/Confirm_modal';
import {DetailedModal} from '@src/components/cabinet/components/detailed_post_modal/DetailedModal';
import {NotificationModal} from '@src/components/cabinet/components/notification_modal/NotificationModal';
import {EmptyPage} from '@src/components/cabinet/components/empty_page/EmptyPage';
import {DoubleTabs} from '@src/components/cabinet/components/tabs_content/DoubleTabs';
import {myUzCardAPI} from '@src/api/paid_api';
import {cabinetAPI} from '@root/src/api/cabinet_api';

export const MyPurchases: FC = () => {
    const {t} = useTranslation('cabinet');
    const {setErrorMsg} = useContext(ErrorCtx);

    const initPurchases = {
        total: 0,
        data: []
    };

    const [isFetch, setIsFetch] = useState(false);
    const [isPerform, setIsPerform] = useState(false);
    const [purchases, setPurchases] = useState(initPurchases);
    const [archivePurchases, setArchPurchases] = useState(initPurchases);
    const [selectedPost, setSelectedPost] =
        useState<CardDataType>(initCardData);

    const {
        modalOpen: confirmOpen,
        handleModalClose: handleConfirmClose,
        handleModalOpen: handleConfirmOpen
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

    const confirmTitle = isPerform ? 'perform_purchase' : 'dismiss_purchase';

    const handleDetailedOpen = post => () => {
        setSelectedPost(post);
        openDetailedModal();
    };

    const handleNotificationsOpen = (post: CardDataType) => () => {
        setSelectedPost(post);
        openNotificationsModal();
    };

    const confirmModalOpen =
        (post: CardDataType, perform = false) =>
        () => {
            unstable_batchedUpdates(() => {
                handleConfirmOpen();
                setSelectedPost(post);
                setIsPerform(perform);
            });
        };

    const handlePerformDismiss = async () => {
        try {
            setIsFetch(true);
            const post_id = JSON.stringify({post_id: selectedPost.id});
            await myUzCardAPI.performDismiss(post_id, isPerform);
            await refresh();
            handleConfirmClose();
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            setErrorMsg(e.message);
        }
    };

    const getPurchases =
        (isArch = false) =>
        async (page = 1) => {
            try {
                const params = {
                    archive: isArch ? 1 : 0,
                    page,
                    itemsPerPage: ITEMS_PER_PAGE
                };

                setIsFetch(true);

                const {data, total} = await cabinetAPI.getPurchases(params);

                unstable_batchedUpdates(() => {
                    isArch
                        ? setArchPurchases({data, total})
                        : setPurchases({data, total});
                    setIsFetch(false);
                });
            } catch (e) {
                unstable_batchedUpdates(() => {
                    setIsFetch(false);
                    setErrorMsg(e.message);
                });
            }
        };

    const [purchasesPagination, purchasesPage, fetchPurchases] = usePagination(
        getPurchases()
    );
    const [archPurchasesPagination, archPurchasesPage, fetchArchPurchases] =
        usePagination(getPurchases(true));

    const refresh = async () => {
        fetchPurchases();
        fetchArchPurchases();
    };

    const tabsData: TabsType<DoubleTabType> = {
        firstTab: {
            id: 0,
            title: t('myPurchases'),
            innerTabsData: {
                innerFirstTab: {
                    posts: purchases.data,
                    total: purchases.total,
                    emptyPage: <EmptyPage label={t('cabinet:empty.purchase')} />
                },
                innerSecondTab: {
                    posts: archivePurchases.data,
                    total: archivePurchases.total,
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
                pages={[purchasesPage, archPurchasesPage]}
                handleSafeDeal={confirmModalOpen}
                handleDetailedOpen={handleDetailedOpen}
                handleNotificationsOpen={handleNotificationsOpen}
                paginationHandlers={[
                    purchasesPagination,
                    archPurchasesPagination
                ]}
            />
            <DetailedModal
                post={selectedPost}
                open={detailedModalOpen}
                onClose={closeDetailedModal}
                handleRefresh={refresh}
            />
            <ConfirmModal
                open={confirmOpen}
                title={t(confirmTitle)}
                cancelTxt={t('common:no')}
                confirmTxt={t('common:yes')}
                handleClose={handleConfirmClose}
                handleConfirm={handlePerformDismiss}
            />
            <NotificationModal
                post={selectedPost}
                open={notificationsOpen}
                handleRefresh={refresh}
                onClose={closeNotificationsModal}
            />
        </>
    );
};
