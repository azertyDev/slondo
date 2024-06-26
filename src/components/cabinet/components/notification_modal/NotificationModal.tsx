import {FC, useContext, useEffect, useState} from 'react';
import {userAPI} from '@src/api/api';
import {useTranslation} from 'next-i18next';
import {ITEMS_PER_PAGE} from '@src/constants';
import {Box, Typography} from '@material-ui/core';
import {CabinetModal} from '@src/components/cabinet/components/cabinet_modal/CabinetModal';
import {notificationType} from '@src/components/cabinet/cabinet_pages/notifications/Notifications';
import {CommonModalType} from '@src/components/cabinet/Cabinet';
import {CustomPagination} from '@src/components/elements/custom_pagination/CustomPagination';
import {NotificationCard} from '@src/components/cabinet/cabinet_pages/notifications/notification_card/NotificationCard';
import {CustomCircularProgress} from '@src/components/elements/custom_circular_progress/CustomCircularProgress';
import {ErrorCtx} from '@src/context';

export const NotificationModal: FC<CommonModalType> = props => {
    const {post, open, onClose} = props;

    const {t} = useTranslation('cabinet');
    const {setErrorMsg} = useContext(ErrorCtx);

    const [isFetch, setIsFetch] = useState(false);
    const [itemsCount, setItemsCount] = useState(0);
    const [page, setPage] = useState(1);

    const [notifications, setNotifications] = useState<notificationType[]>([]);

    const fetchNotifications = async () => {
        try {
            setIsFetch(true);

            const params = {
                page,
                ads_id: post.id,
                itemsPerPage: ITEMS_PER_PAGE
            };

            const {data, total} = await userAPI.getNotificationById(params);

            setItemsCount(total);
            setNotifications(data);

            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            setErrorMsg(e.message);
        }
    };

    const handlePagination = (_, page) => {
        setPage(page);
    };

    useEffect(() => {
        open && post.id !== null && fetchNotifications();
    }, [open, page]);

    return (
        <CabinetModal
            openDialog={open}
            title={t('common:notificationsStories')}
            handleCloseDialog={onClose}
        >
            {isFetch ? (
                <CustomCircularProgress />
            ) : (
                <>
                    <Box
                        display="flex"
                        alignItems="center"
                        flexDirection="column"
                    >
                        <Typography variant="caption">
                            {`${t(`common:${post.ads_type}`)} №: ${post.id}`}
                        </Typography>
                    </Box>
                    {notifications.map(notification => (
                        <Box mb={1} key={notification.id}>
                            <NotificationCard
                                {...notification}
                                setNotifications={setNotifications}
                                handleRefresh={fetchNotifications}
                            />
                        </Box>
                    ))}
                    <CustomPagination
                        currentPage={page}
                        totalItems={itemsCount}
                        itemsPerPage={ITEMS_PER_PAGE}
                        handlePagePagination={handlePagination}
                    />
                </>
            )}
        </CabinetModal>
    );
};
