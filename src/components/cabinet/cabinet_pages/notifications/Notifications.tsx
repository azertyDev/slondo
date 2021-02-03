import React, {FC} from 'react';
import {Grid} from '@material-ui/core';
import {CabinetMenuWrapper} from '@src/components/cabinet/CabinetMenuWrapper';
import {useStyles} from './useStyles';
import {Notification} from '@src/components/cabinet/notification/Notification';
import {NotificationDataType} from './NotificationsContainer';


export const Notifications: FC<{ notifications: NotificationDataType[] }> = (props) => {
    const {notifications} = props;
    const title = 'Уведомления';

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CabinetMenuWrapper headerTitle={title} title={title}>
                <Grid item xs={10}>
                    {notifications.map((el) => (
                        <Notification {...el} key={el.id}/>
                    ))}
                </Grid>
            </CabinetMenuWrapper>
        </div>
    );
};
