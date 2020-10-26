import React from 'react'
import { Grid, Typography,Paper } from '@material-ui/core'

// styles
import { useStyles } from './useStyles'

export const Notification = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Paper elevation={3}>

            </Paper>
        </div>
    )
}
