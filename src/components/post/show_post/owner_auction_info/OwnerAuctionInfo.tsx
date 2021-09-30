import {FC} from 'react';
import {Hidden, Typography} from '@material-ui/core';
import {priceTransform} from '@src/helpers';
import {AuctionContent} from '@src/components/post/show_post/owner_auction_info/auction_content/AuctionContent';
import {OwnerContent} from '@src/components/post/show_post/owner_auction_info/owner_content/OwnerContent';
import {useTranslation} from "next-i18next";
import {useStyles} from './useStyles';

type OwnerAuctionInfoPropsType = {
    post: any,
    auctionInfo,
    handleSafeDeal: () => void,
    handleChatOpen: () => void,
    setFetchedPostData: () => Promise<void>
};

export const OwnerAuctionInfo: FC<OwnerAuctionInfoPropsType> = (props) => {
    const {
        post,
        auctionInfo,
        handleSafeDeal,
        handleChatOpen,
        setFetchedPostData
    } = props;

    const {t} = useTranslation('post');
    const isAuction = post.ads_type.mark === 'auc' || post.ads_type.mark === 'exauc';
    const jobOrService = post.category.name === 'job' || post.category.name === 'service';

    const getPrice = () => {
        let price = post.price;

        if (isAuction && auctionInfo.bets.length) {
            const {bets} = auctionInfo;
            price = bets[0].bet;
        }

        return t(priceTransform(price, jobOrService));
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Hidden mdDown>
                <div className="price">
                    <Typography variant="h4" color="initial">
                        {getPrice()}&nbsp;
                        {post.price !== 0 && (
                            t(`common:${post.currency.name}`)
                        )}
                    </Typography>
                </div>
            </Hidden>
            {isAuction && (
                <Hidden mdDown>
                    <AuctionContent
                        postData={post}
                        auctionInfo={auctionInfo}
                        setFetchedPostData={setFetchedPostData}
                    />
                </Hidden>
            )}
            <OwnerContent
                t={t}
                postData={post}
                handleChatOpen={handleChatOpen}
                handleSafeDeal={handleSafeDeal}
            />
        </div>
    );
};
