import {FC, useContext, useEffect, useState} from 'react';
import {ITEMS_PER_PAGE} from '@src/constants';
import {userAPI} from '@src/api/api';
import {CardData} from '@root/interfaces/CardData';
import {PostsSlider} from './PostsSlider';
import {initCardData} from '@src/common_data/common';
import {useTranslation} from 'next-i18next';
import {AuthCtx} from "@src/context/AuthCtx";
import {ErrorCtx} from "@src/context";

export const initCards = Array.from({length: ITEMS_PER_PAGE}).map(() => initCardData);

const initData: CardData = {
    isFetch: false,
    error: null,
    data: {
        cards: initCards,
        total: null
    }
};

export const PostsSliderContainer: FC = () => {
    const {t} = useTranslation('main');
    const {auth: {isAuth}} = useContext(AuthCtx);
    const {setErrorMsg} = useContext(ErrorCtx);

    const [currentPage, setCurrentPage] = useState(1);
    const [popularPosts, setPopularPosts] = useState(initData);

    const setFetchedCardData = async () => {
        try {
            const params = {
                itemsPerPage: ITEMS_PER_PAGE,
                page: currentPage
            };
            setPopularPosts({
                ...popularPosts,
                isFetch: true
            });

            const {data, total} = await userAPI.getPopular(params);

            setPopularPosts({
                ...popularPosts,
                isFetch: false,
                data: {
                    cards: data,
                    total: total
                }
            });
        } catch (e) {
            setErrorMsg(e.message);
            setPopularPosts({
                ...popularPosts,
                error: e.message
            });
        }
    };

    useEffect(() => {
        setFetchedCardData();
    }, [currentPage, isAuth]);

    return (
        <PostsSlider
            title={t('popularPosts')}
            cardData={popularPosts}
        />
    );
};
