import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { CustomSlider } from '@src/components/elements/custom_slider/CustomSlider'
import { CardItem } from '@src/components/elements/card/Card'
import { FaqComponent } from '@src/components/elements/faqComponent/FaqComponent'
import { SocialsBlock } from '@src/components/elements/socialsBlock/SocialsBlock'

// styles
import { useStyles } from './useStyles'

export const InterestCategory = (props) => {
    const { t } = props

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography variant='h4'>
                Телефоны и планшеты
            </Typography>
            <Grid container>
                <Grid item xs={9}>
                    <CustomSlider>
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                    </CustomSlider>
                </Grid>
                <Grid item xs={3}>
                    <FaqComponent />
                    <SocialsBlock />
                </Grid>

            </Grid>
        </div>
    )
}