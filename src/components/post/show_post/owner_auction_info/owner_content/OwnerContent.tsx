import {FC} from 'react';
import {Hidden, Typography} from '@material-ui/core';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {SafeIcon} from '@root/src/components/elements/icons';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {SocialsBlock} from '@root/src/components/elements/socials_block/SocialsBlock';
import {WithT} from 'i18next';
import {useStyles} from './useStyles';


type OwnerPropsType = {
    postData,
    isFetch: boolean,
    authorPhones: { phone: string, additional_number: string },
    handleFollow: (userId) => () => void,
    showPhone: boolean,
    handleShowPhone: () => void
} & WithT;

export const OwnerContent: FC<OwnerPropsType> = (props) => {
    const {
        t,
        postData,
        isFetch,
        authorPhones,
        handleFollow,
        showPhone,
        handleShowPhone
    } = props;

    const {
        safe_deal,
        author,
        creator,
        subscribed
    } = postData;

    const showPhoneTxt = showPhone ? authorPhones.phone || 'number_not_available' : 'show_phone';

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <UserInfoWithAvatar
                subscribed={subscribed}
                isOwner={creator}
                owner={author}
                handleFollow={handleFollow}
            />
            <Hidden mdDown>
                <div className="contact-buttons">
                    <ButtonComponent color="primary" disabled={isFetch} onClick={handleShowPhone}>
                        <Typography variant="subtitle1" color="initial">
                            <span>{t(showPhoneTxt)}</span>
                            {showPhone && authorPhones.additional_number && (
                                <>
                                    <br/>
                                    <span>{t(authorPhones.additional_number)}</span>
                                </>
                            )}
                        </Typography>
                    </ButtonComponent>
                    {!creator && (
                        <>
                            <ButtonComponent
                                color="primary"
                                className='contact-btn'
                            >
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
                        </>
                    )}
                </div>
                <SocialsBlock/>
            </Hidden>
            <Hidden lgUp>
                {!creator && !!safe_deal && (
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
