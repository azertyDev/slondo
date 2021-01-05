import React, { FC, useEffect, useState } from 'react';
import { WithT } from 'i18next';
import { MainContent } from './MainContent';
import { ITEMS_PER_PAGE } from '@src/constants';
import { userAPI } from '@src/api/api';
import { i18n } from '@root/i18n';
import { CardData } from '@root/interfaces/CardData';

const cardData = {
    id: null,
    title: '',
    cardType: '',
    safe_deal: null,
    price: null,
    currency: {
        id: null,
        name: '',
    },
    created_at: '',
    location: '',
    images: [
        {
            url: '',
        },
    ],
};

const initCards = [];

for (let i = 1; i <= 16; i++) {
    initCards.push(cardData);
}

const initialCardData: CardData = {
    isFetch: false,
    error: null,
    data: {
        cards: initCards,
        total: null,
    },
};

const fetchCardData = async (itemsPerPage, page, type, lang) => {
    return await userAPI.getCardData(itemsPerPage, page, type, lang);
};

export const MainContentContainer: FC<WithT> = (props) => {
    const { t } = props;
    const lang = i18n.language;

    const [tabValue, setTabValue] = useState(0);
    const [adCurrentPage, setAdCurrentPage] = useState(1);
    const [lotCurrentPage, setLotCurrentPage] = useState(1);
    const [adCardData, setAdCardData] = useState(initialCardData);
    const [lotCardData, setLotCardData] = useState(initialCardData);
    const pageCount =
        Math.ceil(
            (tabValue === 0 ? adCardData.data.total : lotCardData.data.total) /
                ITEMS_PER_PAGE,
        ) || 1;

    const currentPage = tabValue === 0 ? adCurrentPage : lotCurrentPage;

    const setCardData = async (state, setState, currentPage, type) => {
        try {
            setState({
                ...state,
                isFetch: true,
            });

            const newData = await fetchCardData(
                ITEMS_PER_PAGE,
                currentPage,
                type,
                lang,
            );

            setState({
                ...state,
                isFetch: false,
                data: {
                    cards: newData.data,
                    total: newData.total,
                },
            });
        } catch (e) {
            setState({
                ...state,
                error: e.message,
            });
        }
    };

    const handleTabChange = (_, newValue) => {
        setTabValue(newValue);
    };

    const handleShowMore = () => {
        if (tabValue === 0) {
            setAdCurrentPage(adCurrentPage + 1)
        } else {
            setLotCurrentPage(lotCurrentPage + 1)
        }
    };

    const handlePaginationPage = (_, pageNumber) => {
        tabValue === 0
            ? setAdCurrentPage(pageNumber)
            : setLotCurrentPage(pageNumber);
    };

    useEffect(() => {
        setCardData(adCardData, setAdCardData, adCurrentPage, 'ad');
    }, [adCurrentPage]);

    useEffect(() => {
        setCardData(lotCardData, setLotCardData, lotCurrentPage, 'lot');
    }, [lotCurrentPage]);

    return (
        <MainContent
            t={t}
            tabValue={tabValue}
            adCardData={adCardData}
            lotCardData={lotCardData}
            pageCount={pageCount}
            currentPage={currentPage}
            handlePaginationPage={handlePaginationPage}
            handleTabChange={handleTabChange}
            handleShowMore={handleShowMore}
        />
    );
};
