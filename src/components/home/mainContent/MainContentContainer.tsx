import React, {FC, useEffect, useState} from 'react'
import {MainContent} from './MainContent'
import {TFunction} from "i18next";
import {ITEMS_PER_PAGE} from '@root/src/constants'
import {userAPI} from "@src/api/api";
import {CardData} from "@root/interfaces/CardData";


const initialCardData: CardData = {
    isFetch: false,
    error: null,
    cardData: {
        data: [{
            id: null,
            title: '',
            cardType: '',
            safe_deal: null,
            price: null,
            currency: {
                id: null,
                name: ''
            },
            created_at: '',
            location: '',
            images: [{
                url: ''
            }],
        }],
        total: null,
    },
};

export const MainContentContainer: FC<{ t: TFunction }> = (props) => {
    const {t} = props;

    const [tabValue, setTabValue] = useState(0);

    const [adCurrentPage, setAdCurrentPage] = useState(1);
    const [lotCurrentPage, setLotCurrentPage] = useState(1);
    const [adCardData, setAdCardData] = useState(initialCardData);
    const [lotCardData, setLotCardData] = useState(initialCardData);


    const handleTabChange = (_, newValue) => {
        setTabValue(newValue);
    };

    const setCardData = async (state, setState, currentPage, type) => {
        try {
            setState({
                ...state,
                isFetch: true
            });

            const {total, data} = await userAPI.getCardData(ITEMS_PER_PAGE, currentPage, type);

            setState({
                ...state,
                isFetch: false
            });

            setState({
                ...state,
                cardData: {
                    data,
                    total
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
        setCardData(adCardData, setAdCardData, adCurrentPage, 'ad');
    }, [adCurrentPage])

    useEffect(() => {
        setCardData(lotCardData, setLotCardData, lotCurrentPage, 'lot');
    }, [lotCurrentPage])
    console.log(adCardData)

    return (
        <MainContent
            t={t}
            tabValue={tabValue}
            adCardData={adCardData}
            lotCardData={lotCardData}
            handleShowMore={handleShowMore}
            handleTabChange={handleTabChange}
        />
    )
}
