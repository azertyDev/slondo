import {FC, useContext, useEffect, useState} from 'react';
import {userAPI} from '@src/api/api';
import {useRouter} from 'next/router';
import {useTranslation} from 'next-i18next';
import {unstable_batchedUpdates} from "react-dom";
import {Container, Grid, Hidden, useMediaQuery, useTheme} from '@material-ui/core';
import {PostContent} from '@src/components/post/show_post/post_content/PostContent';
import {Header} from '@src/components/header/Header';
import {ErrorModal} from '@src/components/error_modal/ErrorModal';
import {OwnerAuctionInfo} from '@src/components/post/show_post/owner_auction_info/OwnerAuctionInfo';
import {Footer} from '@src/components/footer/Footer';
import {AuthCtx, ErrorCtx} from "@src/context";
import {useModal} from "@src/hooks";
import {SafeDealModal} from "@src/components/elements/safe_deal/SafeDealModal";
import {AuthModal} from "@src/components/header/auth_modal/AuthModal";
import {CustomHead} from "@src/components/head/CustomHead";
import {CustomCircularProgress} from "@src/components/elements/custom_circular_progress/CustomCircularProgress";
import {useStyles} from './useStyles';

export const ShowPostContainer: FC = () => {
    const {t} = useTranslation('post');
    const {setErrorMsg} = useContext(ErrorCtx);

    const {url} = useRouter().query;
    const postUrl = url as string;
    const [postId] = postUrl.split('-').splice(-1);

    const initValues = {id: null, name: ''};
    const initialPostData = {
        id: null,
        title: '',
        price: '',
        currency: initValues,
        condition: initValues,
        created_at: null,
        expiration_at: null,
        number_of_views: null,
        sub_category_id: null,
        favorite: false,
        creator: false,
        status: '',
        subscribed: null,
        safe_deal: null,
        params: null,
        author: {
            id: null,
            name: '',
            surname: '',
            phone: '',
            created_at: null,
            avatar: '',
            available_days: '',
            rating: 0
        },
        observer: {
            number_of_views: 0,
            number_of_favorites: 0
        },
        images: [],
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
    };

    const [isFetch, setIsFetch] = useState(false);
    const [postData, setPostData] = useState(initialPostData);
    const {auth: {isAuth}, setAuthModalOpen} = useContext(AuthCtx);

    const {
        modalOpen: safeDealOpen,
        handleModalOpen: handleOpenSafeDeal,
        handleModalClose: handleCloseSafeDeal
    } = useModal();

    const handleSafeDeal = () => {
        if (isAuth) {
            handleOpenSafeDeal();
        } else {
            setAuthModalOpen(true);
        }
    };

    const setFetchedPostData = async () => {
        try {
            setIsFetch(true);
            const {
                title,
                currency,
                condition,
                images,
                description,
                region,
                city,
                district,
                available_days,
                ...otherData
            } = await userAPI.getPostById({id: postId});

            if (available_days) {
                otherData.available_days = available_days.map(day => {
                    day.name = t(`common:${day.name}`);
                    return day;
                });
            }

            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setPostData({
                    title,
                    images,
                    description,
                    currency: currency ?? initValues,
                    condition: condition ?? initValues,
                    region: region ?? initValues,
                    city: city ?? initValues,
                    district: district ?? initValues,
                    ...otherData
                });
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setErrorMsg(e.message);
            });
        }
    };

    const isMdDown = useMediaQuery(useTheme().breakpoints.down('md'));

    useEffect(() => {
        setFetchedPostData();
    }, []);

    const classes = useStyles();
    return (
        <>
            <CustomHead title={postData.title} description={postData.description}/>
            <Hidden mdDown>
                <Header/>
            </Hidden>
            <Container
                maxWidth="xl"
                className={classes.root}
                disableGutters={isMdDown}
                style={{paddingTop: `${isMdDown ? 0 : '48px'}`, position: 'relative'}}
            >
                <Grid container spacing={isMdDown ? 0 : 2}>
                    {isFetch
                        ? <CustomCircularProgress/>
                        : <>
                            <Grid item xs={12} lg={9}>
                                <PostContent
                                    post={postData}
                                    handleSafeDeal={handleSafeDeal}
                                    setFetchedPostData={setFetchedPostData}
                                />
                            </Grid>
                            <Hidden mdDown>
                                <Grid item lg={3} xs={12}>
                                    <OwnerAuctionInfo
                                        post={postData}
                                        handleSafeDeal={handleSafeDeal}
                                        setFetchedPostData={setFetchedPostData}
                                    />
                                </Grid>
                            </Hidden>
                        </>}
                </Grid>
            </Container>
            <SafeDealModal
                post={postData}
                open={safeDealOpen}
                onClose={handleCloseSafeDeal}
                handleRefresh={setFetchedPostData}
            />
            <ErrorModal/>
            <AuthModal/>
            <Hidden mdDown>
                <Footer/>
            </Hidden>
        </>
    );
};
