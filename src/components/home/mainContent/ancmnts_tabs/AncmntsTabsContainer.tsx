import React, { FC, useEffect, useState } from 'react';
import { WithT } from 'i18next';
import { AncmntsTabs } from './AncmntsTabs';
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
    city: {
        id: null,
        name: '',
    },
    region: {
        id: null,
        name: '',
    },
    ads_type: {
        id: null,
        name: '',
        mark: '',
    },
    delivery: null,
    exchange: null,
    created_at: '',
    location: '',
    images: [
        {
            url: {
                default: '',
            },
        },
    ],
};

const initCards = [];

for (let i = 1; i <= 16; i++) {
    initCards.push(cardData);
}

const initialCardData: CardData = {
    isFetch: false,
    isShowMoreFetch: false,
    error: null,
    data: {
        cards: initCards,
        total: null,
    },
};

const fetchCardData = async (itemsPerPage, page, type, lang) => {
    return await userAPI.getCardData(itemsPerPage, page, type, lang);
};

export const AncmntsTabsContainer: FC<WithT> = (props) => {
    const lang = i18n.language;

    const [tabValue, setTabValue] = useState(0);
    const [ancmntCurrentPage, setAncmntCurrentPage] = useState(1);
    const [auctionCurrentPage, setAuctionCurrentPage] = useState(1);
    const [ancmntCardData, setAncmntCardData] = useState(initialCardData);
    const [auctionCardData, setAuctionCardData] = useState(initialCardData);

    const setCardData = async (state, setState, currentPage, type, isShowMore = false) => {
        try {
            setState({
                ...state,
                isFetch: !isShowMore,
                isShowMoreFetch: true,
            });

            const newData = await fetchCardData(
                ITEMS_PER_PAGE,
                currentPage,
                type,
                lang
            );

            setState({
                ...state,
                isFetch: false,
                isShowMoreFetch: false,
                data: {
                    cards: isShowMore ? [...state.data.cards, ...newData.data] : newData.data,
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
            const nextAncmntPage = ancmntCurrentPage + 1;
            setAncmntCurrentPage(nextAncmntPage);
            setCardData(ancmntCardData, setAncmntCardData, nextAncmntPage, 'ad', true);
        } else {
            const nextAuctionPage = auctionCurrentPage + 1;
            setAuctionCurrentPage(nextAuctionPage);
            setCardData(auctionCardData, setAuctionCardData, nextAuctionPage, 'lot', true);
        }
    };

    useEffect(() => {
        setCardData(ancmntCardData, setAncmntCardData, ancmntCurrentPage, 'ad');
        setCardData(auctionCardData, setAuctionCardData, auctionCurrentPage, 'lot');
    }, []);

    return (
        <AncmntsTabs
            t={props.t}
            tabValue={tabValue}
            ancmntCardData={ancmntCardData}
            auctionCardData={auctionCardData}
            handleTabChange={handleTabChange}
            handleShowMore={handleShowMore}
        />
    );
};
