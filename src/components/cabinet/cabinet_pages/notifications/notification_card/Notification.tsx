import React, {FC} from 'react';
import {IconButton, Paper, Typography} from '@material-ui/core';
import {useStyles} from './useStyles';
import {CloseIcon} from '@src/components/elements/icons';
import {NotificationDataType} from '../NotificationsContainer';

export const Notification: FC<NotificationDataType> = (props) => {
    const {title, subTitle, ads_id} = props;

    const classes = useStyles();
    return (
        <>
            <Paper elevation={0} className={classes.root}>
                <div>
                    <Typography variant="h6" color="initial" noWrap>
                        {title} {ads_id}
                    </Typography>
                    <Typography variant="subtitle1" color="initial" noWrap>
                        {subTitle}
                    </Typography>
                </div>
                <IconButton>
                    <CloseIcon />
                </IconButton>
            </Paper>
        </>
    );
};
