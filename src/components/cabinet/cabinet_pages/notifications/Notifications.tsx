import React, {FC} from 'react';
import {CabinetWrapper} from '@src/components/cabinet/CabinetWrapper';
import {useStyles} from './useStyles';
import { Box, Grid } from '@material-ui/core';
import {Notification} from '@src/components/cabinet/cabinet_pages/notifications/notification_card/Notification';

type NotificationsPropsType = {
    notifications
}

export const Notifications: FC<NotificationsPropsType> = (props) => {
    const {
        notifications
    } = props;

    const title = 'Уведомления';

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CabinetWrapper headerTitle={title} title={title}>
                {
                    notifications.map(notification => {
                        return (
                            <Notification
                                key={notification.id}
                                title={notification.message}
                                subTitle='Пожалуйста, заполните данные о себе, что бы мы могли поставить Вам оценку 5 звезд'
                                ads_id={notification.ads_id}
                            />
                        );
                    })
                }
            </CabinetWrapper>
        </div>
    );
};
