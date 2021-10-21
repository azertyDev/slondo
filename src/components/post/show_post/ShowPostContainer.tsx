import {FC, useContext, useState} from 'react';
import {userAPI} from '@src/api/api';
import {useBetsData, useModal} from "@src/hooks";
import {useTranslation} from 'next-i18next';
import {unstable_batchedUpdates} from "react-dom";
import {Container, Grid, Hidden, useMediaQuery, useTheme} from '@material-ui/core';
import {PostContent} from '@src/components/post/show_post/post_content/PostContent';
import {Header} from '@src/components/header/Header';
import {ErrorModal} from '@src/components/error_modal/ErrorModal';
import {OwnerAuctionInfo} from '@src/components/post/show_post/owner_auction_info/OwnerAuctionInfo';
import {Footer} from '@src/components/footer/Footer';
import {AuthCtx, CategoriesCtx, ErrorCtx} from "@src/context";
import {SafeDealModal} from "@src/components/elements/safe_deal/SafeDealModal";
import {AuthModal} from "@src/components/header/auth_modal/AuthModal";
import {CustomHead} from "@src/components/head/CustomHead";
import {CustomCircularProgress} from "@src/components/elements/custom_circular_progress/CustomCircularProgress";
import {ChatContainer} from "@src/components/elements/chat_component/ChatContainer";
import {ResponsiveModal} from "@src/components/elements/responsive_modal/ResponsiveModal";
import {categoriesNormalize} from "@src/helpers";
import ErrorPage from "@root/pages/_error";
import {useStyles} from './useStyles';

type ShowPostProps = {
    initPostData,
    statusCode: number,
    siteCategories
}

export const ShowPostContainer: FC<ShowPostProps> = (props) => {
    const {
        initPostData,
        statusCode,
        siteCategories
    } = props;

    const {t} = useTranslation('post');
    const {setErrorMsg} = useContext(ErrorCtx);
    const [isFetch, setIsFetch] = useState(false);
    const {auth: {isAuth}, setAuthModalOpen} = useContext(AuthCtx);
    const isMdDown = useMediaQuery(useTheme().breakpoints.down('md'));

    const categories = categoriesNormalize(siteCategories);

    if (initPostData.available_days) {
        initPostData.available_days = initPostData.available_days.map(day => {
            day.name = t(`common:${day.name}`);
            return day;
        });
    }

    const [postData, setPostData] = useState(initPostData);

    const auctionInfo = useBetsData({
        auction_id: postData?.auction?.id,
        page: 1,
        itemsPerPage: 5
    });

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

    const {
        modalOpen: chatOpen,
        handleModalClose: handleChatClose,
        handleModalOpen: handleChatOpen
    } = useModal();

    const handleOpenChat = () => {
        isAuth ? handleChatOpen() : setAuthModalOpen(true);
    };

    const setFetchedPostData = async () => {
        try {
            setIsFetch(true);
            const initValues = {id: null, name: ''};

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
            } = await userAPI.getPostById(initPostData.id);

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

    const classes = useStyles();
    return (
        statusCode !== 200
            ? <ErrorPage statusCode={statusCode}/>
            : <>
                <CustomHead
                    title={postData.title}
                    description={postData.description}
                />
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
                                    <CategoriesCtx.Provider value={categories}>
                                        <PostContent
                                            post={postData}
                                            auctionInfo={auctionInfo}
                                            handleChatOpen={handleOpenChat}
                                            handleSafeDeal={handleSafeDeal}
                                            setFetchedPostData={setFetchedPostData}
                                        />
                                    </CategoriesCtx.Provider>
                                </Grid>
                                <Hidden mdDown>
                                    <Grid item lg={3} xs={12}>
                                        <OwnerAuctionInfo
                                            post={postData}
                                            auctionInfo={auctionInfo}
                                            handleChatOpen={handleOpenChat}
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
                <ResponsiveModal
                    maxWidth='md'
                    openDialog={chatOpen}
                    handleCloseDialog={handleChatClose}
                >
                    <ChatContainer
                        hideContacts
                        initContactId={postData.author.id}
                        handleChatClose={handleChatClose}
                    />
                </ResponsiveModal>
                <ErrorModal/>
                <AuthModal/>
                <Hidden mdDown>
                    <Footer/>
                </Hidden>
            </>
    );
};
