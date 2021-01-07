import React, { FC, useEffect, useState } from 'react';
import { WithT } from 'i18next';
import { ITEMS_PER_PAGE } from '@src/constants';
import { userAPI } from '@src/api/api';
import { i18n } from '@root/i18n';
import { CardData, InnerCardData } from '@root/interfaces/CardData';
import { AncmntsSlider } from './AncmntsSlider';

const initCard: InnerCardData = {
    id: null,
    title: '',
    safe_deal: null,
    price: null,
    currency: {
        id: null,
        name: '',
    },
    created_at: '',
    region: {
        id: null,
        name: '',
    },
    city: {
        id: null,
        name: '',
    },
    district: {
        id: null,
        name: '',
    },
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

export const AncmntsSliderContainer: FC<WithT> = (props) => {
    const { t } = props;
    const lang = i18n.language;

    const [currentPage, setCurrentPage] = useState(1);
    const [cardData, setCardData] = useState(initialCardData);

    const type = 'lot';

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
        <AncmntsSlider
            t={t}
            title={'Телефоны и планшеты'}
            list={cardData.data.cards}
        />
    );
};
