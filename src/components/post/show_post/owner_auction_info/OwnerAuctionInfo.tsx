import {FC, useContext, useState} from 'react';
import {WithT} from 'i18next';
import {Hidden, Typography} from '@material-ui/core';
import {numberPrettier} from '@src/helpers';
import {AuctionContent} from '@src/components/post/show_post/owner_auction_info/auction_content/AuctionContent';
import {OwnerContent} from '@src/components/post/show_post/owner_auction_info/owner_content/OwnerContent';
import {userAPI} from '@src/api/api';
import {ErrorCtx} from "@src/context";
import {useStyles} from './useStyles';

type OwnerAuctionInfoPropsType = {
    data: any
    setFetchedPostData: () => Promise<void>
} & WithT;

export const OwnerAuctionInfo: FC<OwnerAuctionInfoPropsType> = (props) => {
    const {
        t,
        data,
        setFetchedPostData
    } = props;

    const {setErrorMsg} = useContext(ErrorCtx);
    const isAuction = data.ads_type.mark === 'auc' || data.ads_type.mark === 'exauc';

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
            const phones = !showPhone ? await userAPI.getPostAuthorPhones(data.id) : initAuthorPhones;
            setIsFetch(false);
            setAuthorPhones({
                ...authorPhones,
                ...phones,
                showPhone: !showPhone
            });
        } catch ({response: {data}}) {
            setIsFetch(false);
            if (data.message !== 'forbidden:') {
                setErrorMsg(data.message);
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
                        <span>{numberPrettier(data.price)}</span>&nbsp;
                        {t(`common:${data.currency.name}`)}
                    </Typography>
                </div>
            </Hidden>
            {isAuction && (
                <Hidden mdDown>
                    <AuctionContent
                        t={t}
                        postData={data}
                        setFetchedPostData={setFetchedPostData}
                    />
                </Hidden>
            )}
            <OwnerContent
                t={t}
                postData={data}
                showPhone={showPhone}
                authorPhones={authorPhones}
                handleFollow={handleFollow}
                handleShowPhone={handleShowPhone}
            />
        </div>
    );
};
