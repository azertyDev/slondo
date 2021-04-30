import {FC, useState} from 'react';
import {WithT} from 'i18next';
import {Hidden, Typography} from '@material-ui/core';
import {numberPrettier} from '@src/helpers';
import {AuctionInfo} from '@src/components/post/show_post/owner_auction_info/auction_info/AuctionInfo';
import {OwnerInfo} from '@src/components/post/show_post/owner_auction_info/owner_info/OwnerInfo';
import {userAPI} from '@src/api/api';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {useDispatch} from 'react-redux';
import {useStyles} from './useStyles';

type OwnerAuctionInfoPropsType = {
    data: any
} & WithT;

export const OwnerAuctionInfo: FC<OwnerAuctionInfoPropsType> = (props) => {
    const {
        t,
        data
    } = props;

    const dispatch = useDispatch();
    const isAuction = data.ads_type.mark === 'auc' || data.ads_type.mark === 'exauc';

    const initAuthorPhones = {
        phone: null,
        additional_number: null
    };

    const [authorPhones, setAuthorPhones] = useState(initAuthorPhones);
    const [showPhone, setShowPhone] = useState(false);

    const handleFollow = (userId) => async () => {
        try {
            await userAPI.follow(userId);
        } catch (e) {
            dispatch(setErrorMsgAction(e));
        }
    };

    const handleShowPhone = async () => {
        try {
            if (!authorPhones.phone) {
                const phones = await userAPI.getPostAuthorPhones(data.id);
                setAuthorPhones(phones);
            }
        } catch ({response: {data}}) {
            if (data.message === 'forbidden:') {
                setAuthorPhones(initAuthorPhones);
            } else {
                dispatch(setErrorMsgAction(data.message));
            }
        }
        setShowPhone(!showPhone);
    };

    const classes = useStyles();
    return (
        <div>
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
                        <AuctionInfo
                            t={t}
                            data={data}
                        />
                    </Hidden>
                )}
                <OwnerInfo
                    t={t}
                    data={data}
                    authorPhones={authorPhones}
                    showPhone={showPhone}
                    handleFollow={handleFollow}
                    handleShowPhone={handleShowPhone}
                />
            </div>
        </div>
    );
};
