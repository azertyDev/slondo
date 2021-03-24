import React, {FC, useEffect, useState} from 'react';
import {TabsContent} from '@src/components/cabinet/cabinet_pages/TabsContent';
import {MyAuctions} from '@src/components/cabinet/cabinet_pages/my_auctions/MyAuctions';
import {withAuthRedirect} from '@src/hoc/withAuthRedirect';
import {userAPI} from '@src/api/api';
import {useDispatch} from 'react-redux';
import {setErrorMsgAction} from '@root/src/redux/slices/errorSlice';
import {i18n} from '@root/i18n';


export const MyAuctionsContainer: FC = () => {
    const lang = i18n.language;
    const dispatch = useDispatch();

    const [openModal, setOpenModal] = useState(false);
    const [modalState, setModalState] = useState('');

    const handleModalOpen = (value: string) => {
        setOpenModal(true);
        setModalState(value);
    };
    const handleModalClose = () => {
        setOpenModal(false);
    };

    const initialState = {
        isFetch: false,
        createdAuctions: {
            total: 0,
            data: []
        },
        participatingAuctions: {
            total: 0,
            data: []
        }
    };
    const [auctionData, setAuctionData] = useState(initialState);

    const fetchAuctionData = async (type) => {
        try {
            const { createdAuctions, participatingAuctions } = auctionData;
            const isCreatedAuction = type === 'auc';

            auctionData.isFetch = true;
            setAuctionData({ ...auctionData });

            const createdAuctionsData = await userAPI.getMyPosts(lang, type);
            const participatingData = await userAPI.getAuctionSubs(lang);

            auctionData.isFetch = true;

            if (isCreatedAuction) {
                createdAuctions.data = createdAuctionsData.data;
                createdAuctions.total = createdAuctionsData.total;
            } else {
                participatingAuctions.data = participatingData.data;
                participatingAuctions.total = participatingData.total;
            }

            setAuctionData({ ...auctionData });
        } catch (e) {
            dispatch(setErrorMsgAction(e));
        }
    };

    const tabsData = [
        {
            id: 0,
            title: 'Созданные',
            total: auctionData.createdAuctions.total,
            component:
                <MyAuctions
                    list={auctionData.createdAuctions.data}
                    isFetch={auctionData.isFetch}
                    handleClose={handleModalClose}
                    handleModalOpen={handleModalOpen}
                    openModal={openModal}
                    content={modalState}
                    setOpenModal={setOpenModal}
                />
        },
        {
            id: 1,
            title: 'Участие',
            total: auctionData.participatingAuctions.total,
            component:
                <MyAuctions
                    list={auctionData.participatingAuctions.data}
                    isFetch={auctionData.isFetch}
                    handleClose={handleModalClose}
                    handleModalOpen={handleModalOpen}
                    openModal={openModal}
                    content={modalState}
                    setOpenModal={setOpenModal}
                />
        }
    ];

    useEffect(() => {
        fetchAuctionData('auc');
    }, []);

    const title = 'Мои аукционы';

    return (
        <TabsContent title={title} tabsData={tabsData} headerTitle={title} />
    );
};

export default withAuthRedirect(MyAuctionsContainer);
