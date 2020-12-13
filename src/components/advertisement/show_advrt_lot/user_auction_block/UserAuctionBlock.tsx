import React from 'react';
import {AuctionContent} from './auction_content/AuctionContent';
import {UserContent} from './user_content/UserContent';
// styles
import { useStyles } from './useStyles';

export const UserAuctionBlock = (props) => {
    const { adData } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {adData.data.ads_type.mark !== 'regular' && <AuctionContent {...props} />}
            <UserContent {...adData} />
        </div>
    );
};