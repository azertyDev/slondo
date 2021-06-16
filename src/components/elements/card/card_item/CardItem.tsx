import {FC, useEffect, useState} from 'react';
import Link from 'next/link';
import {useTranslation} from 'react-i18next';
import {Card, CardActionArea, CardContent, CardMedia, IconButton, Tooltip, Typography} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import {DeliveryIcon, SafeIcon, SwapIcon} from '@src/components/elements/icons';
import {CardDataType} from '@root/interfaces/CardData';
import {numberPrettier, transformCyrillic} from '@src/helpers';
import {userAPI} from '@src/api/api';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@src/redux/rootReducer';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {months} from '@src/common_data/common';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {useStyles} from './useStyles';

type CardItemProps = {
    isFetch: boolean;
} & CardDataType;

export const CardItem: FC<CardItemProps> = (props) => {
    const dispatch = useDispatch();
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
    const translatedTitle = transformCyrillic(title);

    const {isAuth} = useSelector((store: RootState) => store.user);

    const [liked, setLiked] = useState(favorite);

    const date = new Date(created_at);
    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    const formatted_date = `${date.getDate()} ${months[date.getMonth()]} ${date.getHours() + ':' + checkTime(date.getMinutes())}`;

    const handleFavorite = async () => {
        try {
            await userAPI.favoriteAds(id);
            setLiked(!liked);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    useEffect(() => {
        setLiked(favorite)
    }, [favorite]);

    const classes = useStyles({ads_type, isFavorite});
    return (
        <div className={classes.root}>
            {isAuth && !creator && (
                <IconButton
                    className="favorite-btn" onClick={handleFavorite}
                >
                    {liked
                        ? <FavoriteIcon />
                        : <FavoriteBorderIcon />
                    }
                </IconButton>
            )}
            <Link href={`/obyavlenie/${translatedTitle}-${id}`}>
                <a target='_blank'>
                    <Card elevation={0} title={title}>
                        {isFetch ? (
                            <Skeleton
                                variant="rect"
                                className={classes.skeleton}
                            />
                        ) : (
                            <CardMedia
                                className="card-media"
                                image={image ?? '/img/card-logo.png'}
                            >
                                <div className="card-header">
                                    <div className="title">
                                        <Typography variant="subtitle2">
                                            {t(ads_type === 'exauc' ? 'auc' : ads_type)}
                                        </Typography>
                                    </div>
                                    <div className="icons">
                                        {!!delivery && (
                                            <Tooltip
                                                title="Есть доставка"
                                                arrow
                                            >
                                                <span>
                                                    <DeliveryIcon/>
                                                </span>
                                            </Tooltip>
                                        )}
                                        {!!safe_deal && (
                                            <Tooltip
                                                title="Безопасная покупка"
                                                arrow
                                            >
                                                <span>
                                                    <SafeIcon/>
                                                </span>
                                            </Tooltip>
                                        )}
                                        {!!exchange && (
                                            <Tooltip
                                                title="Возможен обмен"
                                                arrow
                                            >
                                                <span>
                                                    <SwapIcon/>
                                                </span>
                                            </Tooltip>
                                        )}
                                    </div>
                                </div>
                            </CardMedia>
                        )}
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
                                            noWrap
                                        >
                                            {title}
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            color="initial"
                                        >
                                            {numberPrettier(price)}
                                            <span> {t(currency.name)}</span>
                                        </Typography>
                                        <Typography variant="caption" noWrap>
                                            {`${region.name}, ${city.name}`}
                                        </Typography>
                                        <Typography variant="caption">
                                            {formatted_date}
                                        </Typography>
                                    </>}
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </a>
            </Link>
        </div>
    )
}


