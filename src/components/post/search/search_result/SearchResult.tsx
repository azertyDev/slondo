import {FC, Fragment, useState} from 'react';
import {useTranslation} from 'next-i18next';
import {
    Box,
    Grid,
    Hidden,
    IconButton,
    Typography,
    useMediaQuery,
    useTheme
} from '@material-ui/core';
import {useRouter} from 'next/router';
import {GridViewIcon, ListViewIcon} from '@src/components/elements/icons';
import {CustomCircularProgress} from '@src/components/elements/custom_circular_progress/CustomCircularProgress';
import {ListCard} from '@src/components/elements/card/list_card/ListCard';
import {GridCard} from '@src/components/elements/card/grid_card/GridCard';
import {ContentAdv} from '@src/components/elements/adv/ContentAdv';
import {RightAdv} from '@src/components/elements/adv/right/RightAdv';
import {POSTS_PER_PAGE} from '@root/src/constants';
import {CustomPagination} from '@root/src/components/elements/custom_pagination/CustomPagination';
import {BottomAdv} from '@root/src/components/elements/adv/bottom/BottomAdv';
import {useStyles} from './useStyles';

type SearchResultPropsType = {
    isFetch: boolean;
    isNotFound: boolean;
    searchTermFromUrl: string;
    rightAdv;
    bottomAdv;
    posts;
    topPosts;
    postTotal: number;
    topPostTotal: number;
    switchShowAll: () => void;
    handlePagePagination: (_, page) => void;
};

export const SearchResult: FC<SearchResultPropsType> = props => {
    const {
        posts,
        topPosts,
        isFetch,
        isNotFound,
        rightAdv,
        bottomAdv,
        postTotal,
        topPostTotal,
        switchShowAll,
        searchTermFromUrl,
        handlePagePagination
    } = props;

    const {locale, query} = useRouter();
    const allTop = !!query.all_top;

    const {t} = useTranslation('filters');
    const [listView, setListView] = useState(false);
    const isMdDown = useMediaQuery(useTheme().breakpoints.down('md'));
    const hasTopPosts = topPosts.length !== 0;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={9} style={{position: 'relative'}}>
                    {isNotFound ? (
                        <Typography>
                            {searchTermFromUrl !== ''
                                ? t('post_by_term_not_found', {
                                      searchText: searchTermFromUrl
                                  })
                                : t('post_not_found')}
                        </Typography>
                    ) : isFetch ? (
                        <CustomCircularProgress />
                    ) : (
                        <>
                            <div className="top-posts">
                                <Box
                                    mb={1}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent={
                                        hasTopPosts
                                            ? 'space-between'
                                            : 'flex-end'
                                    }
                                >
                                    {hasTopPosts && (
                                        <Typography variant="h5" component="p">
                                            {t('common:topPosts')}
                                        </Typography>
                                    )}
                                    <Box className="view-btns">
                                        <IconButton
                                            className={
                                                listView ? '' : 'selected'
                                            }
                                            onClick={() => setListView(false)}
                                        >
                                            <GridViewIcon />
                                        </IconButton>
                                        <IconButton
                                            className={
                                                listView ? 'selected' : ''
                                            }
                                            onClick={() => setListView(true)}
                                        >
                                            <ListViewIcon />
                                        </IconButton>
                                    </Box>
                                </Box>
                                {hasTopPosts && (
                                    <Grid container spacing={isMdDown ? 1 : 2}>
                                        {topPosts.map((cardData, i) => {
                                            const {
                                                price,
                                                sum,
                                                usd,
                                                currency,
                                                ...other
                                            } = cardData;

                                            const {by_currency} = query;

                                            const isUE = by_currency === 'уе';
                                            const isSum = by_currency === 'sum';

                                            const curCurrency = isUE
                                                ? {name: 'уе'}
                                                : isSum
                                                ? {name: 'sum'}
                                                : currency;

                                            return (
                                                <Fragment key={i}>
                                                    {listView ? (
                                                        <Grid item xs={12}>
                                                            <ListCard
                                                                {...other}
                                                                currency={
                                                                    curCurrency
                                                                }
                                                                price={
                                                                    isUE
                                                                        ? usd
                                                                        : isSum
                                                                        ? sum
                                                                        : price
                                                                }
                                                            />
                                                        </Grid>
                                                    ) : (
                                                        <Grid
                                                            xs={6}
                                                            md={4}
                                                            lg={3}
                                                            item
                                                        >
                                                            <GridCard
                                                                {...other}
                                                                isFetch={
                                                                    isFetch
                                                                }
                                                                currency={
                                                                    curCurrency
                                                                }
                                                                price={
                                                                    isUE
                                                                        ? usd
                                                                        : isSum
                                                                        ? sum
                                                                        : price
                                                                }
                                                            />
                                                        </Grid>
                                                    )}
                                                </Fragment>
                                            );
                                        })}
                                        {topPostTotal > 4 && (
                                            <Typography
                                                className="show-all"
                                                onClick={switchShowAll}
                                            >
                                                {t(
                                                    allTop
                                                        ? 'back_to_list'
                                                        : 'show_all'
                                                )}
                                            </Typography>
                                        )}
                                    </Grid>
                                )}
                            </div>
                            {!allTop && (
                                <div>
                                    <Box
                                        mb={1}
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="space-between"
                                    >
                                        <Typography variant="h5" component="p">
                                            {t('common:allPosts')}
                                        </Typography>
                                    </Box>
                                    <Grid container spacing={isMdDown ? 1 : 2}>
                                        {posts.map((cardData, i) => {
                                            const {
                                                price,
                                                sum,
                                                usd,
                                                currency,
                                                ...other
                                            } = cardData;

                                            const {by_currency} = query;

                                            const isUE = by_currency === 'уе';
                                            const isSum = by_currency === 'sum';

                                            const curCurrency = isUE
                                                ? {name: 'уе'}
                                                : isSum
                                                ? {name: 'sum'}
                                                : currency;

                                            const isAdvSlot =
                                                locale !== 'uz' &&
                                                (i + 1) % 10 === 0;

                                            const isRightAdvSlot =
                                                isMdDown && i === 6;

                                            return (
                                                <Fragment key={i}>
                                                    {isRightAdvSlot && (
                                                        <Grid item xs={12}>
                                                            <RightAdv
                                                                mobile
                                                                adv={rightAdv}
                                                            />
                                                        </Grid>
                                                    )}
                                                    {listView ? (
                                                        <Grid item xs={12}>
                                                            <ListCard
                                                                {...other}
                                                                currency={
                                                                    curCurrency
                                                                }
                                                                price={
                                                                    isUE
                                                                        ? usd
                                                                        : isSum
                                                                        ? sum
                                                                        : price
                                                                }
                                                            />
                                                        </Grid>
                                                    ) : (
                                                        <>
                                                            {isAdvSlot && (
                                                                <Grid
                                                                    item
                                                                    xs={6}
                                                                    md={4}
                                                                    lg={3}
                                                                >
                                                                    <div className="content-adv-wrapper">
                                                                        <ContentAdv />
                                                                    </div>
                                                                </Grid>
                                                            )}
                                                            <Grid
                                                                xs={6}
                                                                md={4}
                                                                lg={3}
                                                                item
                                                            >
                                                                <GridCard
                                                                    {...other}
                                                                    isFetch={
                                                                        isFetch
                                                                    }
                                                                    currency={
                                                                        curCurrency
                                                                    }
                                                                    price={
                                                                        isUE
                                                                            ? usd
                                                                            : isSum
                                                                            ? sum
                                                                            : price
                                                                    }
                                                                />
                                                            </Grid>
                                                        </>
                                                    )}
                                                </Fragment>
                                            );
                                        })}
                                    </Grid>
                                </div>
                            )}
                        </>
                    )}
                    <div
                        style={{
                            width: '100%',
                            margin: '70px 0 20px'
                        }}
                    >
                        <CustomPagination
                            totalItems={allTop ? topPostTotal : postTotal}
                            itemsPerPage={POSTS_PER_PAGE}
                            handlePagePagination={handlePagePagination}
                        />
                    </div>
                    <BottomAdv adv={bottomAdv} />
                </Grid>
                <Hidden mdDown>
                    <Grid item xs={3} className="sidebar-adv-wrapper">
                        <RightAdv adv={rightAdv} threshold={475} />
                    </Grid>
                </Hidden>
            </Grid>
        </div>
    );
};
