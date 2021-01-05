import React, {FC} from 'react';
import {Link} from '@root/i18n';
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
    SwapIcon
} from '@src/components/elements/icons';
import {WithT} from "i18next";
import {InnerCardData} from "@root/interfaces/CardData";
import {transformTitle} from "@src/helpers";
import {useStyles} from './useStyles';


type CardItemProps = {
    isFetch: boolean;
} & InnerCardData & WithT;

export const CardItem: FC<CardItemProps> = (props) => {
    const {
        t,
        id,
        isFetch,
        images,
        delivery,
        safe_deal,
        exchange,
        title,
        price,
        location,
        created_at,
        currency,
        ads_type,
    } = props;

    const translatedTitle = transformTitle(title);

    const classes = useStyles(ads_type);
    return (
        <div className={classes.root}>
            <IconButton className='favorite-btn'>
                <FavoriteIcon id={id}/>
            </IconButton>
            <Link
                href={`/obyavlenie/${translatedTitle}-${id}`}
            >
                <a>
                    <Card
                        elevation={0}
                        title={title}
                    >
                        {isFetch
                            ? <Skeleton variant="rect" className={classes.skeleton}/>
                            : <CardMedia
                                className="card-media"
                                image={images.length ? images[0].url.default : null}
                            >
                                <div className="card-header">
                                    <div className='title'>
                                        <Typography variant="subtitle2">
                                            {t(`common:${ads_type}`)}
                                        </Typography>
                                    </div>
                                    <div className='icons'>
                                        {!!delivery && (
                                            <span>
                                    <DeliveryIcon/>
                                </span>
                                        )}
                                        {!!safe_deal && (
                                            <span>
                                    <SafeIcon/>
                                </span>
                                        )}
                                        {!!exchange && (
                                            <span>
                                    <SwapIcon/>
                                </span>
                                        )}
                                    </div>
                                </div>
                            </CardMedia>}
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
                                        <Typography variant="subtitle1" color="initial" noWrap>
                                            {title}
                                        </Typography>
                                        <Typography variant="h5" color="initial">
                                            {price}
                                            <span>{currency.name}</span>
                                        </Typography>
                                        <Typography variant="caption" noWrap color="initial" className="card-location">
                                            {location}
                                        </Typography>
                                        <br/>
                                        <Typography variant="caption" noWrap color="initial" className="card-location">
                                            {created_at}
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
