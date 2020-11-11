import React from 'react'
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    IconButton,
    Typography,
} from '@material-ui/core'

// icons
import {FavoriteIcon} from '@src/components/elements/icons/FavoriteIcon'
import {DeliveryIcon} from '@src/components/elements/icons/DeliveryIcon'
import {SafeIcon} from '@src/components/elements/icons/SafeIcon'
import {SwapIcon} from '@src/components/elements/icons/SwapIcon'

// styles
import {useStyles} from './useStyles'

export const CardItem = (props) => {
    const {id,cardType, title, location, created_at, images, price, safe_deal, currency} = props

    const classes = useStyles()
    return (
        <Card className={classes.root} elevation={0}>
            <CardMedia className="card-media" image={images.length ? images[0].url : null}>
                <div className="card-header">
                    <div>
                        <Typography variant="subtitle2">{cardType}</Typography>
                        <IconButton>
                            <FavoriteIcon id={id}/>
                        </IconButton>
                    </div>
                    <div>
                        <span>
                            <DeliveryIcon/>
                        </span>
                        {
                            safe_deal
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
            <CardActionArea title={title}>
                <CardContent>
                    <Typography variant="subtitle1" color="initial" noWrap>
                        {title}
                    </Typography>
                    <Typography variant="h5" color="initial">{price} <span>{currency.name}</span></Typography>
                    <Typography variant="caption" noWrap={true} color="initial" className='card-location'>
                        {location}
                    </Typography>
                    <br/>
                    <Typography variant="caption" noWrap={true} color="initial" className='card-location'>
                        {created_at}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
