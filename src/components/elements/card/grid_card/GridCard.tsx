import {FC, useContext, useEffect, useState} from 'react';
import Link from 'next/link';
import {useTranslation} from 'react-i18next';
import Skeleton from '@material-ui/lab/Skeleton';
import {Card, CardActionArea, CardContent, CardMedia, IconButton, Tooltip, Typography} from '@material-ui/core';
import {FavoritedIcon, FavoriteIcon} from '@src/components/elements/icons';
import {DeliveryIcon, SafeIcon, SwapIcon} from '@src/components/elements/icons';
import {CardDataType} from '@root/interfaces/CardData';
import {numberPrettier, transformCyrillic} from '@src/helpers';
import {userAPI} from '@src/api/api';
import {months} from '@src/common_data/common';
import {AuthCtx} from "@src/context/AuthCtx";
import {ErrorCtx} from "@src/context";
import {useStyles} from './useStyles';

type CardItemProps = {
    isFetch: boolean
} & CardDataType;

export const GridCard: FC<CardItemProps> = (props) => {
    const {
        id,
        isFetch,
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
        favorite
    } = props;

    const isFavorite = true;

    const {t} = useTranslation('common');
    const {setErrorMsg} = useContext(ErrorCtx);
    const {auth: {isAuth}} = useContext(AuthCtx);
    const translatedTitle = transformCyrillic(title);
    const [liked, setLiked] = useState(favorite);

    const date = new Date(created_at);

    function checkTime(i) {
        if (i < 10) {
            i = '0' + i;
        }
        return i;
    }

    const formatted_date = `${date.getDate()} ${t(`common:${months[date.getMonth()]}`)} ${date.getHours() + ':' + checkTime(date.getMinutes())}`;

    const url = `/obyavlenie/${translatedTitle}-${id}`;

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

    const classes = useStyles({ads_type, isFavorite});
    return (
        <div className={classes.root}>
            {isAuth && !creator && (
                <IconButton
                    className="favorite-btn" onClick={handleFavorite}
                >
                    {liked
                        ? <FavoriteIcon/>
                        : <FavoritedIcon/>
                    }
                </IconButton>
            )}
            <Link href={url}>
                <a target='_blank'>
                    <Card elevation={0} title={title}>
                        {isFetch
                            ? <Skeleton
                                variant="rect"
                                className={classes.skeleton}
                            />
                            : <CardMedia
                                className="card-media"
                                image={image ?? '/img/Vector.png'}
                            >
                                <div className="card-header">
                                    <div className="post_type">
                                        <Typography variant="subtitle2" component='p'>
                                            {t(ads_type === 'exauc' ? 'common:auc' : `common:${ads_type}`)}
                                        </Typography>
                                    </div>
                                    <div className="icons">
                                        {!!delivery && (
                                            <Tooltip
                                                title={t('common:delivery')}
                                                arrow
                                            >
                                                <span>
                                                    <DeliveryIcon />
                                                </span>
                                            </Tooltip>
                                        )}
                                        {!!safe_deal && (
                                            <Tooltip
                                                title={t('common:safe_deal')}
                                                arrow
                                            >
                                                <span>
                                                    <SafeIcon/>
                                                </span>
                                            </Tooltip>
                                        )}
                                        {!!exchange && (
                                            <Tooltip
                                                title={t('common:exchange')}
                                                arrow
                                            >
                                                <span>
                                                    <SwapIcon />
                                                </span>
                                            </Tooltip>
                                        )}
                                    </div>
                                </div>
                            </CardMedia>
                        }
                        <CardActionArea>
                            <CardContent>
                                {isFetch
                                    ? <>
                                        <Skeleton variant="rect"/>
                                        <Skeleton variant="rect"/>
                                        <Skeleton variant="rect"/>
                                        <br/>
                                        <Skeleton variant="rect"/>
                                    </>
                                    : <>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                            component='p'
                                            classes={{
                                                root: classes.title
                                            }}
                                            noWrap
                                        >
                                            {title}
                                        </Typography>
                                        <Typography
                                            component='p'
                                            className='price'
                                            variant='subtitle1'
                                        >
                                            {numberPrettier(price)}
                                            <span> {t(`common:${currency.name}`)}</span>
                                        </Typography>
                                        <Typography variant="caption" noWrap component='p' classes={{root: classes.mobileFont}}>
                                            {`${city?.name ? `${t(`locations:${region.name}.${city.name}`)}, ` : ''} ${t(`locations:${region.name}.name`)}`}
                                        </Typography>
                                        <Typography variant="caption" component='p' classes={{root: classes.mobileFont}}>
                                            {formatted_date}
                                        </Typography>
                                    </>}
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </a>
            </Link>
        </div>
    );
};


