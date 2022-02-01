import {FC, useContext, useEffect, useState} from 'react';
import Link from 'next/link';
import {useTranslation} from 'react-i18next';
import Skeleton from '@material-ui/lab/Skeleton';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    IconButton,
    Tooltip,
    Typography
} from '@material-ui/core';
import {FavoritedIcon, FavoriteIcon} from '@src/components/elements/icons';
import {DeliveryIcon, SafeIcon, SwapIcon} from '@src/components/elements/icons';
import {CardDataType} from '@root/interfaces/CardData';
import {priceTransform, transformCyrillic} from '@src/helpers';
import {userAPI} from '@src/api/api';
import {AuthCtx} from '@src/context/AuthCtx';
import {ErrorCtx} from '@src/context';
import {useDate} from '@src/hooks';
import {TopSticker} from '@src/components/elements/card/top_sticker/TopSticker';
import {TurboSticker} from '@src/components/elements/card/turbo_sticker/TurboSticker';
import {useStyles} from './useStyles';

type CardItemProps = {
    isFetch?: boolean;
} & CardDataType;

export const GridCard: FC<CardItemProps> = props => {
    const {
        id,
        isFetch = false,
        image,
        delivery,
        safe_deal,
        exchange,
        title,
        price,
        created_at,
        currency,
        ads_type,
        region,
        city,
        creator,
        favorite,
        category,
        slondo_services
    } = props;

    const {top = false, turbo_sale = false} = slondo_services
        ? slondo_services.reduce<any>((keys, item) => {
              keys[item.service.name] = true;
              return keys;
          }, {})
        : {};

    const isFavorite = true;
    const {t} = useTranslation();
    const {setErrorMsg} = useContext(ErrorCtx);
    const {
        auth: {isAuth}
    } = useContext(AuthCtx);
    const translatedTitle = transformCyrillic(title);
    const [liked, setLiked] = useState(favorite);
    const {time} = useDate()(created_at);

    const ctgrName = category.mark;
    const url = `/obyavlenie/${translatedTitle}-${id}`;
    const jobOrService = ctgrName === 'job' || ctgrName === 'service';
    const postLocation = `${
        city?.name ? `${t(`locations:${region.name}.${city.name}`)}, ` : ''
    } ${t(`locations:${region.name}.name`)}`;

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

    const classes = useStyles({ads_type, isFavorite, turbo_sale, top});
    return (
        <div className={classes.root}>
            {isAuth && !creator && (
                <IconButton className="favorite-btn" onClick={handleFavorite}>
                    {liked ? <FavoriteIcon /> : <FavoritedIcon />}
                </IconButton>
            )}
            <Link href={url}>
                <a target="_blank">
                    <Card elevation={0} title={title}>
                        {isFetch ? (
                            <Skeleton
                                variant="rect"
                                className={classes.skeleton}
                            />
                        ) : (
                            <CardMedia
                                className="card-media"
                                image={image ?? '/img/default.png'}
                            >
                                <div className="card-header">
                                    <div className="post_type">
                                        <Typography
                                            variant="subtitle2"
                                            component="p"
                                        >
                                            {t(
                                                ads_type === 'exauc'
                                                    ? 'auc'
                                                    : `${ads_type}`
                                            )}
                                        </Typography>
                                    </div>
                                    <div className="icons">
                                        {!!delivery && (
                                            <Tooltip
                                                arrow
                                                title={t('delivery')}
                                            >
                                                <span>
                                                    <DeliveryIcon />
                                                </span>
                                            </Tooltip>
                                        )}
                                        {!!safe_deal && (
                                            <Tooltip
                                                arrow
                                                title={t('safe_deal')}
                                            >
                                                <span>
                                                    <SafeIcon />
                                                </span>
                                            </Tooltip>
                                        )}
                                        {!!exchange && (
                                            <Tooltip
                                                arrow
                                                title={t('exchange')}
                                            >
                                                <span>
                                                    <SwapIcon />
                                                </span>
                                            </Tooltip>
                                        )}
                                    </div>
                                </div>
                            </CardMedia>
                        )}
                        <CardActionArea>
                            <CardContent>
                                {isFetch ? (
                                    <>
                                        <Skeleton variant="rect" />
                                        <Skeleton variant="rect" />
                                        <Skeleton variant="rect" />
                                        <br />
                                        <Skeleton variant="rect" />
                                    </>
                                ) : (
                                    <>
                                        <Typography
                                            noWrap
                                            component="p"
                                            color="initial"
                                            variant="subtitle1"
                                            classes={{root: classes.title}}
                                        >
                                            {title}
                                        </Typography>
                                        <Typography
                                            component="p"
                                            className="price"
                                            variant="subtitle1"
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
                                                    {t(`${currency.name}`)}
                                                </span>
                                            )}
                                        </Typography>
                                        {region?.id !== null && (
                                            <Typography
                                                noWrap
                                                component="p"
                                                variant="caption"
                                                className='region'
                                                classes={{
                                                    root: classes.mobileFont
                                                }}
                                            >
                                                {postLocation}
                                            </Typography>
                                        )}
                                        <Typography
                                            component="p"
                                            variant="caption"
                                            classes={{root: classes.mobileFont}}
                                        >
                                            {time}
                                        </Typography>
                                    </>
                                )}
                                {turbo_sale && (
                                    <TurboSticker className="turbo-sticker" />
                                )}
                                {top && <TopSticker className="top-sticker" />}
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </a>
            </Link>
        </div>
    );
};
