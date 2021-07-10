import {FC, useEffect, useState} from 'react';
import {ITEMS_PER_PAGE} from '@src/constants';
import {userAPI} from '@src/api/api';
import {CardData, CardDataType} from '@root/interfaces/CardData';
import {SimilarPosts} from './SimilarPosts';
import {initCardData} from '@src/common_data/common';

const initCards: CardDataType[] = [];

for (let i = 1; i <= 16; i++) {
    initCards.push(initCardData);
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

    const [currentPage, setCurrentPage] = useState(1);
    const [cardData, setCardData] = useState(initialCardData);

    const type = ancmntType === 'post' ? 'auc' : 'exauc';

    const setFetchedCardData = async () => {
        try {
            setCardData({
                ...cardData,
                isFetch: true
            });

            const params = {
                itemsPerPage: ITEMS_PER_PAGE,
                page: currentPage,
                type
            };

            const newData = await userAPI.getCards(params);

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
