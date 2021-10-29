import {FC, useContext, useEffect, useState} from 'react';
import {
    SwapIcon,
    SafeIcon,
    DeliveryIcon, FavoriteIcon, FavoritedIcon
} from '@src/components/elements/icons';
import Link from 'next/link';
import {useTranslation} from 'react-i18next';
import {numberPrettier, priceTransform, transformCyrillic} from '@src/helpers';
import {Grid, Hidden, IconButton, Tooltip, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {CardDataType} from '@root/interfaces/CardData';
import {useDate} from '@src/hooks';
import {useStyles} from './useStyles';
import {AuthCtx, ErrorCtx} from '@src/context';
import {userAPI} from '@src/api/api';

type ListCardPropsType = {
    cardData: CardDataType
}

export const ListCard: FC<ListCardPropsType> = ({cardData}) => {
    const {t} = useTranslation('common');
    const {time} = useDate()(cardData.created_at);
    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));
    const {setErrorMsg} = useContext(ErrorCtx);
    const {auth: {isAuth}} = useContext(AuthCtx);
    const [liked, setLiked] = useState(cardData.favorite);

    const isAuction = cardData.ads_type === 'auc' || cardData.ads_type === 'exauc';
    const hasBet = !!cardData.auction?.number_of_bets;
    const hasService = !!cardData.delivery
        || !!cardData.exchange
        || !!cardData.safe_deal;


    const translatedTitle = transformCyrillic(cardData.title);

    const url = `/obyavlenie/${translatedTitle}-${cardData.id}`;

    const price = cardData.price;
    const ctgrName = cardData.category.mark;
    const jobOrService = ctgrName === 'job' || ctgrName === 'service';
    const excludePrice = jobOrService || price === 0;

    const {city, region} = cardData;

    const regionName = t(`locations:${region.name}.name`);
    const locationName = city ? `${t(`locations:${region.name}.${city.name}`)}, ${regionName}` : regionName;

    const handleFavorite = async () => {
        try {
            await userAPI.favoriteAds(cardData.id);
            setLiked(!liked);
        } catch (e) {
            setErrorMsg(e.message);
        }
    };

    useEffect(() => {
        setLiked(cardData.favorite);
    }, [cardData.favorite]);

    const classes = useStyles({cardData});
    return (
        <div className={classes.root}>
            {isAuth && !cardData.creator && (
                <IconButton
                    className="favorite-btn"
                    onClick={handleFavorite}
                >
                    {liked
                        ? <FavoriteIcon/>
                        : <FavoritedIcon/>
                    }
                </IconButton>
            )}
            <Link href={url}>
                <a target='_blank' className='card' title={cardData.title}>
                    <Grid container>
                        <Grid item xs={6} sm={4} md={3} className="img">
                            <Typography
                                noWrap
                                color="initial"
                                variant="caption"
                                className={cardData.ads_type}
                            >
                                {t(cardData.ads_type === 'exauc' && isXsDown ? 'common:auc' : cardData.ads_type)}
                            </Typography>
                            {hasService && (
                                <div className="icons">
                                    {!!cardData.delivery && (
                                        <Tooltip
                                            arrow
                                            title={t('common:delivery')}
                                        >
                                        <span>
                                            <DeliveryIcon/>
                                        </span>
                                        </Tooltip>
                                    )}
                                    {!!cardData.safe_deal && (
                                        <Tooltip
                                            arrow
                                            title={t('common:safe_deal')}
                                        >
                                        <span>
                                            <SafeIcon/>
                                        </span>
                                        </Tooltip>
                                    )}
                                    {!!cardData.exchange && (
                                        <Tooltip
                                            arrow
                                            title={t('common:exchange')}
                                        >
                                        <span>
                                            <SwapIcon/>
                                        </span>
                                        </Tooltip>
                                    )}
                                </div>
                            )}
                        </Grid>
                        <Grid item xs={6} sm={8} md={9} container alignContent='space-between' className="content">
                            <Grid item xs={12} sm={10} lg={7}>
                                <Typography
                                    variant="h3"
                                    color="initial"
                                >
                                    {cardData.title}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} container>
                                <Hidden smUp>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        container
                                        zeroMinWidth
                                        direction='column'
                                    >
                                        {isAuction
                                            ? hasBet &&
                                            <>
                                                <Typography variant='subtitle1' component='p' className='color-silver'>
                                                    {t('common:currentRate')}
                                                </Typography>
                                                <Typography
                                                    noWrap
                                                    variant="h6"
                                                    component='p'
                                                    color="initial"
                                                    className='price'
                                                >
                                                    {numberPrettier(cardData.auction?.bet?.bet)}&nbsp;
                                                    <span>{t(`common:${cardData.currency.name}`)}</span>
                                                </Typography>
                                            </>
                                            : <Typography
                                                noWrap
                                                variant="h6"
                                                component='p'
                                                color="initial"
                                                className='price'
                                            >
                                                {t(`post:${priceTransform(price, jobOrService)}`)}&nbsp;
                                                {!excludePrice && (
                                                    <span>{t(`common:${cardData.currency.name}`)}</span>
                                                )}
                                            </Typography>}
                                    </Grid>
                                </Hidden>
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    container
                                    direction='column'
                                    className='location'
                                    justifyContent='center'
                                >
                                    <Typography variant="subtitle2" component='p' color="initial" noWrap>
                                        {locationName}
                                    </Typography>
                                    <Typography variant='subtitle2' component='p' noWrap>
                                        {time}
                                    </Typography>
                                </Grid>
                                <Hidden xsDown>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        container
                                        zeroMinWidth
                                        direction='column'
                                        alignItems={isXsDown ? 'flex-start' : 'flex-end'}
                                    >
                                        {isAuction
                                            ? hasBet &&
                                            <>
                                                <Typography variant='subtitle1' component='p' className='color-silver'>
                                                    {t('common:currentRate')}
                                                </Typography>
                                                <Typography
                                                    noWrap
                                                    variant="h6"
                                                    component='p'
                                                    color="initial"
                                                    className='price'
                                                >
                                                    {numberPrettier(cardData.auction?.bet?.bet)}&nbsp;
                                                    <span>{t(`common:${cardData.currency.name}`)}</span>
                                                </Typography>
                                            </>
                                            : <Typography
                                                noWrap
                                                variant="h6"
                                                component='p'
                                                color="initial"
                                                className='price'
                                            >
                                                {t(`post:${priceTransform(price, jobOrService)}`)}&nbsp;
                                                {!excludePrice && (
                                                    <span>{t(`common:${cardData.currency.name}`)}</span>
                                                )}
                                            </Typography>}
                                    </Grid>
                                </Hidden>
                            </Grid>
                        </Grid>
                    </Grid>
                </a>
            </Link>
        </div>
    );
};

