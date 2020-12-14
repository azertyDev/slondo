import React from 'react';
import {Container, Grid, Hidden, Typography} from '@material-ui/core';
import {BreadcrumbsComponent} from '@src/components/elements/breadcrumbs/Breadcrumbs';
import {MainLayout} from '@src/components/MainLayout';
import {UserAuctionBlock} from './user_auction_block/UserAuctionBlock';
import {AncmntLotContent} from './ancmnt_lot_content/AncmntLotContent';
import {Link} from '@root/i18n';
import {useStyles} from './useStyles';
import {Banner} from '@src/components/elements/banner/Banner';


export const ShowAncmntLot = (props) => {
    const {adData, parameters, t} = props;
    const {data} = adData;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <MainLayout title="Просмотр объявления">
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={9}>
                            <AncmntLotContent
                                data={data}
                                parameters={parameters}
                                t={t}
                            />
                        </Grid>
                        <Hidden smDown>
                            <Grid item xs={3}>
                                <UserAuctionBlock {...props} />
                                <div className={classes.adBanner}>
                                    <Banner height="424px"/>
                                </div>
                            </Grid>
                        </Hidden>
                    </Grid>
                </Container>
            </MainLayout>
        </div>
    );
};
