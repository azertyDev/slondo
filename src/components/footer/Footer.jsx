import React from 'react'
import { Container, Typography } from '@material-ui/core'

// Styles
import { useStyles } from './useStyle'

export const Footer = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container>
                <Typography variant="h6">Footer</Typography>
            </Container>
        </div>
    )
}
