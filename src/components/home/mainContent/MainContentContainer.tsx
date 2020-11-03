import React, {useEffect, useState} from 'react'
import {MainContent} from './MainContent'
import {ITEMS_PER_PAGE} from '@root/src/constants'
import {userAPI} from "@src/api/api";


const initialCardData = {
    isFetch: false,
    error: null,
    cardData: {
        data: [],
        total: null,
    },
};

const fetchCardData = async (itemsPerPage, page, type) => {
    return await userAPI.getCardData(itemsPerPage, page, type);
};

export const MainContentContainer = (props) => {
    const {t} = props;

    const [tabValue, setTabValue] = useState(0);

    const [adCurrentPage, setAdCurrentPage] = useState(1);
    const [lotCurrentPage, setLotCurrentPage] = useState(1);
    const [adCardData, setAdCardData] = useState(initialCardData);
    const [lotCardData, setLotCardData] = useState(initialCardData);


    const handleTabChange = (_, newValue) => {
        setTabValue(newValue);
    };

    const setCardData = async (state, setState, currentPage,type) => {
        try {
            setState({
                ...state,
                isFetch: true
            });

            const newData = await fetchCardData(ITEMS_PER_PAGE, currentPage, type);

            setState({
                ...state,
                isFetch: false
            });

            setState({
                ...state,
                cardData: {
                    data: [...state.cardData.data, ...newData.data],
                    total: newData.total
                }
            });

        } catch (e) {
            setState({
                ...state,
                error: e.message
            });
        }
    };

    const handleShowMore = () => {
        if (tabValue === 0) {
            setAdCurrentPage(adCurrentPage + 1)
        } else {
            setLotCurrentPage(lotCurrentPage + 1)
        }
    };


    useEffect(() => {
         setCardData(adCardData, setAdCardData, adCurrentPage,'ad');
    }, [adCurrentPage])

    useEffect(() => {
        setCardData(lotCardData, setLotCardData, lotCurrentPage,'lot');
    }, [lotCurrentPage])

    return (
        <MainContent
            t={t}
            tabValue={tabValue}
            handleTabChange={handleTabChange}
            adCardData={adCardData}
            lotCardData={lotCardData}
            handleShowMore={handleShowMore}
        />
    )
}
