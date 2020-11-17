import React, {FC} from 'react';
import {Grid, Typography, Hidden, Tabs} from '@material-ui/core';
import {CardItem} from '@src/components/elements/card/Card';
import {CustomTab} from '@src/components/elements/custom_tab/CustomTab';
import {Banner} from '@src/components/elements/banner/Banner';
import {CustomTabPanel} from '@src/components/elements/custom_tab_panel/CustomTabPanel';
import {Link} from '@root/i18n';
// Styles
import {TFunction} from "i18next";
import {CardData} from "@root/interfaces/CardData";
import {useStyles} from './useStyles';
import {CustomPagination} from "@src/components/elements/custom_pagination/CustomPagination";


interface MainContentProps {
    t: TFunction;
    tabValue: number;
    handleTabChange: (_: unknown, newValue: number) => void;
    // handleShowMore: () => void;
    adCardData: CardData;
    lotCardData: CardData;
    pageCount: number;
    currentPage: number;
    handlePaginationPage:  (_: unknown, pageNumber: number) => void;
}

export const MainContent: FC<MainContentProps> = (props) => {
    const {t, tabValue, handleTabChange, adCardData, lotCardData} = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h4">Все объявления</Typography>
            <Grid container>
                <Grid md={9} xs={12} item>
                    <Tabs
                        value={tabValue}
                        onChange={handleTabChange}
                        indicatorColor="primary"
                        className="tabs"
                    >
                        <CustomTab
                            label={
                                <Typography variant="h6">
                                    {t('allAds')}
                                </Typography>
                            }
                            id={0}
                        />
                        <CustomTab
                            label={
                                <Typography variant="h6">
                                    {t('allLots')}
                                </Typography>
                            }
                            id={1}
                        />
                    </Tabs>
                </Grid>
            </Grid>
            <Grid container className="cards-container">
                <Grid item md={9} xs={12}>
                    <CustomTabPanel value={tabValue} index={0}>
                        {
                            adCardData.error
                                ? <Typography variant='subtitle1' className='errorText'>{adCardData.error}</Typography>
                                : <div className="ads-wrapper">
                                    <Grid item container spacing={2}>
                                        {adCardData.cardData.data.map((item) => (
                                            <Grid
                                                key={item.id}
                                                xs={6}
                                                sm={4}
                                                lg={3}
                                                item
                                            >
                                                <Link href={`/advertisement/show/${item.id}`}>
                                                    <a>
                                                        <CardItem
                                                            {...item}
                                                            cardType={t('ad')}
                                                            className="card-item"
                                                        />
                                                    </a>
                                                </Link>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </div>

                        }
                    </CustomTabPanel>
                    <CustomTabPanel value={tabValue} index={1}>
                        {
                            lotCardData.error
                                ? <Typography variant='subtitle1' className='errorText'>{lotCardData.error}</Typography>
                                : <div className="lots-wrapper">
                                    <Grid item container spacing={2}>
                                        {lotCardData.cardData.data.map((item) => (
                                            <Grid
                                                key={item.id}
                                                xs={6}
                                                sm={4}
                                                lg={3}
                                                item
                                            >
                                                <Link href={`/advertisement/show/${item.id}`}>
                                                    <a>
                                                        <CardItem
                                                            {...item}
                                                            cardType={t('lot')}
                                                            className="card-item"
                                                        />
                                                    </a>
                                                </Link>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </div>
                        }
                    </CustomTabPanel>
                    <Grid item xs={12} container justify='center'>
                        <CustomPagination
                            count={props.pageCount}
                            currentPage={props.currentPage}
                            handlePaginationPage={props.handlePaginationPage}
                        />
                    </Grid>
                </Grid>
                <Hidden smDown>
                    <Grid
                        item
                        container
                        md={3}
                        direction="column"
                        className={classes.adBanner}
                    >
                        <Grid item>
                            <Banner height="300px"/>
                        </Grid>
                    </Grid>
                </Hidden>
            </Grid>
            {/*{((adCardData.cardData.total > adCardData.cardData.data.length && tabValue === 0) || (lotCardData.cardData.total > lotCardData.cardData.data.length && tabValue === 1)) && (*/}
            {/*    <Grid container className={classes.showMoreContainer}>*/}
            {/*        <Grid item xs={12} md={9} className="show-more-block">*/}
            {/*            <ButtonComponent onClick={handleShowMore}>*/}
            {/*                <Typography variant="subtitle2" color="initial">*/}
            {/*                    {t('showMore')}*/}
            {/*                </Typography>*/}
            {/*            </ButtonComponent>*/}
            {/*        </Grid>*/}
            {/*    </Grid>*/}
            {/*)}*/}
        </div>
    );
};
