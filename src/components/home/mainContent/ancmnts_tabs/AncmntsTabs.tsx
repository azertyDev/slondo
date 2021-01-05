import React, {FC} from 'react';
import {WithT} from 'i18next';
import {Typography, Tabs, Tab} from '@material-ui/core';
import {CustomTabPanel} from '@src/components/elements/custom_tab_panel/CustomTabPanel';
import {CardData} from '@root/interfaces/CardData';
import {CustomPagination, CustomPaginationTypes} from '../../../elements/custom_pagination/CustomPagination';
import {useStyles} from './useStyles';
import {CardView} from '@src/components/elements/card_view/CardView';


type MainContentProps = {
    tabValue: number;
    handleTabChange: (_: unknown, newValue: number) => void;
    // handleShowMore: () => void;
    adCardData: CardData;
    lotCardData: CardData;
    pageCount: number;
}  & CustomPaginationTypes & WithT;

export const AncmntsTabs: FC<MainContentProps> = (props) => {
    const {
        t,
        tabValue,
        handleTabChange,
        adCardData,
        lotCardData,
        handlePaginationPage,
        pageCount,
        currentPage
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className='title' variant="h2">Все объявления</Typography>
            <Tabs
                value={tabValue}
                onChange={handleTabChange}
                indicatorColor="primary"
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
            <div className="cards-container">
                <CustomTabPanel value={tabValue} index={0}>
                    {adCardData.error
                        ? <Typography
                            variant="subtitle1"
                            className="error-text"
                        >
                            {adCardData.error}
                        </Typography>
                        : <div className="ancmnts-wrapper">
                            <CardView
                                t={t}
                                list={adCardData.data.cards}
                                isFetch={adCardData.isFetch}
                            />
                        </div>}
                </CustomTabPanel>
                <CustomTabPanel value={tabValue} index={1}>
                    {lotCardData.error
                        ? <Typography
                            variant="subtitle1"
                            className="error-text"
                        >
                            {lotCardData.error}
                        </Typography>
                        : <div className="auction-wrapper">
                            <CardView
                                t={t}
                                list={lotCardData.data.cards}
                                isFetch={lotCardData.isFetch}
                            />
                        </div>}
                </CustomTabPanel>
                <div className='pagination'>
                    {!(lotCardData.error || adCardData.error)
                    && <CustomPagination
                        pageCount={pageCount}
                        currentPage={currentPage}
                        handlePaginationPage={handlePaginationPage}
                    />}
                </div>
            </div>
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
