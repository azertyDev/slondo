import React from 'react';
import { Typography } from '@material-ui/core';
import { RatingComponent } from '../rating/Rating';

// icons
import { UserAvatar } from '../icons';
// styles
import { useStyles } from './useStyles';

export const UserInfoWithAvatar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="user-info">
                <div>
                    <img src={UserAvatar} />
                </div>
                <div>
                    <div>
                        <Typography variant="subtitle1" color="initial">
                            <span>Алимов Р.</span> (5 объявлений)
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="subtitle1" color="initial">
                            На Slondo с 31 августа 2020 г.
                        </Typography>
                    </div>
                    <div>
                        <RatingComponent />
                    </div>
                </div>
            </div>
        </div>
    );
};
