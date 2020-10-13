import React from 'react'
import {Card, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core'

// styles
import {useStyles} from './useStyles'

export const CardItem = (props) => {
    const {title, description, image, price,categoryName} = props;
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea title={description}>
                <div className='card-title'>
                    <Typography variant="subtitle2">
                        {title}
                    </Typography>
                </div>
                <div className='card-categoryName'>
                    <Typography variant="subtitle2">
                        {categoryName}
                    </Typography>
                </div>

                <CardMedia
                    className='card-media'
                    image={image}
                />
                <CardContent>
                    <Typography variant="subtitle1">{price}</Typography>
                    <Typography variant="subtitle2" noWrap={true}>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
