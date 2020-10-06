import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import { AdvertisementSelect } from '../advertisementSelect/AdvertisementSelect'

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

                    <Grid
                        container
                        item
                        xs={12}
                        direction="row"
                        justify="space-between"
                        spacing={2}
                    >
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            lg={3}
                            xl={3}
                            container
                            alignItems="center"
                        >
                            <Typography variant="subtitle1">
                                Тип объявления:
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3}>
                            <Typography variant="subtitle1">
                                Объявление
                            </Typography>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            lg={3}
                            xl={3}
                            container
                            alignItems="center"
                        >
                            <Typography variant="subtitle1">
                                Категория:
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3} lg={3}>
                            <Typography variant="subtitle1">
                                Тип объявления:
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
