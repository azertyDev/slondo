import {FC, useContext} from 'react';
import {CardDataType} from '@root/interfaces/CardData';
import {Box, Grid, Paper, Typography} from '@material-ui/core';
import {LocationIcon} from '@src/components/elements/icons';
import {useTranslation} from 'next-i18next';
import {AuthCtx} from "@src/context";
import {CabinetModal} from '@src/components/cabinet/components/cabinet_modal/CabinetModal';
import {UserCard} from "@src/components/cabinet/components/user_card/UserCard";
import {CabinetCard} from '@src/components/cabinet/components/cabinet_card/CabinetCard';
import {useStyles} from '../useStyles';

type DetailedPostViewPropsType = {
    post: CardDataType,
    handleOpenRating: () => void
};

export const DetailedPost: FC<DetailedPostViewPropsType> = (props) => {
    const {
        post,
        handleOpenRating
    } = props;

    const {
        buyer,
        author,
        ads_type,
        status,
        reasons = []
    } = post;

    const {user} = useContext(AuthCtx);
    const {t} = useTranslation('cabinet');

    const isNotPassModeration = status === 'blocked' || status === 'refuse';
    const inactiveStatus = status === 'archive' || status === 'history' || status === 'sold';

    const reason = reasons.map(({reason}, index) => {
        return (
            <Grid item xs={12} key={index}>
                <Typography variant='subtitle1' component='p' className='error-text'>
                    {t(`${reason.name}`)}
                </Typography>
            </Grid>
        );
    });

    const isUserCreator = author?.id === user.id;
    const isUserBuyer = buyer?.id === user.id;

    const hasBuyer = !!buyer;
    const hasUserForRating = !!(isUserBuyer ? author : inactiveStatus ? buyer : null);

    let userData = !isUserCreator ? author : null;

    const getUserInfoTitle = () => {
        if (hasBuyer && isUserCreator) return 'buyer';
        return isUserCreator || isNotPassModeration ? '' : 'seller';
    };

    if (hasBuyer) {
        userData = isUserBuyer ? author : buyer;
    }

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <CabinetCard cardData={post}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className='paper-block'>
                        <Box className='location' width={1}>
                            <LocationIcon/>
                            <Typography
                                noWrap
                                color="initial"
                                variant="subtitle1"
                            >
                                {post.city
                                    ? `${t(`locations:${post.region.name}.${post.city.name}`)}, ${t(`locations:${post.region.name}.name`)}`
                                    : t(`locations:${post.region.name}.name`)}
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
                {userData && (
                    <Grid item xs={12} md={6} container spacing={1} className={classes.userInfoWrapper}>
                        <Grid item xs={12} container className='user-info-title'>
                            <Grid item xs={12} sm={8}>
                                <Typography variant='subtitle2' gutterBottom>
                                    {t(getUserInfoTitle())}&nbsp;
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className='paper-block'>
                                <UserCard
                                    t={t}
                                    userData={userData}
                                    hasUserForRating={hasUserForRating}
                                    handleOpenRating={handleOpenRating}
                                />
                            </Paper>
                        </Grid>
                    </Grid>
                )}
                {isNotPassModeration && (
                    <Grid item xs={12} md={6}>
                        <Paper className='paper-block'>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <Typography variant='subtitle1' component='p' gutterBottom>
                                        {t('ban_reason')}:
                                    </Typography>
                                </Grid>
                                {reason}
                            </Grid>
                        </Paper>
                    </Grid>
                )}
            </Grid>
        </div>
    );
};
