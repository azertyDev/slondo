import React, {FC} from 'react'
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    IconButton,
    Typography,
} from '@material-ui/core'
import {InnerCardData} from "@root/interfaces/CardData";
import Skeleton from '@material-ui/lab/Skeleton';

// icons
import {FavoriteIcon, DeliveryIcon, SafeIcon, SwapIcon} from '@src/components/elements/icons';
// styles
import {useStyles} from './useStyles'


export const CardItem: FC<InnerCardData & { className: string; isFetch: boolean }> = (props) => {

    const classes = useStyles();
    return (
        <Card className={classes.root} elevation={0}>
            {props.isFetch ? (
                <Skeleton variant="rect" className={classes.skeleton}/>
            ) : (
                <CardMedia className="card-media" image={props.images.length ? props.images[0].url : null}>
                <div className="card-header">
                    <div>
                        <Typography variant="subtitle2">{props.cardType}</Typography>
                        <IconButton>
                            <FavoriteIcon id={props.id}/>
                        </IconButton>
                    </div>
                    <div>
                        {
                            props.delivery
                                ? <span>
                                    <DeliveryIcon/>
                                    </span>
                                : null
                        }
                        {
                            props.safe_deal
                                ? <span>
                                    <SafeIcon/>
                                </span>
                                : null
                        }
                        {
                            props.exchange
                                ? <span>
                                    <SwapIcon/>
                                </span> : null
                        }
                    </div>
                </div>
            </CardMedia>
            )}

            <CardActionArea title={props.title}>
                <CardContent>
                    {props.isFetch
                        ? <Skeleton variant="rect"/>
                        : <Typography variant="subtitle1" color="initial" noWrap> {props.title} </Typography>
                    }
                    {props.isFetch
                        ? <Skeleton variant="rect"/>
                        :
                        <Typography variant="h5" color="initial"> {props.price}
                            <span>{props.currency.name}</span> </Typography>
                    }
                    {props.isFetch
                        ? <Skeleton variant="rect"/>
                        :
                        <Typography variant="caption" noWrap={true} color="initial" className="card-location"> {props.location} </Typography>
                    }
                    <br/>
                    {props.isFetch
                        ? <Skeleton variant="rect"/>
                        :
                        <Typography variant="caption" noWrap={true} color="initial" className="card-location"> {props.created_at} </Typography>
                    }
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
