import React, {FC, ReactElement} from 'react';
import {CabinetWrapper} from '@src/components/cabinet/CabinetWrapper';
import {useStyles} from './useStyles';
import {Notification} from '@src/components/cabinet/cabinet_pages/notifications/notification_card/Notification';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {CircularProgress, Typography} from '@material-ui/core';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';
import Box from '@material-ui/core/Box';
import {CustomSnackbar} from '@src/components/elements/snackbar/Snackbar';
import {WithT} from 'i18next';

type NotificationsPropsType = {
    notifications,
    isFetch: boolean,
    handleDeleteNotification: (id) => () => void,
    handleDeleteAllNotification: () => void,
    openModal: boolean,
    handleOpenModal: () => void,
    handleCloseModal: () => void,
    message?: string,
    openSnackbar?: boolean,
    setOpenSnackbar,
    fetchUserPhone: (user_id) => () => void,
    phone: number,
    pagination: ReactElement
} & WithT;

export const Notifications: FC<NotificationsPropsType> = (props) => {
    const {
        t,
        notifications,
        isFetch,
        handleDeleteNotification,
        handleDeleteAllNotification,
        openModal,
        fetchUserPhone,
        handleOpenModal,
        handleCloseModal,
        message,
        openSnackbar,
        setOpenSnackbar,
        phone,
        pagination
    } = props;

    const title = 'Уведомления';

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CabinetWrapper headerTitle={title} title={title}>
                {!!notifications.length && (
                    <CustomButton
                        className='delete-notifications'
                        onClick={handleOpenModal}
                    >
                        Удалить все уведомления
                    </CustomButton>
                )}
                {isFetch
                    ? <CircularProgress />
                    : notifications.map(notification =>
                        <Box mb={3} width='90%'>
                            <Notification
                                t={t}
                                key={notification.id}
                                data={notification}
                                phone={phone}
                                handleDeleteNotification={handleDeleteNotification}
                                fetchUserPhone={fetchUserPhone}
                            />
                        </Box>
                    )}
                {!!notifications.length && (
                    <Box display='flex' justifyContent='center'>
                        {pagination}
                    </Box>
                )}
            </CabinetWrapper>
            <CustomModal handleModalClose={handleCloseModal} openModal={openModal}>
                <Typography variant='subtitle1'>
                    Окуел?
                </Typography>
                <Box
                    mt={3}
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    className={classes.modal}
                >
                    <CustomButton onClick={handleDeleteAllNotification}>Да</CustomButton>
                    <CustomButton onClick={handleCloseModal}>Нет</CustomButton>
                </Box>
            </CustomModal>
            <CustomSnackbar
                message={t(message)}
                openSnackbar={openSnackbar}
                setOpenSnackbar={setOpenSnackbar}
                severity="success"
            />
        </div>
    );
};
