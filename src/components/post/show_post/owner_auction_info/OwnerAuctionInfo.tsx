import {FC, useContext, useState} from 'react';
import {Hidden, Typography} from '@material-ui/core';
import {numberPrettier} from '@src/helpers';
import {AuctionContent} from '@src/components/post/show_post/owner_auction_info/auction_content/AuctionContent';
import {OwnerContent} from '@src/components/post/show_post/owner_auction_info/owner_content/OwnerContent';
import {useTranslation} from "next-i18next";
import {userAPI} from '@src/api/api';
import {ErrorCtx} from "@src/context";
import {useStyles} from './useStyles';

type OwnerAuctionInfoPropsType = {
    post: any
    setFetchedPostData: () => Promise<void>
};

export const OwnerAuctionInfo: FC<OwnerAuctionInfoPropsType> = (props) => {
    const {
        post,
        setFetchedPostData
    } = props;

    const {t} = useTranslation('post');

    const {setErrorMsg} = useContext(ErrorCtx);
    const isAuction = post.ads_type.mark === 'auc' || post.ads_type.mark === 'exauc';

    const initAuthorPhones = {
        showPhone: false,
        phone: null,
        additional_number: null
    };

    const [isFetch, setIsFetch] = useState(false);
    const [authorPhones, setAuthorPhones] = useState(initAuthorPhones);
    const {showPhone} = authorPhones;

    const handleFollow = (userId) => async () => {
        try {
            await userAPI.follow(userId);
        } catch (e) {
            setErrorMsg(e);
        }
    };

    const handleShowPhone = async () => {
        try {
            setIsFetch(true);
            const phones = !showPhone ? await userAPI.getPostAuthorPhones(post.id) : initAuthorPhones;
            setIsFetch(false);
            setAuthorPhones({
                ...authorPhones,
                ...phones,
                showPhone: !showPhone
            });
        } catch ({response: {post}}) {
            setIsFetch(false);
            if (post.message !== 'forbidden:') {
                setErrorMsg(post.message);
            } else {
                setAuthorPhones({
                    ...initAuthorPhones,
                    showPhone: !showPhone
                });
            }
        }
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Hidden mdDown>
                <div className="price">
                    <Typography variant="h4" color="initial">
                        <span>{numberPrettier(post.price)}</span>&nbsp;
                        {t(`common:${post.currency.name}`)}
                    </Typography>
                </div>
            </Hidden>
            {isAuction && (
                <Hidden mdDown>
                    <AuctionContent
                        t={t}
                        postData={post}
                        setFetchedPostData={setFetchedPostData}
                    />
                </Hidden>
            )}
            <OwnerContent
                t={t}
                postData={post}
                showPhone={showPhone}
                authorPhones={authorPhones}
                handleFollow={handleFollow}
                handleShowPhone={handleShowPhone}
                setFetchedPostData={setFetchedPostData}
            />
        </div>
    );
};
