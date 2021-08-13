import {FC} from 'react';
import {Box, Grid, Typography} from '@material-ui/core';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {CloseIcon, DoneAllIcon} from '@src/components/elements/icons';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useTranslation, Trans} from 'next-i18next';
import {useStyles} from './useStyles';
import {numberPrettier} from '@src/helpers';

export const OfferCard: FC<any> = ({offer, isFetch, handleOffer}) => {

    const {t} = useTranslation('cabinet');

    const date = new Date(offer.created_at);
    const formatted_date = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} / ${date.getHours()}:${date.getMinutes()}`;

    const classes = useStyles();
    return (
        <>
            <Box display='flex' justifyContent='space-between'>
                <Typography variant='subtitle2' component='p' gutterBottom>
                    {t('current_offer_price')}
                </Typography>
                <Typography variant='subtitle2' component='p' gutterBottom>
                    {formatted_date}
                </Typography>
            </Box>
            <Box
                p={3}
                width={1}
                display='flex'
                className={classes.offerCard}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <UserInfoWithAvatar owner={offer.user} isOwner={true} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant='h4' component='p' align='center'>
                                    <Trans
                                        t={t}
                                        i18nKey="offer_price"
                                        tOptions={{price: numberPrettier(offer?.price)}}
                                        components={[<span />]}
                                    />
                                </Typography>
                            </Grid>
                            <Grid item xs={12} container justifyContent='space-around'>
                                <CustomButton
                                    color='silver'
                                    disabled={isFetch}
                                    onClick={handleOffer(offer.id, false)}
                                >
                                    <CloseIcon />
                                    <Typography variant="subtitle1" component='p'>
                                        {t('common:reject')}
                                    </Typography>
                                </CustomButton>
                                <CustomButton
                                    color='secondary'
                                    disabled={isFetch}
                                    onClick={handleOffer(offer.id, true)}
                                >
                                    <DoneAllIcon />
                                    <Typography variant="subtitle1" component='p'>
                                        {t('common:accept')}
                                    </Typography>
                                </CustomButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};