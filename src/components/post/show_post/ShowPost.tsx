import React, {FC} from 'react';
import {Container, Grid, Hidden, useMediaQuery, useTheme} from '@material-ui/core';
import {OwnerAuctionContent} from './owner_auction_content/OwnerAuctionContent';
import {PostContent} from './post_content/PostContent';
import {Banner} from '@src/components/elements/banner/Banner';
import Head from "next/head";
import {Header} from "@src/components/header/Header";
import {Footer} from "@src/components/footer/Footer";
import {ErrorModal} from "@src/components/error_modal/ErrorModal";
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

    const theme = useTheme();
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));

    const classes = useStyles();
    return (
        <>
            <Head>
                <title>Slondo - доска объявлений</title>
                <meta name="robots" content="noindex"/>
            </Head>
            <Hidden mdDown>
                <Header/>
            </Hidden>
            <Container
                maxWidth="xl"
                className={classes.root}
                style={{paddingTop: `${isMdDown ? 0 : '48px'}`, position: 'relative'}}
                disableGutters={isMdDown}
            >
                <Grid container spacing={isMdDown ? 0 : 2}>
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
            </Container>
            {/*<Footer/>*/}
            <ErrorModal/>
        </>
    );
};
