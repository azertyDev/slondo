import {FC, useContext, useEffect, useState} from 'react';
import {userAPI} from '@src/api/api';
import {numberPrettier} from '@src/helpers';
import {useTranslation} from 'next-i18next';
import {ITEMS_PER_PAGE} from '@src/constants';
import {Box, FormControlLabel, Switch, Typography} from '@material-ui/core';
import {CabinetModal} from '@src/components/cabinet/components/cabinet_modal/CabinetModal';
import {initialNotificationType} from '@src/components/cabinet/cabinet_pages/notifications/Notifications';
import {CommonModalType} from "@src/components/cabinet/Cabinet";
import {CustomPagination} from "@src/components/elements/custom_pagination/CustomPagination";
import {NotificationCard} from "@src/components/cabinet/cabinet_pages/notifications/notification_card/NotificationCard";
import {ErrorCtx} from "@src/context";

export const NotificationModal: FC<CommonModalType> = (props) => {
    const {
        post,
        open,
        onClose
    } = props;

    const isActive = post.status === 'public' || post.status === 'suspend';

    const {t} = useTranslation('cabinet');
    const {setErrorMsg} = useContext(ErrorCtx);

    const [isFetch, setIsFetch] = useState(false);
    const [itemsCount, setItemsCount] = useState(0);
    const [page, setPage] = useState(1);

    const [notification, setNotification] = useState<initialNotificationType[]>([]);

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
            setNotification(data);

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
        isActive && !!post.id && fetchNotifications();
    }, [page]);

    return (
        <CabinetModal
            openDialog={open}
            handleCloseDialog={onClose}
        >
            {isFetch
                ? <Typography>
                    ...Loading
                </Typography>
                : <>
                    <Box
                        display='flex'
                        alignItems='center'
                        flexDirection='column'
                    >
                        <Typography variant='subtitle1' gutterBottom>
                            {t('common:notificationsStories')}
                        </Typography>
                        <Typography variant='caption'>
                            {`${t(`common:${post.ads_type}`)} №: ${post.id}`}
                        </Typography>
                    </Box>
                    <Box
                        display='flex'
                        flexDirection='row'
                        alignItems='center'
                        justifyContent='space-between'
                    >
                        <Typography>
                            {`${t('common:extremeRate')}: ${numberPrettier(post?.auction?.bet?.bet) || 0} ${t('common:sum')}`}
                        </Typography>
                        <FormControlLabel
                            control={
                                <Switch
                                    // checked={state.checkedA}
                                    // onChange={handleChange}
                                    name="checkedA"
                                    color='primary'
                                />
                            }
                            labelPlacement="start"
                            label={t('common:notifyMe')}
                        />
                    </Box>
                    {notification.map(notification => (
                        <Box
                            mb={1}
                            key={notification.id}
                        >
                            <NotificationCard
                                {...notification}
                                handleRefresh={fetchNotifications}
                            />
                        </Box>
                    ))}
                    {notification.length > ITEMS_PER_PAGE && (
                        <Box display='flex' justifyContent='center'>
                            <CustomPagination
                                currentPage={page}
                                totalItems={itemsCount}
                                itemsPerPage={ITEMS_PER_PAGE}
                                handlePagePagination={handlePagination}
                            />
                        </Box>
                    )}
                </>}
        </CabinetModal>
    );
};
