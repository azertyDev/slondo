import React, {FC} from 'react';
import {WithT} from 'i18next';
import {
    Typography,
    Tabs,
    Tab,
    Grid,
    CircularProgress,
} from '@material-ui/core';
import {CustomTabPanel} from '@src/components/elements/custom_tab_panel/CustomTabPanel';
import {CardData} from '@root/interfaces/CardData';
import {useStyles} from './useStyles';
import {CardView} from '@src/components/elements/card/card_view/CardView';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';


type MainContentProps = {
    tabValue: number;
    handleTabChange: (_: unknown, newValue: number) => void;
    handleShowMore: () => void;
    postCardData: CardData;
    auctionCardData: CardData;
} & WithT;

export const PostsTabs: FC<MainContentProps> = (props) => {
    const {
        t,
        tabValue,
        handleTabChange,
        handleShowMore,
        postCardData,
        auctionCardData,
    } = props;

    const isAncmntsExist = postCardData.data.total > postCardData.data.cards.length && tabValue === 0;
    const isAuctionsExist = auctionCardData.data.total > auctionCardData.data.cards.length && tabValue === 1;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className="title" variant="h2">
                {t('allPosts')}
            </Typography>
            <Tabs
                value={tabValue}
                onChange={handleTabChange}
                indicatorColor="primary"
                variant="fullWidth"
            >
                <Tab
                    label={<Typography variant="h6">{t('posts')}</Typography>}
                    value={0}
                />
                <Tab
                    label={<Typography variant="h6">{t('auctions')}</Typography>}
                    value={1}
                />
            </Tabs>
            <div className="tabs-content">
                <CustomTabPanel value={tabValue} index={0}>
                    {postCardData.error
                        ? <Typography variant="subtitle1" className="error-text">
                            {postCardData.error}
                        </Typography>
                        : <CardView
                            list={postCardData.data.cards}
                            isFetch={postCardData.isFetch}
                        />}
                </CustomTabPanel>
                <CustomTabPanel value={tabValue} index={1}>
                    {auctionCardData.error
                        ? <Typography variant="subtitle1" className="error-text">
                            {auctionCardData.error}
                        </Typography>
                        : <CardView
                            list={auctionCardData.data.cards}
                            isFetch={auctionCardData.isFetch}
                        />}
                </CustomTabPanel>
            </div>
            {(isAncmntsExist || isAuctionsExist)
            && <Grid container className={classes.showMoreContainer}>
                <Grid item xs={12} className="show-more-block">
                    {postCardData.isShowMoreFetch || auctionCardData.isShowMoreFetch
                        ? <CircularProgress size={25}/>
                        : <CustomButton onClick={handleShowMore}>
                            <Typography variant="subtitle2" color="initial">
                                {t('showMore')}
                            </Typography>
                        </CustomButton>}
                </Grid>
            </Grid>}
        </div>
    );
};