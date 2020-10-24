import React from 'react';
import { LotInfo } from './lotInfo/LotInfo';
import { UserInfo } from './userInfo/UserInfo';

// styles
import { useStyles } from './useStyles';

export const RightSide = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <LotInfo />
            <UserInfo />
        </div>
    );
};
