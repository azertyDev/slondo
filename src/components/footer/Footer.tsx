import React from 'react'
import { Container, Typography } from '@material-ui/core'

// Styles
import { useStyles } from './useStyle'

export const Footer = () => {
    const classes = useStyles()
    return (
        <footer className={classes.root}>
            <Container>
                <Typography variant="h6">Footer</Typography>
            </Container>
        </footer>
    )
}
