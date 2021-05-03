import React, {FC} from 'react';
import {CabinetWrapper} from '@src/components/cabinet/CabinetWrapper';
import {useStyles} from './useStyles';
import {Notification} from '@src/components/cabinet/cabinet_pages/notifications/notification_card/Notification';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {CircularProgress, Typography} from '@material-ui/core';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';
import Box from '@material-ui/core/Box';
import {CustomSnackbar} from '@src/components/elements/snackbar/Snackbar';

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
    handleCloseSnackbar?
    setOpenSnackbar,
}

export const Notifications: FC<NotificationsPropsType> = (props) => {
    const {
        notifications,
        isFetch,
        handleDeleteNotification,
        handleDeleteAllNotification,
        openModal,
        handleOpenModal,
        handleCloseModal,
        message,
        openSnackbar,
        setOpenSnackbar
    } = props;

    const title = 'Уведомления';

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CabinetWrapper headerTitle={title} title={title}>
                {!!notifications.data.length && (<ButtonComponent
                    className='delete-notifications'
                    onClick={handleOpenModal}
                >
                    Удалить все уведомления
                </ButtonComponent>)}
                {isFetch
                    ? <CircularProgress />
                    : notifications.data.map(notification =>
                        <Notification
                            key={notification.id}
                            data={notification}
                            handleDeleteNotification={handleDeleteNotification}
                        />
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
                    <ButtonComponent onClick={handleDeleteAllNotification}>Да</ButtonComponent>
                    <ButtonComponent onClick={handleCloseModal}>Нет</ButtonComponent>
                </Box>
            </CustomModal>
            <CustomSnackbar
                message={message}
                openSnackbar={openSnackbar}
                setOpenSnackbar={setOpenSnackbar}
                severity="success"
            />
        </div>
    );
};
