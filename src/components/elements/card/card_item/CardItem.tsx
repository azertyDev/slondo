import React, {FC} from 'react'
import {Link} from '@root/i18n'
import {useTranslation} from 'react-i18next'
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    IconButton,
    Typography,
    Tooltip,
} from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import {
    FavoriteIcon,
    DeliveryIcon,
    SafeIcon,
    SwapIcon,
} from '@src/components/elements/icons'
import {InnerCardData} from '@root/interfaces/CardData'
import {numberPrettier, transformTitle} from '@src/helpers'
import {useStyles} from './useStyles'


type CardItemProps = {
    isFetch: boolean;
} & InnerCardData;

export const CardItem: FC<CardItemProps> = (props) => {
    const {t} = useTranslation(['common'])

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
    } = props

    const translatedTitle = transformTitle(title)

    const classes = useStyles({ads_type})
    return (
        <div className={classes.root}>
            <IconButton className="favorite-btn">
                <FavoriteIcon id={id}/>
            </IconButton>
            <Link
                href={`/obyavlenie/${translatedTitle}-${id}-${category.mark}-${sub_category_id ?? ''}`}
            >
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
                                image={images.length ? images[0].url.default : '/img/card-logo.png'}
                            >
                                <div className="card-header">
                                    <div className="title">
                                        <Typography variant="subtitle2">
                                            {t(ads_type)}
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
                                {isFetch ? (
                                    <>
                                        <Skeleton variant="rect"/>
                                        <Skeleton variant="rect"/>
                                        <Skeleton variant="rect"/>
                                        <br/>
                                        <Skeleton variant="rect"/>
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
                                            {numberPrettier(price)}
                                            <span> {t(currency.name)}</span>
                                        </Typography>
                                        <Typography variant="caption" noWrap>
                                            {`${region.name}, ${city.name}`}
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
    )
}
