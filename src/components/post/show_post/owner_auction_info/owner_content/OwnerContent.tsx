import {FC, useState} from 'react';
import {Box, Container, Divider, Drawer, Grid, Hidden, Typography} from '@material-ui/core';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {SafeIcon} from '@root/src/components/elements/icons';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {SocialsBlock} from '@root/src/components/elements/socials_block/SocialsBlock';
import {WithT} from 'i18next';
import {useStyles} from './useStyles';
import {log} from 'util';


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
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerShow = (value) => () => {
        setDrawerOpen(value);
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
                                    onClick={handleDrawerShow(true)}
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
                            <SafeIcon />
                            <Typography variant='subtitle2'>
                                Безопасная покупка <br />
                                за 420 000 сум
                            </Typography>
                        </div>
                        <CustomButton>
                            Купить
                        </CustomButton>
                    </div>
                )}
            </Hidden>

            <Drawer
                anchor='right'
                open={drawerOpen}
                onClose={handleDrawerShow(false)}
                className={classes.safeDealDrawer}
            >
                <Container maxWidth='xl'>
                    <Box className='safe-deal-block' p='30px'>
                        <Grid container justify='space-between'>
                            <Grid item xs={6}>
                                Grid 5
                            </Grid>
                            <Divider orientation="vertical" flexItem />
                            <Grid item xs={6}>
                                Grid 5
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Drawer>
        </div>
    );
};
