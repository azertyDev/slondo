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
// icons
import {FavoriteIcon, DeliveryIcon, SafeIcon, SwapIcon} from '@src/components/elements/icons';
// styles
import {useStyles} from './useStyles'


export const CardItem: FC<InnerCardData & { className: string }> = (props) => {

    const classes = useStyles();
    return (
        <Card className={classes.root} elevation={0}>
            <CardMedia className="card-media" image={props.images.length ? props.images[0].url : null}>
                <div className="card-header">
                    <div>
                        <Typography variant="subtitle2">{props.cardType}</Typography>
                        <IconButton>
                            <FavoriteIcon id={props.id}/>
                        </IconButton>
                    </div>
                    <div>
                        <span>
                            <DeliveryIcon/>
                        </span>
                        {
                            props.safe_deal
                                ? <span>
                                    <SafeIcon/>
                                </span>
                                : null
                        }
                        <span>
                            <SwapIcon/>
                        </span>
                    </div>
                </div>
            </CardMedia>
            <CardActionArea title={props.title}>
                <CardContent>
                    <Typography variant="subtitle1" color="initial" noWrap>
                        {props.title}
                    </Typography>
                    <Typography variant="h5" color="initial">{props.price}
                        <span>{props.currency.name}</span></Typography>
                    <Typography variant="caption" noWrap={true} color="initial" className='card-location'>
                        {props.location}
                    </Typography>
                    <br/>
                    <Typography variant="caption" noWrap={true} color="initial" className='card-location'>
                        {props.created_at}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
