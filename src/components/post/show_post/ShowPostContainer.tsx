import {FC, useContext, useEffect, useState} from 'react';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {useTranslation} from 'next-i18next';
import {userAPI} from '@src/api/api';
import {Container, Grid, Hidden, useMediaQuery, useTheme} from '@material-ui/core';
import {PostContent} from '@src/components/post/show_post/post_content/PostContent';
import {Banner} from '@src/components/elements/banner/Banner';
import {Header} from '@src/components/header/Header';
import {ErrorModal} from '@src/components/error_modal/ErrorModal';
import {OwnerAuctionInfo} from '@src/components/post/show_post/owner_auction_info/OwnerAuctionInfo';
import {Footer} from '@src/components/footer/Footer';
import {ErrorCtx} from "@src/context";
import {useStyles} from './useStyles';


export const ShowPostContainer: FC = () => {
    const {t} = useTranslation('post');
    const {setErrorMsg} = useContext(ErrorCtx);

    const {url} = useRouter().query;
    const postUrl = url as string;
    const [postId] = postUrl.split('-').splice(-1);

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
                created_at: '',
                avatar: '',
                available_days: ''
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
        }
    };

    const [postData, setPostData] = useState(initialPostData);
    const {data} = postData;

    const setFetchedPostData = async () => {
        try {
            setPostData({...postData, isFetch: true});
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
            setErrorMsg(e.message);
        }
    };

    const isMdDown = useMediaQuery(useTheme().breakpoints.down('md'));

    useEffect(() => {
        setFetchedPostData();
    }, []);

    const classes = useStyles();
    return (
        <>
            <Head>
                <meta name="robots" content="noindex"/>
                <meta property="og:site_name" content="Slondo"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content={data.title} key="ogtitle"/>
                <title>{data.title}</title>
            </Head>
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
                    <Grid item xs={12} lg={9}>
                        <PostContent
                            t={t}
                            data={data}
                            setFetchedPostData={setFetchedPostData}
                        />
                    </Grid>
                    <Hidden mdDown>
                        <Grid item lg={3} xs={12}>
                            <OwnerAuctionInfo
                                t={t}
                                data={data}
                                setFetchedPostData={setFetchedPostData}
                            />
                            <div className={classes.adBanner}>
                                <Banner height="424px" />
                            </div>
                        </Grid>
                    </Hidden>
                </Grid>
            </Container>
            <Footer />
            <ErrorModal />
        </>
    );
};
