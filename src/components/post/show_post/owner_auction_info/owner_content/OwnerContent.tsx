import {FC, useContext, useEffect, useState} from 'react';
import {WithT} from 'i18next';
import {Box, Hidden, Typography} from '@material-ui/core';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {SafeIcon} from '@root/src/components/elements/icons';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {SafeDealDrawer} from '@src/components/elements/safe_deal_drawer/SafeDealDrawer';
import {myUzCardAPI} from '@src/api/api';
import {ConfirmModal} from '@src/components/elements/confirm_modal/Confirm_modal';
import {useModal} from '@src/hooks/useModal';
import {useUserPaymentCard} from '@src/hooks/useUserPaymentCard';
import {AuthCtx} from "@src/context/AuthCtx";
import {ErrorCtx} from "@src/context";
import {useStyles} from './useStyles';

type OwnerPropsType = {
    postData,
    showPhone: boolean,
    handleShowPhone: () => void,
    handleFollow: (userId) => () => void,
    authorPhones: { phone: string, additional_number: string }
    setFetchedPostData: () => Promise<void>
} & WithT;

export const OwnerContent: FC<OwnerPropsType> = (props) => {
    const {
        t,
        postData,
        authorPhones,
        handleFollow,
        showPhone,
        handleShowPhone,
        setFetchedPostData
    } = props;

    const {
        status,
        safe_deal,
        author,
        creator,
        subscribed
    } = postData;

    const isPublic = status === 'public';
    const {setErrorMsg} = useContext(ErrorCtx);
    const {auth: {isAuth}, setAuthModalOpen} = useContext(AuthCtx);

    const {userCard, fetchUserCard} = useUserPaymentCard();

    const hasCard = !!userCard.cardId;

    const showPhoneTxt = showPhone ? authorPhones.phone || 'number_not_available' : 'show_phone';

    const [isFetch, setIsFetch] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const {modalOpen: safeDealOpen, handleModalOpen: handleOpenSafeDeal, handleModalClose: handleCloseSafeDeal} = useModal();

    const createP2pHold = async () => {
        try {
            const p2pData = JSON.stringify({
                amount: postData.price,
                extraId: postData.id
            });

            setIsFetch(true);

            await myUzCardAPI.p2pHold(p2pData);
            await setFetchedPostData();
            handleCloseSafeDeal();
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            handleCloseSafeDeal();
            setErrorMsg(e.message);
        }
    };

    const handleSafeDeal = () => {
        if (!isAuth) {
            setAuthModalOpen(true);
        } else if (hasCard) {
            handleOpenSafeDeal();
        } else {
            setDrawerOpen(true);
        }
    };

    const handleCloseDrawer = () => {
        setDrawerOpen(false);
    };

    useEffect(() => {
        fetchUserCard();
    }, []);
    console.log(isPublic);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box padding='10px 0' className='owner' position='relative'>
                <UserInfoWithAvatar
                    subscribed={subscribed}
                    isOwner={creator}
                    owner={author}
                    handleFollow={handleFollow}
                />
            </Box>
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
                    {isPublic && !creator && (
                        <>
                            <CustomButton
                                color="primary"
                                className='contact-btn'
                            >
                                <Typography variant="subtitle1" color="initial">
                                    {t('common:writeToSeller')}
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
                                        {t('common:safe_deal')}
                                    </Typography>
                                </CustomButton>
                            )}
                        </>
                    )}
                </div>
            </Hidden>
            <Hidden lgUp>
                {!creator && !!safe_deal && (
                    <div className='fixed-bet-safe-deal floating'>
                        <div className="floating-text">
                            <SafeIcon/>
                            <Typography variant='subtitle2'>
                                {t('common:safe_deal')}
                            </Typography>
                        </div>
                        <CustomButton>
                            {t('common:buy')}
                        </CustomButton>
                    </div>
                )}
            </Hidden>
            <ConfirmModal
                open={safeDealOpen}
                title={t('buy_safe_deal')}
                confirmTxt={t('common:yes')}
                cancelTxt={t('common:no')}
                handleConfirm={createP2pHold}
                handleClose={handleCloseSafeDeal}
            />
            <SafeDealDrawer
                open={drawerOpen}
                handleClose={handleCloseDrawer}
            />
        </div>
    );
};
