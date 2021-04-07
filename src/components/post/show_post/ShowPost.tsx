import React, {FC} from 'react';
import {Grid, Hidden} from '@material-ui/core';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {OwnerAuctionContent} from './owner_auction_content/OwnerAuctionContent';
import {PostContent} from './post_content/PostContent';
import {Banner} from '@src/components/elements/banner/Banner';
import {useStyles} from './useStyles';


export const ShowPost: FC<any> = (props) => {
    const {
        t,
        postData: {data},
        parameters,
        descHeight,
        slidersRefs,
        handleFollow
    } = props;

    const classes = useStyles();
    return (
        <MainLayout title={data.title}>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={9}>
                        <PostContent
                            t={t}
                            data={data}
                            parameters={parameters}
                            descHeight={descHeight}
                            slidersRefs={slidersRefs}
                        />
                    </Grid>
                    <Grid item lg={3} xs={12}>
                        <OwnerAuctionContent t={t} postData={data} handleFollow={handleFollow}/>
                        <Hidden mdDown>
                            <div className={classes.adBanner}>
                                <Banner height="424px"/>
                            </div>
                        </Hidden>
                    </Grid>
                </Grid>
            </div>
        </MainLayout>
    );
};
