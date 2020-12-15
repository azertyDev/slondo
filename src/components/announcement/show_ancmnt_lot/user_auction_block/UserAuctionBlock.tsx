import React from 'react';
import { AuctionContent } from './auction_content/AuctionContent';
import { UserContent } from './user_content/UserContent';
import { Typography } from '@material-ui/core';
import { SocialsBlock } from '@root/src/components/elements/socials_block/SocialsBlock';
import { useStyles } from './useStyles';

export const UserAuctionBlock = (props) => {
    const { adData, t } = props;
    const { data } = adData;

    const isAuction = data.ads_type.name !== 'Обычный';

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="price">
                <Typography variant="h4" color="initial">
                    <span>{data.price}</span>{' '}
                    {t(`common:${data.currency.name}`)}
                </Typography>
            </div>
            {isAuction && <AuctionContent {...props} />}
            <UserContent {...adData} />
            <SocialsBlock className="social-block" />
        </div>
    );
};
