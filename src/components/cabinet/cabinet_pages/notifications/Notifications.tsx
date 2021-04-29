import React, {FC} from 'react';
import {CabinetWrapper} from '@src/components/cabinet/CabinetWrapper';
import {useStyles} from './useStyles';
import {Notification} from '@src/components/cabinet/cabinet_pages/notifications/notification_card/Notification';
import {ButtonComponent} from '@src/components/elements/button/Button';

type NotificationsPropsType = {
    notifications,
    handleDeleteNotification: (id) => () => void,
    handleDeleteAllNotification: () => void,
}

export const Notifications: FC<NotificationsPropsType> = (props) => {
    const {
        notifications,
        handleDeleteNotification,
        handleDeleteAllNotification
    } = props;

    const title = 'Уведомления';

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CabinetWrapper headerTitle={title} title={title}>
                <ButtonComponent onClick={handleDeleteAllNotification}>
                    Удалить все уведомления
                </ButtonComponent>
                {notifications.data.map(notification => {
                    return (
                        <Notification
                            key={notification.id}
                            data={notification}
                            handleDeleteNotification={handleDeleteNotification}
                        />
                    );
                })}
            </CabinetWrapper>
        </div>
    );
};
