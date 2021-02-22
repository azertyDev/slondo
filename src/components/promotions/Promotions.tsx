import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from './useStyles'


export const Promotions = () => {

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography variant='h6'>Акции</Typography>
        </div>
    )
}
