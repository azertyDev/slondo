import React, {FC} from 'react';
import {Box, IconButton, Paper, Typography} from '@material-ui/core';
import {useStyles} from './useStyles';
import {CloseIcon} from '@src/components/elements/icons';
import ErrorIcon from '@material-ui/icons/Error';

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
        created_at
    } = data;

    const date = new Date(created_at);

    console.log(date.toLocaleDateString());

    const classes = useStyles();
    return (
        <Box mb={3} width='80%'>
            <Typography variant='subtitle1' gutterBottom>
                {date.toLocaleDateString()}
            </Typography>
            <Paper elevation={0} className={classes.root}>
                <Box
                    mr={1}
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                >
                    <ErrorIcon color='secondary' />
                    <Typography variant='caption'>
                        {date.toLocaleTimeString()}
                    </Typography>
                </Box>
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
        </Box>
    );
};
