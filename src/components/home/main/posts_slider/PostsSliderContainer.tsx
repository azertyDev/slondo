import React, {FC, useEffect, useState} from 'react';
import {ITEMS_PER_PAGE} from '@src/constants';
import {userAPI} from '@src/api/api';
import {CardData, InnerCardData} from '@root/interfaces/CardData';
import {PostsSlider} from './PostsSlider';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@src/redux/rootReducer';


const initCard: InnerCardData = {
    id: null,
    title: '',
    safe_deal: null,
    price: null,
    sub_category_id: null,
    currency: {
        id: null,
        name: ''
    },
    created_at: '',
    region: {
        id: null,
        name: ''
    },
    city: {
        id: null,
        name: ''
    },
    image: '',
    creator: false,
    author: {
        id: null,
        name: '',
        surname: '',
        phone: '',
        avatar: '',
        created_at: '',
        available_days: ''
    },
    category: {
        id: null,
        name: '',
        mark: ''
    },
    delivery: null,
    exchange: null,
    ads_type: '',
    favorite: false
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
    const {isAuth} = useSelector((store: RootState) => store.user);

    const [currentPage, setCurrentPage] = useState(1);
    const [cardData, setCardData] = useState(initCardData);

    const setFetchedCardData = async () => {
        try {
            setCardData({
                ...cardData,
                isFetch: true
            });

            const {data, total} = await userAPI.getCards(ITEMS_PER_PAGE, currentPage, 'auc');

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
                error: e.message
            });
        }
    };

    useEffect(() => {
        setFetchedCardData();
    }, [currentPage, isAuth]);

    return (
        <PostsSlider
            title={'Телефоны и планшеты'}
            cardData={cardData}
        />
    );
};
