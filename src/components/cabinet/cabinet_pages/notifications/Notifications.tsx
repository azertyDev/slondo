import React, {FC} from 'react';
import {Grid} from '@material-ui/core';
import {CabinetWrapper} from '@src/components/cabinet/CabinetWrapper';
import {useStyles} from './useStyles';
import {Notification} from '@src/components/cabinet/notification/Notification';
import {NotificationDataType} from './NotificationsContainer';


export const Notifications: FC<{ notifications: NotificationDataType[] }> = (props) => {
    const {notifications} = props;
    const title = 'Уведомления';

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CabinetWrapper headerTitle={title} title={title}>
                <Grid item xs={10}>
                    {notifications.map((el) => (
                        <Notification {...el} key={el.id}/>
                    ))}
                </Grid>
            </CabinetWrapper>
        </div>
    );
};
