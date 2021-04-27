import React, {FC, MutableRefObject, useEffect, useRef, useState} from 'react';
import {useRouter} from 'next/router';
import {i18n, useTranslation} from 'next-i18next';
import {userAPI} from '@src/api/api';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {useDispatch} from 'react-redux';
import {Container, Grid, Hidden, useMediaQuery, useTheme} from '@material-ui/core';
import {PostContent} from '@src/components/post/show_post/post_content/PostContent';
import {OwnerAuctionContent} from '@src/components/post/show_post/owner_auction_content/OwnerAuctionContent';
import {Banner} from '@src/components/elements/banner/Banner';
import {AuctionInfo} from '@src/components/post/show_post/owner_auction_content/auction_info/AuctionInfo';
import {OwnerInfo} from '@src/components/post/show_post/owner_auction_content/owner_info/OwnerInfo';
import Head from 'next/head';
import {Header} from '@src/components/header/Header';
import {Footer} from '@src/components/footer/Footer';
import {ErrorModal} from '@src/components/error_modal/ErrorModal';
import {useStyles} from './useStyles';


export type SlidersRefType = {
    slider1?: MutableRefObject<any>;
    slider2?: MutableRefObject<any>;
    slider3?: MutableRefObject<any>;
    slider4?: MutableRefObject<any>;
};

export const ShowPostContainer: FC = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation(['post']);
    const router = useRouter();
    const lang = i18n.language;
    const url = router.query.url as string;
    const [postId] = url.split('-').splice(-1);

    const initValues = {id: null, name: ''};

    const initialPostData = {
        isFetch: false,
        error: null,
        data: {
            id: null,
            title: '',
            price: '',
            currency: initValues,
            condition: initValues,
            created_at: null,
            expiration_at: null,
            number_of_views: null,
            sub_category_id: null,
            creator: null,
            status: '',
            subscribed: null,
            safe_deal: null,
            author: {
                id: null,
                name: '',
                surname: '',
                phone: '',
                created_at: '',
                avatar: '',
                available_days: ''
            },
            images: [{
                id: null,
                url: {
                    default: ''
                }
            }],
            description: '',
            region: initValues,
            city: initValues,
            district: initValues,
            category: {
                id: null,
                name: '',
                mark: ''
            },
            adsable: {
                id: null,
                sub_category: {
                    id: null,
                    name: ''
                },
                type: {
                    id: null,
                    name: ''
                }
            },
            ads_type: {
                id: null,
                name: '',
                mark: ''
            },
            auction: {
                id: null,
                duration: '',
                display_phone: '',
                reserve_price: '',
                price_by_now: '',
                price_buy_now_status: null,
                offer_the_price: null
            }
        }
    };

    const initialAuctionBetsList = {
        isFetch: false,
        list: []
    };

    const initSlidersRefs: SlidersRefType = {
        slider1: useRef(),
        slider2: useRef(),
        slider3: useRef(),
        slider4: useRef()
    };

    const [postData, setPostData] = useState(initialPostData);
    const [parameters, setParameters] = useState({});
    const [slidersRefs, setSlidersRefs] = useState(initSlidersRefs);
    const [descHeight, setDescHeight] = useState(0);
    const [openBuyNowModal, setOpenBuyNowModal] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [page, setPage] = useState(1);
    const [auctionsBetsList, setAuctionBetsList] = useState(initialAuctionBetsList);
    const [lastPage, setLastPage] = useState(null);
    const [offerPrice, setOfferPrice] = useState({
        isFetch: false,
        price: null
    });

    const handleOpenBuyNowModal = () => () => {
        setOpenBuyNowModal(true);
    };
    const handleOpenModal = () => () => {
        setOpenModal(true);
    };
    const handleCloseModal = () => () => {
        setOpenModal(false);
    };
    const handleBuyNow = () => () => {
        userAPI.buyAuction(postData.data.auction.id, postData.data.id)
            .then(_ => router.push('/'));
    };
    const handleSubmit = (value) => {
        userAPI.betAuction(value)
            .then(result => result && userAPI.getAuctionBets(postData.data.auction.id, 1)
                .then(result => {
                    setLastPage(result.last_page);
                    setAuctionBetsList(result.data);
                }))
            .catch(error => dispatch(setErrorMsgAction(t(`auction:${error.response.data.message}`))));
    };
    const handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (page !== lastPage && bottom) {
            setPage(prev => prev + 1);
        }
    };
    const handleSuggestPrice = async () => {
        try {
            setOfferPrice({...offerPrice, isFetch: true});
            await userAPI.offerThePrice(postData.data.auction.id, offerPrice.price);
            setOfferPrice({price: null, isFetch: false});
            setOpenModal(false);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const handleTextField = ({target}) => {
        setOfferPrice({...offerPrice, price: target.value});
    };
    const refreshAucBets = async () => {
        try {
            setAuctionBetsList({
                ...auctionsBetsList,
                isFetch: true
            });
            const {data} = await userAPI.getAuctionBets(postData.data.auction.id, 1);
            setAuctionBetsList({
                ...auctionsBetsList,
                isFetch: false,
                list: data
            });
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const auctionBetsPagination = async () => {
        try {
            setAuctionBetsList({
                ...auctionsBetsList,
                isFetch: true
            });
            const {data, last_page} = await userAPI.getAuctionBets(postData.data.auction.id, page);
            setAuctionBetsList({
                ...auctionsBetsList,
                isFetch: false,
                list: [...auctionsBetsList.list, ...data]
            });
            setLastPage(last_page);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const fetchPostData = async () => {
        try {
            setPostData({
                ...postData,
                isFetch: true
            });

            const {
                title,
                currency,
                condition,
                images,
                description,
                region,
                city,
                available_days,
                district,
                ...otherData
            } = await userAPI.getPostById(postId);

            setParameters(otherData.model);

            if (available_days) {
                otherData.available_days = available_days.map(day => {
                    day.name = t(`common:${day.name}`);
                    return day;
                });
            }

            setPostData({
                ...postData,
                isFetch: false,
                data: {
                    title,
                    images,
                    description,
                    currency: currency ?? initValues,
                    condition: condition ?? initValues,
                    region: region ?? initValues,
                    city: city ?? initValues,
                    district: district ?? initValues,
                    ...otherData
                }
            });
        } catch (e) {
            setPostData({
                ...postData,
                error: e.message
            });
        }
    };
    console.log(postData);
    const handleFollow = (userId) => async () => {
        try {
            await userAPI.follow(userId);
        } catch (e) {
            dispatch(setErrorMsgAction(e));
        }
    };

    const auctionInfo = (
        <AuctionInfo
            data={postData.data}
            t={t}
            openBuyNowModal={openBuyNowModal}
            openModal={openModal}
            page={page}
            auctionsBetsList={auctionsBetsList.list}
            lastPage={lastPage}
            handleOpenBuyNowModal={handleOpenBuyNowModal}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
            handleBuyNow={handleBuyNow}
            handleSubmit={handleSubmit}
            handleScroll={handleScroll}
            handleRefresh={refreshAucBets}
            handleSuggestPrice={handleSuggestPrice}
            handleTextField={handleTextField}
        />
    );

    const ownerInfo = (
        <OwnerInfo
            safe_deal={postData.data.safe_deal}
            owner={postData.data.author}
            isOwner={postData.data.creator}
            handleFollow={handleFollow}
            subscribed={postData.data.subscribed}
        />
    );

    const theme = useTheme();
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        setSlidersRefs(initSlidersRefs);
    }, []);

    useEffect(() => {
        fetchPostData();
    }, [lang]);

    useEffect(() => {
        postData.data.auction?.id && auctionBetsPagination();
    }, [page, postData.data.auction?.id]);

    useEffect(() => {
        const height = document.getElementById('post-description').clientHeight;
        setDescHeight(height);
    }, [postData]);

    const classes = useStyles();
    return (
        <>
            <Head>
                <meta name="robots" content="noindex"/>
                <meta property="og:site_name" content="Slondo"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content={postData.data.title} key="ogtitle"/>
                <title>{postData.data.title}</title>
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
                            data={postData.data}
                            parameters={parameters}
                            descHeight={descHeight}
                            slidersRefs={slidersRefs}
                        />
                    </Grid>
                    <Grid item lg={3} xs={12}>
                        <OwnerAuctionContent
                            t={t}
                            postData={postData.data}
                            handleFollow={handleFollow}
                            auctionInfo={auctionInfo}
                            ownerInfo={ownerInfo}
                        />
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
