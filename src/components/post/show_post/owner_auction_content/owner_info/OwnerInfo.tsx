import React, {useState, FC} from 'react';
import {Typography} from '@material-ui/core';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {SafeIcon} from '@root/src/components/elements/icons';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {SocialsBlock} from '@root/src/components/elements/socials_block/SocialsBlock';
import {useStyles} from './useStyles';

type OwnerPropsType = {
    safe_deal: number,
    owner?: {
        id: number,
        name: string,
        surname: string,
        phone: string,
        created_at: string,
        avatar: string
    },
    isOwner: boolean,
    handleFollow: (userId) => () => void
    subscribed: boolean
}


export const OwnerInfo: FC<OwnerPropsType> = ({safe_deal, isOwner, owner, subscribed, handleFollow}) => {
    const [isPhoneAval, setIsPhoneAval] = useState(false);
    const handleShowPhone = () => {
        setIsPhoneAval(!isPhoneAval);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <UserInfoWithAvatar subscribed={subscribed} isOwner={isOwner} owner={owner} handleFollow={handleFollow}/>
            <div className="contact-buttons">
                <ButtonComponent color="primary" onClick={handleShowPhone}>
                    <Typography variant="subtitle1" color="initial">
                        {isPhoneAval
                            ? owner.phone || 'default'
                            : 'Показать номер'
                        }
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
        </div>
    );
};
