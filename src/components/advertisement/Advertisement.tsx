import React from 'react'
import {CreateAdvertisement} from './createAdvertisement/CreateAdvertisement'
import {PreviewAdvertisement} from './previewAdvertisement/PreviewAdvertisement'
import {Grid, Hidden, Container} from '@material-ui/core'

// styles
import {useStyles} from './useStyles'
import {SuccessAdvertisement} from './successAdvertisement/SuccessAdvertisement'
import {MainLayout} from "../MainLayout";

export const Advertisement = (props) => {
    const classes = useStyles()

    return (
        <MainLayout>
            <div className={classes.root}>
                <Container maxWidth="lg">
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={9}>
                            {props.isSuccess ? (
                                <SuccessAdvertisement/>
                            ) : props.isPreview ? (
                                <PreviewAdvertisement
                                    handleSuccess={props.handleSuccess}
                                />
                            ) : (
                                <CreateAdvertisement
                                    handlePreview={props.handlePreview}
                                />
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
                                    <div className="right-banner"/>
                                </Grid>
                            </Grid>
                        </Hidden>
                    </Grid>
                </Container>
            </div>
        </MainLayout>
    )
}
