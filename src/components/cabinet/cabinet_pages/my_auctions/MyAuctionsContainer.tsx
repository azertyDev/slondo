import React, {FC, useEffect, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {MyAuctions} from '@src/components/cabinet/cabinet_pages/my_auctions/MyAuctions';
import {withAuthRedirect} from '@src/hoc/withAuthRedirect';
import {userAPI} from '@src/api/api';
import {useRouter} from 'next/router';
import {useDispatch} from 'react-redux';
import {setErrorMsgAction} from '@root/src/redux/slices/errorSlice';
import {useTranslation} from 'next-i18next';
import {InitialCabinetCardState, TabsDataType} from '@root/interfaces/Cabinet.js';
import {IconButton, List, ListItem, ListItemText, Typography} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useStyles} from './useStyles';


export const MyAuctionsContainer: FC = () => {
    const dispatch = useDispatch();
    const { locale } = useRouter();
    const { t } = useTranslation('cabinet');
    const classes = useStyles();

    const initialState: InitialCabinetCardState = {
        isFetch: false,
        myPosts: {
            total: 0,
            data: []
        }
    };
    const [auctionData, setAuctionData] = useState(initialState);
    const [participatingData, setParticipatingData] = useState(initialState);
    const [openModal, setOpenModal] = useState(false);
    const [tabIndex, setTabIndex] = useState(0);
    const [modalContentIndex, setModalContentIndex] = useState(1);
    const [postId, setPostId] = useState(null);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };
    const handleOpenModal = (postId) => () => {
        setOpenModal(true);
        postId && setPostId(postId);
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
            } else {
                setParticipatingData({ ...auctionData, isFetch: true });
                const { data, total, message } = await userAPI.getAuctionSubs(locale);
                !message && setParticipatingData({ myPosts: { data, total }, isFetch: true });
            }
        } catch (e) {
            dispatch(setErrorMsgAction(e));
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
                            onClick={handleDeactivate(postId)}
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
        }
    };
    const ModalContent = () => (
        <>
            {modalContentIndex === 1
                ? <Typography className="title" variant="h6">
                    Объявление № {postId}
                </Typography>
                : modalContentIndex === 5
                    ? null
                    : <IconButton
                        className='prev-btn'
                        aria-label="back"
                        size="medium"
                        onClick={handlePrevMenu}
                    >
                        <ArrowBackIcon fontSize="inherit" />
                    </IconButton>
            }
            {getModalContent()}
        </>
    );

    useEffect(() => {
        fetchAuctionData('auc');
        fetchAuctionData();
    }, []);

    const tabsData: TabsDataType = [
        {
            id: 0,
            title: t('createdAuc'),
            total: auctionData.myPosts.total,
            component:
                <MyAuctions
                    list={auctionData.myPosts.data}
                    isFetch={auctionData.isFetch}
                    ModalContent={ModalContent}
                    handleClose={handleModalClose}
                    handleModalOpen={handleOpenModal}
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    handleDeactivate={handleDeactivate}
                    handleAcceptVictory={handleAcceptVictory}
                />
        },
        {
            id: 1,
            title: t('participatingAuc'),
            total: participatingData.myPosts.total,
            component:
                <MyAuctions
                    list={participatingData.myPosts.data}
                    isFetch={participatingData.isFetch}
                    ModalContent={ModalContent}
                    handleClose={handleModalClose}
                    handleModalOpen={handleOpenModal}
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    handleAcceptVictory={handleAcceptVictory}
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
