import React from 'react'
import { CreateAdvertisement } from './createAdvertisement/CreateAdvertisement'
import { PreviewAdvertisement } from './previewAdvertisement/PreviewAdvertisement'
import { Grid, Hidden, Container } from '@material-ui/core'

// styles
import { useStyles } from './useStyles'

export const Advertisement = (props) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Container maxWidth='lg'>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={9}>
                    {props.isPreview ? (
                        <PreviewAdvertisement />
                    ) : (
                        <CreateAdvertisement handlePreview={props.handlePreview} />
                    )}
                    </Grid>
                    <Hidden smDown>
                        <Grid
                            item
                            md={3}
                            container
                            justify="flex-end"
                            className={classes.adBanner}
                        >
                            <Grid item md={12}>
                                <div className="right-banner" />
                            </Grid>
                        </Grid>
                    </Hidden>
                </Grid>
            </Container>
        </div>
    )
}
