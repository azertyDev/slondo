import React, {FC, useEffect, useState} from 'react';
import {WithT} from 'i18next';
import {PostsTabs} from './PostsTabs';
import {ITEMS_PER_PAGE} from '@src/constants';
import {userAPI} from '@src/api/api';
import {CardData} from '@root/interfaces/CardData';
import {initCards} from '../posts_slider/PostsSliderContainer';
import {setErrorMsgAction} from "@src/redux/slices/errorSlice";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";


const initCardData: CardData = {
    isFetch: false,
    isShowMoreFetch: false,
    error: null,
    data: {
        cards: initCards,
        total: null,
    }
};

export const PostsTabsContainer: FC<WithT> = ({t}) => {
    const dispatch = useDispatch();

    const [tabValue, setTabValue] = useState(0);

    const [postCurrentPage, setPostCurrentPage] = useState(1);
    const [auctionCurrentPage, setAuctionCurrentPage] = useState(1);

    const [postCardData, setPostCardData] = useState(initCardData);
    const [auctionCardData, setAuctionCardData] = useState(initCardData);

    const setCardData = async (state, setState, currentPage, type, isShowMore = false) => {
        try {
            setState({
                ...state,
                isFetch: !isShowMore,
                isShowMoreFetch: true,
            });

            const newData = await userAPI.getCards(ITEMS_PER_PAGE, currentPage, type);

            setState({
                ...state,
                isFetch: false,
                isShowMoreFetch: false,
                data: {
                    cards: isShowMore ? [...state.data.cards, ...newData.data] : newData.data,
                    total: newData.total,
                }
            });
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
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
            const nextAncmntPage = postCurrentPage + 1;
            setPostCurrentPage(nextAncmntPage);
            setCardData(postCardData, setPostCardData, nextAncmntPage, 'post', true);
        } else {
            const nextAuctionPage = auctionCurrentPage + 1;
            setAuctionCurrentPage(nextAuctionPage);
            setCardData(auctionCardData, setAuctionCardData, nextAuctionPage, 'auc', true);
        }
    };

    useEffect(() => {
        postCurrentPage !== 1 && setPostCurrentPage(1);
        auctionCurrentPage !== 1 && setAuctionCurrentPage(1);
        setCardData(postCardData, setPostCardData, 1, 'post');
        setCardData(auctionCardData, setAuctionCardData, 1, 'auc');
    }, []);

    return (
        <PostsTabs
            t={t}
            tabValue={tabValue}
            postCardData={postCardData}
            auctionCardData={auctionCardData}
            handleTabChange={handleTabChange}
            handleShowMore={handleShowMore}
        />
    );
};
