import React, {useState, FC} from 'react';
import {Hidden, Typography} from '@material-ui/core';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {SafeIcon} from '@root/src/components/elements/icons';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {SocialsBlock} from '@root/src/components/elements/socials_block/SocialsBlock';
import {useStyles} from './useStyles';


type OwnerPropsType = {
    data,
    handleFollow: (userId) => () => void
};

export const OwnerInfo: FC<OwnerPropsType> = (props) => {
    const {
        data,
        handleFollow
    } = props;

    const {
        safe_deal,
        author,
        creator,
        subscribed,
    } = data;

    const [isPhoneAval, setIsPhoneAval] = useState(false);
    const handleShowPhone = () => {
        setIsPhoneAval(!isPhoneAval);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <UserInfoWithAvatar subscribed={subscribed} isOwner={creator} owner={author} handleFollow={handleFollow}/>
            <Hidden mdDown>
                <div className="contact-buttons">
                    <ButtonComponent color="primary" onClick={handleShowPhone}>
                        <Typography variant="subtitle1" color="initial">
                            {isPhoneAval
                                ? author.phone || 'default'
                                : 'Показать номер'}
                        </Typography>
                    </ButtonComponent>
                    <ButtonComponent color="primary" className='contact-btn'>
                        <Typography variant="subtitle1" color="initial">
                            Написать продавцу
                        </Typography>
                    </ButtonComponent>
                    {!!safe_deal && (
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
                {!!safe_deal && (
                    <div className='fixed-bet-safe-deal floating'>
                        <div className="floating-text">
                            <SafeIcon/>
                            <Typography variant='subtitle2'>
                                Безопасная покупка <br/>
                                за 420 000 сум
                            </Typography>
                        </div>
                        <ButtonComponent>
                            Купить
                        </ButtonComponent>
                    </div>
                )}
            </Hidden>
        </div>
    );
};
