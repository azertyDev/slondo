import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'

// styles
import { useStyles } from './useStyles'

export const PreviewAdvertisement = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid xs={12}>
                        <Typography
                            variant="h5"
                            color="initial"
                            className={classes.title}
                        >
                            Проверка объявления
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
