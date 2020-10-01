import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'

// styles
import { useStyles } from './useStyle'

export const CardItem = (props) => {
    const classes = useStyles(props)
    return (
        <Card className={classes.root}>
            <Typography variant="subtitle2" bgcolor={props.bgcolor}>
                {props.title}
            </Typography>
            <CardMedia component="img" {...props} />
            <CardContent>
                <Typography variant="subtitle1">{props.price}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.description}
                </Typography>
            </CardContent>
        </Card>
    )
}
