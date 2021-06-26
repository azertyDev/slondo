import {FC, useState} from 'react';
import {Hidden, Typography} from '@material-ui/core';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {SafeIcon} from '@root/src/components/elements/icons';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {SocialsBlock} from '@root/src/components/elements/socials_block/SocialsBlock';
import {WithT} from 'i18next';
import {SafeDealDrawer} from '@src/components/elements/safe_deal_drawer/SafeDealDrawer';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@src/redux/rootReducer';
import {myUzCardAPI} from '@src/api/api';
import {setErrorMsgAction} from '@root/src/redux/slices/errorSlice';
import {setIsAuthModalOpen} from '@root/src/redux/slices/userSlice';
import {ConfirmModal} from '@src/components/elements/confirm_modal/Confirm_modal';
import {useModal} from '@src/hooks/useModal';
import {useStyles} from './useStyles';
import {useUserCard} from '@src/hooks/useUserCard';


type OwnerPropsType = {
    postData,
    authorPhones: { phone: string, additional_number: string },
    handleFollow: (userId) => () => void,
    showPhone: boolean,
    handleShowPhone: () => void
} & WithT;

export const OwnerContent: FC<OwnerPropsType> = (props) => {
    const {
        t,
        postData,
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

    const dispatch = useDispatch();
    const {user} = useSelector((store: RootState) => store);
    const {userCard} = useUserCard();

    const isAuth = user.isAuth;
    const hasCard = !!userCard.cardId;

    const showPhoneTxt = showPhone ? authorPhones.phone || 'number_not_available' : 'show_phone';

    const [isFetch, setIsFetch] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const {modalOpen: safeDealOpen, handleModalOpen: handleOpenSafeDeal, handleModalClose: handleCloseSafeDeal} = useModal();

    const payment = async () => {
        try {
            const p2pData = JSON.stringify({
                amount: postData.price,
                extraId: postData.id
            });

            setIsFetch(true);

            await myUzCardAPI.p2pHold(p2pData);

            handleCloseSafeDeal();
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            handleCloseSafeDeal();
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const handleSafeDeal = () => {
        if (!isAuth) {
            dispatch(setIsAuthModalOpen(true));
        } else if (hasCard) {
            handleOpenSafeDeal();
        } else {
            setDrawerOpen(true);
        }
    };

    const handleCloseDrawer = () => {
        setDrawerOpen(false);
    };

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
                    <CustomButton color="primary" disabled={isFetch} onClick={handleShowPhone}>
                        <Typography variant="subtitle1" color="initial">
                            <span>{t(showPhoneTxt)}</span>
                            {showPhone && authorPhones.additional_number && (
                                <>
                                    <br/>
                                    <span>{t(authorPhones.additional_number)}</span>
                                </>
                            )}
                        </Typography>
                    </CustomButton>
                    {!creator && (
                        <>
                            <CustomButton
                                color="primary"
                                className='contact-btn'
                            >
                                <Typography variant="subtitle1" color="initial">
                                    Написать продавцу
                                </Typography>
                            </CustomButton>
                            {!!safe_deal && (
                                <CustomButton
                                    color="primary"
                                    className="safe-shopping-btn"
                                    onClick={handleSafeDeal}
                                >
                                    <SafeIcon/>
                                    <Typography variant="subtitle1" color="initial">
                                        Безопасная покупка
                                    </Typography>
                                </CustomButton>
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
                        <CustomButton>
                            Купить
                        </CustomButton>
                    </div>
                )}
            </Hidden>
            <ConfirmModal
                title={t('buy_safe_deal')}
                open={safeDealOpen}
                cancelTxt={t('common:cancel')}
                confirmTxt={t('common:yes')}
                handleConfirm={payment}
                handleClose={handleCloseSafeDeal}
            />
            <SafeDealDrawer
                open={drawerOpen}
                handleClose={handleCloseDrawer}
            />
        </div>
    );
};
