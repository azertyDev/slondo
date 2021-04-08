import React, {FC, useEffect, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {MyAuctions} from '@src/components/cabinet/cabinet_pages/my_auctions/MyAuctions';
import {withAuthRedirect} from '@src/hoc/withAuthRedirect';
import {userAPI} from '@src/api/api';
import {useRouter} from 'next/router';
import {useDispatch} from 'react-redux';
import {setErrorMsgAction} from '@root/src/redux/slices/errorSlice';
import {useTranslation} from 'next-i18next';
import {Box, IconButton, List, ListItem, ListItemText, Typography} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {InitialCabinetCardState, InitValuesType, OffersStateType, TabsDataType} from '@root/interfaces/Cabinet.js';
import {UserInfo} from '@root/interfaces/Auth';
import {useStyles} from './useStyles';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {CloseIcon, DoneAllIcon} from '@src/components/elements/icons';
import {CabinetCard} from '@src/components/cabinet/cabinet_card/CabinetCard';

export const MyAuctionsContainer: FC = () => {
    const dispatch = useDispatch();
    const { locale } = useRouter();
    const { t } = useTranslation('cabinet');
    const classes = useStyles();

    const initialValues: InitValuesType = { id: null, name: '' };
    const initialUserInfo: UserInfo = {
        id: null,
        name: '',
        surname: '',
        phone: '',
        avatar: '',
        created_at: '',
        available_days: ''
    };
    const initialState: InitialCabinetCardState = {
        isFetch: false,
        myPosts: {
            total: 0,
            data: [
                {
                    ads_type: '',
                    adsable: {
                        id: null,
                        sub_category: initialValues,
                        type: initialValues
                    },
                    auction: {
                        id: null,
                        winner: initialUserInfo,
                        number_of_bets: null,
                        is_accepted: null,
                        winner_id: null,
                        number_of_offers: null,
                        offer: null
                    },
                    author: initialUserInfo,
                    available_days: '',
                    category: initialValues,
                    city: initialValues,
                    created_at: '',
                    creator: false,
                    currency: initialValues,
                    delivery: null,
                    description: '',
                    district: initialValues,
                    exchange: null,
                    expiration_at: '',
                    favorite: false,
                    id: null,
                    image: '',
                    number_of_views: null,
                    price: null,
                    region: initialValues,
                    safe_deal: null,
                    status: '',
                    subscribed: false,
                    title: '',
                    user_id: null
                }
            ]
        }
    };
    const initialOffersState: OffersStateType = {
        isFetch: false,
        total: null,
        data: [{
            id: null,
            auction_id: null,
            price: null,
            offer_price_status: false,
            created_at: '',
            user: initialUserInfo
        }]
    };

    const [auctionData, setAuctionData] = useState(initialState);
    const [participatingData, setParticipatingData] = useState(initialState);
    const [offersData, setOffersData] = useState(initialOffersState);
    const [auctionId, setAuctionId] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [tabIndex, setTabIndex] = useState(0);
    const [modalContentIndex, setModalContentIndex] = useState(1);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };
    const handleOpenModal = (auction_id) => () => {
        setOpenModal(true);
        auction_id && setAuctionId(auction_id);
        setModalContentIndex(1);
    };
    const handleModalClose = () => {
        setOpenModal(false);
    };
    const handlePrevMenu = () => {
        const backValue = modalContentIndex === 5 ? 3 : 1;
        setModalContentIndex(modalContentIndex - backValue);
    };
    const handleModalContentIndex = (index) => () => {
        setModalContentIndex(index);
    };
    const handleDeactivate = (ads_id?: number) => async () => {
        try {
            await userAPI.deactivateById(ads_id);
            setOpenModal(false);
            if (tabIndex === 0) {
                await fetchAuctionData('auc');
            } else {
                await fetchAuctionData();
            }
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const handleAcceptVictory = (auction_id, is_accepted) => async () => {
        try {
            await userAPI.acceptVictory(auction_id, is_accepted);
            if (tabIndex === 0) {
                await fetchAuctionData('auc');
            } else {
                await fetchAuctionData();
            }
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const fetchAuctionData = async (type?: string) => {
        try {
            const isCreatedAuction = type === 'auc';
            if (isCreatedAuction) {
                setAuctionData({ ...auctionData, isFetch: true });
                const { data, total } = await userAPI.getMyPosts({ type, locale });
                setAuctionData({ myPosts: { data, total }, isFetch: true });
                console.log(data, total);
            } else {
                setParticipatingData({ ...auctionData, isFetch: true });
                const { data, total, message } = await userAPI.getAuctionSubs(locale);
                !message && setParticipatingData({ myPosts: { data, total }, isFetch: true });
            }
        } catch (e) {
            dispatch(setErrorMsgAction(e));
        }
    };
    const fetchAllOffers = (auction_id: number) => async () => {
        try {
            auction_id && setAuctionId(auction_id);
            setOpenModal(true);
            setModalContentIndex(10);
            setOffersData({ ...offersData, isFetch: true });
            const { data, total } = await userAPI.getAllOffersById(auction_id);
            setOffersData({ ...offersData, data, total, isFetch: false });
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };
    const acceptOfferThePrice = (offer_id: number, is_accepted: boolean) => async () => {
        try {
            setOpenModal(false);
            await userAPI.acceptOfferThePrice(offer_id, is_accepted);
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const getModalContent = () => {
        switch (modalContentIndex) {
            case 1:
                return <>
                    <List
                        component="nav"
                        aria-label="main"
                        className={classes.settingsList}
                        disablePadding
                    >
                        <ListItem
                            button
                            onClick={handleModalContentIndex(2)}
                        >
                            <ListItemText
                                primary='Деактивировать'
                                primaryTypographyProps={{ variant: 'subtitle1' }}
                            />
                        </ListItem>
                    </List>
                </>;
            case 2:
                return <>
                    <List
                        component="nav"
                        aria-label="main"
                        className={classes.settingsList}
                        disablePadding
                    >
                        <ListItem
                            button
                            onClick={handleDeactivate(auctionId)}
                        >
                            <ListItemText
                                primary='Да'
                                primaryTypographyProps={{ variant: 'subtitle1' }}
                            />
                        </ListItem>
                        <ListItem
                            button
                            onClick={handlePrevMenu}
                        >
                            <ListItemText
                                primary='Нет'
                                primaryTypographyProps={{ variant: 'subtitle1' }}
                            />
                        </ListItem>

                    </List>
                </>;
            case 10:
                return <Box className='offers-info'>
                    <Box>
                        <Typography variant='h6'>Все предложения</Typography>
                        <Typography variant='subtitle2'>Аукцион №: {auctionId}</Typography>
                    </Box>
                    <Box width={1}>
                        {offersData.data.map(offer => {
                            return (
                                <Box px={5} py={2} display='flex' key={offer.id}>
                                    <Box>
                                        <UserInfoWithAvatar owner={offer.user} />
                                    </Box>
                                    <Box>
                                        <Typography variant='subtitle2'>
                                            {offer.created_at}
                                        </Typography>
                                        <div>
                                            <Typography variant='subtitle2'>
                                                Предложенная цена
                                            </Typography>
                                            {offer.price}
                                        </div>
                                        <div>
                                            <ButtonComponent
                                                className='accept'
                                                onClick={acceptOfferThePrice(offer.id, true)}
                                            >
                                                <DoneAllIcon />
                                                <Typography
                                                    variant="subtitle2"
                                                    color="initial"
                                                >
                                                    Принять
                                                </Typography>
                                            </ButtonComponent>
                                            <ButtonComponent
                                                className='decline'
                                                onClick={acceptOfferThePrice(offer.id, false)}
                                            >
                                                <CloseIcon />
                                                <Typography
                                                    variant="subtitle2"
                                                    color="initial"
                                                >
                                                    Отказать
                                                </Typography>
                                            </ButtonComponent>
                                        </div>
                                    </Box>
                                </Box>
                            );
                        })}
                    </Box>
                </Box>;
        }
    };
    const ModalContent = () => (
        <>
            {modalContentIndex === 1
                ? <Typography className="title" variant="h6">
                    Аукцион №: {auctionId}
                </Typography>
                : (modalContentIndex !== 10 && (
                        <IconButton
                            className='prev-btn'
                            aria-label="back"
                            size="medium"
                            onClick={handlePrevMenu}
                        >
                            <ArrowBackIcon fontSize="inherit" />
                        </IconButton>
                    )
                )}
            {getModalContent()}
        </>
    );

    useEffect(() => {
        fetchAuctionData('auc');
        fetchAuctionData();
    }, []);

    const auctionCard = (data, isFetch) => (
        <CabinetCard
            list={data}
            isFetch={isFetch}
            handleModalOpen={handleOpenModal}
            handleDeactivate={handleDeactivate}
            handleAcceptVictory={handleAcceptVictory}
            fetchAllOffers={fetchAllOffers}
            offersData={offersData}
            acceptOfferThePrice={acceptOfferThePrice}
        />
    );

    const tabsData: TabsDataType = [
        {
            id: 0,
            title: t('createdAuc'),
            total: auctionData.myPosts.total,
            component:
                <MyAuctions
                    ModalContent={ModalContent}
                    handleClose={handleModalClose}
                    openModal={openModal}
                    auctionCard={
                        auctionCard(auctionData.myPosts.data, auctionData.isFetch)
                    }
                />
        },
        {
            id: 1,
            title: t('participatingAuc'),
            total: participatingData.myPosts.total,
            component:
                <MyAuctions
                    ModalContent={ModalContent}
                    handleClose={handleModalClose}
                    openModal={openModal}
                    auctionCard={
                        auctionCard(participatingData.myPosts.data, participatingData.isFetch)
                    }
                />
        }
    ];

    const title = t('myAuctions');

    return (
        <TabsContent
            tabIndex={tabIndex}
            handleTabChange={handleTabChange}
            title={title}
            tabsData={tabsData}
            headerTitle={title}
        />
    );
};

export default withAuthRedirect(MyAuctionsContainer);
