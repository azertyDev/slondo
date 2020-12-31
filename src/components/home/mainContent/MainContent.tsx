import React, { FC } from 'react';
import { Grid, Typography, Hidden, Tabs, Tab } from '@material-ui/core';
import { Banner } from '@src/components/elements/banner/Banner';
import { CustomTabPanel } from '@src/components/elements/custom_tab_panel/CustomTabPanel';
import { TFunction } from 'i18next';
import { CardData } from '@root/interfaces/CardData';
import { CustomPagination } from '../../elements/custom_pagination/CustomPagination';
import { useStyles } from './useStyles';
import { CustomCardView } from '@src/components/elements/custom_card_view/CustomCardView';

interface MainContentProps {
    t: TFunction;
    tabValue: number;
    handleTabChange: (_: unknown, newValue: number) => void;
    // handleShowMore: () => void;
    adCardData: CardData;
    lotCardData: CardData;
    pageCount: number;
    currentPage: number;
    handlePaginationPage: (_: unknown, pageNumber: number) => void;
}

export const MainContent: FC<MainContentProps> = (props) => {
    const { t, tabValue, handleTabChange, adCardData, lotCardData } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h4">Все объявления</Typography>
            <Grid container>
                <Grid item md={9} xs={12}>
                    <Tabs
                        value={tabValue}
                        onChange={handleTabChange}
                        indicatorColor="primary"
                        className="tabs"
                        variant="fullWidth"
                    >
                        <Tab
                            label={
                                <Typography variant="h6">
                                    {t('allAds')}
                                </Typography>
                            }
                            value={0}
                        />
                        <Tab
                            label={
                                <Typography variant="h6">
                                    {t('allLots')}
                                </Typography>
                            }
                            value={1}
                        />
                    </Tabs>
                </Grid>
            </Grid>
            <Grid container className="cards-container">
                <Grid item md={9} xs={12}>
                    <CustomTabPanel value={tabValue} index={0}>
                        {adCardData.error ? (
                            <Typography
                                variant="subtitle1"
                                className="error-text"
                            >
                                {adCardData.error}
                            </Typography>
                        ) : (
                            <Grid container className="ads-wrapper">
                                <CustomCardView
                                    list={adCardData.data.cards}
                                    t={t}
                                    isFetch={adCardData.isFetch}
                                />
                            </Grid>
                        )}
                    </CustomTabPanel>
                    <CustomTabPanel value={tabValue} index={1}>
                        {lotCardData.error ? (
                            <Typography
                                variant="subtitle1"
                                className="error-text"
                            >
                                {lotCardData.error}
                            </Typography>
                        ) : (
                            <Grid container className="lots-wrapper">
                                <CustomCardView
                                    t={t}
                                    list={lotCardData.data.cards}
                                    isFetch={lotCardData.isFetch}
                                />
                            </Grid>
                        )}
                    </CustomTabPanel>
                    <Grid item xs={12} container justify="center">
                        {!(lotCardData.error || adCardData.error) && (
                            <CustomPagination
                                count={props.pageCount}
                                currentPage={props.currentPage}
                                handlePaginationPage={
                                    props.handlePaginationPage
                                }
                            />
                        )}
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
                            <Banner height="335px" />
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
