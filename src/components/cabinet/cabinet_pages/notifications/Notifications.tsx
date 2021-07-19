import {FC, useContext, useEffect, useState} from 'react';
import {userAPI} from '@src/api/api';
import {useTranslation} from 'next-i18next';
import {ITEMS_PER_PAGE} from '@src/constants';
import {CustomPagination} from '@root/src/components/elements/custom_pagination/CustomPagination';
import {useModal} from '@src/hooks/useModal';
import {CustomButton} from "@src/components/elements/custom_button/CustomButton";
import {Box, CircularProgress, Typography} from "@material-ui/core";
import {NotificationCard} from "@src/components/cabinet/cabinet_pages/notifications/notification_card/NotificationCard";
import {CustomModal} from "@src/components/elements/custom_modal/CustomModal";
import {CustomSnackbar} from "@src/components/elements/snackbar/Snackbar";
import {ErrorCtx, UserCtx} from "@src/context";
import {useStyles} from './useStyles';

export type initialNotificationType = {
    id: number,
    ads_id: number,
    status: string,
    receiver_id: number,
    type: string,
    message: string,
    go_to: number,
    go_to_type: string,
    updated_at: string,
    created_at: string
}

export const Notifications: FC = () => {
    const {t} = useTranslation('cabinet');
    const {user} = useContext(UserCtx);
    const {setErrorMsg} = useContext(ErrorCtx);

    const {modalOpen: openSnackbar, handleModalOpen: handleOpenSnackbar, handleModalClose: handleCloseSnackbar} = useModal();

    const [isFetch, setIsFetch] = useState(false);
    const [notifications, setNotifications] = useState<initialNotificationType[]>([]);
    const [openModal, setOpenModal] = useState(false);
    const [message, setMessage] = useState('');
    const [page, setPage] = useState(1);
    const [itemsCount, setItemsCount] = useState(0);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const fetchAllNotification = async () => {
        try {
            setIsFetch(true);
            const {data, total} = await userAPI.getAllNotifications({page, itemsPerPage: ITEMS_PER_PAGE});
            setIsFetch(false);
            setNotifications(data);
            setItemsCount(total);
        } catch (e) {
            setErrorMsg(e.message);
        }
    };

    const handleDeleteAllNotification = async () => {
        try {
            setIsFetch(true);

            await userAPI.deleteAllNotification(user.id);
            const {data} = await userAPI.getAllNotifications();

            setNotifications(data);
            setIsFetch(true);
        } catch (e) {
            setErrorMsg(e.message);
        }
    };

    const handlePagePagination = (_, pageNum) => {
        setPage(pageNum);
    };

    const pagination = (
        <CustomPagination
            currentPage={page}
            totalItems={itemsCount}
            itemsPerPage={ITEMS_PER_PAGE}
            handlePagePagination={handlePagePagination}
        />
    );

    useEffect(() => {
        fetchAllNotification();
    }, [page]);

    const classes = useStyles();
    return <div className={classes.root}>
        {!!notifications.length && (
            <CustomButton
                color='primary'
                className='delete-notifications'
                onClick={handleOpenModal}
            >
                <Typography variant='subtitle1'>
                    {t('remove_all_notify')}
                </Typography>
            </CustomButton>
        )}
        {isFetch
            ? <CircularProgress/>
            : notifications.map(notification =>
                <Box mb={3} width='90%' key={notification.id}>
                    <NotificationCard
                        {...notification}
                        handleRefresh={fetchAllNotification}
                    />
                </Box>
            )}
        {!!notifications.length && (
            <Box display='flex' justifyContent='center'>
                {pagination}
            </Box>
        )}
        <CustomModal handleModalClose={handleCloseModal} openModal={openModal}>
            <Typography variant='subtitle1'>
                {t('remove_notifications')}
            </Typography>
            <Box
                mt={3}
                display='flex'
                alignItems='center'
                flexDirection='column'
                className={classes.modal}
            >
                <CustomButton onClick={handleDeleteAllNotification}>{t('common:yes')}</CustomButton>
                <CustomButton onClick={handleCloseModal}>{t('common:no')}</CustomButton>
            </Box>
        </CustomModal>
        <CustomSnackbar
            severity="success"
            message={t(message)}
            openSnackbar={openSnackbar}
            handleCloseSnackbar={handleCloseSnackbar}
        />
    </div>;
};