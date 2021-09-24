import {FC, useContext, useEffect, useState} from 'react';
import {unstable_batchedUpdates} from "react-dom";
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
import {AuthCtx, ErrorCtx} from "@src/context";
import {useStyles} from './useStyles';

export type notificationType = {
    id: number,
    ads_id: number,
    value: number,
    user_name: string,
    status: string,
    receiver_id: number,
    type: string,
    title: string,
    message: string,
    updated_at: string,
    created_at: string
}

export const Notifications: FC = () => {
    const {user} = useContext(AuthCtx);
    const {setErrorMsg} = useContext(ErrorCtx);
    const {t} = useTranslation('notifications');

    const {modalOpen: openSnackbar, handleModalOpen: handleOpenSnackbar, handleModalClose: handleCloseSnackbar} = useModal();

    const [isFetch, setIsFetch] = useState(false);
    const [notifications, setNotifications] = useState<notificationType[]>([]);
    const [openModal, setOpenModal] = useState(false);
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
            const params = {
                page,
                itemsPerPage: ITEMS_PER_PAGE
            };
            setIsFetch(true);
            const {data, total} = await userAPI.getAllNotifications(params);
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setNotifications(data);
                setItemsCount(total);
            });
        } catch (e) {
            setErrorMsg(e.message);
        }
    };

    const handleDeleteAllNotification = async () => {
        try {
            setIsFetch(true);
            const params = {
                page: 1,
                itemsPerPage: ITEMS_PER_PAGE
            };

            await userAPI.deleteAllNotification(user.id);
            const {data} = await userAPI.getAllNotifications(params);

            unstable_batchedUpdates(() => {
                setNotifications(data);
                setIsFetch(true);
            });
        } catch (e) {
            setErrorMsg(e.message);
        }
    };

    const handlePagePagination = (_, pageNum) => {
        setPage(pageNum);
    };

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
                        isPersonal
                        setNotifications={setNotifications}
                        handleRefresh={fetchAllNotification}
                        handleOpenSnackbar={handleOpenSnackbar}
                    />
                </Box>
            )
        }
        <CustomPagination
            currentPage={page}
            totalItems={itemsCount}
            itemsPerPage={ITEMS_PER_PAGE}
            handlePagePagination={handlePagePagination}
        />
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
            message={t('successfully_removed')}
            openSnackbar={openSnackbar}
            handleCloseSnackbar={handleCloseSnackbar}
        />
    </div>;
};