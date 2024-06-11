import {FC} from 'react';
import {
    AutoRenewalIcon,
    DeliveryIcon,
    EyeIcon,
    FavoriteBorderIcon,
    PhoneIcon,
    SafeIcon,
    SwapIcon
} from '@src/components/elements/icons';
import Link from 'next/link';
import Countdown from 'react-countdown';
import {useTranslation} from 'next-i18next';
import {formatNumber, numberPrettier, priceTransform, transformCyrillic, weekDaysHelper} from '@src/helpers';
import {Box, Grid, Hidden, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {CardDataType} from '@root/interfaces/CardData';
import {useStyles} from './useStyles';
import {TurboSticker} from '@src/components/elements/card/turbo_sticker/TurboSticker';
import {TopSticker} from '@src/components/elements/card/top_sticker/TopSticker';

type ListCardPropsType = {
    cardData: CardDataType;
};

export const CabinetCard: FC<ListCardPropsType> = ({cardData}) => {
    const {t} = useTranslation('common');
    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));
    const isSmDown = useMediaQuery(useTheme().breakpoints.down('sm'));

    const isAuction =
        cardData.ads_type === 'auc' || cardData.ads_type === 'exauc';
    const hasBet = !!cardData.auction?.number_of_bets;
    const {top = false, turbo_sale = false} = cardData.slondo_services
        ? cardData.slondo_services.reduce<any>((keys, item) => {
            keys[item.service.name] = true;
            return keys;
        }, {})
        : {};

    const hasService = Boolean(
        cardData.delivery ||
        cardData.exchange ||
        cardData.safe_deal ||
        cardData.available_days ||
        cardData.auto_renewal ||
        cardData.auction?.auto_renewal
    );

    const timer = ({days, hours, minutes, seconds, completed}) => (
        <Box>
            <Typography
                variant={isXsDown ? 'subtitle2' : 'subtitle1'}
                component="p"
                className="color-silver"
            >
                {completed
                    ? t('auction:auc_end')
                    : `${t('auction:auc_end_across')}: `}
                &nbsp;
            </Typography>
            {!completed && (
                <Box display="flex">
                    <Typography
                        variant={isXsDown ? 'subtitle2' : 'subtitle1'}
                        component="p"
                    >
                        {formatNumber(days)}
                        {t('common:d')} &nbsp;
                        {formatNumber(hours)}
                        {t('common:h')}: {formatNumber(minutes)}
                        {t('common:m')}: {formatNumber(seconds)}
                        {t('common:s')}
                    </Typography>
                </Box>
            )}
        </Box>
    );

    const translatedTitle = transformCyrillic(cardData.title);

    const url = `/obyavlenie/${translatedTitle}-${cardData.id}`;

    const price = cardData.price;
    const ctgrName = cardData.category.name;
    const jobOrService = ctgrName === 'job' || ctgrName === 'service';

    const classes = useStyles({cardData});
    return (
        <div className={classes.root}>
            <Link href={url}>
                <a target="_blank" className="card" title={cardData.title}>
                    <Grid container>
                        <Grid item xs={6} sm={4} md={3} className="img">
                            <Typography
                                noWrap
                                color="initial"
                                variant="caption"
                                className={cardData.ads_type}
                            >
                                {t(
                                    cardData.ads_type === 'exauc' && isXsDown
                                        ? 'common:auc'
                                        : cardData.ads_type
                                )}
                            </Typography>
                            {cardData.observer && (
                                <Box
                                    width={1}
                                    bottom={0}
                                    padding="5px"
                                    display="flex"
                                    position="absolute"
                                    className="observer-block"
                                    justifyContent="space-between"
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
                                            {
                                                cardData.observer
                                                    ?.number_of_favorites
                                            }
                                        </Typography>
                                    </span>
                                </Box>
                            )}
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            sm={8}
                            md={9}
                            container
                            className="content"
                            alignContent="space-between"
                        >
                            <Grid item xs={12} md={7} lg={8}>
                                <Typography variant="h3" color="initial">
                                    {cardData.title}
                                </Typography>
                            </Grid>
                            {!isAuction && (
                                <Grid
                                    item
                                    xs={12}
                                    sm={8}
                                    className="description"
                                >
                                    {!hasService ? (
                                        <Typography
                                            variant="subtitle2"
                                            component="p"
                                        >
                                            {cardData.description}
                                        </Typography>
                                    ) : (
                                        <Box className="services">
                                            {!!cardData.delivery && (
                                                <div className="delivery">
                                                    <DeliveryIcon />
                                                    {!isXsDown && (
                                                        <Typography variant="body1">
                                                            {t(
                                                                'common:delivery'
                                                            )}
                                                        </Typography>
                                                    )}
                                                </div>
                                            )}
                                            {!!cardData.available_days && (
                                                <div className="available">
                                                    <PhoneIcon />
                                                    {!isXsDown && (
                                                        <Typography variant="body1">
                                                            {weekDaysHelper(
                                                                cardData.available_days,
                                                                t
                                                            )}
                                                            &nbsp;
                                                            {(cardData.available_start_time ||
                                                                cardData.available_end_time) &&
                                                            `${cardData.available_start_time}-${cardData.available_end_time}`}
                                                        </Typography>
                                                    )}
                                                </div>
                                            )}
                                            {!!cardData.exchange && (
                                                <div className="exchange">
                                                    <SwapIcon />
                                                    {!isXsDown && (
                                                        <Typography variant="body1">
                                                            {t(
                                                                'common:exchange'
                                                            )}
                                                        </Typography>
                                                    )}
                                                </div>
                                            )}
                                            {!!cardData.safe_deal && (
                                                <div className="safe_deal">
                                                    <SafeIcon />
                                                    {!isXsDown && (
                                                        <Typography variant="body1">
                                                            {t(
                                                                'common:safe_deal'
                                                            )}
                                                        </Typography>
                                                    )}
                                                </div>
                                            )}
                                            {(!!cardData.auto_renewal ||
                                                !!cardData.auction
                                                    ?.auto_renewal) && (
                                                <div className="safe_deal">
                                                    <AutoRenewalIcon />
                                                    {!isXsDown && (
                                                        <Typography variant="body1">
                                                            {t(
                                                                'common:auto_ren'
                                                            )}
                                                        </Typography>
                                                    )}
                                                </div>
                                            )}
                                        </Box>
                                    )}
                                </Grid>
                            )}
                            {isAuction && (
                                <Grid
                                    item
                                    xs={12}
                                    container
                                    alignItems="center"
                                >
                                    <Typography
                                        variant="subtitle2"
                                        component="p"
                                    >
                                        <span className="color-silver">
                                            {t('auction:bets')}:
                                        </span>
                                        &nbsp;
                                        {cardData.auction?.number_of_bets}
                                    </Typography>
                                </Grid>
                            )}
                            {isAuction && (
                                <Grid item xs={12} md={6}>
                                    <Countdown
                                        renderer={timer}
                                        date={new Date(
                                            cardData.expiration_at
                                        ).getTime()}
                                    />
                                </Grid>
                            )}
                            <Grid
                                item
                                xs={12}
                                container
                                zeroMinWidth
                                direction="column"
                                md={isAuction ? 6 : 12}
                                alignItems={
                                    isSmDown ? 'flex-start' : 'flex-end'
                                }
                            >
                                {isAuction ? (
                                    hasBet && (
                                        <>
                                            <Typography
                                                component="p"
                                                variant="subtitle1"
                                                className="color-silver"
                                            >
                                                {t('common:currentRate')}
                                            </Typography>
                                            <Typography
                                                noWrap
                                                variant="h6"
                                                component="p"
                                                color="initial"
                                            >
                                                {numberPrettier(
                                                    cardData.auction?.bet?.bet
                                                )}
                                                &nbsp;
                                                <span>
                                                    {t(
                                                        `common:${cardData.currency.name}`
                                                    )}
                                                </span>
                                            </Typography>
                                        </>
                                    )
                                ) : (
                                    <Typography
                                        noWrap
                                        variant="h6"
                                        component="p"
                                        color="initial"
                                    >
                                        {t(
                                            `post:${priceTransform(
                                                price,
                                                jobOrService
                                            )}`
                                        )}
                                        &nbsp;
                                        {price !== 0 && (
                                            <span>
                                                {t(
                                                    `common:${cardData.currency.name}`
                                                )}
                                            </span>
                                        )}
                                    </Typography>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </a>
            </Link>
        </div>
    );
};
