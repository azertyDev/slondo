import React, { FC, useEffect, useState } from 'react';
import { WithT } from 'i18next';
import { ITEMS_PER_PAGE } from '@src/constants';
import { userAPI } from '@src/api/api';
import { i18n } from '@root/i18n';
import { CardData, InnerCardData } from '@root/interfaces/CardData';
import { PopularAncmntsSlider } from './PopularAncmntsSlider';

const initCard: InnerCardData = {
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
            url: {
                default: '',
            },
        },
    ],
    delivery: null,
    exchange: null,
    ads_type: {
        id: null,
        name: '',
        mark: '',
    },
};

const initCards: InnerCardData[] = [];

for (let i = 1; i <= 16; i++) {
    initCards.push(initCard);
}

const initialCardData: CardData = {
    isFetch: false,
    error: null,
    data: {
        cards: initCards,
        total: null,
    },
};

export const PopularAncmntsSliderContainer: FC<
    WithT & { ancmntType: string }
> = (props) => {
    const { t, ancmntType } = props;
    const lang = i18n.language;

    const [currentPage, setCurrentPage] = useState(1);
    const [cardData, setCardData] = useState(initialCardData);

    const type = 'ad';

    const setFetchedCardData = async () => {
        try {
            setCardData({
                ...cardData,
                isFetch: true,
            });

            const newData = await userAPI.getCardData(
                ITEMS_PER_PAGE,
                currentPage,
                type,
                lang,
            );

            setCardData({
                ...cardData,
                isFetch: false,
                data: {
                    cards: newData.data,
                    total: newData.total,
                },
            });
        } catch (e) {
            setCardData({
                ...cardData,
                error: e.message,
            });
        }
    };

    useEffect(() => {
        setFetchedCardData();
    }, [currentPage]);

    return (
        <PopularAncmntsSlider
            t={t}
            list={cardData.data.cards}
        />
    );
};
