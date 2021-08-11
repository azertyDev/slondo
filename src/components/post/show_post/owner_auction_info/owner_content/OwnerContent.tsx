import {FC} from 'react';
import {WithT} from 'i18next';
import {Box, Hidden, Typography} from '@material-ui/core';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {LetterIcon, SafeIcon} from '@root/src/components/elements/icons';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {INCOGNITO_PHONES} from "@src/constants";
import {useStyles} from './useStyles';

type OwnerPropsType = {
    postData,
    showPhone: boolean,
    handleSafeDeal: () => void,
    handleShowPhone: () => void,
    handleFollow: (userId) => () => void,
    authorPhones: { phone: string, additional_number: string }
} & WithT;

export const OwnerContent: FC<OwnerPropsType> = (props) => {
    const {
        t,
        postData,
        authorPhones,
        handleFollow,
        showPhone,
        handleShowPhone,
        handleSafeDeal
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
    const showPhoneTxt = showPhone ? authorPhones.phone || 'number_not_available' : 'show_phone';

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box padding='10px 0' className='owner' position='relative'>
                <UserInfoWithAvatar
                    owner={author}
                    isOwner={creator}
                    subscribed={subscribed}
                    handleFollow={handleFollow}
                    width='80px'
                    height='80px'
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
                                    onClick={handleSafeDeal}
                                    className="safe-shopping-btn"
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
                        <CustomButton onClick={handleSafeDeal}>
                            {t('common:buy')}
                        </CustomButton>
                    </div>
                )}
            </Hidden>
        </div>
    );
};
