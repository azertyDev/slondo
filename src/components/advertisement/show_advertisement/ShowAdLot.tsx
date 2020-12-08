import React from 'react';
import { Container, Grid, Hidden, Typography } from '@material-ui/core';
import { BreadcrumbsComponent } from '@src/components/elements/breadcrumbs/Breadcrumbs';
// import {AdsAndLotsBlock} from '@src/components/elements/adsAndLotsBlock/AdsAndLotsBlock';
// import { SnackbarComponent } from '@src/components/elements/snackbar/Snackbar';
import { MainLayout } from '@src/components/MainLayout';
import { RightSide } from './rightSide/RightSide';
import { LeftSide } from './leftSide/LeftSide';
import { Link } from '@root/i18n';

// styles
import { useStyles } from './useStyles';
import { Banner } from '@src/components/elements/banner/Banner';

export const ShowAdLot = (props) => {
    const { adData, parameters, t } = props;
    const { data } = adData;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <MainLayout title="Просмотр объявления">
                <Container maxWidth="lg">
                    <div className={classes.breadcrumbs}>
                        <BreadcrumbsComponent>
                            <Link href="#">
                                <a>{data.parent.name}</a>
                            </Link>
                            <Link href="#">
                                <a>{data.child.name}</a>
                            </Link>
                            <Link href="#">
                                <a>
                                    {parameters.type
                                        ? parameters.type.name
                                        : 'test'}
                                </a>
                            </Link>
                            <Typography color="primary">
                                {data.title}
                            </Typography>
                        </BreadcrumbsComponent>
                    </div>
                    <div className="adv-header">
                        <div>
                            <span
                                className={
                                    data.ads_type.id === 1
                                        ? 'advertisement'
                                        : data.ads_type.id === 2
                                        ? 'lot'
                                        : 'advanced-lot'
                                }
                            >
                                <Typography variant="h6">
                                    {data.ads_type.name}
                                </Typography>
                            </span>
                            <span>
                                <Typography variant="h6" color="initial" noWrap>
                                    {data.title}
                                </Typography>
                            </span>
                            {/* <SnackbarComponent /> */}
                            {data.condition.id ? (
                                <span className="condition">
                                    <Typography variant="h6">
                                        {data.condition.name}
                                    </Typography>
                                </span>
                            ) : null}
                        </div>
                        <div>
                            <Typography variant="h4" color="initial">
                                {data.price} {data.currency.name}
                            </Typography>
                        </div>
                    </div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={9}>
                            <LeftSide
                                data={data}
                                parameters={parameters}
                                t={t}
                            />
                        </Grid>

                        <Hidden smDown>
                            <Grid item xs={3}>
                                <RightSide {...props} />
                                <div className={classes.adBanner}>
                                    <Banner height="424px" />
                                </div>
                            </Grid>
                        </Hidden>
                    </Grid>

                    {/*<Grid*/}
                    {/*    item*/}
                    {/*    container*/}
                    {/*    xs={12}*/}
                    {/*    direction="row"*/}
                    {/*    justify="center"*/}
                    {/*>*/}
                    {/*    <AdsAndLotsBlock*/}
                    {/*        title="Похожие объявления"*/}
                    {/*        xs={6}*/}
                    {/*        sm={4}*/}
                    {/*        md={3}*/}
                    {/*        lg={2}*/}
                    {/*    />*/}
                    {/*</Grid>*/}
                </Container>
            </MainLayout>
        </div>
    );
};
