import React, {FC, useEffect, useState} from 'react';
import {ITEMS_PER_PAGE} from '@src/constants';
import {userAPI} from '@src/api/api';
import {CardData, InnerCardData} from '@root/interfaces/CardData';
import {SimilarPosts} from './SimilarPosts';
import {useRouter} from 'next/router';


const initCard: InnerCardData = {
    id: null,
    title: '',
    safe_deal: null,
    price: null,
    currency: {
        id: null,
        name: ''
    },
    creator: {
        id: null,
        name: '',
        surname: '',
        phone: '',
        avatar: '',
        created_at: '',
        available_days: ''
    },
    created_at: '',
    image: '',
    region: null,
    city: null,
    delivery: null,
    exchange: null,
    ads_type: ''
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
        total: null
    }
};

export const SimilarPostsContainer: FC<{ ancmntType: string }> = (props) => {
    const {ancmntType} = props;
    const { locale} = useRouter();

    const [currentPage, setCurrentPage] = useState(1);
    const [cardData, setCardData] = useState(initialCardData);

    const type = ancmntType === 'post' ? 'auc' : 'exauc';

    const setFetchedCardData = async () => {
        try {
            setCardData({
                ...cardData,
                isFetch: true
            });

            const newData = await userAPI.getCards(
                ITEMS_PER_PAGE,
                currentPage,
                type,
                locale
            );

            setCardData({
                ...cardData,
                isFetch: false,
                data: {
                    cards: newData.data,
                    total: newData.total
                }
            });
        } catch (e) {
            setCardData({
                ...cardData,
                error: e.message
            });
        }
    };

    const handleShowMore = () => {
        setCurrentPage(currentPage + 1);
    };

    useEffect(() => {
        setFetchedCardData();
    }, [currentPage]);

    return (
        <SimilarPosts
            isFetch={cardData.isFetch}
            list={cardData.data.cards}
            handleShowMore={handleShowMore}
        />
    );
};
