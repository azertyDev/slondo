import React, { FC } from 'react';
import { WithT } from 'i18next';
import {
    Typography,
    Tabs,
    Tab,
    Grid,
    CircularProgress,
} from '@material-ui/core';
import { CustomTabPanel } from '@src/components/elements/custom_tab_panel/CustomTabPanel';
import { CardData } from '@root/interfaces/CardData';
import { useStyles } from './useStyles';
import { CardView } from '@src/components/elements/card_view/CardView';
import { ButtonComponent } from '@root/src/components/elements/button/Button';

type MainContentProps = {
    tabValue: number;
    handleTabChange: (_: unknown, newValue: number) => void;
    handleShowMore: () => void;
    ancmntCardData: CardData;
    auctionCardData: CardData;
    isFetch: boolean;
    isShowMoreFetch: boolean;
} & WithT;

export const AncmntsTabs: FC<MainContentProps> = (props) => {
    const {
        t,
        tabValue,
        handleTabChange,
        handleShowMore,
        ancmntCardData,
        auctionCardData,
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className="title" variant="h2">
                Все объявления
            </Typography>
            <Tabs
                value={tabValue}
                onChange={handleTabChange}
                indicatorColor="primary"
                variant="fullWidth"
            >
                <Tab
                    label={<Typography variant="h6">{t('allAds')}</Typography>}
                    value={0}
                />
                <Tab
                    label={<Typography variant="h6">{t('allLots')}</Typography>}
                    value={1}
                />
            </Tabs>
            <div className="tabs-content">
                <CustomTabPanel value={tabValue} index={0}>
                    {ancmntCardData.error ? (
                        <Typography variant="subtitle1" className="error-text">
                            {ancmntCardData.error}
                        </Typography>
                    ) : (
                        <CardView
                            t={t}
                            list={ancmntCardData.data.cards}
                            isFetch={ancmntCardData.isFetch}
                        />
                    )}
                </CustomTabPanel>
                <CustomTabPanel value={tabValue} index={1}>
                    {auctionCardData.error ? (
                        <Typography variant="subtitle1" className="error-text">
                            {auctionCardData.error}
                        </Typography>
                    ) : (
                        <CardView
                            t={t}
                            list={auctionCardData.data.cards}
                            isFetch={auctionCardData.isFetch}
                        />
                    )}
                </CustomTabPanel>
            </div>
            {((ancmntCardData.data.total > ancmntCardData.data.cards.length &&
                tabValue === 0) ||
                (auctionCardData.data.total >
                    auctionCardData.data.cards.length &&
                    tabValue === 1)) && (
                <Grid container className={classes.showMoreContainer}>
                    <Grid item xs={12} className="show-more-block">
                        {ancmntCardData.isShowMoreFetch || auctionCardData.isShowMoreFetch 
                            ? <CircularProgress size={25} />
                            : <ButtonComponent onClick={handleShowMore}>
                                <Typography variant="subtitle2" color="initial">
                                    {t('showMore')}
                                </Typography>
                            </ButtonComponent>}
                    </Grid>
                </Grid>
            )}
        </div>
    );
};
