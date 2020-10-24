import React from 'react';
import { Container, Grid, Hidden, Typography } from '@material-ui/core';
import { BreadcrumbsComponent } from '../../elements/breadcrumbs/Breadcrumbs';
import { AdsAndLotsBlock } from '../../elements/adsAndLotsBlock/AdsAndLotsBlock';
import { MainLayout } from '../../MainLayout';
<<<<<<< HEAD
import { RatingComponent } from '../../elements/rating/Rating';
import { SyncSliders } from '../../elements/syncSliders/SyncSliders';
=======
import { RightSide } from './rightSide/RightSide';
import { LeftSide } from './leftSide/LeftSide';
>>>>>>> 1082277c556717492bdf7d8d139075d53554f4d5
import { Link } from '../../../../i18n';

import { ShareIcon } from '../../elements/icons';

// styles
import { useStyles } from './useStyles';

export const ShowAdLot = (props) => {
    const { t } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <MainLayout title="Просмотр объявления">
                <Container maxWidth="lg">
                    <div className={classes.breadcrumbs}>
                        <BreadcrumbsComponent />
                    </div>
                    <div className={classes.title}>
                        <div>
                            <Typography variant="h4" color="initial">
                                Объявление: Продаю Samsung A5 в отличном
                                состоянии.
                            </Typography>
                            <Link href="#">
                                <a>
                                    <img
                                        src={ShareIcon}
                                        alt="share-icon"
                                        className={classes.shareIcon}
                                    />
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Typography variant="h4" color="initial">
                                1 350 000 Сум
                            </Typography>
                        </div>
                    </div>
                    <Grid container spacing={2}> 
                        <Grid item xs={12} md={9}>
                            <LeftSide />
                        </Grid>

                        <Hidden smDown>
                            <Grid item xs={3}>
                                <RightSide />
                                <div className={classes.adBanner}>
                                    <div className="right-banner" />
                                </div>
                            </Grid>
                        </Hidden>
                    </Grid>

                    <Grid
                        item
                        container
                        xs={12}
                        direction="row"
                        justify="center"
                    >
                        <AdsAndLotsBlock
                            title="Похожие объявления"
                            xs={6}
                            sm={4}
                            md={3}
                            lg={2}
                        />
                    </Grid>
                </Container>
            </MainLayout>
        </div>
    );
};
