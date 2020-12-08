import React from 'react';
import {LotInfo} from './lotInfo/LotInfo';
import {UserInfo} from './userinfo/UserInfo';

// styles
import {useStyles} from './useStyles';

export const RightSide = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <LotInfo {...props}/>
            <UserInfo/>
        </div>
    );
};
