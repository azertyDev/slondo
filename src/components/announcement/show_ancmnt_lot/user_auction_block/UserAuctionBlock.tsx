import React from 'react';
import {AuctionContent} from './auction_content/AuctionContent';
import {UserContent} from './user_content/UserContent';
import {Typography} from "@material-ui/core";
import {useStyles} from './useStyles';


export const UserAuctionBlock = (props) => {
    const {adData} = props;
    const {data} = adData;

    const isAuction = data.ads_type.name !== 'Обычный';
    console.log(adData)
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className='price'>
                {!isAuction && (
                    <Typography variant="h4" color="initial">
                        {data.price} {data.currency.name}
                    </Typography>
                )}
            </div>
            {isAuction && <AuctionContent {...props} />}
            <UserContent {...adData} />
        </div>
    );
};