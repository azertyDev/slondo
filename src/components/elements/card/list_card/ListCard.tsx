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

export const ListCard: FC<CardDataType> = (props) => {
    const {
        id,
        created_at,
        favorite,
        ads_type,
        delivery,
        exchange,
        safe_deal,
        auction,
        title,
        category,
        price,
        creator,
        currency,
        city,
        region,
        image
    } = props;

    const {t} = useTranslation('common');
    const {time} = useDate()(created_at);
    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));
    const {setErrorMsg} = useContext(ErrorCtx);
    const {auth: {isAuth}} = useContext(AuthCtx);
    const [liked, setLiked] = useState(favorite);

    const isAuction = ads_type === 'auc' || ads_type === 'exauc';
    const hasBet = !!auction?.number_of_bets;
    const hasService = !!delivery
        || !!exchange
        || !!safe_deal;


    const translatedTitle = transformCyrillic(title);

    const url = `/obyavlenie/${translatedTitle}-${id}`;

    const ctgrName = category.mark;
    const jobOrService = ctgrName === 'job' || ctgrName === 'service';
    const excludePrice = jobOrService || price === 0;

    const regionName = t(`locations:${region.name}.name`);
    const locationName = city ? `${t(`locations:${region.name}.${city.name}`)}, ${regionName}` : regionName;

    const handleFavorite = async () => {
        try {
            await userAPI.favoriteAds(id);
            setLiked(!liked);
        } catch (e) {
            setErrorMsg(e.message);
        }
    };

    useEffect(() => {
        setLiked(favorite);
    }, [favorite]);

    const classes = useStyles({image});
    return (
        <div className={classes.root}>
            {isAuth && !creator && (
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
                <a target='_blank' className='card' title={title}>
                    <Grid container>
                        <Grid item xs={6} sm={4} md={3} className="img lazyload">
                            <Typography
                                noWrap
                                color="initial"
                                variant="caption"
                                className={ads_type}
                            >
                                {t(ads_type === 'exauc' && isXsDown ? 'common:auc' : ads_type)}
                            </Typography>
                            {hasService && (
                                <div className="icons">
                                    {!!delivery && (
                                        <Tooltip
                                            arrow
                                            title={t('common:delivery')}
                                        >
                                        <span>
                                            <DeliveryIcon/>
                                        </span>
                                        </Tooltip>
                                    )}
                                    {!!safe_deal && (
                                        <Tooltip
                                            arrow
                                            title={t('common:safe_deal')}
                                        >
                                        <span>
                                            <SafeIcon/>
                                        </span>
                                        </Tooltip>
                                    )}
                                    {!!exchange && (
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
                                    {title}
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
                                                    {numberPrettier(auction?.bet?.bet)}&nbsp;
                                                    <span>{t(`common:${currency.name}`)}</span>
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
                                                    <span>{t(`common:${currency.name}`)}</span>
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
                                                    {numberPrettier(auction?.bet?.bet)}&nbsp;
                                                    <span>{t(`common:${currency.name}`)}</span>
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
                                                    <span>{t(`common:${currency.name}`)}</span>
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

