import React, {FC} from 'react';
import {IconButton, Paper, Typography} from '@material-ui/core';
import {useStyles} from './useStyles';
import {CloseIcon} from '@src/components/elements/icons';

export type NotificationDataType = {
   data,
    handleDeleteNotification: (id) => () => void
};

export const Notification: FC<NotificationDataType> = (props) => {
    const {
        data,
        handleDeleteNotification
    } = props;

    const {
        id,
        message,
        subTitle = 'test',
        ads_id,
    } = data;

    console.log(data);

    const classes = useStyles();
    return (
        <>
            <Paper elevation={0} className={classes.root}>
                <div>
                    <Typography variant="h6" color="initial" noWrap>
                        {message} {ads_id}
                    </Typography>
                    <Typography variant="subtitle1" color="initial" noWrap>
                        {subTitle}
                    </Typography>
                </div>
                <IconButton onClick={handleDeleteNotification(id)}>
                    <CloseIcon />
                </IconButton>
            </Paper>
        </>
    );
};
