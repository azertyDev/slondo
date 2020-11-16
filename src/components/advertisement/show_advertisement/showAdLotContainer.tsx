import React, {useEffect, useState} from 'react'
import {userAPI} from "@src/api/api";
import {i18n} from '@root/i18n';
import {useRouter} from 'next/router';
import {ShowAdLot} from "@src/components/advertisement/show_advertisement/ShowAdLot";

const initialAdData = {
    isFetch: false,
    error: null,
    data: {
        id: null,
        title: '',
        currency: {
            id: null,
            name: ''
        },
        condition: {
            id: null,
            name: ''
        },
        created_at: null,
        expiration_at: null,
        number_of_views: null,
        images: [],
        description: ''
    },
};

export const ShowAdLotContainer = ({t}) => {
    const [adData, setAdData] = useState(initialAdData);
    const adsId = useRouter().query.id;
    const lang = i18n.language;

    const fetchAdData = async () => {
        try {
            setAdData({
                ...adData,
                isFetch: true
            });

            const newData = await userAPI.getAddById(adsId, lang);

            setAdData({
                ...adData,
                isFetch: false
            });

            setAdData({
                ...adData,
                data: newData
            });

        } catch (e) {
            setAdData({
                ...adData,
                error: e.message
            });
        }
    };

    useEffect(() => {
        fetchAdData()
    }, [])

    return (
        <>
            <ShowAdLot adData={adData} t={t}/>
        </>
    )
}