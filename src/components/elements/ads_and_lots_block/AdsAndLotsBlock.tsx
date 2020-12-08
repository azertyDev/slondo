import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { CardItem } from '../card/Card'

// styles
import { useStyles } from './useStyles'

export const AdsAndLotsBlock = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid item container spacing={2}>
                <Grid item xs={12}>
                    <Typography
                        variant="h4"
                        color="initial"
                        className={classes.title}
                    >
                        {props.title}
                    </Typography>
                </Grid>
                <Grid xs={6} sm={4} md={3} lg={2} item>
                    <CardItem
                        title="Объявление"
                        className="card-item"
                        alt="adv"
                        image={`/img/card-image.jpg`}
                        price="180 000 сум"
                        description="Продам сумку в хорошем соcтоянии"
                        categoryName="Женский гардероб"
                    />
                </Grid>
                <Grid xs={6} sm={4} md={3} lg={2} item>
                    <CardItem
                        title="Объявление"
                        className="card-item"
                        alt="adv"
                        image={`/img/mobile-image.jpg`}
                        price="180 000 сум"
                        description="Продам сумку в хорошем соcтоянии"
                    />
                </Grid>
                <Grid xs={6} sm={4} md={3} lg={2} item>
                    <CardItem
                        title="Объявление"
                        className="card-item"
                        alt="adv"
                        image={`/img/card-image.jpg`}
                        price="180 000 сум"
                        description="Продам сумку в хорошем соcтоянии"
                        categoryName="Женский гардероб"
                    />
                </Grid>
                <Grid xs={6} sm={4} md={3} lg={2} item>
                    <CardItem
                        title="Объявление"
                        className="card-item"
                        alt="adv"
                        image={`/img/mobile-image.jpg`}
                        price="180 000 сум"
                        description="Продам сумку в хорошем соcтоянии"
                    />
                </Grid>
                <Grid xs={6} sm={4} md={3} lg={2} item>
                    <CardItem
                        title="Объявление"
                        className="card-item"
                        alt="adv"
                        image={`/img/card-image.jpg`}
                        price="180 000 сум"
                        description="Продам сумку в хорошем соcтоянии"
                        categoryName="Женский гардероб"
                    />
                </Grid>
                <Grid xs={6} sm={4} md={3} lg={2} item>
                    <CardItem
                        title="Объявление"
                        className="card-item"
                        alt="adv"
                        image={`/img/mobile-image.jpg`}
                        price="180 000 сум"
                        description="Продам сумку в хорошем соcтоянии"
                    />
                </Grid>
                <Grid xs={6} sm={4} md={3} lg={2} item>
                    <CardItem
                        title="Объявление"
                        className="card-item"
                        alt="adv"
                        image={`/img/card-image.jpg`}
                        price="180 000 сум"
                        description="Продам сумку в хорошем соcтоянии"
                        categoryName="Женский гардероб"
                    />
                </Grid>
                <Grid xs={6} sm={4} md={3} lg={2} item>
                    <CardItem
                        title="Объявление"
                        className="card-item"
                        alt="adv"
                        image={`/img/mobile-image.jpg`}
                        price="180 000 сум"
                        description="Продам сумку в хорошем соcтоянии"
                    />
                </Grid>
                <Grid xs={6} sm={4} md={3} lg={2} item>
                    <CardItem
                        title="Объявление"
                        className="card-item"
                        alt="adv"
                        image={`/img/card-image.jpg`}
                        price="180 000 сум"
                        description="Продам сумку в хорошем соcтоянии"
                        categoryName="Женский гардероб"
                    />
                </Grid>
                <Grid xs={6} sm={4} md={3} lg={2} item>
                    <CardItem
                        title="Объявление"
                        className="card-item"
                        alt="adv"
                        image={`/img/mobile-image.jpg`}
                        price="180 000 сум"
                        description="Продам сумку в хорошем соcтоянии"
                    />
                </Grid>
                <Grid xs={6} sm={4} md={3} lg={2} item>
                    <CardItem
                        title="Объявление"
                        className="card-item"
                        alt="adv"
                        image={`/img/card-image.jpg`}
                        price="180 000 сум"
                        description="Продам сумку в хорошем соcтоянии"
                        categoryName="Женский гардероб"
                    />
                </Grid>
                <Grid xs={6} sm={4} md={3} lg={2} item>
                    <CardItem
                        title="Объявление"
                        className="card-item"
                        alt="adv"
                        image={`/img/mobile-image.jpg`}
                        price="180 000 сум"
                        description="Продам сумку в хорошем соcтоянии"
                    />
                </Grid>
         
            </Grid>
        </div>
    )
}
