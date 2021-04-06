import React, {FC} from 'react';
import {AuctionInfo} from './auction_info/AuctionInfo';
import {OwnerInfo} from './owner_info/OwnerInfo';
import {Typography} from '@material-ui/core';
import {numberPrettier} from '@root/src/helpers';
import {useStyles} from './useStyles';
import Hidden from "@material-ui/core/Hidden";

export const OwnerAuctionContent: FC<any> = ({t, postData, handleFollow}) => {
    const isAuction = postData.ads_type.mark === 'auc' || postData.ads_type.mark === 'exauc';
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="price">
                <Typography variant="h4" color="initial">
                    <Hidden mdDown>
                        <span>{numberPrettier(postData.price)}</span>&nbsp;
                        {t(`common:${postData.currency.name}`)}
                    </Hidden>
                </Typography>
            </div>
            {isAuction && <AuctionInfo data={postData} t={t}/>}
            <OwnerInfo
                safe_deal={postData.safe_deal}
                owner={postData.author}
                isOwner={postData.creator}
                handleFollow={handleFollow}
                subscribed={postData.subscribed}
            />
        </div>
    );
};