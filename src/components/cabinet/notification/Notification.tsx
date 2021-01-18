import React, { FC } from 'react';
import { Typography, Paper, IconButton } from '@material-ui/core';
import { Link } from '@root/i18n';
import { useStyles } from './useStyles';
import { CloseIcon } from '@src/components/elements/icons';
import { NotificationDataType } from '../cabinet_pages/notifications/NotificationsContainer';

export const Notification: FC<NotificationDataType> = (props) => {
    const { img, title, text } = props;

    const classes = useStyles({ img });
    return (
        <div className={classes.root}>
            <Paper elevation={0}>
                <div>
                    <Typography variant="h5" color="initial">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="initial">
                        {text}
                    </Typography>
                    <Link href="#">
                        <a>
                            <Typography
                                variant="subtitle1"
                                color="initial"
                                className="more-details"
                            >
                                Подробнее
                            </Typography>
                        </a>
                    </Link>
                </div>
            </Paper>
            <IconButton>
                <CloseIcon />
            </IconButton>
        </div>
    );
};
