import {FC, useContext} from 'react';
import {WithT} from 'i18next';
import {Box, Hidden, Typography} from '@material-ui/core';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {LetterIcon, SafeIcon} from '@root/src/components/elements/icons';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {useModal} from '@src/hooks/useModal';
import {AuthCtx} from "@src/context/AuthCtx";
import {SafeDealModal} from "@src/components/elements/safe_deal/SafeDealModal";
import {INCOGNITO_PHONES} from "@src/constants";
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

    const isIncognito = INCOGNITO_PHONES.some(p => p === authorPhones.phone);

    const {auth: {isAuth}, setAuthModalOpen} = useContext(AuthCtx);

    const showPhoneTxt = showPhone ? authorPhones.phone || 'number_not_available' : 'show_phone';

    const {modalOpen: safeDealOpen, handleModalOpen: handleOpenSafeDeal, handleModalClose: handleCloseSafeDeal} = useModal();

    const handleSafeDeal = () => {
        if (isAuth) {
            handleOpenSafeDeal();
        } else {
            setAuthModalOpen(true);
        }
    };

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
                    <CustomButton color="primary" onClick={handleShowPhone}>
                        <Typography variant="subtitle1" color="initial">
                            {!isIncognito && (
                                <>
                                    <span>{t(showPhoneTxt)}</span>
                                    <br/>
                                </>
                            )}
                            {showPhone && authorPhones.additional_number && (
                                <span>{t(authorPhones.additional_number)}</span>
                            )}
                        </Typography>
                    </CustomButton>
                    {isPublic && !creator && (
                        <>
                            <CustomButton
                                disabled
                                color="primary"
                                className='contact-btn'
                            >
                                <LetterIcon />
                                <Typography variant="subtitle1" component='p'>
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
            <SafeDealModal
                post={postData}
                open={safeDealOpen}
                onClose={handleCloseSafeDeal}
                handleRefresh={setFetchedPostData}
            />
        </div>
    );
};
