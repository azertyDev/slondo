import {FC} from 'react';
import {
    DeliveryIcon,
    EyeIcon,
    FavoriteBorderIcon,
    FavoritedIcon, LocationIcon, PhoneIcon,
    RenewalIcon,
    SafeIcon, SwapIcon
} from '@src/components/elements/icons';
import Link from 'next/link';
import {formatNumber, numberPrettier, transformCyrillic, weekDaysHelper} from '@src/helpers';
import {useTranslation} from 'react-i18next';
import Countdown from 'react-countdown';
import {Box, Grid, Tooltip, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {CardDataType} from '@root/interfaces/CardData';
import {useStyles} from './useStyles';
import {months} from '@src/common_data/common';

type ListCardPropsType = {
    cardData: CardDataType
}

export const ListCard: FC<ListCardPropsType> = ({cardData}) => {
    const {t} = useTranslation('common');

    const isAuction = cardData.ads_type === 'auc' || cardData.ads_type === 'exauc';
    const hasBet = !!cardData.auction?.number_of_bets;
    const hasService = !!cardData.delivery || !!cardData.available_days || !!cardData.exchange || !!cardData.safe_deal || !!cardData.auction?.auto_renewal;
    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));

    const timer = ({days, hours, minutes, seconds, completed}) => (
        <Box>
            <Typography variant="subtitle2" color="initial" className='color-silver'>
                {completed ? 'Торги окончены' : 'Окончание торгов через: '}&nbsp;
            </Typography>
            {!completed && (
                <Box display="flex">
                    <Typography variant="subtitle2" className="timer">
                        {formatNumber(days)}д &nbsp;
                        {formatNumber(hours)}ч
                        : {formatNumber(minutes)}м
                        : {formatNumber(seconds)}с
                    </Typography>
                </Box>
            )}
        </Box>
    );

    const date = new Date(cardData.created_at);
    const formatted_date = `${date.getDate()} ${t(`common:${months[date.getMonth()]}`)} ${date.getFullYear()}`;

    const translatedTitle = transformCyrillic(cardData.title);

    const url = `/obyavlenie/${translatedTitle}-${cardData.id}`;

    const classes = useStyles({cardData});
    return (
        <Grid container className={classes.root}>
            <Grid item xs={6} sm={4} md={3} className="img">
                <Typography
                    noWrap
                    color="initial"
                    variant="caption"
                    className={cardData.ads_type}
                >
                    {t(cardData.ads_type === 'exauc' && isXsDown ? 'common:auc' : cardData.ads_type)}
                </Typography>
                <Box
                    width={1}
                    bottom={0}
                    display='flex'
                    padding='5px'
                    position='absolute'
                    className='observer-block'
                    justifyContent='space-between'
                >
                        <span>
                            <EyeIcon />
                            <Typography
                                noWrap
                                variant="caption"
                                color="initial"
                            >
                                {cardData.observer?.number_of_views}
                            </Typography>
                        </span>
                    <span>
                            <FavoriteBorderIcon />
                            <Typography
                                noWrap
                                variant="caption"
                                color="initial"
                            >
                                {cardData.observer?.number_of_favorites}
                            </Typography>
                    </span>
                </Box>
            </Grid>
            <Grid item xs={6} sm={8} md={9} container alignContent='space-between' className="content">
                <Grid item xs={12} sm={12} lg={7} className="post-title">
                    <Link href={url}>
                        <a target='_blank'>
                            <Typography
                                noWrap
                                variant="h6"
                                color="initial"
                            >
                                {cardData.title}
                            </Typography>
                        </a>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={8} className="description">
                    {!hasService
                        ? <Typography variant='subtitle2'>
                            {cardData.description}
                        </Typography>
                        : <Box className='services'>
                            {!!cardData.delivery && (
                                <div className="delivery">
                                    <DeliveryIcon />
                                    {!isXsDown && <Typography variant="body1">
                                        Есть доставка
                                    </Typography>}
                                </div>
                            )}
                            {!!cardData.available_days && (
                                <div className="available">
                                    <PhoneIcon />
                                    {!isXsDown && <Typography variant="body1">
                                        {weekDaysHelper(cardData.available_days, t)}{' '}
                                        {`${cardData.available_start_time}-${cardData.available_end_time}`}
                                    </Typography>}
                                </div>
                            )}
                            {!!cardData.exchange && (
                                <Tooltip title='Возможен обмен' arrow>
                                    <div className="exchange">
                                        <SwapIcon />
                                        {!isXsDown && <Typography variant="body1">
                                            Возможен обмен
                                        </Typography>}
                                    </div>
                                </Tooltip>
                            )}
                            {!!cardData.safe_deal && (
                                <div className="safe_deal">
                                    <SafeIcon />
                                    {!isXsDown && <Typography variant="body1">
                                        Безопасная покупка
                                    </Typography>}
                                </div>
                            )}
                            {!!cardData.auction?.auto_renewal && (
                                <div className="safe_deal">
                                    <RenewalIcon />
                                    {!isXsDown && <Typography variant="body1">
                                        Автопродление
                                    </Typography>}
                                </div>
                            )}
                        </Box>
                    }
                </Grid>
                {isAuction && (
                    <Grid item xs={12} container spacing={isXsDown ? 1 : 0}>
                        <Grid item xs={12} sm={6} md={6}>
                            <Countdown
                                date={new Date(cardData.expiration_at).getTime()}
                                renderer={timer}
                            />
                        </Grid>
                        <Grid
                            container
                            alignItems='center'
                            item xs={12} sm={6} md={6}
                            justify={isXsDown ? 'flex-start' : 'flex-end'}
                        >
                            <Typography variant='subtitle2'>
                                <span className='color-silver'>
                                    Ставок:
                                </span>&nbsp;
                                {cardData.auction?.number_of_bets}
                            </Typography>
                        </Grid>
                    </Grid>
                )}
                <Grid item xs={12} container>
                    {!isXsDown &&
                    <Grid
                        item
                        sm={7}
                        container
                        justify='center'
                        direction='column'
                        className='location'
                    >
                        <Typography variant='subtitle2' noWrap>
                            {formatted_date}
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            color="initial"
                            noWrap
                        >
                            {`${t(`locations:${cardData.region.name}.name`) ?? ''}`}
                            {cardData.city?.name ? `, ${t(`locations:${cardData.region.name}.${cardData.city.name}`)}` : ''}
                        </Typography>
                    </Grid>
                    }
                    <Grid
                        zeroMinWidth
                        item xs={12} sm={5}
                        container direction='column' alignItems={isXsDown ? 'flex-start' : 'flex-end'}
                    >
                        {isAuction
                            ? hasBet && <>
                            <Typography variant='subtitle1' className='color-silver'>
                                {t('common:currentRate')}
                            </Typography>
                            <Typography
                                variant="h6"
                                color="initial"
                                noWrap
                            >
                                {numberPrettier(cardData.auction?.bet?.bet)}&nbsp;
                                <span>{t(`common:${cardData.currency.name}`)}</span>
                            </Typography>
                        </>
                            : <Typography
                                variant="h6"
                                color="initial"
                                noWrap
                            >
                                {numberPrettier(cardData.price)}&nbsp;
                                <span>{t(`common:${cardData.currency.name}`)}</span>
                            </Typography>}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

