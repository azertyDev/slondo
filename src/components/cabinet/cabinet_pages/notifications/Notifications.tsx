import React, {FC} from 'react';
import {Grid} from '@material-ui/core';
import {CabinetWrapper} from '@src/components/cabinet/CabinetWrapper';
import {useStyles} from './useStyles';

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
                <Grid item xs={10}>
                    {
                        notifications.map(notification => {
                            return (
                                <div>
                                    <strong>{notification.id}</strong>
                                    <p>{notification.message}</p>
                                </div>
                            );
                        })
                    }
                </Grid>
            </CabinetWrapper>
        </div>
    );
};
