import {FC} from 'react';
import {WithT} from 'i18next';
import {Box, Hidden, Typography} from '@material-ui/core';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {LetterIcon, SafeIcon} from '@root/src/components/elements/icons';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {ShowPhone} from "@src/components/elements/show_phone/ShowPhone";
import {useStyles} from './useStyles';

type OwnerPropsType = {
    postData,
    handleSafeDeal: () => void
} & WithT;

export const OwnerContent: FC<OwnerPropsType> = (props) => {
    const {
        t,
        postData,
        handleSafeDeal
    } = props;

    const {
        status,
        author,
        creator,
        safe_deal
    } = postData;

    const isPublic = status === 'public';

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box padding='10px 0' className='owner' position='relative'>
                <UserInfoWithAvatar
                    width='80px'
                    height='80px'
                    user={author}
                />
            </Box>
            <Hidden mdDown>
                <div className="contact-buttons">
                    <ShowPhone postId={postData.id}/>
                    {isPublic && !creator && (
                        <>
                            <CustomButton
                                disabled
                                color="primary"
                                className='contact-btn'
                            >
                                <LetterIcon/>
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
                                    <Typography
                                        color="initial"
                                        variant="subtitle1"
                                    >
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
