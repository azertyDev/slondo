import {useState} from 'react';
import {myUzCardAPI} from '@src/api/api';

export const useUserPaymentCard = () => {
    type UserCardType = {
        id: number,
        cardId: number,
        cardName: string,
        owner: string,
        balance: number,
        expireDate: number,
        number: number
    }

    const initUserCard: UserCardType = {
        id: null,
        cardId: null,
        cardName: '',
        owner: '',
        balance: 0,
        expireDate: null,
        number: null
    };

    const [isFetchUserCard, setIsFetchUserCard] = useState(false);
    const [userCard, setUserCard] = useState(initUserCard);

    const fetchUserCard = async () => {
        try {
            setIsFetchUserCard(true);
            const [card] = (await myUzCardAPI.getUserCards()).cards;
            setUserCard({
                id: card.id,
                cardId: card.cardId,
                cardName: card.cardName,
                owner: card.owner,
                balance: card.balance,
                expireDate: card.expireDate,
                number: card.number
            });
            setIsFetchUserCard(false);
        } catch (e) {
            setUserCard(initUserCard);
            setIsFetchUserCard(false);
        }
    };

    const handleResetUserCard = () => {
        setUserCard(initUserCard);
    };

    return {
        userCard,
        isFetchUserCard,
        fetchUserCard,
        handleResetUserCard
    };
};