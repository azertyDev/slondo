import {FC, Fragment, useCallback, useContext, useEffect, useRef, useState} from 'react';
import {userAPI} from '@src/api/api';
import {unstable_batchedUpdates} from "react-dom";
import {CircularProgress, Grid, Hidden, Tab, Tabs, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import {CustomTabPanel} from "@src/components/elements/custom_tab_panel/CustomTabPanel";
import {GridCard} from "@src/components/elements/card/grid_card/GridCard";
import {CustomButton} from "@src/components/elements/custom_button/CustomButton";
import {ContentAdv} from "@src/components/elements/adv/ContentAdv";
import {useTranslation} from "next-i18next";
import {HomePageCtx, AuthCtx} from "@src/context";
import {useStyles} from "./useStyles";
import {RightAdv} from "@src/components/elements/adv/right/RightAdv";
import {useRouter} from "next/router";

export const PostsTabs: FC<{ rightAdvData }> = ({rightAdvData}) => {
    const {locale} = useRouter();
    const {t} = useTranslation('main');
    const {auth: {isAuth}} = useContext(AuthCtx);
    const posts = useContext(HomePageCtx).tabPosts;

    const [isFetch, setIsFetch] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string>(null);

    const [tabValue, setTabValue] = useState(0);
    const [postCurrPage, setPostCurrPage] = useState(1);
    const [auctionCurrPage, setAuctionCurrPage] = useState(1);

    const [postCards, setPostCards] = useState(posts);
    const [auctionCards, setAuctionCards] = useState({
        data: [],
        total: 0
    });

    const hasMorePosts = postCards.total > postCards.data.length && tabValue === 0;
    const hasMoreAuctions = auctionCards.total > auctionCards.data.length && tabValue === 1;
    const isFirstPostPage = postCurrPage === 1;
    const isFirstAucPage = auctionCurrPage === 1;

    const isMdDown = useMediaQuery(useTheme().breakpoints.down('md'));

    const GetCardRef = (observer, isAuc = false) => useCallback(node => {
        if (isFetch) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if (!isFirstPostPage && entries[0].isIntersecting && hasMorePosts) {
                isAuc
                    ? setAuctionCurrPage(prevPageNumber => prevPageNumber + 1)
                    : setPostCurrPage(prevPageNumber => prevPageNumber + 1);
            }
        });

        if (node) observer.current.observe(node);
    }, [isFetch, hasMorePosts]);

    const lastPostCardRef = GetCardRef(useRef());
    const lastAucCardRef = GetCardRef(useRef(), true);

    const fetchCardData = async (currentPage, type = 'post') => {
        try {
            const isAuc = type === 'auc';

            setIsFetch(true);
            const {data, total} = await userAPI.getCards(type, currentPage);
            setIsFetch(false);

            const cards = isAuc ? auctionCards.data : postCards.data;

            const cardData = {
                data: (isAuc ? isFirstAucPage : isFirstPostPage) ? data : [...cards, ...data],
                total: total
            };

            isAuc ? setAuctionCards(cardData) : setPostCards(cardData);
        } catch (e) {
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setErrorMsg(e.message);
            });
        }
    };

    const handleTabChange = (_, newValue) => {
        setTabValue(newValue);
    };

    const handleShowMore = () => {
        const isFirstTab = tabValue === 0;
        const nextPage = (isFirstTab ? postCurrPage : auctionCurrPage) + 1;

        isFirstTab
            ? setPostCurrPage(nextPage)
            : setAuctionCurrPage(nextPage);
    };

    useEffect(() => {
        (postCurrPage !== 1 || isAuth) && fetchCardData(postCurrPage);
    }, [postCurrPage, isAuth]);

    useEffect(() => {
        fetchCardData(auctionCurrPage, 'auc');
    }, [auctionCurrPage, isAuth]);

    const classes = useStyles({tabValue});
    return (
        <div className={classes.root}>
            <Hidden mdDown>
                <Typography className="title" variant="h1">
                    {t('allPosts')}
                </Typography>
            </Hidden>
            <Tabs
                value={tabValue}
                variant="fullWidth"
                onChange={handleTabChange}
            >
                <Tab
                    value={0}
                    label={<Typography variant="h6">
                        {t('posts')}
                    </Typography>}
                />
                <Tab
                    value={1}
                    label={<Typography variant="h6">
                        {t('auctions')}
                    </Typography>}
                />
            </Tabs>
            <div className="tabs-content">
                <CustomTabPanel value={tabValue} index={0}>
                    {errorMsg
                        ? <Typography variant="subtitle1" className="error-text">
                            {errorMsg}
                        </Typography>
                        : <Grid container spacing={2}>
                            {postCards.data.map((cardData, i) => {
                                const isAdvSlot = locale !== 'uz' && (i + 1) % 10 === 0;
                                const isRightAdvSlot = isMdDown && i === 6;
                                const isLastCard = postCards.data.length === i + 1;

                                return (
                                    <Fragment key={i}>
                                        {isRightAdvSlot && (
                                            <Grid item xs={12}>
                                                <RightAdv mobile adv={rightAdvData}/>
                                            </Grid>
                                        )}
                                        {isAdvSlot && (
                                            <Grid
                                                item
                                                xs={6}
                                                md={4}
                                                lg={3}
                                                ref={isLastCard ? lastAucCardRef : null}
                                            >
                                                <ContentAdv/>
                                            </Grid>
                                        )}
                                        <Grid
                                            item
                                            xs={6}
                                            sm={4}
                                            lg={3}
                                            ref={isLastCard ? lastPostCardRef : null}
                                        >
                                            <GridCard{...cardData}/>
                                        </Grid>
                                    </Fragment>
                                );
                            })}
                        </Grid>}
                    <Grid container className={classes.showMoreContainer}>
                        <Grid item xs={12} className="show-more-block">
                            {isFetch
                                ? <CircularProgress size={25}/>
                                : isFirstPostPage && hasMorePosts && (
                                <CustomButton onClick={handleShowMore}>
                                    <Typography variant="subtitle2" color="initial">
                                        {t('common:showMore')}
                                    </Typography>
                                </CustomButton>
                            )}
                        </Grid>
                    </Grid>
                </CustomTabPanel>
                <CustomTabPanel value={tabValue} index={1}>
                    {errorMsg
                        ? <Typography variant="subtitle1" className="error-text">
                            {errorMsg}
                        </Typography>
                        : <Grid container spacing={2}>
                            {auctionCards.data.map((cardData, i) => {
                                const isLastCard = postCards.data.length === i + 1;

                                return (
                                    <Grid
                                        item
                                        key={i}
                                        xs={6}
                                        md={4}
                                        lg={3}
                                        ref={isLastCard ? lastAucCardRef : null}
                                    >
                                        <GridCard{...cardData}/>
                                    </Grid>
                                );
                            })}
                        </Grid>}
                    <Grid container className={classes.showMoreContainer}>
                        <Grid item xs={12} className="show-more-block">
                            {isFetch
                                ? <CircularProgress size={25}/>
                                : isFirstAucPage && hasMoreAuctions && (
                                <CustomButton onClick={handleShowMore}>
                                    <Typography variant="subtitle2" color="initial">
                                        {t('common:showMore')}
                                    </Typography>
                                </CustomButton>
                            )}
                        </Grid>
                    </Grid>
                </CustomTabPanel>
            </div>
        </div>
    );
};
