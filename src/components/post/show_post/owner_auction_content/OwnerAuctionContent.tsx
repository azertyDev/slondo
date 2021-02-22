import React, {FC} from 'react';
import {AuctionInfo} from './auction_info/AuctionInfo';
import {OwnerInfo} from './owner_info/OwnerInfo';
import {Typography} from "@material-ui/core";
import {numberPrettier} from '@root/src/helpers';
import {useStyles} from './useStyles';


export const OwnerAuctionContent: FC<any> = (props) => {
    const {t, postData} = props;
    const {data} = postData;

    const isAuction = data.ads_type.mark === 'auc' || data.ads_type.mark === 'exauc';

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="price">
                <Typography variant="h4" color="initial">
                    <span>{numberPrettier(data.price)}</span>{' '}
                    {t(`common:${data.currency.name}`)}
                </Typography>
            </div>
            {isAuction && <AuctionInfo data={data} />}
            <OwnerInfo
                phone={data.phone}
                safe_deal={data.safe_deal}
            />
        </div>
    );
};