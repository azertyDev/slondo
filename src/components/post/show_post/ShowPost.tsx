import React, { FC } from 'react';
import { Grid, Hidden } from '@material-ui/core';
import { MainLayout } from '@src/components/MainLayout';
import { OwnerAuctionContent } from './owner_auction_content/OwnerAuctionContent';
import { PostContent } from './post_content/PostContent';
import { Banner } from '@src/components/elements/banner/Banner';
import { useStyles } from './useStyles';

export const ShowPost: FC<any> = (props) => {
    const { adData, parameters, t } = props;
    const { data } = adData;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <MainLayout title="Просмотр объявления">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={9}>
                        <PostContent
                            t={t}
                            data={data}
                            parameters={parameters}
                        />
                    </Grid>
                    <Hidden smDown>
                        <Grid item xs={3}>
                            <OwnerAuctionContent {...props} />
                            <div className={classes.adBanner}>
                                <Banner height="424px" />
                            </div>
                        </Grid>
                    </Hidden>
                </Grid>
            </MainLayout>
        </div>
    );
};
