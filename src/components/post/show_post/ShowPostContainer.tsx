import React, {FC, MutableRefObject, useEffect, useRef, useState} from 'react';
import {useRouter} from 'next/router';
import {i18n, useTranslation} from 'next-i18next';
import {userAPI} from '@src/api/api';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {useDispatch} from 'react-redux';
import {MainLayout} from '@src/components/MainLayout';
import {Grid, Hidden} from '@material-ui/core';
import {PostContent} from '@src/components/post/show_post/post_content/PostContent';
import {OwnerAuctionContent} from '@src/components/post/show_post/owner_auction_content/OwnerAuctionContent';
import {Banner} from '@src/components/elements/banner/Banner';
import {useStyles} from './useStyles';


export type SlidersRefType = {
    slider1?: MutableRefObject<any>;
    slider2?: MutableRefObject<any>;
    slider3?: MutableRefObject<any>;
    slider4?: MutableRefObject<any>;
};

export const ShowPostContainer: FC = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation(['post']);
    const router = useRouter();
    const lang = i18n.language;
    const url = useRouter().query.url as string;
    const splittedUrl = url.split('-');
    const params = splittedUrl.splice(-3);

    const initValues = { id: null, name: '' };

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
            subscribed: null,
            author: {
                id: null,
                name: '',
                surname: '',
                phone: '',
                created_at: '',
                avatar: ''
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
                price_by_now: ''
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
    const [openModal, setOpenModal] = useState(false);
    const [page, setPage] = useState(1);
    const [auctionsBetsList, setAuctionBetsList] = useState(initialAuctionBetsList);
    const [lastPage, setLastPage] = useState(null);
    const [offerPrice, setOfferPrice] = useState({
        isFetch: false,
        price: null
    });

    const handleOpenModal = () => () => {
        setOpenModal(true);
    };
    const handleCloseModal = () => () => {
        setOpenModal(false);
    };
    const handleBuyNow = () => () => {
        userAPI.buyAuction(postData.data.auction.id, postData.data.id)
            .then(result => router.push('/'));
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
            setOfferPrice({ ...offerPrice, isFetch: true });
            await userAPI.offerThePrice(postData.data.auction.id, offerPrice.price);
            setOfferPrice({ price: null, isFetch: false });
            setOpenModal(false);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const handleTextField = ({ target }) => {
        setOfferPrice({ ...offerPrice, price: target.value });
    };

    const refreshAucBets = async () => {
        try {
            setAuctionBetsList({
                ...auctionsBetsList,
                isFetch: true
            });
            const { data } = await userAPI.getAuctionBets(postData.data.auction.id, 1);
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
            const { data, last_page } = await userAPI.getAuctionBets(postData.data.auction.id, page);
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
            } = await userAPI.getPostById(params[0], lang, params[1], params[2]);

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

    const handleFollow = (userId) => async () => {
        try {
            await userAPI.follow(userId);
        } catch (e) {
            dispatch(setErrorMsgAction(e));
        }
    };

    useEffect(() => {
        setSlidersRefs(initSlidersRefs);
    }, []);

    useEffect(() => {
        fetchPostData();
    }, [lang]);

    useEffect(() => {
        postData.data.auction.id && auctionBetsPagination();
    }, [page, postData.data.auction.id]);

    useEffect(() => {
        const height = document.getElementById('post-description').clientHeight;
        setDescHeight(height);
    }, [postData]);

    const classes = useStyles();
    return (
        <MainLayout title={postData.data.title}>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={9}>
                        <PostContent
                            t={t}
                            data={postData.data}
                            parameters={parameters}
                            descHeight={descHeight}
                            slidersRefs={slidersRefs}
                        />
                    </Grid>
                    <Hidden mdDown>
                        <Grid item lg={3}>
                            <OwnerAuctionContent
                                t={t}
                                postData={postData.data}
                                handleFollow={handleFollow}
                                openModal={openModal}
                                page={page}
                                list={auctionsBetsList.list}
                                lastPage={lastPage}
                                handleOpenModal={handleOpenModal}
                                handleCloseModal={handleCloseModal}
                                handleBuyNow={handleBuyNow}
                                handleSubmit={handleSubmit}
                                handleScroll={handleScroll}
                                handleRefresh={refreshAucBets}
                                handleSuggestPrice={handleSuggestPrice}
                                handleTextField={handleTextField}
                            />
                            <div className={classes.adBanner}>
                                <Banner height="424px" />
                            </div>
                        </Grid>
                    </Hidden>
                </Grid>
            </div>
        </MainLayout>
    );
};
