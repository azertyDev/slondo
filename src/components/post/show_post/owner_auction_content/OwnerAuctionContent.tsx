import React from 'react';
import {AuctionInfo} from './auction_info/AuctionInfo';
import {OwnerInfo} from './owner_info/OwnerInfo';
import {Typography} from "@material-ui/core";
import { pricePrettier } from '@root/src/helpers';
import {useStyles} from './useStyles';


export const OwnerAuctionContent = (props) => {
    const {t, adData} = props;
    const {data} = adData;

    const isAuction = data.ads_type.mark === 'auc' || data.ads_type.mark === 'exauc';

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="price">
                <Typography variant="h4" color="initial">
                    <span>{pricePrettier(data.price)}</span>{' '}
                    {t(`common:${data.currency.name}`)}
                </Typography>
            </div>
            {isAuction && <AuctionInfo {...props} />}
            <OwnerInfo {...adData} />
        </div>
    );
};