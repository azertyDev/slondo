import {FC, Fragment, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
    Box,
    Grid,
    IconButton,
    Typography,
    useMediaQuery,
    useTheme
} from '@material-ui/core';
import {GridViewIcon, ListViewIcon} from '@src/components/elements/icons';
import {CustomCircularProgress} from '@src/components/elements/custom_circular_progress/CustomCircularProgress';
import {ListCard} from '@src/components/elements/card/list_card/ListCard';
import {GridCard} from '@src/components/elements/card/grid_card/GridCard';
import {ContentAdv} from '@src/components/elements/adv/ContentAdv';
import {RightAdv} from '@src/components/elements/adv/right/RightAdv';
import {useStyles} from './useStyles';
import {useRouter} from 'next/router';

type SearchResultPropsType = {
    isFetch: boolean;
    isNotFound: boolean;
    searchTermFromUrl: string;
    rightAdvData;
    posts;
};

export const SearchResult: FC<SearchResultPropsType> = props => {
    const {isFetch, isNotFound, posts, rightAdvData, searchTermFromUrl} = props;
    const {locale, query} = useRouter();
    const {t} = useTranslation('filters');
    const [listView, setListView] = useState(false);
    const isMdDown = useMediaQuery(useTheme().breakpoints.down('md'));

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {isFetch ? (
                <CustomCircularProgress />
            ) : (
                <>
                    {isNotFound ? (
                        <Typography>
                            {searchTermFromUrl !== ''
                                ? t('post_by_term_not_found', {
                                      searchText: searchTermFromUrl
                                  })
                                : t('post_not_found')}
                        </Typography>
                    ) : (
                        <>
                            <Box position="relative">
                                <Box
                                    mb={1}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Typography variant="h5" component="p">
                                        {t('common:allPosts')}
                                    </Typography>
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

                                        const isYe = by_currency === 'уе';
                                        const isSum = by_currency === 'sum';

                                        const curCurrency = isYe
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
                                                            adv={rightAdvData}
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
                                                                isYe
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
                                                                sm={6}
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
                                                            sm={6}
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
                                                                    isYe
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
                            </Box>
                        </>
                    )}
                </>
            )}
        </div>
    );
};
