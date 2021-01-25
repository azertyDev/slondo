import React, {FC, useEffect, useState} from 'react';
import {ITEMS_PER_PAGE} from '@src/constants';
import {userAPI} from '@src/api/api';
import {i18n} from '@root/i18n';
import {CardData} from '@root/interfaces/CardData';
import {PostsSlider} from './PostsSlider';
import {setErrorMsgAction} from "@src/redux/slices/errorSlice";
import {useDispatch} from "react-redux";


const initCard = {
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
    images: [{
        url: {
            default: ''
        }
    }],
    delivery: null,
    exchange: null,
    ads_type: 'anc'
};

export const initCards = Array.from({length: ITEMS_PER_PAGE}).map(() => initCard);

const initCardData: CardData = {
    isFetch: false,
    error: null,
    data: {
        cards: initCards,
        total: null
    }
};

export const PostsSliderContainer: FC = () => {
    const dispatch = useDispatch();

    const lang = i18n.language;

    const [currentPage, setCurrentPage] = useState(1);
    const [cardData, setCardData] = useState(initCardData);

    const setFetchedCardData = async () => {
        try {
            setCardData({
                ...cardData,
                isFetch: true,
            });

            const {data, total} = await userAPI.getCards(
                ITEMS_PER_PAGE,
                currentPage,
                'auc',
                lang
            );

            setCardData({
                ...cardData,
                isFetch: false,
                data: {
                    cards: data,
                    total: total
                }
            });
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
            setCardData({
                ...cardData,
                error: e.message,
            });
        }
    };

    useEffect(() => {
        setFetchedCardData();
    }, [currentPage, lang]);

    return (
        <PostsSlider
            title={'Телефоны и планшеты'}
            cardData={cardData}
        />
    );
};
