import React, { FC } from 'react';
import { Link } from '@root/i18n';
import { useTranslation } from 'react-i18next';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    IconButton,
    Typography,
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import {
    FavoriteIcon,
    DeliveryIcon,
    SafeIcon,
    SwapIcon,
} from '@src/components/elements/icons';
import { InnerCardData } from '@root/interfaces/CardData';
import { pricePrettier, transformTitle } from '@src/helpers';
import { useStyles } from './useStyles';

type CardItemProps = {
    isFetch: boolean;
} & InnerCardData;

export const CardItem: FC<CardItemProps> = (props) => {
    const { t } = useTranslation(['common']);
    console.log(props);

    const {
        id,
        isFetch,
        images,
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
        sub_category_id,
        category,
    } = props;

    const translatedTitle = transformTitle(title);

    const classes = useStyles({ ads_type });
    return (
        <div className={classes.root}>
            <IconButton className="favorite-btn">
                <FavoriteIcon id={id} />
            </IconButton>
            <Link
                href={`/obyavlenie/${translatedTitle}-${id}-${category.mark}-${sub_category_id}`}
            >
                <a>
                    <Card elevation={0} title={title}>
                        {isFetch ? (
                            <Skeleton
                                variant="rect"
                                className={classes.skeleton}
                            />
                        ) : (
                            <CardMedia
                                className="card-media"
                                image={
                                    images.length ? images[0].url.default : null
                                }
                            >
                                <div className="card-header">
                                    <div className="title">
                                        <Typography variant="subtitle2">
                                            {t(ads_type)}
                                        </Typography>
                                    </div>
                                    <div className="icons">
                                        {!!delivery && (
                                            <span>
                                                <DeliveryIcon />
                                            </span>
                                        )}
                                        {!!safe_deal && (
                                            <span>
                                                <SafeIcon />
                                            </span>
                                        )}
                                        {!!exchange && (
                                            <span>
                                                <SwapIcon />
                                            </span>
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
                                            {pricePrettier(price)}
                                            <span> {t(currency.name)}</span>
                                        </Typography>
                                        <Typography variant="caption" noWrap>
                                            {`${city.name}, ${region.name}`}
                                        </Typography>
                                        <Typography variant="caption">
                                            {created_at}
                                        </Typography>
                                    </>
                                )}
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </a>
            </Link>
        </div>
    );
};
