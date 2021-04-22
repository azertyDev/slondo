import React, {useState, FC} from 'react';
import {Hidden, Typography} from '@material-ui/core';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {SafeIcon} from '@root/src/components/elements/icons';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {SocialsBlock} from '@root/src/components/elements/socials_block/SocialsBlock';
import {UserInfo} from '@root/interfaces/Auth';
import {AuctionForm} from '@src/components/post/show_post/owner_auction_content/auction_info/AuctionForm/AuctionForm';
import {useStyles} from './useStyles';


type OwnerPropsType = {
    data,
    owner?: UserInfo,
    isOwner: boolean,
    handleFollow: (userId) => () => void
    subscribed: boolean,

}

export const OwnerInfo: FC<OwnerPropsType> = (props) => {
    const {
        data,
        isOwner,
        owner,
        subscribed,
        handleFollow
    } = props;

    const {safe_deal} = data;

    const [isPhoneAval, setIsPhoneAval] = useState(false);
    const handleShowPhone = () => {
        setIsPhoneAval(!isPhoneAval);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <UserInfoWithAvatar subscribed={subscribed} isOwner={isOwner} owner={owner} handleFollow={handleFollow}/>
            <Hidden mdDown>
                <div className="contact-buttons">
                    <ButtonComponent color="primary" onClick={handleShowPhone}>
                        <Typography variant="subtitle1" color="initial">
                            {isPhoneAval
                                ? owner.phone || 'default'
                                : 'Показать номер'}
                        </Typography>
                    </ButtonComponent>
                    <ButtonComponent color="primary" className='contact-btn'>
                        <Typography variant="subtitle1" color="initial">
                            Написать продавцу
                        </Typography>
                    </ButtonComponent>
                    {safe_deal === 1 && (
                        <ButtonComponent
                            color="primary"
                            className="safe-shopping-btn"
                        >
                            <SafeIcon/>
                            <Typography variant="subtitle1" color="initial">
                                Безопасная покупка
                            </Typography>
                        </ButtonComponent>
                    )}
                </div>
                <SocialsBlock/>
            </Hidden>
            <Hidden lgUp>
                <AuctionForm
                    safe_deal={safe_deal}
                />
            </Hidden>
        </div>
    );
};
