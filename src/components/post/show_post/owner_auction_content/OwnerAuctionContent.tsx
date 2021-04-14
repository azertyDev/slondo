import React, {FC} from 'react';
import {Typography} from '@material-ui/core';
import {numberPrettier} from '@root/src/helpers';
import {useStyles} from './useStyles';

export const OwnerAuctionContent: FC<any> = (props) => {
    const {
        t,
        postData,
        auctionInfo,
        ownerInfo
    } = props;

    const isAuction = postData.ads_type.mark === 'auc' || postData.ads_type.mark === 'exauc';

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="price">
                <Typography variant="h4" color="initial">
                    <span>{numberPrettier(postData.price)}</span>&nbsp;
                    {t(`common:${postData.currency.name}`)}
                </Typography>
            </div>
            {isAuction ? auctionInfo : ownerInfo}
        </div>
    );
};