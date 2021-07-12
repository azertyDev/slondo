import {FC} from 'react';
import {
    Typography,
    Tabs,
    Tab,
    Grid,
    CircularProgress, Hidden
} from '@material-ui/core';
import {useTranslation} from 'next-i18next';
import {CardData} from '@root/interfaces/CardData';
import {CustomTabPanel} from '@src/components/elements/custom_tab_panel/CustomTabPanel';
import {CardView} from '@src/components/elements/card/CardView';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useStyles} from './useStyles';


type MainContentProps = {
    tabValue: number;
    handleTabChange: (_: unknown, newValue: number) => void;
    handleShowMore: () => void;
    postCardData: CardData;
    auctionCardData: CardData;
};

export const PostsTabs: FC<MainContentProps> = (props) => {
    const {
        tabValue,
        handleTabChange,
        handleShowMore,
        postCardData,
        auctionCardData
    } = props;

    const {t} = useTranslation('main');

    const isPostsExist = postCardData.data.total > postCardData.data.cards.length && tabValue === 0;
    const isAuctionsExist = auctionCardData.data.total > auctionCardData.data.cards.length && tabValue === 1;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Hidden mdDown>
                <Typography className="title" variant="h2">
                    {t('allPosts')}
                </Typography>
            </Hidden>
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
                         data={postCardData.data.cards}
                         isFetch={postCardData.isFetch}
                     />}
                </CustomTabPanel>
                <CustomTabPanel value={tabValue} index={1}>
                    {auctionCardData.error
                     ? <Typography variant="subtitle1" className="error-text">
                         {auctionCardData.error}
                     </Typography>
                     : <CardView
                         data={auctionCardData.data.cards}
                         isFetch={auctionCardData.isFetch}
                     />}
                </CustomTabPanel>
            </div>
            {(isPostsExist || isAuctionsExist) && (
                <Grid container className={classes.showMoreContainer}>
                    <Grid item xs={12} className="show-more-block">
                        {postCardData.isShowMoreFetch || auctionCardData.isShowMoreFetch
                         ? <CircularProgress size={25}/>
                         : <CustomButton onClick={handleShowMore}>
                             <Typography variant="subtitle2" color="initial">
                                 {t('common:showMore')}
                             </Typography>
                         </CustomButton>}
                    </Grid>
                </Grid>
            )}
        </div>
    );
};