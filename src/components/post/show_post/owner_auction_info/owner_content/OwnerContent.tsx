import {FC, useContext} from 'react';
import {WithT} from 'i18next';
import {Box, Hidden, Typography} from '@material-ui/core';
import {SafeIcon} from '@root/src/components/elements/icons';
import {ShowPhone} from "@src/components/elements/show_phone/ShowPhone";
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {useStyles} from './useStyles';
import {AuthCtx} from "@src/context";

type OwnerPropsType = {
    postData,
    handleSafeDeal: () => void,
    handleChatOpen: () => void
} & WithT;

export const OwnerContent: FC<OwnerPropsType> = (props) => {
    const {
        t,
        postData,
        handleSafeDeal,
        handleChatOpen
    } = props;

    const {
        status,
        author,
        safe_deal
    } = postData;

    const {user} = useContext(AuthCtx);

    const isPublic = status === 'public';
    const self = author.id === user.id;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box
                padding='10px 0'
                className='owner'
                position='relative'
            >
                <UserInfoWithAvatar
                    width='80px'
                    height='80px'
                    user={author}
                />
            </Box>
            <Hidden mdDown>
                <div className="contact-buttons">
                    <ShowPhone postId={postData.id}/>
                    {isPublic && !self && (
                        <>
                            <CustomButton
                                color="silver"
                                className='contact-btn'
                                onClick={handleChatOpen}
                            >
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
                {!self && !!safe_deal && (
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
