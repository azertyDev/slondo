import React from 'react';
import {LotInfo} from '@src/components/advertisement/showAdvertisement/rightSide/lotInfo/LotInfo';
import {UserInfo} from '@src/components/advertisement/showAdvertisement/rightSide/userInfo/UserInfo';

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
