import {FC} from 'react';
import {Hidden, Typography} from '@material-ui/core';
import {priceTransform} from '@src/helpers';
import {AuctionContent} from '@src/components/post/show_post/owner_auction_info/auction_content/AuctionContent';
import {OwnerContent} from '@src/components/post/show_post/owner_auction_info/owner_content/OwnerContent';
import {useTranslation} from "next-i18next";
import {useStyles} from './useStyles';

type OwnerAuctionInfoPropsType = {
    post: any,
    handleSafeDeal: () => void,
    handleChatOpen: () => void,
    setFetchedPostData: () => Promise<void>
};

export const OwnerAuctionInfo: FC<OwnerAuctionInfoPropsType> = (props) => {
    const {
        post,
        handleSafeDeal,
        handleChatOpen,
        setFetchedPostData
    } = props;

    const {t} = useTranslation('post');
    const isAuction = post.ads_type.mark === 'auc' || post.ads_type.mark === 'exauc';
    const jobOrService = post.category.name === 'job' || post.category.name === 'service';

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Hidden mdDown>
                <div className="price">
                    <Typography variant="h4" color="initial">
                        {t(priceTransform(post.price, jobOrService))}&nbsp;
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
